<script setup lang="ts">
import { ZhiluIcon, ZhiluIconOld } from '#components'

useHead({ title: '日志' })
definePageMeta({ headerText: '活动记录' })

const timeline = {
	'2025-07-26': ['博客：迁移 Nuxt Content 3，并更换域名 ', h('code', 'zhilu.site')],
	'2025-05-04': 'xxx',
}
</script>

<template>
<ZTimeline :timeline />
</template>
