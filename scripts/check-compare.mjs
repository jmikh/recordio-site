#!/usr/bin/env node
/**
 * Validates one or more compare data files against the rules in
 * docs/plans/01-compare-template-rebuild.md and 00-shared-context.md.
 *
 *   node scripts/check-compare.mjs bandicam loom      # specific slugs
 *   node scripts/check-compare.mjs                    # every file in src/data/compare/
 *
 * Needs Node 22.6+ (native TypeScript type stripping).
 */
import { readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dataDir = resolve(root, 'src/data/compare');
const skip = new Set(['types.ts', 'index.ts', 'inline.ts']);
const knownSlugs = ['bandicam', 'loom', 'screen-studio', 'screencastify', 'camtasia', 'obs', 'tella', 'clueso', 'focusee', 'screenity'];
const knownRelated = ['/blog/best-loom-alternatives-2026/', '/blog/best-screen-recorders-2026/', '/blog/best-bandicam-alternatives-2026/', '/blog/best-screen-studio-alternatives-2026/', '/blog/best-screencastify-alternatives-2026/', '/blog/best-camtasia-alternatives-2026/', '/for/mac/', '/for/windows/', '/for/linux/', '/for/chrome/', '/for/chromebook/'];
const requiredRows = ['auto zoom', 'auto spotlight', 'autocut', 'toolbar', 'blur', 'webcam', 'device frames', 'captions', 'export', 'cloud rendering', 'share links', 'team workspace', 'viewer seats', 'screenshots', 'platforms', 'free plan', 'price'];
const retired = /\$4\/mo|\$48|\$89|lifetime|one-time price|7-day pro trial|720p|watermark|whisper|99 languages|local processing|stays on your machine|no cloud|no per-seat|no subscription|no account|no limits|had a baby/i;

const slugs = process.argv.slice(2).length
    ? process.argv.slice(2)
    : readdirSync(dataDir).filter((f) => f.endsWith('.ts') && !skip.has(f)).map((f) => f.replace(/\.ts$/, ''));

const words = (t) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').split(/\s+/).filter(Boolean).length;
let failures = 0;

for (const slug of slugs) {
    const file = resolve(dataDir, `${slug}.ts`);
    const problems = [];
    const warnings = [];
    let c;
    try {
        const mod = await import(file);
        c = Object.values(mod)[0];
    } catch (e) {
        console.log(`\n${slug}: cannot import (${e.message})`);
        failures++;
        continue;
    }

    if (c.slug !== slug) problems.push(`slug "${c.slug}" does not match file name`);
    if (c.title.length > 60) problems.push(`title is ${c.title.length} chars (max 60)`);
    if (!/\| Recordio$/.test(c.title)) problems.push('title must end with "| Recordio"');
    if (c.description.length > 155) problems.push(`description is ${c.description.length} chars (max 155)`);
    if (c.chooseThem.length !== 3) problems.push(`chooseThem has ${c.chooseThem.length} bullets (need 3)`);
    if (c.chooseRecordio.length !== 3) problems.push(`chooseRecordio has ${c.chooseRecordio.length} bullets (need 3)`);
    if (c.whatTheyDoWell.length < 2 || c.whatTheyDoWell.length > 3) problems.push(`whatTheyDoWell has ${c.whatTheyDoWell.length} items (need 2 or 3)`);
    if (c.differences.length < 3 || c.differences.length > 4) problems.push(`differences has ${c.differences.length} items (need 3 or 4)`);
    c.differences.forEach((d, i) => {
        if (!d.media) problems.push(`differences[${i}] has no media`);
        else if (d.media.video && !existsSync(resolve(root, 'public/videos', d.media.video))) problems.push(`differences[${i}] video ${d.media.video} not in public/videos`);
        else if (d.media.image && !existsSync(resolve(root, 'public', d.media.image.replace(/^\//, '')))) problems.push(`differences[${i}] image ${d.media.image} not in public/`);
    });
    if (c.faq.length !== 5) problems.push(`faq has ${c.faq.length} questions (need 5)`);
    c.faq.forEach((f, i) => { if (/\]\(/.test(f.answer)) problems.push(`faq[${i}] answer contains a markdown link; the FAQ renders plain text`); });
    const rowText = c.table.map((r) => r.feature.toLowerCase()).join(' | ');
    for (const req of requiredRows) if (!rowText.includes(req)) problems.push(`table is missing a "${req}" row`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(c.pricing.checkedOn)) problems.push('pricing.checkedOn must be an ISO date');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(c.updated)) problems.push('updated must be an ISO date');
    if (c.related.compare.length !== 3) problems.push(`related.compare has ${c.related.compare.length} slugs (need 3)`);
    for (const s of c.related.compare) {
        if (!knownSlugs.includes(s)) problems.push(`related.compare slug "${s}" is unknown`);
        if (s === slug) problems.push('related.compare links to itself');
    }
    for (const p of [c.related.post, c.related.platform]) if (p && !knownRelated.includes(p)) problems.push(`related page "${p}" has no label in src/data/compare/index.ts`);

    const copy = [
        c.verdict, ...c.chooseThem, ...c.chooseRecordio,
        ...c.whatTheyDoWell.flatMap((s) => [s.heading, s.body]),
        ...c.differences.flatMap((s) => [s.heading, s.body]),
        ...c.table.flatMap((r) => [r.feature, r.description ?? '', String(r.recordio), String(r.competitor)]),
        ...Object.values(c.pricing),
        ...c.faq.flatMap((f) => [f.question, f.answer]),
    ].join(' ');
    const wc = words(copy);
    if (wc < 1200 || wc > 1800) problems.push(`page-unique copy is ${wc} words (target 1,200 to 1,800)`);
    const allText = JSON.stringify(c);
    if (/—/.test(allText)) problems.push('contains an em dash');
    if (/!/.test(copy.replace(/[^!]/g, '').slice(2))) warnings.push('more than two exclamation marks');
    const hits = copy.match(new RegExp(retired.source, 'gi')) ?? [];
    if (hits.length) warnings.push(`retired-claim terms present (must refer to ${c.name}, never Recordio): ${[...new Set(hits.map((h) => h.toLowerCase()))].join(', ')}`);
    const bodyCopy = copy.slice(0, copy.length - c.faq.flatMap((f) => [f.question, f.answer]).join(' ').length);
    const links = bodyCopy.match(/\]\(\/[^)]+\)/g) ?? [];
    const linkTargets = [...new Set(links.map((l) => l.slice(2, -1)))];
    for (const t of linkTargets) {
        if (t === `/compare/${slug}/`) problems.push('body links to itself');
        const known = t.startsWith('/compare/') ? knownSlugs.includes(t.split('/')[2]) : knownRelated.includes(t) || t === '/compare/';
        if (!known) warnings.push(`body links to ${t}, which does not exist yet`);
    }

    if (linkTargets.length < 4) problems.push(`only ${linkTargets.length} body links outside the FAQ (need 4; breadcrumbs add 2)`);
    console.log(`\n${slug}: ${wc} words, ${c.table.length} table rows, ${linkTargets.length} body links (${linkTargets.join(', ') || 'none'})`);
    for (const w of warnings) console.log(`  warn: ${w}`);
    for (const p of problems) console.log(`  FAIL: ${p}`);
    if (problems.length) failures++;
}

console.log(failures ? `\n${failures} file(s) failed` : '\nAll files pass');
process.exit(failures ? 1 : 0);
