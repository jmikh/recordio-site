# Plan 04: New page /for/chromebook/

Read `docs/plans/00-shared-context.md` first.

## Why
"Screen recorder for Chromebook" and "how to screen record on Chromebook" are high-volume, education-heavy queries. Every desktop competitor (Bandicam, Screen Studio, Camtasia, OBS, FocuSee) is excluded on ChromeOS; a Chrome extension is the natural answer. The site has no ChromeOS page and the platforms hub does not mention it.

## Deliverable
New `src/pages/for/chromebook.astro` reusing `PlatformHero` and the reusable sections from Plan 03. Title: "Best Screen Recorder for Chromebook | Recordio" (49). Description (155 max): "Record your screen on a Chromebook with the Recordio Chrome extension. Auto zoom, captions and share links for walkthroughs and lessons. Free plan, no install."

## Sections
1. Hero: "The best screen recorder for Chromebook."
2. **Why an extension beats the built-in recorder**: ChromeOS has a native screen capture tool; state fairly what it does (raw capture, saves to Files) and what Recordio adds (auto zoom, captions, share link with analytics, team or class library, blur).
3. **Works on managed and school Chromebooks**: mention that admins can allow the extension by ID (`bbcdpipjplklaneplfmlhhibnllhinii`) in Google Admin; keep it factual, no promises about specific school policies.
4. **Record in four steps** (reuse the Plan 03 component with Chromebook props).
5. **For teachers and support teams**: one paragraph each on lessons and on customer support replies; link to the use-case pages from Plan 06 when they exist.
6. **Chromebook vs Mac vs Windows**: one short paragraph pointing to the sibling platform pages.
7. Chromebook FAQ (5 questions: works on Chromebook, needs install, audio, where videos are stored, free plan) as page-specific FAQ items.
8. Pricing; related links block; BreadcrumbList.

## Inbound links
Add "Chromebook" to `src/components/Footer.tsx` Platforms column and to `src/pages/for/index.astro`. Add the page to any platform-sibling block introduced by Plan 03.

## Acceptance
Build passes; page in sitemap; 900+ unique words; one H1; page-specific FAQPage; at least 6 internal links; no claims about the native macOS app.
