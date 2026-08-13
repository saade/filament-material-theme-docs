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

        nav: [{ text: 'Components', link: '/components/buttons' }],

        sidebar: [
            {
                text: 'Components',
                items: [{ text: 'Buttons', link: '/components/buttons' }],
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/saade/filament-material-theme' },
        ],

        outline: [2, 3],
    },
})
