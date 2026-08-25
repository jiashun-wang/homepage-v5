<script setup lang="ts">
useHead({ title: 'Template' })
definePageMeta({ headerText: '模板' })

const projects = [
	{
		title: 'Rss-Translation',
		github: 'jiashun-wang/Rss-Translation',
		description: '学术期刊RSS翻译和再分发',
	},
	{
		title: 'JournalMetrics',
		github: 'jiashun-wang/JournalMetrics',
		description: 'JournalMetrics 是一个个人维护的小型项目，旨在收录和整理主流学术期刊评级标准（如JCR分区、SCIE、EI等），方便快速查阅和对比，为投稿选刊和研究评估提供参考。',
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
