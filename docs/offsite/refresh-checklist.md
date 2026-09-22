# Quarterly refresh checklist (Plan 12, item 9)

Run on the first working day of March, June, September and December. Next: 1 December 2026. Budget half a day.

## Compare pages (`src/data/compare/*` once Plan 01 lands, otherwise `src/pages/compare/*.astro`)
- [ ] Open each competitor's pricing page. Update every price, plan name and free-tier limit. Update the "checked on" code comment with the date.
- [ ] Re-read the "what X does well" section. Remove anything the competitor has since dropped; add one line for anything major they shipped.
- [ ] Update the visible "Updated" date, `dateModified` in the JSON-LD and the `updated` value used for sitemap lastmod (Plan 10).

## Listicles and how-to posts (`src/pages/blog/*`)
- [ ] Verify each tool in a listicle still exists and its price is right.
- [ ] For the how-to posts, confirm the built-in OS method still matches the current OS release (GNOME, ChromeOS, macOS version names).
- [ ] Bump the year in titles and H1s in the December pass only if the content was truly refreshed.
- [ ] Update `dateModified` and the visible date.

## Platform and feature pages
- [ ] Recordio facts: plan limits, prices, export resolutions, what is Free and what is Pro. Compare with `docs/plans/00-shared-context.md` and update the shared context first if the product changed.
- [ ] Re-run the retired-claims grep from the shared context.

## Listings and profiles
- [ ] Re-read the description on Chrome Web Store, AlternativeTo, G2, Capterra, SaaSHub, Slant and Product Hunt against `listing-copy.md`. Fix drift.
- [ ] Add new screenshots if the editor UI changed.

## Data asset
- [ ] Re-pull the watch-time numbers for the latest quarter, update `src/data/watch-time-report.ts`, bump `dateModified`, and mention the refresh in the next LinkedIn post.

## Verification
```
npm run build
npx eslint src
grep -rniE '\$48|\$89|lifetime|99 languages|local processing|no per-seat|no subscription|whisper|watermark|720p' src/pages src/components src/data
```
Then request reindexing in Search Console for every page whose content changed.
