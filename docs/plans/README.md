# SEO plans index

Each file is self-contained for handing to a fresh agent. Every agent must read `00-shared-context.md` first.

## Running plans in parallel

The shared touchpoints (`faqItems` on BaseLayout, `FAQ items` prop, `Breadcrumbs.astro`, `RelatedLinks.tsx`) already exist in the repo, so page-building plans no longer need to edit the layout. What still collides is the linking layer: `Header.tsx`, `Footer.tsx`, `src/pages/index.astro`, `src/pages/compare/index.astro`, `src/pages/for/index.astro`, `src/pages/blog/index.astro`. Plan 08 owns those files.

**Rule for every wave-1 agent:** create your own pages and components only. Do not edit the six files above, `BaseLayout.astro`, `FeatureVideos.tsx`, or another plan's pages. When your plan says "add an inbound link in the footer/hub/homepage/blog index", instead append a line to `docs/plans/inbound-links-todo.md` in the form `- [ ] <where> -> <your path> "<anchor text>"`. Plan 08 consumes that file.

Run each agent in its own git worktree or branch and merge in wave order; the only expected merge conflicts are in `inbound-links-todo.md`, which is append-only.

### Wave 1 (fully parallel)
| # | Plan | Touches |
|---|---|---|
| 01 | Compare pages as a data-driven template | `src/pages/compare/[slug].astro`, `src/data/compare/*`, deletes the ten old compare files |
| 03 | /for/linux/ rewrite | `src/pages/for/linux.astro`, new `src/components/platform/*` |
| 05 | Screenshots feature page | `src/pages/screenshots.astro` |
| 06 | Use-case pages | `src/pages/use-cases/*` |
| 07 | Feature pages | `src/pages/features/*` (skip the FeatureVideos title-link change; log it in the todo file) |
| 09 | How-to posts | `src/pages/blog/how-to-*.astro`, `src/components/blog/*` (new files only; log blog-index cards in the todo file) |
| 10 | Technical follow-ups | `BaseLayout.astro` (Organization schema only), `src/pages/about.astro`, `public/_headers`, `public/llms.txt`, `public/og/*`, `FeatureVideos.tsx` posters, deletes dead components |

Plan 10 is the one wave-1 plan allowed to touch `BaseLayout.astro` (adding Organization JSON-LD) and `FeatureVideos.tsx` (posters). Nothing else in wave 1 touches them.

### Wave 2 (after the wave-1 plans it depends on have merged)
| # | Plan | Depends on |
|---|---|---|
| 04 | /for/chromebook/ | 03 (reuses its platform components) |
| 02 | Alternatives listicles | 01 (adds each listicle to the compare data files' `related.post`) and 09 (shares the blog index) |
| 08 | Internal linking, nav, hubs, footer, breadcrumbs sweep | everything above; consumes `inbound-links-todo.md` |

### Any time (John, not an agent)
| 11 | Dashboard actions |
| 12 | Off-site authority and distribution (needs 05 for the launch) |

## Plan list
| # | Plan |
|---|---|
| 00 | Shared context (facts, rules, repo layout, verification) |
| 01 | Compare pages rebuilt as a data-driven template |
| 02 | "Best X alternatives" listicle posts |
| 03 | /for/linux/ rewrite |
| 04 | New /for/chromebook/ page |
| 05 | Full-page screenshot feature page |
| 06 | Use-case pages for teams |
| 07 | Feature pages |
| 08 | Internal linking, header nav, hub pages, breadcrumbs |
| 09 | How-to posts and tutorial-software post |
| 10 | Technical follow-ups |
| 11 | Dashboard actions |
| 12 | Off-site authority and distribution |
