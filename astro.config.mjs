import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

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
        }),
    ],
    output: 'static',
});
