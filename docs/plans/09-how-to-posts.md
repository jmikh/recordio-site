# Plan 09: How-to posts and the tutorial-software post

Read `docs/plans/00-shared-context.md` first.

## Why
How-to queries carry the largest volume in this space and the site has no how-to content. Search Console already shows the homepage at position 10 for "best tutorial software" with no page targeting it, and the Linux cluster includes many "how to record screen on ubuntu" variants.

## Deliverable
Five posts under `src/pages/blog/` using the existing article pattern (`.astro` page with Article JSON-LD and `ogType="article"`, a `src/components/blog/*.tsx` body, visible byline and updated date, author card).

| Path | Title (60 max) | Query |
|---|---|---|
| /blog/how-to-record-screen-on-ubuntu/ | How to Record Your Screen on Ubuntu (With Audio) \| Recordio | how to record screen on ubuntu |
| /blog/how-to-screen-record-on-chromebook/ | How to Screen Record on a Chromebook in 2026 \| Recordio | how to screen record on chromebook |
| /blog/how-to-record-screen-on-mac-with-audio/ | How to Record Your Screen on Mac With Audio \| Recordio | how to record screen on mac with audio |
| /blog/best-tutorial-recording-software/ | Best Tutorial Recording Software in 2026 \| Recordio | best tutorial software |
| /blog/how-to-make-a-product-walkthrough-video/ | How to Make a Product Walkthrough Video \| Recordio | how to make a product walkthrough video |

## Structure (1,200 to 1,800 words each)
- Answer the question in the first 150 words with the built-in or free method first (Ubuntu: GNOME's built-in recorder and OBS; Chromebook: the ChromeOS screen capture tool; Mac: QuickTime and Shift-Cmd-5). Be genuinely useful; the reader may not want Recordio.
- Then "When you want a polished walkthrough": Recordio steps with screenshots, naming auto zoom, captions and share link. Link the matching `/for/` page and one use case.
- Audio section (mic and system audio) for the three how-tos.
- Troubleshooting (3 items).
- `HowTo` JSON-LD for the three how-tos with the numbered steps; `ItemList` for the tutorial-software post; FAQ (3 questions) as page-specific FAQPage items.
- Related links: the matching platform page, the relevant compare page (OBS for Ubuntu, Screencastify for Chromebook, Screen Studio for Mac), the other posts, the blog index.

## Inbound links
Blog index cards; the matching platform page links its how-to; Plan 08's header Blog link.

## Acceptance
Build passes; each post has Article + HowTo or ItemList + FAQPage JSON-LD, one H1, title and description within limits, visible byline and date, 8+ internal links, no retired claims, no native macOS app claims.
