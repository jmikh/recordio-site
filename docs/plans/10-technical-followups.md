# Plan 10: Technical follow-ups from the audit

Read `docs/plans/00-shared-context.md` first. These are the remaining code items from `docs/seo-audit-2026-09-22.md` that were not applied in the audit pass.

## Items
1. **Organization JSON-LD** in `src/layouts/BaseLayout.astro`: name, url, logo (`/assets/fulllogo-light.png`), sameAs (Chrome Web Store listing, LinkedIn company or founder page; ask John for the list), contactPoint with `john@recordio.io`. Emit once per page.
2. **`/about/` page** (`src/pages/about.astro`): founder bio (John Mikhail, founder; MIT, previously Google and Mixpanel, per the blog author card), why Recordio exists (teams, walkthroughs), contact, Person + Organization schema. Link from the footer Company column and from both blog author cards.
3. **Per-page OG images**: a build-time script (or a one-off script writing to `public/og/`) producing "Recordio vs {X}" and per-platform images at 1200x630, then pass `ogImage` from the pages. Keep the brand purple and Satoshi; fonts are in `public/fonts/`.
4. **Cache headers**: in `public/_headers`, add `/_astro/*` with `Cache-Control: public, max-age=31536000, immutable`; keep HTML at `max-age=0, must-revalidate`.
5. **Feature video posters**: generate a poster frame per `/public/videos/*.webm` (ffmpeg is installed) and set `poster` in `src/components/FeatureVideos.tsx`'s `LazyVideo` so the placeholder is not blank.
6. **Delete dead components** `src/components/TrustStrip.tsx` and `src/components/Features.tsx` (not imported anywhere; they carry retired copy). Confirm with `grep -rn "TrustStrip\|from '../components/Features'" src` before deleting.
7. **Sitemap lastmod**: configure `@astrojs/sitemap` `serialize` to set `lastmod` from a per-page `updated` value (compare data files and blog frontmatter carry one after Plans 01 and 02).
8. **llms.txt** at `public/llms.txt`: plain-text product facts from the shared context (what it is, platforms, pricing, key features, links to compare and platform pages). Keep it factual and short.
9. **Extension manifest**: the reference to app.recordio.cc was removed on 22 Sep 2026 in `recordio/extension/manifest.json`; a new extension release is needed for it to take effect. Not a landing-site task; listed so it is not forgotten.
10. **Pre-existing lint errors** (CompareHero.tsx setState in effect, PlatformHero.tsx useless escape and setState in effect, analytics.ts explicit any): fix if touching those files; otherwise leave.

## Acceptance
Build passes; Organization schema validates in the Rich Results Test; `_headers` rules confirmed with `curl -I` after deploy; posters render; no dead component imports remain.
