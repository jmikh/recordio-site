import type { Competitor } from './types';

// Loom prices checked 2026-09-22 at loom.com/pricing. Starter is free with 25 videos per
// person and a 5-minute cap per recording. Business is $18 per user per month billed
// monthly or $15 billed annually. Business + AI is $24 monthly or $20 annually.
// Enterprise is custom. Viewing a Loom link is free; only creators pay.
export const loom: Competitor = {
    slug: 'loom',
    name: 'Loom',
    title: 'Loom Alternative for Product Walkthroughs | Recordio',
    description:
        'Loom records your screen as-is. Recordio adds auto zoom, spotlight, AutoCut and captions to every walkthrough, plus share links and a team library.',
    verdict:
        'Loom is the default for quick async video, and it records your screen exactly as it is. Recordio is for product walkthroughs that should look finished: it zooms and spotlights what you interact with, cuts the silence, and shares a link with view analytics from $12 per seat.',
    chooseThem: [
        'You send short updates from a phone or a desktop app, not from a browser, and polish does not matter. If it does, [Tella](/compare/tella/) is the other option to weigh.',
        'Your company already runs on Atlassian and you want Loom videos turning into Jira work items and Confluence pages.',
        'You need comments, emoji reactions and calls to action on the video page itself, and you are happy paying $15 to $20 per creator.',
    ],
    chooseRecordio: [
        'Your videos show a web app to customers, prospects or new hires, and a raw full-screen capture undersells the product you built.',
        'You want auto zoom, spotlight, a clean toolbar, silence removal and captions applied for you, with every zoom still editable.',
        'You want a free plan that is not a 5-minute trial, and Pro at $12 per seat with free viewers and a shared team library.',
    ],
    whatTheyDoWell: [
        {
            heading: 'Async collaboration on the video page',
            body: 'Loom built the workflow everyone copies: a link that opens instantly, timestamped comments, emoji reactions, calls to action and viewer insights. For a manager sending a two-minute update to twelve people, that page is the product, and it is very good.',
        },
        {
            heading: 'Apps for every device',
            body: 'Loom has desktop apps for Mac and Windows, a Chrome extension and iOS and Android apps. You can record a native desktop tool, a phone screen or yourself on camera anywhere. Recordio records in the browser, which is the right scope for web app walkthroughs and the wrong one for everything else, so keep that in mind if half your videos are of native tools.',
        },
        {
            heading: 'Atlassian integrations and AI writing',
            body: 'Since the Atlassian acquisition, Loom turns a bug report video into a Jira work item with device, browser and console details attached, and Loom AI writes titles, summaries and chapters. If your team lives in Jira and Confluence, that is real time saved.',
        },
    ],
    differences: [
        {
            heading: 'Zoom that reads the page, not the cursor',
            body: 'A Loom recording is your full screen at full size, so a form field on a 27-inch monitor is a few pixels in the final video. Recordio reads the page DOM while you record and zooms into the input, card or menu you are using, without clipping it. Each zoom is a keyframe you can drag or delete, and the auto spotlight lifts the element you click so the viewer looks where you look.',
            media: { video: 'zoom.webm', alt: 'Recordio auto zoom framing a form field during a web app walkthrough' },
        },
        {
            heading: 'Dead air gone, captions written',
            body: 'Loom AI trims filler words on its AI plan. Recordio\'s AutoCut removes every silent gap on every plan while keeping the pauses where you are typing or scrolling, so the pacing still feels human. Pro adds captions with word-level timing; edit a word, or delete a caption line to cut that part of the video.',
            media: { video: 'autocut.webm', alt: 'Recordio AutoCut removing silence from a recording' },
        },
        {
            heading: 'A demo that looks like a product video',
            body: 'Recordio replaces your browser toolbar with a clean bar showing only the page title, so 40 open tabs and a bookmarks bar never appear. Add a background, a MacBook frame and a webcam bubble, and a walkthrough recorded in five minutes looks like something marketing made. Loom offers custom backgrounds; the rest is a screen recording. Blur a region if the page shows customer data, and pick a track from the music library for a demo that goes on a landing page.',
            media: { video: 'backgrounds.webm', alt: 'Recordio recording with a gradient background and device frame' },
        },
        {
            heading: 'Priced for the people who record',
            body: 'Loom Business is $15 per user per month billed annually, or $20 with AI features. Recordio Pro is $12 per seat, includes captions and cloud rendering, and only the people who record need a seat. Viewers are free and unlimited. Every walkthrough lands in a team library with roles, so [product, sales and support](/blog/best-loom-alternatives-2026/) share one source of truth instead of scattered links. It runs in Chrome, Edge or Brave on [Windows](/for/windows/), Mac and [Linux](/for/linux/), so the whole team uses one account.',
            media: { video: 'after.webm', alt: 'A finished Recordio walkthrough ready to share' },
        },
    ],
    table: [
        { feature: 'Auto zoom', description: 'Frames the element you interact with; each zoom is an editable keyframe', recordio: 'DOM-aware, editable', competitor: 'Cursor-based, on the AI plan' },
        { feature: 'Auto spotlight', description: '3D elevation of the element you click', recordio: true, competitor: false },
        { feature: 'Smart AutoCut', description: 'Removes silence, keeps typing and clicking pauses', recordio: 'All plans', competitor: 'Filler and silence removal on Business + AI' },
        { feature: 'Simplified toolbar', description: 'Hides bookmarks, tabs and extensions', recordio: true, competitor: false },
        { feature: 'Blur sensitive regions', recordio: true, competitor: false },
        { feature: 'Webcam', recordio: 'Webcam bubble', competitor: 'Webcam bubble' },
        { feature: 'Device frames', description: 'MacBook Pro and Air frames', recordio: true, competitor: false },
        { feature: 'AI captions', recordio: 'Word-level, editable (Pro)', competitor: '50+ languages' },
        { feature: 'Export resolutions', recordio: '1080p free, up to 4K on Pro', competitor: 'Up to 4K on paid plans' },
        { feature: 'Cloud rendering', recordio: 'Pro (browser rendering on Free)', competitor: true },
        { feature: 'Share links with view analytics', recordio: 'Pro', competitor: 'All plans' },
        { feature: 'Team workspace and roles', recordio: 'Pro', competitor: 'Business and up' },
        { feature: 'Unlimited viewer seats', recordio: 'Pro', competitor: 'Viewing is free' },
        { feature: 'Screenshots', description: 'Full page or region, with annotation', recordio: true, competitor: false },
        { feature: 'Platforms', recordio: 'Chrome, Edge, Brave on Mac, Windows, Linux, ChromeOS', competitor: 'Mac, Windows, Chrome, iOS, Android' },
        { feature: 'Free plan', recordio: '5 active projects, 1080p, no watermark', competitor: '25 videos, 5 minutes each' },
        { feature: 'Price', recordio: 'Free, or Pro $12 per seat per month billed annually', competitor: '$15 to $20 per user per month billed annually' },
    ],
    pricing: {
        competitorMonthly: '$18 per user per month (Business), $24 with AI',
        competitorAnnual: '$15 per user per month (Business), $20 with AI',
        competitorFree: 'Starter: 25 videos per person, 5 minutes each',
        competitorTeamOfFive: '5 x $15 = $75 per month, $900 per year on Business. With AI: 5 x $20 = $100 per month, $1,200 per year.',
        competitorViewers: 'Free. Loom charges per creator; watching a link costs nothing.',
        notes: 'Both tools charge for the people who record and let anyone watch for free. The gap is what a seat includes: Recordio Pro bundles captions, 4K, cloud rendering and the team library at $12, while Loom keeps AI editing and captions on the $20 tier. Loom\'s free plan caps each video at 5 minutes; Recordio\'s free plan caps active projects at 5 and expires videos after 7 days.',
        checkedOn: '2026-09-22',
    },
    faq: [
        {
            question: 'Is Recordio a free Loom alternative?',
            answer: 'Yes. Recordio\'s free plan has no card, no watermark and no 5-minute cap. It includes auto zoom, spotlight, AutoCut and 1080p downloads for up to 5 active projects, with videos expiring after 7 days. Pro is $12 per seat per month billed annually.',
        },
        {
            question: 'Does Recordio have share links like Loom?',
            answer: 'Yes, on Pro. Every recording gets a public watch page and a link with view counts and watch time. On the free plan you download the video and share the file.',
        },
        {
            question: 'Can Recordio record my desktop and other apps like Loom does?',
            answer: 'Recordio is a Chrome extension with a web app, so it records what you do in the browser. That is where product walkthroughs of web apps happen, and where its DOM-aware zoom works. For native desktop apps or phone screens, Loom is the better fit.',
        },
        {
            question: 'How do I move my team from Loom to Recordio?',
            answer: 'Install the extension, create a workspace and invite the people who record; everyone else watches links for free. Recordio does not import your Loom library, so keep Loom on the free Starter plan for old videos while new walkthroughs go into the Recordio team library. Most teams run both for a month, then let the Loom seats lapse at renewal.',
        },
        {
            question: 'Does Recordio work on Windows and Linux?',
            answer: 'Yes. Recordio runs in Chrome, Edge or Brave on Windows, macOS, Linux and ChromeOS. There is nothing to install beyond the extension, and every recording lands in the same web app.',
        },
    ],
    related: {
        compare: ['tella', 'clueso', 'screencastify'],
        post: '/blog/best-loom-alternatives-2026/',
        platform: '/for/chrome/',
    },
    updated: '2026-09-22',
};
