# Shared context for all SEO plans (read this first)

Every plan in this folder assumes you have read this file. It holds the product facts, positioning rules, writing rules, repo layout and verification steps. Do not restate retired claims in any copy.

## The product, as of September 2026

Recordio is a **cloud-based screen recorder for teams making product walkthroughs and demos**. It is delivered as a Chrome extension (also runs on Edge and Brave) plus a web app at https://app.recordio.io. It therefore works on macOS, Windows, Linux and ChromeOS. **An account is always required** (a free account is fine). Never imply it works without signing up.

Features that are live and may be described:
- Auto zoom that reads the page DOM (frames the input, card or menu you interact with), every zoom is an editable keyframe
- Auto spotlight (3D elevation of the element you interact with)
- Smart AutoCut (silence removal that keeps typing/clicking pauses)
- Simplified toolbar (hides bookmarks, tabs, extensions from the recording)
- Blur sensitive regions; webcam bubble; device frames (MacBook Pro / Air); backgrounds and music library
- AI captions with word-level timing, editable, delete a caption line to cut that segment (Pro)
- Exports 480p, 720p, 1080p (free), 2K and 4K (Pro); cloud rendering on Pro, browser rendering on Free
- Share links with view analytics (view counts, watch time) and a public watch page (Pro)
- Team workspace with roles, collaboration and a shared team library; unlimited viewer seats (Pro)
- Screenshots sub-product: capture visible area, full page or a region from the extension; annotate in the web app (text, arrow, line, rectangle, ellipse, blur/pixelate, crop); copy to clipboard, download PNG or PDF, or share a public link. A separate free cap for screenshots exists (planned at 20 live screenshots per free workspace). **Confirm the cap and that screenshots are publicly launched with John before publishing numbers.**
- Free plan: $0, no card, up to 5 active projects, videos expire after 7 days, 1080p downloads, lightweight local transcription, browser rendering
- Pro: $12 per seat per month billed annually, $15 per seat per month monthly. 4K, captions, share links, team library, unlimited viewer seats, cloud rendering, unlimited projects, no expiry, 30-day restore

Not public yet, do not claim: a native macOS app (repo recordio-mac exists but is unreleased). The FAQ says desktop apps are "on the way"; leave it at that.

## Retired claims (never write these)
$4/mo, $48/yr, $89 lifetime, one-time price for Recordio, 7-day Pro trial, 720p or watermark on free, local Whisper, 99 languages, "local processing" as a feature, "everything stays on your machine", "no cloud", "no per-seat pricing", "no subscription", "no account needed", "no limits on recordings" for Free, share links free. Also never write "Loom and Screen Studio had a baby" or any variant.

## Positioning and tone
Lead with teams, product people, walkthroughs, demos, async updates, share links, team library. Plain, specific, un-hyped. Social proof reads "Trusted by people at" with name, title and company on each quote, never "trusted by [company]". Display font is Satoshi (already set in CSS).

## Writing rules for every page
- Title: keyword first, brand last (`... | Recordio`), 60 characters or fewer. Description 155 or fewer.
- One H1. No em dashes anywhere in new copy. No exclamation-heavy or "revolutionary" language. Short sentences.
- Honest sections about what competitors do well are required on comparison content; they are why the two compare pages that rank do rank.
- Competitor facts must be current and sourced from the competitor's own pricing page at time of writing; note the date checked in a code comment.
- Every new page links to at least three existing pages with descriptive anchor text and gets at least three inbound links added elsewhere (footer, hub, sibling pages).

## Repo layout (Astro 5 + React 19, static output, Cloudflare Pages)
- Pages: `src/pages/**/*.astro`. Layout: `src/layouts/BaseLayout.astro` (props: title, description, ogImage, faqSchema, noindex, ogType).
- Shared FAQ data: `src/data/faq.ts`. **Page-specific FAQs already work**: pass the same array to `<FAQ client:visible items={myFaq} />` and to `<BaseLayout faqSchema faqItems={myFaq}>`; the JSON-LD then uses your list instead of the shared one. Do not re-implement this.
- `src/components/Breadcrumbs.astro` renders a visible trail plus BreadcrumbList JSON-LD: `<Breadcrumbs items={[{ name: "Compare", href: "/compare/" }, { name: "Loom" }]} />` (Home is prepended). Use it on every non-homepage page you build.
- `src/components/VideoEmbed.astro` embeds a self-hosted or YouTube video and emits VideoObject JSON-LD: `<VideoEmbed title description src="/videos/zoom.webm" poster="/videos/posters/zoom.jpg" uploadDate="2026-03-25" durationSeconds={7.6} />` or `youtubeId="..."` instead of src/poster. Poster frames for every feature video are in `public/videos/posters/<name>.jpg`. Use it on every how-to post and feature page that shows a video (Plan 12).
- `src/components/RelatedLinks.tsx` renders a related-links block: `<RelatedLinks client:visible heading="Other comparisons" links={[{ label, href, blurb }]} />`. Use it instead of inventing a sibling block.
- Compare components: `src/components/compare/{CompareHero,CompareValueProps,CompareFeatureTable,CompareCTA}.tsx`. Platform hero: `src/components/platform/PlatformHero.tsx`. Blog articles: `src/components/blog/*.tsx` with the Article JSON-LD in `src/pages/blog/*.astro`.
- Constants: `src/utils/constants.ts` (`getCWSLink(section)` for Chrome Web Store CTAs, `getAppLink(section)`, `SITE_URL`). Analytics events: `src/utils/analytics.ts`.
- Styles: `src/index.css` (Tailwind 4). Existing utility classes worth reusing: `section-panel`, `section-panel-white`, `section-head`, `eyebrow`, `section-title`, `compare-table`, `compare-index-link`, `btn-primary`.
- Sitemap is generated by `@astrojs/sitemap` (`astro.config.mjs` filter excludes 404, privacy, terms, auth, subscription-success). Trailing slashes are always on.
- Audit that produced these plans: `docs/seo-audit-2026-09-22.md`.

## Verification before you finish
```
npm run build            # must pass; 23+ pages
npx eslint src           # 5 pre-existing errors in CompareHero, PlatformHero, analytics.ts are known; add none
grep -rniE '\$48|\$89|lifetime|99 languages|local processing|no per-seat|no subscription|whisper|watermark|720p' src/pages src/components src/data
# any hit must be a competitor fact, never a Recordio claim
```
Then check the built HTML in `dist/` for: one `<title>` of 60 chars or fewer, one H1, canonical `https://recordio.io/<path>/`, FAQPage JSON-LD only when the page renders an FAQ. Do not commit; leave changes for John to review.
