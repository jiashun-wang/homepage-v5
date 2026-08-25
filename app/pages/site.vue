<script setup lang="ts">
import type { CardProps } from '~/components/partial/Card.vue'
import { ZLink } from '#components'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些网站' })

const informationSites: Array<CardProps> = [
	{
		name: 'CO导航',
		nameAlt: 'xupt-nav',
		buttons: [
			{ icon: 'ri:planet-line', text: '访问', to: 'https://cooo.site' },
			{ icon: 'ri:github-line', text: 'GitHub', to: 'https://github.com/xupt-wiki/xupt-nav' },
		],
		desc: '为西安邮电大学学生提供网址导航服务，于2023年2月7日开始运营，是“更适合西邮宝宝体质的网址导航”。',
	},
	{
		name: '西邮Wiki',
		nameAlt: 'xupt-wiki',
		buttons: [
			{ icon: 'ri:planet-line', text: '访问', to: 'https://wiki.cooo.site' },
			{ icon: 'ri:github-line', text: 'GitHub', to: 'https://github.com/xupt-wiki/xupt-wiki' },
		],
		desc: '西安邮电大学第三方公益校园生活百科，于2024年6月30立项。本人于2024年7月30日使用VitePress搭建，持续更新中。',
	},
	{
		name: '西邮Linux兴趣小组培养计划',
		nameAlt: 'Plan',
		buttons: [
			{ icon: 'ri:planet-line', text: '访问', to: 'https://plan.xiyoulinux.com' },
			{ icon: 'ri:github-line', text: 'GitHub', to: 'https://github.com/xiyou-linuxer/Plan' },
		],
		desc: '西邮Linux兴趣小组的培养计划，于2021年11月4日开源。本人于2024年3月20日使用MkDocs为此Plan构建网站，于2025年2月24日使用Nextra重构。',
	},

]

const orgSites: Array<CardProps> = [
	{
		name: '西邮Linux兴趣小组',
		nameAlt: 'Xiyou Linux Group',
		buttons: [
			{ icon: 'ri:planet-line', text: '访问', to: 'https://xiyoulinux.com' },
		],
		desc: '西安邮电大学计算机学院2006年9月建立的一个兴趣小组。本人于2022年10月22日成为其中一员，于2024年3月16日使用VitePress重建官网。',
	},
	{
		name: '方块茶话会',
		nameAlt: 'Block Tea Reception',
		buttons: [
			{ icon: 'ri:planet-line', text: '访问', to: 'https://btr.thisis.host/' },
		],
		desc: [
			'宝鸡中学校内的Minecraft爱好群体，由',
			h(ZLink, { icon: 'ri:github-line', to: 'https://github.com/guuguai/', text: '古古怪怪GuuGuai' }),
			'于2020年7月17日建立。帮助文档网站于2022年6月12日建立，并于2024年2月21日迁移。',
		],
	},
]
</script>

<template>
<ZTitle>信息类站点</ZTitle>
<ZCardList :data-list="informationSites" />
<ZTitle>组织门户</ZTitle>
<ZCardList :data-list="orgSites" />
</template>

<style scoped>
</style>
