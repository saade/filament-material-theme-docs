<script setup lang="ts">
import { ref } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{
    name: string
    alt: string
}>()

/*
 * Null means follow the site, which CSS resolves without JavaScript so the right
 * image is there on first paint. Clicking pins this one figure to a theme.
 */
const pinned = ref<'light' | 'dark' | null>(null)

function toggle() {
    const showing = pinned.value ?? (document.documentElement.classList.contains('dark') ? 'dark' : 'light')

    pinned.value = showing === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <figure class="shot" :class="pinned ? `shot-pinned-${pinned}` : null">
        <img class="shot-light" :src="withBase(`/screenshots/light/${props.name}.png`)" :alt="props.alt" />
        <img class="shot-dark" :src="withBase(`/screenshots/dark/${props.name}.png`)" :alt="props.alt" />

        <button
            class="shot-toggle"
            type="button"
            title="Show this image in the other theme"
            aria-label="Show this image in the other theme"
            @click="toggle"
        >
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 16V5a7 7 0 0 1 0 14Z"
                />
            </svg>
        </button>
    </figure>
</template>
