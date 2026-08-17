import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import DemoLink from './DemoLink.vue'
import Shot from './Shot.vue'
import './custom.css'

export default {
    extends: DefaultTheme,
    Layout: () => h(DefaultTheme.Layout, null, { 'doc-before': () => h(DemoLink) }),
    enhanceApp({ app }) {
        app.component('Shot', Shot)
    },
} satisfies Theme
