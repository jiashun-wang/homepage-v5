import { XMLParser } from 'fast-xml-parser'
import homepageConfig from '~~/homepage.config'

export default defineCachedEventHandler(async (_event) => {
	const parser = new XMLParser({
		attributeNamePrefix: '$',
		cdataPropName: '$',
		ignoreAttributes: false,
		isArray: name => name === 'entry' || name === 'category' || name === 'item',
		textNodeName: '_',
	})

	const resp = await fetch(homepageConfig.blogAtom)

	const objAtom = parser.parse(await resp.text())

	const rawItems = objAtom.feed?.entry ?? objAtom.rss?.channel?.item ?? []
	const items = Array.isArray(rawItems) ? rawItems : [rawItems]

	// 统一转换为 Article.vue 组件期望的 FeedProps 结构，
	// 同时兼容 Atom 格式（feed.entry）和 RSS 2.0 格式（rss.channel.item）
	return items.map(item => ({
		id: item.guid?._ ?? item.id?._ ?? item.link?.$?.href ?? item.link ?? '',
		link: {
			$href: item.link?.$?.href ?? item.link ?? '',
		},
		title: item.title?._ ?? item.title ?? '',
		summary: item.summary?._ ?? item.description?._ ?? item.description ?? '',
		published: item.published?._ ?? item.pubDate ?? new Date().toISOString(),
		updated: item.updated?._ ?? undefined,
	}))
}, {
	maxAge: 60 * 60 * 24,
})