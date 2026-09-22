# Plan 05: Full-page screenshot feature page

Read `docs/plans/00-shared-context.md` first, especially the screenshot facts and the note to confirm launch status and the free cap with John.

## Why
"Full page screenshot Chrome extension", "screenshot annotation tool" and "full page screen capture" are large, tool-shaped queries with weak incumbents. Recordio's screenshot sub-product (visible area, full page or region capture; annotate with text, arrow, line, rectangle, ellipse, blur, crop; copy, PNG, PDF, public share link) is a wedge that introduces new users to the recorder. The site does not mention it anywhere.

## Deliverable
New `src/pages/screenshots.astro` at `/screenshots/`. Title: "Full Page Screenshot and Annotation Tool | Recordio" (52). Description: "Capture the full page, the visible area or a region from Chrome, annotate with arrows, text and blur, then copy, download or share a link. Free to start." (152)

## Sections
1. Hero: H1 "Full-page screenshots, annotated and shared in seconds." CTA to the Chrome Web Store (`getCWSLink('screenshots')`).
2. **Three ways to capture**: visible area, full page (scrolls and stitches, hides sticky headers), region. One short paragraph and an image each. Image assets: ask John; use placeholder paths under `/assets/screenshots/` with `<!-- ASSET NEEDED -->` comments.
3. **Annotate**: text, arrow, line, rectangle, ellipse, blur or pixelate, crop. Note that shared links serve a flattened image so blur really hides content.
4. **Copy, download or share**: clipboard, PNG, PDF, public link with a view page.
5. **Screenshots and recordings in one library**: the team angle; link the homepage and the team library feature page (Plan 07).
6. **Compared with GoFullPage, Awesome Screenshot, Nimbus**: a small honest table (full page, annotation, blur, share link, video recording in the same tool, price). Check competitor pricing on the stated date.
7. FAQ (5 questions: is it free, cap on free plan (confirm number), does it work on any site, PDF export, privacy of shared links) as page-specific FAQ items.
8. BreadcrumbList; related links to `/for/chrome/`, the homepage, and use-case pages for bug reports and support (Plan 06).

## Also
- Add "Screenshots" to the header nav if Plan 08 has landed, otherwise to the footer Product column.
- Add one sentence about screenshots to the homepage hero or features (coordinate with Plan 08; keep to one line).

## Acceptance
Build passes; page in sitemap; 900+ words; one H1; page-specific FAQPage; every number (cap, limits) confirmed with John or removed.
