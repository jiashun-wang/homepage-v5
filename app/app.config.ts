import type { Nav } from '~/types/nav'
import { h } from 'vue'
import homepageConfig from '~~/homepage.config'

// 图标查询：https://yesicon.app/ph
// 图标插件：https://marketplace.visualstudio.com/items?itemName=antfu.iconify
// https://remixicon.com/

// @keep-sorted
export default defineAppConfig({
	...homepageConfig,

	footer: [
		`© ${new Date().getFullYear()} Jiashun Wang. All rights reserved.`,
		// h('a', { href: 'https://beian.miit.gov.cn/', target: '_blank', rel: 'noopener nofollow' }, '陕ICP备2025082251号'),
	],

	// 用于在主页展示下游引用
	fork: [
		{
			img: 'https://ykc.im/icon.png',
			link: 'https://ykc.im/',
			text: 'York Chou',
		},
		{
			img: 'https://q1.qlogo.cn/g?b=qq&nk=1043865083&s=2',
			link: 'https://www.xlenco.top/',
			text: 'Xlenco',
		},
		{
			img: 'https://www.mugzx.top/icon.png',
			link: 'https://www.mugzx.top/',
			text: 'Mugzx',
		},
		{
			img: 'https://file.furrys.im/img/logo.webp',
			link: 'https://www.furrys.im/',
			text: 'lpcay',
		},
		{
			img: 'https://wsrv.nl/?url=github.com/zsxcoder.png%3fsize=92',
			link: 'https://home.zsxcoder.top/',
			text: '钟神秀',
		},
	],

	nav: [
		{
			title: 'Navigation',
			items: [
				{ icon: 'ri:id-card-line', text: 'Introduction', url: '/' },
				{ icon: 'ri:planet-line', text: 'Portal Sites', url: '/site' },
				{ icon: 'ri:quill-pen-line', text: 'Blog-CN', url: '/blog-cn' },
				// { icon: 'ri:quill-pen-line', text: 'Blog-EN', url: '/blog-en' },
				{ icon: 'ri:code-line', text: 'Projects-Tech', url: '/project-tech' },
				{ icon: 'ri:code-line', text: 'Projects-Sci', url: '/project-sci' },
				// { icon: 'ri:planet-line', text: 'Dataset', url: '/dataset' },
				{ icon: 'ri:file-word-2-line', text: 'Template-Document', url: '/template-doc' },	
				{ icon: 'ri:file-ppt-2-fill', text: 'Template-Slide', url: '/template-slide' },
				{ icon: 'ri:history-line', text: 'Log', url: '/log' },
			],
		},
		{
			title: 'Contact',
			items: [
				
				{ icon: 'ri:mail-line', text: 'wjs@linux.do', url: 'mailto:wjs@linux.do' },
				{ icon: 'ri:github-line', text: 'Github', url: 'https://github.com/jiashun-wang' },
				{ icon: 'ri:wechat-fill', text: 'Official Accounts', url: 'https://github.com/jiashun-wang' },
				{ icon: 'ri:qq-line', text: 'QQ Group', url: 'https://jq.qq.com/?_wv=1027&k=lQfNSeEd' },
				
			],
		},
	] satisfies Nav,

	themes: {
		light: {
			icon: 'ri:sun-line',
			tip: '浅色模式',
		},
		system: {
			icon: 'ri:tv-2-line',
			tip: '跟随系统',
		},
		dark: {
			icon: 'ri:moon-line',
			tip: '深色模式',
		},
	},
})
