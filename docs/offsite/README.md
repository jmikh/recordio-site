# Off-site authority kit (Plan 12)

Working files for `docs/plans/12-off-site-authority.md`. Everything here is for John or a marketing agent to execute; the two code items from the plan are done in the repo (see below). Facts and rules come from `docs/plans/00-shared-context.md`.

| # | Action | File | Status (22 Sep 2026) |
|---|---|---|---|
| 1 | Listings with one consistent description | `listing-copy.md` | Copy ready; submissions pending |
| 2 | Launch (Product Hunt, Show HN) | `launch.md` | Plan and copy ready; needs Plan 05 page live and the 60 s video |
| 3 | Founder distribution (LinkedIn, Reddit) | `outreach.md` | Four post drafts and the Reddit playbook ready |
| 4 | Linkable data asset | `data-asset-brief.md` | Page, charts and schema built at `src/pages/blog/_walkthrough-watch-time.astro`; waits for real numbers |
| 5 | YouTube + VideoObject schema | `src/components/VideoEmbed.astro` | Component done, posters generated; channel and uploads pending |
| 6 | Guest posts and podcasts | `outreach.md` | Pitch templates ready |
| 7 | Partnerships | `outreach.md` | Pitch template and target list ready |
| 8 | Reviews from the seven homepage reviewers | `outreach.md` | Template ready; send |
| 9 | Refresh discipline | `refresh-checklist.md` | Checklist ready; first pass due 1 Dec 2026 |
| 10 | Measurement | `measurement.md` | Regex verified in Search Console; baseline recorded |

## Code delivered
- `src/components/VideoEmbed.astro`: self-hosted or YouTube embed with VideoObject JSON-LD. Usage is documented in the file header and in `docs/plans/00-shared-context.md`.
- `public/videos/posters/*.jpg`: 1280x720 poster frames for every feature video (needed as `thumbnailUrl`).
- `src/data/watch-time-report.ts`, `src/components/blog/WatchTimeReport.tsx`, `src/pages/blog/_walkthrough-watch-time.astro`: the data asset. Placeholder numbers, draft banner, noindex while draft, underscore keeps it out of the build.

## Order of operations
1. Send the review request (item 8) today. It costs nothing and lifts every listing.
2. Submit listings (item 1) this week using `listing-copy.md` verbatim.
3. Pull the watch-time numbers (item 4) and publish the report before the launch, so the launch post can link it.
4. Launch (item 2) once `/screenshots/` is live and the cap is confirmed.
5. Everything else runs on the weekly cadence in `outreach.md` and `measurement.md`.
