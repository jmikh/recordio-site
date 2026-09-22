# Launch plan: Product Hunt and Show HN (Plan 12, item 2)

## What to launch
Launch the **screenshot tool** (Plan 05 page at `/screenshots/`). It is free, works for anyone with Chrome, and does not require the team story to land. The team library is a follow-up launch in Q1 2027 once the data asset has circulated.

Blocked until: `/screenshots/` is live, the free screenshot cap is confirmed, and the 60-second video exists.

## Timeline
| When | What |
|---|---|
| T-14 days | Publish `/screenshots/` and the watch-time report. Create the Product Hunt product page. Record the 60 s video. |
| T-7 | Line up 15 to 20 people who agreed to try it and comment honestly (the seven reviewers, workspace members, LinkedIn contacts). Do not ask for upvotes. |
| T-3 | Schedule the PH launch for a Tuesday or Wednesday, 12:01 am PT. Draft the Show HN for the same day at 8 am PT. |
| T-1 | Test the install flow from a fresh Chrome profile. Check the CWS listing text matches `listing-copy.md`. |
| Launch day | Post the first comment on PH immediately. Post Show HN. Reply to every comment within an hour for 12 hours. LinkedIn post at 9 am local. |
| T+1 to T+7 | Reply to late comments. Add "Featured on Product Hunt" to the screenshots page only if it placed top 5. Email everyone who commented with a thank you and a link to the report. |

## Product Hunt
**Name:** Recordio Screenshots
**Tagline (60 max):** Full-page screenshots, annotated and shared from Chrome
**Description (260 max):** Capture the visible area, the full page or a region from a Chrome extension, annotate with arrows, text and blur, then copy, download as PNG or PDF or share a link. It lives in the same library as your Recordio walkthrough recordings. Free to start.
**Topics:** Chrome Extensions, Productivity, Design Tools, Screenshots
**First comment (maker):**
> Hi everyone, I'm John, the founder. We built Recordio as a screen recorder for product walkthroughs, and we kept opening a second extension for screenshots. So we built capture and annotation into the same extension and library.
>
> What it does: visible area, full page (it scrolls and stitches, and hides sticky headers), or a region. Annotate with text, arrows, shapes and blur. Blur is baked into the shared image, so it really hides content. Copy to clipboard, download PNG or PDF, or share a link.
>
> Honest limits: it is a Chrome extension (also Edge and Brave), it needs a free account, and the free plan caps the number of live screenshots at [CONFIRM CAP]. Recording walkthroughs is the main product, and screenshots are free for everyone.
>
> I'd love to hear what you use today and what would make you switch.

## Show HN
**Title:** Show HN: Recordio – Chrome screen recorder that reads the DOM to auto-zoom on what you click
(HN readers care about the mechanism, so lead with the DOM-aware zoom rather than screenshots. Link to the homepage, mention screenshots in the text.)
**Text:**
> I built Recordio because every walkthrough I recorded with cursor-following zoom clipped the input I was typing into. Recordio's extension reads the page DOM during recording, so a zoom frames the input, card or menu you are interacting with, and every zoom is an editable keyframe afterwards.
>
> Other things it does: spotlight the element you click, hide your bookmarks and tabs behind a simplified toolbar, cut silence while keeping typing pauses, generate captions with word-level timing, and share a link with watch analytics. It also does full-page screenshots with annotation now.
>
> Constraints, stated plainly: Chrome, Edge and Brave only (no Firefox, no native desktop app yet), it needs an account, rendering on the free plan happens in the browser, and Pro is per seat.
>
> Free plan: https://recordio.io. Happy to answer questions about the DOM approach, the browser rendering pipeline, or anything else.

## Five honest comparison points (use in comments and the launch post)
1. **Versus Loom:** Loom has native desktop apps, a large install base and Atlassian integrations. Recordio's zoom and spotlight are automatic and DOM-aware; Loom's video is a plain recording. Loom's paid plan starts higher per seat (check loom.com/pricing on the day).
2. **Versus Screen Studio:** Screen Studio makes very polished cursor-driven recordings on macOS and its editor is deeper. Recordio runs on any OS with Chrome, is per seat rather than per license, and adds share links with analytics and a team library.
3. **Versus GoFullPage / Awesome Screenshot:** they are mature screenshot tools with more capture options. Recordio's advantage is one extension and one library for recordings and screenshots, and blur that is flattened into the shared image.
4. **Versus OBS:** OBS is free, open source and records anything on the desktop. Recordio only records browser tabs and requires an account, but needs no setup and produces a finished walkthrough without editing.
5. **Versus Tella:** Tella has great templates and a native Mac app. Recordio's automatic zoom does not need manual layout work and the Free plan includes 1080p downloads.

## 60-second video (shot list)
| Time | Shot | Voice-over |
|---|---|---|
| 0-6 s | Chrome, click the Recordio icon, choose "Full page" | "Take a full-page screenshot from Chrome." |
| 6-14 s | Page scrolls and stitches, sticky header stays out | "It scrolls, stitches and drops the sticky header." |
| 14-28 s | Web app annotation: arrow, text, blur over an email | "Annotate with arrows and text. Blur anything sensitive." |
| 28-38 s | Copy, PNG, PDF buttons, then Share link, open link in new tab | "Copy it, download PNG or PDF, or share a link." |
| 38-50 s | Library with screenshots next to a walkthrough recording, click a recording, auto zoom plays | "It lives next to your walkthrough recordings, which zoom on their own." |
| 50-60 s | Logo, "Free to start, recordio.io" | "Free to start at recordio.io." |
Record it with Recordio itself, 1080p, captions on, MacBook frame, no music under the voice.

## Assets checklist
- [ ] Six screenshots from `listing-copy.md`
- [ ] 60 s video (MP4 for PH, YouTube upload for the page embed via `VideoEmbed`)
- [ ] 240x240 PH thumbnail (animated GIF of the zoom is fine)
- [ ] OG image for `/screenshots/`
- [ ] Free cap number confirmed and written into the FAQ and first comment
