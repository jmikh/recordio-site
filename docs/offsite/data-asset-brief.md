# Data asset brief: "What N product walkthroughs taught us about watch time" (Plan 12, item 4)

## What exists in the repo
- `src/data/watch-time-report.ts`: typed dataset with placeholder values and `status: 'draft'`.
- `src/components/blog/WatchTimeReport.tsx`: article body with three inline SVG charts (retention curve, completion by length, captions split), stat tiles, method section, table view under each chart.
- `src/pages/blog/_walkthrough-watch-time.astro`: page with Article and Dataset JSON-LD, breadcrumbs and related links. The underscore keeps it out of the build. It renders `noindex` and a red banner while the status is draft.

Publishing is three steps: fill the data file, set status to final, rename the page without the underscore. Then add the blog-index card and inbound links listed in `docs/plans/inbound-links-todo.md`.

## Where the numbers come from
Recordio videos play through Mux (`mux_videos.mux_asset_id`, `mux_videos.mux_playback_id` in Supabase). Watch data lives in **Mux Data**, not in Supabase. Two ways to get it:

1. **Mux Data Video Views export** (dashboard, or `GET https://api.mux.com/data/v1/video-views` with a timeframe filter). Each view record carries the asset or playback id, the viewer's watch time, the furthest playhead position reached, the video duration and viewer id. Confirm the exact field names in the current Mux Data API reference before writing the query.
2. **Mux Data metrics API** (`/data/v1/metrics/{metric}/breakdown` grouped by `video_id` or `asset_id`) for per-video totals such as views and total watch time, if per-view export is too large.

Join back to Supabase for the video-level attributes:
- Length: from the Mux asset duration.
- Captions on or off: from `projects.project_data` (the captions/transcript setting for the rendered version). Check the JSON key in the webapp editor state before trusting it.
- Owner views to exclude: viewer id equal to the project owner, or views from the editor preview rather than the public watch page (check whether the player passes a `viewer_user_id` or a `player_name` that distinguishes the watch page).

## Definitions used by the page (keep them, they are printed in the Method section)
- Sample: walkthroughs shared via a share link, at least 5 views each (change `minimumViewsPerVideo` if you use another threshold), recorded between `periodStart` and `periodEnd`.
- Retention at point p: share of views whose furthest position is at or past p percent of the video length. Eleven points, 0 to 100 in steps of 10. Point 0 is always 100.
- Completion: view reached the last 10% of the video.
- Length buckets: under 1 min, 1 to 2, 2 to 4, 4 to 8, over 8. `walkthroughs` is the count of videos in the bucket, `completionRate` is across views in the bucket, `medianWatchSeconds` is the median seconds watched per view.
- Captions split: videos with an enabled caption track versus without. Report both counts.
- Headline tiles: median video length, median share watched per view, overall completion, share of views that left in the first 10%.

## Privacy filters before publishing
- Aggregate only. No per-video, per-workspace or per-viewer rows leave the analysis.
- Drop any bucket with fewer than 20 videos and say so in the Method section.
- Do not name any customer. The report says "Trusted by people at" only where the homepage already does.

## Writing the findings
After the real numbers are in, replace the three `findings` entries with what the data actually shows. Keep each to one paragraph, one number, one recommendation. If a placeholder claim turns out false (for example captions make no difference), say that. An honest null result is still citable.

## Distribution once live
1. LinkedIn post 2 in `outreach.md`, with the retention chart as the image.
2. Pitch it to five newsletters from the guest-post target list with the pitch template.
3. Submit to r/productmanagement as a text post that summarises the findings and links the source at the end; ask the mods first if self-promotion rules are unclear.
4. Add the report to the Product Hunt launch first comment and the Show HN text.
5. Offer the aggregate CSV to anyone who asks; every email that asks for data is a potential link.

Acceptance from the plan: published with at least three outreach placements linking to it.
