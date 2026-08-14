import { defineConfig } from 'vitepress'

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

        nav: [
            { text: 'Getting started', link: '/getting-started/installation' },
            { text: 'Components', link: '/actions/buttons' },
            { text: 'API', link: '/reference/api' },
        ],

        // Grouped by the Filament package each component comes from.
        sidebar: [
            {
                text: 'Getting started',
                items: [
                    { text: 'Installation', link: '/getting-started/installation' },
                    { text: 'Theming', link: '/getting-started/theming' },
                    { text: 'Icons', link: '/getting-started/icons' },
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
                ],
            },
            {
                text: 'Notifications',
                items: [{ text: 'Notifications', link: '/notifications/notifications' }],
            },
            {
                text: 'Panels',
                items: [{ text: 'Navigation', link: '/panels/navigation' }],
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
                items: [{ text: 'API', link: '/reference/api' }],
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/saade/filament-material-theme' },
        ],

        outline: [2, 3],
    },
})
