/**
 * lastmod for the sitemap. For each URL we find the source that produced the page and take the
 * date of its last git commit (falling back to file mtime for files not yet committed):
 *   - a static page:   src/pages/<path>.astro or src/pages/<path>/index.astro
 *   - a dynamic route: the newest of src/pages/<dir>/[slug].astro and src/data/<dir>/<slug>.*
 * Pages with no matching source get no lastmod, which is better than a bogus build date.
 * Used from astro.config.mjs via the @astrojs/sitemap `serialize` hook.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES = path.join(ROOT, 'src', 'pages');
const DATA = path.join(ROOT, 'src', 'data');

const gitDate = (file) => {
    try {
        const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] })
            .toString()
            .trim();
        if (out) return new Date(out);
    } catch {
        /* not a git checkout, fall through to mtime */
    }
    return fs.statSync(file).mtime;
};

const newest = (files) => files.filter((f) => f && fs.existsSync(f)).map(gitDate).sort((a, b) => b - a)[0];

const dynamicTemplate = (dir) => {
    if (!fs.existsSync(dir)) return undefined;
    const name = fs.readdirSync(dir).find((f) => f.startsWith('[') && f.endsWith('.astro'));
    return name && path.join(dir, name);
};

export function getLastmod(url) {
    const pathname = new URL(url).pathname.replace(/^\/|\/$/g, ''); // "" for home
    const base = path.join(PAGES, pathname);
    const direct = newest([`${base}.astro`, path.join(base, 'index.astro')]);
    if (direct) return direct;

    const dir = path.dirname(base);
    const slug = path.basename(base);
    const template = dynamicTemplate(dir);
    if (!template) return undefined;
    const dataDir = path.join(DATA, path.relative(PAGES, dir));
    const dataFiles = fs.existsSync(dataDir)
        ? fs.readdirSync(dataDir).filter((f) => f.replace(/\.[^.]+$/, '') === slug).map((f) => path.join(dataDir, f))
        : [];
    return newest([template, ...dataFiles]);
}
