<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter, page, theme } = useData()

/*
 * The page's own `demo` key wins, so a page with no screenshot can name a demo
 * page and one that should not link anywhere can say `demo: false`.
 */
const href = computed(() => {
    const demo = theme.value.demo

    if (! demo?.url || frontmatter.value.demo === false) {
        return null
    }

    const path = frontmatter.value.demo ?? demo.pages?.[page.value.relativePath.replace(/\.md$/, '')]

    return path ? `${demo.url}/${path}` : null
})
</script>

<template>
    <a v-if="href" class="demo-link" :href="href" target="_blank" rel="noreferrer">
        See live
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
            <path
                fill="currentColor"
                d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7ZM5 5h4V3H3v18h18v-6h-2v4H5V5Z"
            />
        </svg>
    </a>
</template>
