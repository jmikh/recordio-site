# Plan 01: Rebuild the compare pages as a data-driven template

Read `docs/plans/00-shared-context.md` first.

## Why
The ten pages under `src/pages/compare/` are hand-edited copies with about 250 unique words each; the rest is the homepage's FeatureVideos and Pricing components. Eight of them drifted into stale pricing before the September audit. They rank nowhere for "X alternative" queries. The two that reach page one (Tella, Clueso) are the ones with candid cons. Google Search Console shows "bandicam alternative" impressions landing on the /compare/ hub instead of /compare/bandicam/.

## Deliverable
One dynamic route `src/pages/compare/[slug].astro` fed by `src/data/compare/<slug>.ts` files, rendering ten pages at the same URLs as today (`/compare/loom/` etc). Delete the ten hand-written `.astro` files once the route reproduces every URL. Keep `src/pages/compare/index.astro` (Plan 08 rewrites it).

## Data shape (`src/data/compare/types.ts`)
```ts
export interface Competitor {
  slug: string; name: string;
  title: string; description: string;           // 60 / 155 char limits
  verdict: string;                                // 2 sentences, above the fold
  chooseThem: string[]; chooseRecordio: string[]; // 3 bullets each
  whatTheyDoWell: { heading: string; body: string }[];   // 2-3 honest items
  differences: { heading: string; body: string; media?: { video?: string; image?: string; alt: string } }[]; // 3-4
  table: FeatureRow[];                            // reuse CompareFeatureTable's FeatureRow
  pricing: { competitorMonthly: string; competitorAnnual: string; competitorFree: string; notes: string; checkedOn: string };
  faq: { question: string; answer: string }[];   // 5, page-specific
  related: { compare: string[]; post?: string; platform?: string };
  updated: string;                                // ISO date
}
```

## Page section order (every page)
1. Hero: H1 "Recordio vs {name}", the verdict, two CTAs (Chrome Web Store via `getCWSLink('compare-{slug}')`, and "See pricing" anchor).
2. "Choose {name} if / Choose Recordio if" two-column box.
3. Comparison table. Extend every competitor's rows to cover: auto zoom (DOM-aware, editable), auto spotlight, AutoCut, simplified toolbar, blur, webcam, device frames, AI captions (Pro), export resolutions (1080p free, 4K Pro), cloud rendering, share links with view analytics, team workspace and roles, unlimited viewer seats, full-page and region screenshots with annotation, platforms, free plan, price.
4. "What {name} does well": 2 to 3 short H3s.
5. "Where Recordio is different": 3 to 4 H2s, each with a video from `/public/videos/` or an image, and a caption written for this competitor, not the homepage carousel.
6. Pricing for a five-person team: a small table with the arithmetic written out (Recordio 5 seats annual = $60/mo; viewer seats free).
7. Page-specific FAQ (5 questions) rendered on the page AND emitted as FAQPage JSON-LD. Extend `BaseLayout.astro` with an optional `faqItems?: FaqItem[]` prop that overrides the shared list when present; keep `faqSchema` semantics.
8. "Other comparisons" block linking the three related slugs, the related blog post, and the related platform page.
9. Byline "Written by John Mikhail, founder of Recordio" with the updated date; add `BreadcrumbList` JSON-LD (Home > Compare > {name}).
10. Keep `Pricing` component below; drop the shared `FeatureVideos` carousel in favour of section 5.

Target 1,200 to 1,800 words of page-unique copy. Pass a per-page OG image path once Plan 10 produces them; until then keep the default.

## Order of writing
Bandicam (has impressions), Loom, Screen Studio (angle: Windows and Linux users), Screencastify (education, Chrome), Camtasia, OBS (angle: demos not streaming), Tella, Clueso, FocuSee, Screenity. Carry over the corrected copy from the current `.astro` files; do not reintroduce retired claims. Check every competitor price on their pricing page and record `checkedOn`.

## Acceptance
- All ten URLs build with the same paths; `npm run build` passes; sitemap still lists them.
- Each page: one H1, title 60 or fewer, description 155 or fewer, FAQPage JSON-LD with exactly the page's 5 questions, BreadcrumbList present, at least 6 internal links in the body.
- Grep from the shared context returns only competitor facts.
- Analytics: CTA clicks call `trackInstallExtension('compare-{slug}')` as today.
