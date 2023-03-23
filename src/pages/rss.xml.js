import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
    return rss({
        title: 'Jin Bok | Blog',
        description: 'My journey learning Astro.',
        site: 'https://thejinbok-astro-blog.netlify.app',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}
