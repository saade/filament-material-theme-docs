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

/* Narrows the run to the entries whose name matches, for iterating on one image. */
const ONLY = process.env.ONLY ? new RegExp(process.env.ONLY) : null
const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 2 }

/* Overridable per entry, for a control that sits closer than this to its own label. */
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
async function clipFor(page, selector, tight, padding) {
    return page.evaluate((selector, tight, padding) => {
        /* Several selectors frame something that is not one element, such as the
           rail and the sheet docked against it. */
        const elements = [selector].flat().map((one) => document.querySelector(one))
        const element = elements[0]
        const width = element.getBoundingClientRect().width
        const boxes = tight
            ? [...element.querySelectorAll('*')]
                .map((node) => node.getBoundingClientRect())
                .filter((box) => box.width > 0 && box.height > 0 && box.width < width)
            : elements.length > 1
                ? elements.map((node) => node.getBoundingClientRect())
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
    }, selector, tight, padding)
}

const byUrl = Object.entries(schema)
    .filter(([file]) => ! ONLY || ONLY.test(file))
    .reduce((groups, [file, options]) => {
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

        /*
         * Entries sharing a page are captured from one load. A hook breaks that,
         * both for itself and for whatever follows it, since an opened menu is
         * still open when the next entry is framed. So a hook reloads before it
         * runs, and marks the page for the entry after it to reload as well.
         */
        let dirty = false

        for (const [file, options] of entries) {
            if (options.before || dirty) {
                await page.goto(`${BASE_URL}/${url}`, { waitUntil: 'networkidle2' })
                await page.addStyleTag({ content: STILL })
                dirty = false
            }

            if (options.before) {
                await options.before(page)
                dirty = true

                /* A hook that clicked something leaves the pointer on it, and a
                   hovered control shows its tooltip and its state layer. Unless
                   the hover is the thing being captured. */
                if (! options.hover) {
                    await page.mouse.move(0, 0)
                }
            }

            const anchor = [options.selector].flat()[0]

            await page.waitForSelector(anchor)

            /* A whole screen is framed by the viewport rather than by a box
               inside it, so it is captured where the page opens. An entry may
               size that frame itself, which is how a screen meant to be looked
               at small is captured with its own text large enough to read. */
            if (options.viewport) {
                if (Array.isArray(options.viewport)) {
                    const [width, height] = options.viewport

                    await page.setViewport({ ...VIEWPORT, width, height })
                    await page.goto(`${BASE_URL}/${url}`, { waitUntil: 'networkidle2' })
                    await page.addStyleTag({ content: STILL })
                }

                await page.evaluate(() => window.scrollTo(0, 0))
            } else {
                await page.$eval(anchor, (element) => element.scrollIntoView({ block: 'center' }))
            }

            const target = path.join(OUTPUT, theme, `${file}.png`)
            await fs.mkdir(path.dirname(target), { recursive: true })

            await page.screenshot({
                path: target,
                clip: options.viewport
                    ? undefined
                    : await clipFor(
                        page,
                        options.selector,
                        options.tight ?? false,
                        options.padding ?? PADDING,
                    ),
            })

            if (Array.isArray(options.viewport)) {
                await page.setViewport(VIEWPORT)
                dirty = true
            }

            count++
            console.log(`${theme}/${file}.png`)
        }
    }

    await page.close()
}

await browser.close()

console.log(`\n${count} screenshots written to docs/public/screenshots.`)
