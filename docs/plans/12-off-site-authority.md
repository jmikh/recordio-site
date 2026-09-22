# Plan 12: Off-site authority and distribution

Read `docs/plans/00-shared-context.md` first. Most of this is for John or a marketing agent; the code items are marked.

## Why
The domain has near-zero backlink authority. Well-built pages will still sit at positions 50 to 80 until other sites link to them. Search Console shows every non-brand query at positions 10 to 80 with zero clicks.

## Actions
1. **Listings** (also rank for "X alternatives" and feed AI answers): AlternativeTo (list Recordio as an alternative to Loom, Screen Studio, Bandicam, Screencastify, Camtasia, OBS), G2, Capterra, SaaSHub, Slant, Product Hunt product page, Chrome Web Store listing text refreshed to the team/walkthrough positioning. Use one consistent description drawn from the shared context.
2. **A launch**: Product Hunt and Show HN for the screenshot feature or the team library. Prepare the Plan 05 page, a 60-second video, and five honest comparison points. One launch produces more links than a year of posts.
3. **Founder distribution**: two LinkedIn posts a week using real walkthrough videos; answer threads in r/linux, r/chromeos, r/productmanagement, r/SaaS and r/webdev when someone asks for a recorder. Link only when it is the direct answer.
4. **One linkable data asset** (code + writing): use share-link analytics to publish "What N product walkthroughs taught us about watch time" (average length, drop-off point, effect of captions). Anonymised, with charts. Pitch it to product and SaaS newsletters. This is the page other sites will cite.
5. **YouTube**: a channel with one short tutorial per how-to post (Plan 09) and per feature page (Plan 07); embed each on its page with `VideoObject` JSON-LD (code item: add a `VideoEmbed` component that emits the schema).
6. **Guest posts and podcasts**: three pitches a month to product-management and developer-tools newsletters or podcasts, offering the walkthrough angle, not the tool.
7. **Partnerships**: SaaS onboarding tools, documentation platforms and support desks whose users record walkthroughs; offer a co-written "how to" with a link exchange.
8. **Reviews**: ask the seven reviewers on the homepage for a G2 or Chrome Web Store review; reviews on third-party sites lift the listings from item 1.
9. **Refresh discipline**: quarterly pass over every compare page, listicle and platform page: update prices, the visible date, `dateModified`, and sitemap lastmod (Plan 10).
10. **Measure**: in Search Console, save a regex filter for non-brand queries (exclude `record.?io|recorderio|recordi`), and track clicks per landing page weekly. In GA4, watch `install_extension_click` by landing page.

## Acceptance
Listings live with consistent copy; one launch scheduled; data asset published with at least three outreach placements; YouTube embeds carrying VideoObject schema on every how-to page.
