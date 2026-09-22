# Outreach templates and cadence (Plan 12, items 3, 6, 7, 8)

All emails come from john@recordio.io, plain text, no tracking pixels. Personalise the first line every time. Never ask for an upvote or a rating number; ask for an honest review.

## Item 8: reviews from the seven homepage reviewers (send this week)
Recipients (from `src/components/Testimonials.tsx`): Jai Toor (Deepline), Safa Jebri (Apple), Hussam Abu-Libdeh (Google), Tuan T. (Meta), Nourhan Shaaban (Mash), Antoine Rahimi (Chorah Labs), Arvin Ahmadi (Jolt).

Subject: A two-minute favour for Recordio

> Hi [first name],
>
> Your quote is on the Recordio homepage and it still does a lot of work for us, thank you.
>
> I'm listing Recordio on G2 and refreshing the Chrome Web Store page, and reviews there are what people read before installing. If you have two minutes, would you write a short honest review in one of these places?
>
> Chrome Web Store: https://chromewebstore.google.com/detail/recordio-beautiful-screen/bbcdpipjplklaneplfmlhhibnllhinii/reviews
> G2: [link once the profile is live]
>
> Anything true is useful, including what you would change. And if it's a no, no problem at all.
>
> John

Track: date sent, reply, review live (yes/no), which site.

## Item 3: founder distribution

### LinkedIn, two posts a week (Tuesday and Thursday, 9 am local)
Each post embeds a real walkthrough recorded with Recordio (upload the MP4 natively; do not link YouTube in the post body). Four drafts to start:

1. **The clipped-input problem.** "Every screen recorder I tried zoomed on the cursor and cut off the field I was typing in. Here is what a zoom that reads the page looks like." Video: 20 s of a form fill with auto zoom. No link in the body; link in the first comment.
2. **Watch-time findings.** Once the report is live: the retention curve image and the three findings in plain sentences. Link to the report in the first comment.
3. **How we record a release walkthrough in 10 minutes.** Steps: script three bullets, record the tab, let AutoCut trim, captions on, share link in the release note. Video: the finished walkthrough.
4. **What Loom does better than us.** One honest paragraph on Loom's desktop apps and integrations, then the two things Recordio does that Loom does not. Link to `/compare/loom/` in the first comment. Honest posts get shared.

Rules: one idea per post, under 150 words, no hashtags beyond two, reply to every comment the same day.

### Reddit and forums, answer threads only
Subreddits: r/linux, r/chromeos, r/productmanagement, r/SaaS, r/webdev, r/Ubuntu, r/chrome. Search weekly for "screen recorder", "record my screen", "Loom alternative", "demo video".

- Answer the question first with the built-in option (GNOME recorder, ChromeOS capture, QuickTime) and OBS where relevant.
- Mention Recordio only when the asker wants a polished walkthrough, a share link, or captions, and say you built it.
- Link only when it is the direct answer; otherwise no link.
- Never post in a thread you would not have answered without a product to mention.
- Keep a log of URL, date and whether a link was included. If a mod removes a comment, do not repost.

## Item 6: guest posts and podcasts (three pitches a month)
Angle: walkthroughs, not the tool. Working titles that fit product-management and dev-tools audiences:
- "The 90-second walkthrough: why async product updates get watched or ignored" (uses the report data)
- "How to write a release note people actually read (record it)"
- "What 8 months of recording onboarding videos taught a two-person team"

Targets to research and verify before pitching (do not pitch blind): Lenny's Newsletter (guest pieces are rare; comment and reply first), Mind the Product, Department of Product, The Beautiful Mess, Product Talk, Console (dev tools), Bytes, Software Engineering Daily, The Product Experience podcast, Product Thinking podcast, Indie Hackers. Add three new targets each month from the "similar newsletters" links on the last one that said yes.

Subject: A data-backed piece on why product walkthroughs get abandoned

> Hi [name],
>
> I run Recordio, a screen recorder used by product teams for walkthroughs. We looked at [N] walkthroughs shared through the product and measured where viewers leave. The short version: [one finding with a number].
>
> I'd like to write an 800-word piece for [publication] on what makes a walkthrough get finished, with the charts, and no product pitch beyond the byline. Here is the research: [link].
>
> Happy to send a draft or adjust the angle to your readers.
>
> John Mikhail

Podcast variant: replace the second paragraph with "I'd be glad to come on for 25 minutes on async product communication and what the data says about attention. I've done [previous talk or post] before."

## Item 7: partnerships (one pitch a week)
Targets: SaaS onboarding tools (Appcues, Userpilot, Chameleon, Userflow), documentation platforms (GitBook, Archbee, Document360, Mintlify), support desks (Help Scout, Crisp, Intercom app partners), release-note tools (Beamer, LaunchNotes, Headway), changelog and feedback tools (Canny, Featurebase). Their users all record walkthroughs.

Subject: A co-written how-to for [their product] users

> Hi [name],
>
> [Their product] users write onboarding and release content; many of them add a short walkthrough video. I run Recordio, a screen recorder for exactly that.
>
> I'd like to co-write "How to add a walkthrough video to your [their product] [onboarding flow / docs / release note]" for your blog or help centre, with screenshots and a short video, and we publish the mirror piece on our side linking to yours. No cost, no affiliate terms, just a useful guide with a link each way.
>
> If that's interesting I can send an outline this week.
>
> John Mikhail, Recordio

Track: company, contact, date, status, link live, referral sessions after 30 days.

## Weekly cadence summary
| Day | Task | Time |
|---|---|---|
| Mon | Measurement routine (`measurement.md`); scan Reddit threads | 30 min |
| Tue | LinkedIn post 1 | 20 min |
| Wed | One partnership pitch; one guest or podcast pitch | 40 min |
| Thu | LinkedIn post 2; reply to threads | 30 min |
| Fri | Follow up on pitches older than 7 days; update the tracking sheet | 20 min |
