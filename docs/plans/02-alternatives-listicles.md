# Plan 02: "Best X alternatives" posts

Read `docs/plans/00-shared-context.md` first.

## Why
Queries like "bandicam alternative", "screencastify alternative", "screen studio alternative" are answered by Google with listicles, not single "vs" pages. The site has one such post (`/blog/best-loom-alternatives-2026/`, position 87, one inbound link). Search Console shows Bandicam-alternative impressions at positions 70 to 80 with no page shaped to win them.

## Deliverable
Four new posts under `src/pages/blog/` with matching components under `src/components/blog/`, following the pattern of `best-loom-alternatives-2026.astro` + `LoomAlternativesArticle.tsx` (Article JSON-LD in the page frontmatter, `ogType="article"`, byline and updated date visible near the top, author card). Plus a refresh of the Loom post.

Posts, in order:
1. `/blog/best-bandicam-alternatives-2026/` (angle: Mac and Linux users, teams, no watermark on free tier of the tools listed)
2. `/blog/best-screen-studio-alternatives-2026/` (angle: Windows and Linux, team sharing)
3. `/blog/best-screencastify-alternatives-2026/` (angle: education and Chrome, free plans)
4. `/blog/best-camtasia-alternatives-2026/` (angle: fast product demos without a timeline)

## Structure of each post (1,800 to 2,500 words)
- Title pattern: "Best {X} Alternatives in 2026 ({angle}) | Recordio", 60 chars or fewer.
- Intro: who this is for, what {X} costs and where it falls short, stated fairly (2 paragraphs).
- "How we picked" (3 criteria, one sentence each).
- 7 to 9 tools. Recordio first, with an honest "not for you if" line (needs an account, browser-based capture, no game capture). Each entry: one-paragraph summary, best for, pricing checked on a stated date, pros (3), cons (2), link to the tool. Recordio's entry links to the matching `/compare/{x}/` page.
- Comparison table of all tools: platform, free plan, auto zoom, captions, share links, team library, starting price.
- "Which one should you pick" section mapping three reader types to tools.
- FAQ (4 questions) rendered on the page and passed to `BaseLayout` as page-specific FAQ items (see Plan 01 for the `faqItems` prop; if Plan 01 has not landed, add the prop here the same way).
- Internal links: the matching compare page, `/compare/`, the relevant `/for/` page, the other listicles, the homepage.

Also: add `ItemList` JSON-LD listing the tools in order.

## Loom post refresh
Update `LoomAlternativesArticle.tsx`: current Loom pricing (check the date), add full-page screenshots and team workspace to Recordio's entry, add a link to `/compare/loom/` and to the new posts, update the visible "Last updated" and `dateModified`.

## Inbound links to add
- `src/pages/blog/index.astro`: a card per new post.
- Each matching compare page: a "Read: best {X} alternatives" link in its related block (Plan 01 owns that block; if it has not landed, add a paragraph link near the CTA).
- `src/components/Footer.tsx`: keep to one "Blog" link; do not list every post.

## Acceptance
Build passes; each post has one H1, Article + ItemList + FAQPage JSON-LD, title and description within limits, visible byline and date, no retired claims, at least 8 internal links.
