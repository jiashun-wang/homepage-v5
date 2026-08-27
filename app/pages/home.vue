<script setup lang="ts">
useHead({ title: '' })
definePageMeta({
	alias: ['/'],
	title: '主页',
})
const appConfig = useAppConfig()
</script>

<template>
<ZhiluAvatar class="avatar" />

<div class="wrapper">
	<ZField>
		<template #label>
			<span style="font-size: 3rem;">👋</span>
		</template>
		<h1 style="font-size: 3rem;">
			Hello，<br>I'm <mark>{{ appConfig.author.name }}</mark>
		</h1>
		<p class="desc">
			{{ appConfig.subtitle }}
		</p>
		<div>
			<ZButton
				icon="ri:lightbulb-ai-line"
				to="https://jia-shun.wang/"
				text="Academic homepage"
				primary
			/>
			<!-- <ZButton
				icon="ri:settings-line"
				to="https://blog.chum-bucket.site/"
				text="Tech Homepage"
				primary
			/> -->
			<ZButton
				icon="ri:file-list-3-line"
				to="https://blog.jia-shun.wang/zh"
				text="Blog-CN"
				
			/>
			<!-- <ZButton
				icon="ri:file-list-3-line"
				to="https://blog.jia-shun.wang/en"
				text="Blog-EN" 
			/>-->
				
			<ZButton
				icon="ri:github-line"
				to="https://github.com/jiashun-wang"
				text="GitHub"
			/>
		</div>
	</ZField>

	<ZField label="介绍">
		<p>海洋科学硕士</p>
		<p>热衷于推进云计算与基础理论科学的融合。</p>
	</ZField>

	<!-- <ZField label="近期活动">
		<p>2024年7月完善<ZLink to="https://wiki.cooo.site/">西邮Wiki</ZLink>，8月使用Nuxt Content重构了<ZLink to="https://blog.zhilu.site/">个人博客</ZLink>。</p>
	</ZField> -->

	<ZField label="参考">
		<p>
			此主页参考了开源项目
			<ZLink to="https://github.com/L33Z22L11/homepage-v5" icon="ri:github-line">L33Z22L11/homepage-v5</ZLink>
			，在此感谢<br>
		</p>
	</ZField>
</div>
</template>

<style scoped>
.avatar {
	position: fixed;
	opacity: 0.2;
	right: 20vw;
	margin-right: -0.382em; /* (1 - √5)/2 */
	mask-image: radial-gradient(#FFF 43.7%, transparent 70.7%); /* (√5 - 1) / 2 x, x = √2 / 2 */
	font-size: min(100vw, 61.8vh);
	z-index: -1;
}

.desc {
	margin: 1rem 0;
	font-size: 1.5rem;
	color: var(--c-text-2);
}

/* ↓↓↓ 新增：让按钮换行时有间距，不贴着 ↓↓↓ */
div {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5em;
	align-items: center;
}
</style>