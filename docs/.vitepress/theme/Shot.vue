<script setup lang="ts">
import { withBase } from 'vitepress'

const props = defineProps<{
    name: string
    alt: string
}>()
</script>

<template>
    <figure class="shot">
        <img class="shot-light" :src="withBase(`/screenshots/light/${props.name}.png`)" :alt="props.alt" />
        <img class="shot-dark" :src="withBase(`/screenshots/dark/${props.name}.png`)" :alt="props.alt" />
    </figure>
</template>
