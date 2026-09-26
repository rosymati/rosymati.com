import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '@/config';
import { getPosts } from '@/utils';

export async function GET(context: APIContext) {
	const posts = await getPosts();
	return rss({
		title: site.rssTitle,
		description: site.rssDescription,
		site: context.site!,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${post.id}/`,
		})),
	});
}
