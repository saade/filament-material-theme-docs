import { readdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { defineConfig } from 'vitepress'
import { loadEnv } from 'vite'
import schema from '../../docs-assets/screenshots/schema.js'

const HERE = dirname(fileURLToPath(import.meta.url))
const DOCS = resolve(HERE, '..')

/*
 * The demo panel is a different deployment per environment, so its address comes
 * from the environment rather than from here. Without one the links are simply
 * not rendered.
 */
const DEMO_URL = (process.env.DEMO_URL ?? loadEnv('', resolve(DOCS, '../'), '').DEMO_URL ?? '')
    .replace(/\/+$/, '')

/*
 * Which page of the demo a documentation page is about. Read off the first
 * screenshot on the page, since schema.js already names the URL every image was
 * captured from, so the pair cannot drift. A page may override it, or opt out,
 * with a `demo` key in its frontmatter.
 */
function demoPages(directory = DOCS, prefix = ''): Record<string, string> {
    const pages: Record<string, string> = {}

    for (const entry of readdirSync(directory, { withFileTypes: true })) {
        if (entry.isDirectory()) {
            if (entry.name.startsWith('.') || entry.name === 'public') {
                continue
            }

            Object.assign(pages, demoPages(join(directory, entry.name), `${prefix}${entry.name}/`))

            continue
        }

        if (! entry.name.endsWith('.md')) {
            continue
        }

        const shot = readFileSync(join(directory, entry.name), 'utf-8').match(/<Shot name="([^"]+)"/)
        const url = shot ? schema[shot[1]]?.url : undefined

        if (url) {
            pages[`${prefix}${entry.name.replace(/\.md$/, '')}`] = url
        }
    }

    return pages
}

export default defineConfig({
    title: 'Filament Material Theme',
    description: 'A Material Design 3 theme for Filament, with dynamic color.',

    // GitHub Pages serves a project site from a subpath; a custom domain serves from the root.
    base: process.env.BASE_PATH ?? '/',

    cleanUrls: true,
    lastUpdated: true,

    head: [['meta', { name: 'theme-color', content: '#6750A4' }]],

    themeConfig: {
        search: { provider: 'local' },

        demo: { url: DEMO_URL, pages: demoPages() },

        nav: [
            { text: 'Getting started', link: '/getting-started/installation' },
            { text: 'Components', link: '/actions/buttons' },
            { text: 'API', link: '/reference/api' },
            ...(DEMO_URL ? [{ text: 'Demo', link: DEMO_URL }] : []),
        ],

        // Grouped by the Filament package each component comes from.
        sidebar: [
            {
                text: 'Getting started',
                items: [
                    { text: 'Installation', link: '/getting-started/installation' },
                    { text: 'Theming', link: '/getting-started/theming' },
                    { text: 'Icons', link: '/getting-started/icons' },
                    { text: 'Customization', link: '/getting-started/customization' },
                ],
            },
            {
                text: 'Actions',
                items: [
                    { text: 'Buttons', link: '/actions/buttons' },
                    { text: 'Grouping', link: '/actions/grouping' },
                    { text: 'Modals', link: '/actions/modals' },
                ],
            },
            {
                text: 'Schemas',
                items: [
                    { text: 'Sections', link: '/schemas/sections' },
                    { text: 'Fieldset', link: '/schemas/fieldset' },
                    { text: 'Tabs', link: '/schemas/tabs' },
                    { text: 'Wizard', link: '/schemas/wizard' },
                    { text: 'Callout', link: '/schemas/callout' },
                    { text: 'Divider', link: '/schemas/divider' },
                ],
            },
            {
                text: 'Forms',
                items: [
                    { text: 'Text input', link: '/forms/text-input' },
                    { text: 'Textarea', link: '/forms/textarea' },
                    { text: 'Select', link: '/forms/select' },
                    { text: 'Checkbox', link: '/forms/checkbox' },
                    { text: 'Toggle', link: '/forms/toggle' },
                    { text: 'Radio', link: '/forms/radio' },
                    { text: 'Toggle buttons', link: '/forms/toggle-buttons' },
                    { text: 'Date-time picker', link: '/forms/date-time-picker' },
                    { text: 'Slider', link: '/forms/slider' },
                    { text: 'Tags input', link: '/forms/tags-input' },
                    { text: 'Key value', link: '/forms/key-value' },
                    { text: 'Color picker', link: '/forms/color-picker' },
                    { text: 'File upload', link: '/forms/file-upload' },
                    { text: 'Rich editor', link: '/forms/rich-editor' },
                    { text: 'Code editor', link: '/forms/code-editor' },
                    { text: 'Markdown editor', link: '/forms/markdown-editor' },
                    { text: 'Repeater', link: '/forms/repeater' },
                ],
            },
            {
                text: 'Tables',
                items: [
                    { text: 'Table', link: '/tables/table' },
                    { text: 'Filters', link: '/tables/filters' },
                    { text: 'Search', link: '/tables/search' },
                    { text: 'Pagination', link: '/tables/pagination' },
                ],
            },
            {
                text: 'Infolists',
                items: [{ text: 'Entries', link: '/infolists/entries' }],
            },
            {
                text: 'Notifications',
                items: [{ text: 'Notifications', link: '/notifications/notifications' }],
            },
            {
                text: 'Panels',
                items: [
                    { text: 'Navigation', link: '/panels/navigation' },
                    { text: 'Global search', link: '/panels/global-search' },
                    { text: 'Pages', link: '/panels/pages' },
                ],
            },
            {
                text: 'Widgets',
                items: [{ text: 'Widgets', link: '/widgets/widgets' }],
            },
            {
                text: 'Miscellaneous',
                items: [
                    { text: 'Badges', link: '/misc/badges' },
                    { text: 'Tooltips', link: '/misc/tooltips' },
                    { text: 'Loading', link: '/misc/loading' },
                ],
            },
            {
                text: 'Reference',
                items: [
                    { text: 'Component index', link: '/reference/components' },
                    { text: 'API', link: '/reference/api' },
                ],
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/saade/filament-material-theme' },
        ],

        outline: [2, 3],
    },
})
