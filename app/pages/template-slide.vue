<script setup lang="ts">
useHead({ title: 'Template' })
definePageMeta({ headerText: '模板' })

const projects = [
	{
		title: 'Rss-Translation',
		github: 'jiashun-wang/Rss-Translation',
		description: '学术期刊RSS翻译和再分发',
	},
]
</script>

<template>
<section>
	<ZProject v-for="project in projects" :key="project.title" v-bind="project" />
</section>
</template>

<style scoped>
section {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
	gap: 1rem;
}
</style>
