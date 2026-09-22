# Plan 06: Use-case pages for teams

Read `docs/plans/00-shared-context.md` first.

## Why
The positioning is teams, product people and walkthroughs, but no page on the site targets a job-to-be-done query. Those queries are lower volume than "screen recorder" head terms, but intent is high, competition is weak, and they give the compare and feature pages something to link to. Search Console already surfaces the homepage at position 10 for "best tutorial software" by accident.

## Deliverable
Five pages under a new `src/pages/use-cases/` folder plus a hub `src/pages/use-cases/index.astro`. Build one `UseCaseLayout` pattern (hero, "how it works in Recordio" steps, example video, features used, FAQ, related) so each page is data plus prose, not a fresh layout.

| Path | Title (60 max) | Primary query |
|---|---|---|
| /use-cases/product-walkthrough-video/ | Product Walkthrough Videos for SaaS Teams \| Recordio | product walkthrough video |
| /use-cases/software-demo-recording/ | Software Demo Recording Tool for Sales and PMs \| Recordio | software demo recording |
| /use-cases/customer-onboarding-videos/ | Customer Onboarding Videos That Get Watched \| Recordio | saas onboarding video |
| /use-cases/bug-report-screen-recording/ | Bug Report Screen Recording for Support and QA \| Recordio | bug report screen recording |
| /use-cases/release-walkthrough-video/ | Release Walkthrough and Feature Update Videos \| Recordio | feature announcement video |

## Structure of each page (900 to 1,300 words)
1. Hero: H1 with the query phrase, one paragraph on the problem in the reader's words.
2. **What a good one looks like**: 4 to 5 concrete traits (length, framing, captions, where to share).
3. **How to record one in Recordio**: 4 steps, each naming the feature used (auto zoom, spotlight, AutoCut, captions, blur, share link, team library). Bug reports and support pages should also mention screenshots (Plan 05).
4. **Example**: an embedded Recordio watch-page video or a `/public/videos/` clip with a caption. Ask John for a real example; placeholder with `<!-- ASSET NEEDED -->`.
5. **Template or checklist**: a short reusable script or checklist the reader can copy (this is the linkable part).
6. **Who this is for**: two or three roles with one sentence each.
7. FAQ (4 questions) as page-specific FAQ items with FAQPage JSON-LD.
8. Related: two other use cases, one feature page (Plan 07), one compare page, the homepage. BreadcrumbList (Home > Use cases > Page).

## Inbound links
- Hub page lists all five with one-line blurbs.
- Footer: add a "Use cases" column or fold into Product (coordinate with Plan 08).
- Homepage: one strip "Built for product walkthroughs, demos, onboarding and bug reports" linking the five (Plan 08 owns homepage strips; if it has not landed, add the strip here under Testimonials).

## Acceptance
Build passes; six pages in sitemap; each page one H1, page-specific FAQPage, BreadcrumbList, 6+ internal links, no retired claims, no claims about the native macOS app.
