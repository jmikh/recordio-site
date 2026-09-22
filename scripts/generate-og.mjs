#!/usr/bin/env node
/**
 * Renders per-page Open Graph images (1200x630) into public/og/ using headless Chrome.
 *
 *   node scripts/generate-og.mjs            # all pages
 *   node scripts/generate-og.mjs compare-loom for-mac
 *
 * BaseLayout picks up `public/og/<slug>.jpg` automatically, where <slug> is the page path with
 * slashes replaced by dashes ("/compare/loom/" -> "compare-loom", "/" -> "home"). Add an entry to
 * PAGES below for every new page that should get its own image, then re-run the script and commit
 * the PNGs. Fonts are the self-hosted Satoshi files in public/fonts/.
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public', 'og');
const FONTS = path.join(ROOT, 'public', 'fonts');
const LOGO = path.join(ROOT, 'public', 'assets', 'fulllogo-dark.webp');

const CHROME_CANDIDATES = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
].filter(Boolean);
const CHROME = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
if (!CHROME) {
    console.error('No Chrome/Chromium found. Set CHROME_PATH to a browser binary.');
    process.exit(1);
}

const compare = (slug, name, kicker = 'Comparison') => ({
    slug: `compare-${slug}`,
    kicker,
    title: `Recordio vs ${name}`,
    subtitle: 'Features, pricing and who each tool suits',
});
const platform = (slug, name) => ({
    slug: `for-${slug}`,
    kicker: 'Screen recorder',
    title: `Recordio for ${name}`,
    subtitle: 'Auto zoom, captions and share links, right from Chrome, Edge or Brave',
});

/** @type {{slug: string, kicker: string, title: string, subtitle: string}[]} */
const PAGES = [
    { slug: 'home', kicker: 'Screen recorder for teams', title: 'Product walkthroughs that look edited', subtitle: 'Auto zoom, spotlight and captions on every recording. Share with a link.' },
    { slug: 'about', kicker: 'About', title: 'The team behind Recordio', subtitle: 'Why we built a screen recorder for product teams' },
    { slug: 'compare', kicker: 'Comparisons', title: 'Recordio vs other screen recorders', subtitle: 'Loom, Screen Studio, Tella, OBS, Camtasia and more' },
    compare('loom', 'Loom'),
    compare('screen-studio', 'Screen Studio'),
    compare('tella', 'Tella'),
    compare('bandicam', 'Bandicam'),
    compare('obs', 'OBS Studio'),
    compare('camtasia', 'Camtasia'),
    compare('clueso', 'Clueso'),
    compare('focusee', 'FocuSee'),
    compare('screencastify', 'Screencastify'),
    compare('screenity', 'Screenity'),
    { slug: 'for', kicker: 'Platforms', title: 'Recordio on every desktop OS', subtitle: 'Mac, Windows, Linux and ChromeOS, from the browser you already use' },
    platform('mac', 'Mac'),
    platform('windows', 'Windows'),
    platform('linux', 'Linux'),
    platform('chrome', 'Chrome'),
    platform('chromebook', 'Chromebook'),
    { slug: 'blog', kicker: 'Blog', title: 'Guides for better product walkthroughs', subtitle: 'Comparisons, how-tos and notes from the Recordio team' },
];

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const html = ({ kicker, title, subtitle }) => `<!doctype html>
<html><head><meta charset="utf-8">
<style>
  @font-face { font-family: Satoshi; font-weight: 500; src: url("file://${FONTS}/satoshi-500.woff2") format("woff2"); }
  @font-face { font-family: Satoshi; font-weight: 700; src: url("file://${FONTS}/satoshi-700.woff2") format("woff2"); }
  @font-face { font-family: Satoshi; font-weight: 900; src: url("file://${FONTS}/satoshi-900.woff2") format("woff2"); }
  html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
  body {
    font-family: Satoshi, system-ui, sans-serif;
    color: #fff;
    background:
      radial-gradient(60% 70% at 100% 0%, rgba(255,255,255,0.18), transparent 70%),
      radial-gradient(50% 60% at 0% 100%, rgba(255,214,120,0.28), transparent 70%),
      linear-gradient(120deg, #4c1d95 0%, #6d28d9 55%, #7c3aed 100%);
    position: relative;
  }
  .grid {
    position: absolute; inset: 0;
    background-image: radial-gradient(rgba(255,255,255,0.14) 1.2px, transparent 1.6px);
    background-size: 28px 28px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,0.9), transparent 85%);
  }
  .wrap { position: relative; padding: 72px 84px; height: 630px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; }
  .logo { height: 44px; width: 220px; align-self: flex-start; }
  .kicker { font-weight: 700; font-size: 22px; letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.85; margin-bottom: 18px; }
  .title { font-weight: 900; font-size: ${title.length > 34 ? 68 : 80}px; line-height: 1.02; letter-spacing: -0.02em; max-width: 1000px; }
  .subtitle { font-weight: 500; font-size: 30px; line-height: 1.3; opacity: 0.9; margin-top: 22px; max-width: 900px; }
  .foot { display: flex; align-items: center; justify-content: space-between; font-weight: 700; font-size: 24px; opacity: 0.9; }
  .pill { border: 2px solid rgba(255,255,255,0.5); border-radius: 999px; padding: 8px 20px; font-size: 20px; }
</style></head>
<body>
  <div class="grid"></div>
  <div class="wrap">
    <img class="logo" src="file://${LOGO}" alt="Recordio">
    <div>
      <div class="kicker">${escape(kicker)}</div>
      <div class="title">${escape(title)}</div>
      <div class="subtitle">${escape(subtitle)}</div>
    </div>
    <div class="foot"><span>recordio.io</span><span class="pill">Free plan, no card needed</span></div>
  </div>
</body></html>`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function screenshot(htmlPath, outPath) {
    const profile = fs.mkdtempSync(path.join(tmp, 'profile-'));
    const child = spawn(CHROME, [
        '--headless=new',
        '--disable-gpu',
        '--hide-scrollbars',
        '--no-first-run',
        '--no-default-browser-check',
        `--user-data-dir=${profile}`,
        '--allow-file-access-from-files',
        '--window-size=1200,630',
        '--force-device-scale-factor=1',
        `--screenshot=${outPath}`,
        `file://${htmlPath}`,
    ], { stdio: 'ignore' });
    const deadline = Date.now() + 30000;
    try {
        while (!fs.existsSync(outPath) || fs.statSync(outPath).size === 0) {
            if (Date.now() > deadline) throw new Error(`Chrome did not write ${outPath} within 30s`);
            await sleep(200);
        }
        await sleep(300); // let the file finish flushing
    } finally {
        child.kill('SIGKILL');
    }
}

const only = new Set(process.argv.slice(2));
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'recordio-og-'));
fs.mkdirSync(OUT_DIR, { recursive: true });

for (const page of PAGES) {
    if (only.size && !only.has(page.slug)) continue;
    const src = path.join(tmp, `${page.slug}.html`);
    const png = path.join(tmp, `${page.slug}.png`);
    const out = path.join(OUT_DIR, `${page.slug}.jpg`);
    fs.writeFileSync(src, html(page));
    // Headless Chrome writes the screenshot and then, on this machine, does not always exit,
    // so poll for the file and kill the process instead of waiting on it.
    await screenshot(src, png);
    // JPEG keeps the gradient background around 60-90 KB instead of a 400 KB PNG.
    await sharp(png).jpeg({ quality: 88, mozjpeg: true }).toFile(out);
    console.log(`wrote ${path.relative(ROOT, out)}`);
}
fs.rmSync(tmp, { recursive: true, force: true });
