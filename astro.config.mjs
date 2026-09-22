import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { getLastmod } from './scripts/sitemap-lastmod.mjs';

export default defineConfig({
    site: 'https://recordio.io',
    trailingSlash: 'always',
    integrations: [
        react(),
        sitemap({
            filter: (page) =>
                !page.includes('/auth/') &&
                !page.includes('/subscription-success') &&
                !page.includes('/404') &&
                !page.includes('/privacy') &&
                !page.includes('/terms'),
            // lastmod from the last git commit of each page's source (see scripts/sitemap-lastmod.mjs)
            serialize: (item) => {
                const lastmod = getLastmod(item.url);
                return lastmod ? { ...item, lastmod: lastmod.toISOString() } : item;
            },
        }),
    ],
    output: 'static',
});
