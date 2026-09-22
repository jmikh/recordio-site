# Plan 07: Feature pages

Read `docs/plans/00-shared-context.md` first.

## Why
Mid-funnel queries name a capability: "screen recorder with auto zoom", "screen recorder with captions", "screen recording blur", "share screen recording link", "screen recording analytics". The homepage carousel shows these features but nothing ranks for them, and the compare pages have no feature page to link to when they say "auto zoom".

## Deliverable
Five pages under `src/pages/features/` plus a hub `src/pages/features/index.astro`, sharing one `FeatureLayout` pattern.

| Path | Title (60 max) | Primary query | Existing media |
|---|---|---|---|
| /features/auto-zoom/ | Screen Recorder With Automatic Zoom \| Recordio | screen recorder auto zoom | /videos/zoom.webm, spotlight.webm |
| /features/ai-captions/ | Screen Recorder With Automatic Captions \| Recordio | screen recorder with captions | /videos/captions.webm |
| /features/blur/ | Blur Sensitive Info in Screen Recordings \| Recordio | blur screen recording | /videos/overlays.webm (check) |
| /features/share-links/ | Share Screen Recordings as a Link With Analytics \| Recordio | share screen recording link | none, ask John for a watch-page screenshot |
| /features/team-library/ | Team Library for Screen Recordings \| Recordio | screen recording team workspace | none, ask John |

## Structure of each page (700 to 1,000 words)
1. Hero: H1 with the query phrase, one paragraph, CTA via `getCWSLink('feature-{slug}')`.
2. **How it works**: 3 short H3s with the video or image. For auto zoom explain DOM-aware framing versus cursor tracking and that every zoom is an editable keyframe. For captions: word-level timing, edit in place, delete a line to cut the segment, Pro. For blur: region blur, and that shared screenshots serve a flattened image. For share links: view count, watch time, public watch page, Pro. For team library: workspace roles, unlimited viewer seats, Pro.
3. **Which plan**: one line stating Free or Pro for the feature (see shared context).
4. **Compared with**: one paragraph naming how two competitors handle it, linking their compare pages.
5. FAQ (4 questions) as page-specific items with FAQPage JSON-LD.
6. Related: two other features, one use case (Plan 06), one platform page. BreadcrumbList.

## Inbound links
- Hub lists all five. Footer Product column links the hub (coordinate with Plan 08).
- Update `src/components/FeatureVideos.tsx` so each carousel item's title links to its feature page (small change, keep the design).
- Plan 01 compare tables can link feature names to these pages once both exist.

## Acceptance
Build passes; six pages in sitemap; one H1 each; page-specific FAQPage; BreadcrumbList; every Pro/Free statement matches the shared context.
