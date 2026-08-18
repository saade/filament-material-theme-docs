/**
 * Builds the docs favicons from the two sources beside this file.
 *
 *   node docs-assets/favicon/generate.mjs
 *
 * favicon.svg is the mark redrawn for small sizes: the same shapes, given more
 * of the square, since the version on the cover loses its quarter disc below
 * about 20px. Rasterizing goes through the browser the docs are built with
 * rather than a system tool, so the set can be rebuilt anywhere the docs can.
 */
import { readFile, writeFile, copyFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const HERE = dirname(fileURLToPath(import.meta.url))
const PUBLIC = resolve(HERE, '../../docs/public')

/* The sizes Windows and the browsers still ask an .ico for. */
const ICO_SIZES = [16, 32, 48]

const browser = await puppeteer.launch()

async function render(source, size) {
    const svg = await readFile(resolve(HERE, source), 'utf-8')
    const page = await browser.newPage()

    await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 })
    await page.setContent(
        `<style>html,body{margin:0;padding:0}svg{display:block;width:${size}px;height:${size}px}</style>${svg}`,
        { waitUntil: 'load' },
    )

    const png = await page.screenshot({ omitBackground: true, type: 'png' })
    await page.close()

    return png
}

/*
 * An .ico is a directory of images, and every browser that still reads one
 * accepts PNG entries, so the frames go in whole rather than as bitmaps.
 */
function ico(frames) {
    const header = Buffer.alloc(6)
    header.writeUInt16LE(0, 0)
    header.writeUInt16LE(1, 2)
    header.writeUInt16LE(frames.length, 4)

    let offset = 6 + frames.length * 16

    const directory = frames.map(({ size, png }) => {
        const entry = Buffer.alloc(16)

        entry.writeUInt8(size === 256 ? 0 : size, 0)
        entry.writeUInt8(size === 256 ? 0 : size, 1)
        entry.writeUInt8(0, 2)
        entry.writeUInt8(0, 3)
        entry.writeUInt16LE(1, 4)
        entry.writeUInt16LE(32, 6)
        entry.writeUInt32LE(png.length, 8)
        entry.writeUInt32LE(offset, 12)

        offset += png.length

        return entry
    })

    return Buffer.concat([header, ...directory, ...frames.map(({ png }) => png)])
}

await mkdir(PUBLIC, { recursive: true })

const frames = []

for (const size of ICO_SIZES) {
    frames.push({ size, png: await render('favicon.svg', size) })
}

await writeFile(resolve(PUBLIC, 'favicon.ico'), ico(frames))
await writeFile(resolve(PUBLIC, 'apple-touch-icon.png'), await render('apple-touch-icon.svg', 180))
await copyFile(resolve(HERE, 'favicon.svg'), resolve(PUBLIC, 'favicon.svg'))

await browser.close()

console.log(`wrote favicon.ico (${ICO_SIZES.join(', ')}), favicon.svg and apple-touch-icon.png to docs/public`)
