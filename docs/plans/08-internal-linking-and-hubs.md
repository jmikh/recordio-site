# Plan 08: Internal linking, navigation and hub pages

Read `docs/plans/00-shared-context.md` first.

## Why
The September audit found the header has no site links, the homepage body links to nothing, compare and platform pages link to no siblings, the platforms hub had zero inbound links, and the two hubs have 14 and 12 words of body text. New pages from Plans 01 to 07 will not rank if they are footer-only.

## Deliverables

### A. Header navigation (`src/components/Header.tsx`)
Add three links between the logo and the CTAs: Compare (`/compare/`), Platforms (`/for/`), Blog (`/blog/`). When Plans 05 to 07 land, add a "Product" dropdown holding Features, Use cases, Screenshots; until then, keep three plain links. Mobile menu must list the same links. Keep the existing `navLinks` prop behaviour for in-page anchors on compare and platform pages, but render site links in addition to them.

### B. Homepage strips (`src/pages/index.astro` and a new small component)
- Under Testimonials: "Switching from Loom, Screen Studio or Bandicam?" with three links plus "All comparisons".
- Under Pricing: "Works on Mac, Windows, Linux and Chromebook" linking the four platform pages (five once Plan 04 lands).
- One line in the Hero or Features area mentioning screenshots once Plan 05 lands.

### C. Compare hub (`src/pages/compare/index.astro`)
Real H1 "Recordio compared with other screen recorders". Intro paragraph stating the comparisons are written by the Recordio team, list where the other tool wins, and use pricing checked in 2026. Group the ten links: Async video tools (Loom, Tella, Clueso), Polished recorders (Screen Studio, FocuSee), Desktop capture (OBS, Camtasia, Bandicam), Chrome extensions (Screencastify, Screenity). One descriptive line per link. Link both blog posts and the Plan 02 listicles at the bottom. Target 300+ words.

### D. Platforms hub (`src/pages/for/index.astro`)
H1 "Screen recorder for Mac, Windows, Linux and Chromebook". Intro: one recorder and one team library across every OS because it runs in Chrome, Edge and Brave. One card per platform with a two-line summary. Target 250+ words.

### E. Sibling blocks
- Compare pages: "Other comparisons" block before the CTA (Plan 01 builds it into the template; if Plan 01 has not landed, add a shared `RelatedLinks` component and drop it into each page).
- Platform pages: a "Also on" row linking the other platforms and `/for/`.
- Blog posts: render `<Header />` at the top of both article pages so product navigation is reachable; add a "Related" block linking the matching compare page and the other post.

### F. Footer (`src/components/Footer.tsx`)
Columns: Product (Features hub, Use cases hub, Screenshots, Pricing, FAQ), Compare (all ten, or the top six plus "All comparisons"), Platforms (five plus "All platforms"), Company (Blog, About when it exists, Reviews, Privacy, Terms, Contact).

### G. Breadcrumbs
Add a small `Breadcrumbs.astro` (visible, plus `BreadcrumbList` JSON-LD) and use it on compare, platform, blog, feature and use-case pages.

## Acceptance
Build passes; every page in the sitemap has at least three inbound links from non-footer locations (verify with a script over `dist/` that counts `href` occurrences per path); hubs have real copy; header links present on every page including blog posts; no design regressions on mobile (check the mobile menu renders the new links).
