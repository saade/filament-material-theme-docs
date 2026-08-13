/*
 * Captures every image in schema.js from a running panel, once per theme.
 *
 * Modeled on Filament's own docs-assets/screenshots, with two differences the
 * theme forces. Dark mode here is a class on the document rather than a media
 * feature, so emulating prefers-color-scheme is not enough on its own and the
 * stored preference is written before the first navigation. And the panel is
 * behind a login, so the browser signs in once and reuses the session.
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'
import schema from './schema.js'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const OUTPUT = path.resolve(HERE, '../../docs/public/screenshots')

const BASE_URL = (process.env.BASE_URL ?? 'https://saade-plugins-demo.test/material').replace(/\/+$/, '')
const EMAIL = process.env.AUTH_EMAIL ?? 'saade@saade.dev'
const PASSWORD = process.env.AUTH_PASSWORD ?? 'Fil@ment1sTh3Go@t!'

const THEMES = ['light', 'dark']
const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 2 }
const PADDING = 16

/* A capture is of a resting component, so nothing may be part-way through a transition. */
const STILL = `*, *::before, *::after {
    animation: none !important;
    transition: none !important;
}`

async function signIn(page) {
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle2' })

    if (! page.url().includes('/login')) {
        return
    }

    await page.type('input[type="email"]', EMAIL)
    await page.type('input[type="password"]', PASSWORD)

    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle2' }),
        page.click('button[type="submit"]'),
    ])

    if (page.url().includes('/login')) {
        throw new Error('Could not sign in. Set AUTH_EMAIL and AUTH_PASSWORD.')
    }
}

async function openPage(browser, theme) {
    const page = await browser.newPage()

    await page.setViewport(VIEWPORT)
    await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: theme }])

    await page.evaluateOnNewDocument((value) => {
        localStorage.setItem('theme', value)
        localStorage.setItem('isOpenDesktop', 'true')
    }, theme)

    return page
}

/*
 * An actions row stretches to the width of the content column, so its own box is
 * mostly empty. Everything inside it that is narrower than the row is a control
 * rather than a wrapper, and the union of those shrink-wraps what was rendered.
 * Filament leaves a hidden loading indicator inside every button, so a box with
 * no size is not evidence of anything and is dropped.
 */
async function clipFor(page, selector, tight) {
    return page.evaluate((selector, tight, padding) => {
        const element = document.querySelector(selector)
        const width = element.getBoundingClientRect().width
        const boxes = tight
            ? [...element.querySelectorAll('*')]
                .map((node) => node.getBoundingClientRect())
                .filter((box) => box.width > 0 && box.height > 0 && box.width < width)
            : []

        const box = boxes.length
            ? {
                left: Math.min(...boxes.map((b) => b.left)),
                top: Math.min(...boxes.map((b) => b.top)),
                right: Math.max(...boxes.map((b) => b.right)),
                bottom: Math.max(...boxes.map((b) => b.bottom)),
            }
            : element.getBoundingClientRect()

        return {
            x: Math.max(0, box.left + window.scrollX - padding),
            y: Math.max(0, box.top + window.scrollY - padding),
            width: box.right - box.left + padding * 2,
            height: box.bottom - box.top + padding * 2,
        }
    }, selector, tight, PADDING)
}

const byUrl = Object.entries(schema).reduce((groups, [file, options]) => {
    groups[options.url] ??= []
    groups[options.url].push([file, options])

    return groups
}, {})

const browser = await puppeteer.launch({ acceptInsecureCerts: true })
let count = 0

for (const theme of THEMES) {
    const page = await openPage(browser, theme)

    await signIn(page)

    for (const [url, entries] of Object.entries(byUrl)) {
        await page.goto(`${BASE_URL}/${url}`, { waitUntil: 'networkidle2' })
        await page.addStyleTag({ content: STILL })

        const isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'))

        if (isDark !== (theme === 'dark')) {
            throw new Error(`${url} rendered in ${isDark ? 'dark' : 'light'} while capturing ${theme}.`)
        }

        for (const [file, options] of entries) {
            await page.waitForSelector(options.selector)
            await page.$eval(options.selector, (element) => element.scrollIntoView({ block: 'center' }))

            const target = path.join(OUTPUT, theme, `${file}.png`)
            await fs.mkdir(path.dirname(target), { recursive: true })

            await page.screenshot({
                path: target,
                clip: await clipFor(page, options.selector, options.tight ?? false),
            })

            count++
            console.log(`${theme}/${file}.png`)
        }
    }

    await page.close()
}

await browser.close()

console.log(`\n${count} screenshots written to docs/public/screenshots.`)
