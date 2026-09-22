#!/usr/bin/env node
/**
 * Acceptance checks for the built compare pages in dist/ (run after `npm run build`):
 * one title of 60 chars or fewer, one H1, canonical, FAQPage JSON-LD with exactly the
 * page's questions, BreadcrumbList, at least 6 internal links inside <main> outside the
 * "Other comparisons" block, CTA utm_content=compare-<slug>, and sitemap membership.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist/compare');
const sitemap = readFileSync(resolve(root, 'dist/sitemap-0.xml'), 'utf8');
const slugs = readdirSync(dist, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
let failures = 0;

for (const slug of slugs) {
    const file = resolve(dist, slug, 'index.html');
    if (!existsSync(file)) continue;
    const html = readFileSync(file, 'utf8');
    const problems = [];

    const titles = [...html.matchAll(/<title>([^<]*)<\/title>/g)].map((m) => m[1]);
    if (titles.length !== 1) problems.push(`${titles.length} <title> tags`);
    else if (titles[0].length > 60) problems.push(`title is ${titles[0].length} chars`);
    const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
    if (desc.length > 155) problems.push(`description is ${desc.length} chars`);

    const h1s = [...html.matchAll(/<h1[\s>]/g)].length;
    if (h1s !== 1) problems.push(`${h1s} H1 tags`);

    const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
    if (canonical !== `https://recordio.io/compare/${slug}/`) problems.push(`canonical is ${canonical}`);

    const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
    const faq = ld.filter((j) => j['@type'] === 'FAQPage');
    if (faq.length !== 1) problems.push(`${faq.length} FAQPage blocks`);
    else {
        const schemaQs = faq[0].mainEntity.map((q) => q.name);
        const pageQs = [...html.matchAll(/class="faq-trigger"[^>]*><span>([^<]*)<\/span>/g)].map((m) => m[1]);
        if (schemaQs.length !== 5) problems.push(`FAQPage has ${schemaQs.length} questions`);
        const decode = (s) => s.replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&');
        if (JSON.stringify(schemaQs.map(decode)) !== JSON.stringify(pageQs.map(decode))) problems.push('FAQPage questions differ from the rendered FAQ');
    }
    if (!ld.some((j) => j['@type'] === 'BreadcrumbList')) problems.push('no BreadcrumbList');

    const main = html.match(/<main>([\s\S]*?)<\/main>/)?.[1] ?? '';
    const beforeRelated = main.split('aria-label="Other comparisons"')[0];
    const bodyLinks = [...new Set([...beforeRelated.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1]).filter((h) => !h.startsWith('/assets') && !h.endsWith('.png')))];
    if (bodyLinks.length < 6) problems.push(`only ${bodyLinks.length} internal body links: ${bodyLinks.join(' ')}`);

    if (!html.includes(`utm_content=compare-${slug}&`) && !html.includes(`utm_content=compare-${slug}"`)) problems.push('hero CTA utm_content missing');
    if (!sitemap.includes(`https://recordio.io/compare/${slug}/`)) problems.push('not in sitemap');

    const retired = beforeRelated.replace(/<[^>]+>/g, ' ').match(/\$48(?!\d)|\$89(?!\d)|99 languages|local processing|no per-seat|no subscription|whisper|no account/gi);
    if (retired) problems.push(`retired terms in body: ${[...new Set(retired)].join(', ')}`);

    console.log(`${slug}: title ${titles[0]?.length ?? '?'} chars, ${bodyLinks.length} body links${problems.length ? '' : ' - ok'}`);
    for (const p of problems) console.log(`  FAIL: ${p}`);
    if (problems.length) failures++;
}
console.log(failures ? `\n${failures} page(s) failed` : '\nAll compare pages pass');
process.exit(failures ? 1 : 0);
