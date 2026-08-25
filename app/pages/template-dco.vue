<script setup lang="ts">
useHead({ title: 'Template' })
definePageMeta({ headerText: '模板' })

const projects = [
	{
		title: 'ucas-research-proposal',
		github: 'jiashun-wang/ucas-research-proposal',
		description: '非官方的中国科学院博士生研究计划书',
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
