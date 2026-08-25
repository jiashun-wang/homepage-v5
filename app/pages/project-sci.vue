<script setup lang="ts">
useHead({ title: 'Tech Projects' })
definePageMeta({ headerText: '参与的技术项目' })

const projects = [
	{
		title: 'Marine Heatwaves & the Indonesian Seas',
		github: 'jiashun-wang/MSc-Project-Page',
		description: '硕士论文项目',
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
