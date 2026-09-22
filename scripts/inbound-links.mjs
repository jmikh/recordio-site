#!/usr/bin/env node
/**
 * Counts inbound internal links for every page in the sitemap, using the
 * built HTML in dist/. Header and footer links are excluded so the number
 * reflects contextual links (hubs, body copy, related blocks, breadcrumbs).
 *
 * Usage: npm run build && node scripts/inbound-links.mjs [--min 3] [--all]
 * Exits 1 when any sitemap page has fewer than --min inbound source pages.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const args = process.argv.slice(2);
const minIdx = args.indexOf('--min');
const MIN = minIdx === -1 ? 3 : Number(args[minIdx + 1]);
const SHOW_ALL = args.includes('--all');

const walk = (dir) =>
    readdirSync(dir).flatMap((name) => {
        const full = join(dir, name);
        return statSync(full).isDirectory() ? walk(full) : full.endsWith('.html') ? [full] : [];
    });

const toPath = (file) => {
    const rel = relative(DIST, file).split(sep).join('/');
    if (rel === 'index.html') return '/';
    return '/' + rel.replace(/\/?index\.html$/, '').replace(/\.html$/, '') + '/';
};

const sitemapFiles = readdirSync(DIST).filter((f) => /^sitemap-\d+\.xml$/.test(f));
const sitemapPaths = new Set(
    sitemapFiles.flatMap((f) =>
        [...readFileSync(join(DIST, f), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
            const u = new URL(m[1]);
            return u.pathname.endsWith('/') ? u.pathname : u.pathname + '/';
        }),
    ),
);

const stripBoilerplate = (html) =>
    html
        .replace(/<header class="fixed[\s\S]*?<\/header>/gi, '')
        .replace(/<footer[\s\S]*?<\/footer>/gi, '');

const normalise = (href) => {
    let h = href.trim();
    if (h.startsWith('https://recordio.io')) h = h.slice('https://recordio.io'.length);
    if (!h.startsWith('/')) return null;
    h = h.split('#')[0].split('?')[0];
    if (h === '') return '/';
    if (/\.[a-z0-9]+$/i.test(h)) return null; // assets
    return h.endsWith('/') ? h : h + '/';
};

const inbound = new Map(); // target -> Set(sources)
for (const file of walk(DIST)) {
    const source = toPath(file);
    const html = stripBoilerplate(readFileSync(file, 'utf8'));
    for (const m of html.matchAll(/href="([^"]+)"/g)) {
        const target = normalise(m[1]);
        if (!target || target === source) continue;
        if (!inbound.has(target)) inbound.set(target, new Set());
        inbound.get(target).add(source);
    }
}

let failures = 0;
const rows = [...sitemapPaths].sort().map((p) => {
    const n = inbound.get(p)?.size ?? 0;
    if (n < MIN) failures++;
    return { page: p, sources: n, ok: n >= MIN ? '' : `below ${MIN}` };
});
console.table(SHOW_ALL ? rows : rows.filter((r) => r.ok));
console.log(`${sitemapPaths.size} sitemap pages, ${failures} below ${MIN} non-header, non-footer inbound sources.`);
process.exit(failures ? 1 : 0);
