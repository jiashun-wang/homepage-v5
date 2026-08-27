// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
	name: 'Jiashun Wang',
	avatar: 'https://cdn.chum-bucket.site/image/20250419-190816-651.webp',
	email: 'wjs@linux.do',
	homepage: 'https://jia-shun.wang/',
}

const homepageConfig = {
	title: 'Jiashun Wang\'s Homepage',
	subtitle: 'test',
	description: '个人主页',
	author,
	language: 'zh-CN',
	timeZone: 'Asia/Shanghai',
	favicon: '/icon.png',
	url: 'https://jia-shun.wang/',
	blogAtom: 'https://blog.jia-shun.wang/rss.xml',
}

// https://nitro.build/config#routerules
export const routeRules: NitroConfig['routeRules'] = {
	'/api/avatar.png': { redirect: author.avatar },
	'/api/icon.png': { redirect: homepageConfig.favicon },
	'/favicon.ico': { redirect: homepageConfig.favicon },
}

export default homepageConfig
