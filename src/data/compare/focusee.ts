import type { Competitor } from './types';

// FocuSee prices checked 2026-09-22 at focusee.imobie.com/pricing.htm. Standard is $49.99 per
// year or $24.99 per month for 1 computer, with AI features on separately purchased credits.
// Advanced is $79.99 per year or $29.99 per month for 3 computers with 3,600 AI credits a year.
// Advanced Lifetime is $199.99 one-time (list $719.99) for 5 computers and covers FocuSee 2.x
// only. The free trial exports one video at up to 4K. Money-back: 60 days on yearly and
// lifetime, 7 days on monthly. Licences are per computer, not per person.
export const focusee: Competitor = {
    slug: 'focusee',
    name: 'FocuSee',
    title: 'FocuSee Alternative for Browser Recording | Recordio',
    description:
        'FocuSee is a per-computer desktop app for Mac and Windows. Recordio records web app walkthroughs in Chrome on any OS, with DOM-aware zoom and share links.',
    verdict:
        'FocuSee is a desktop recorder for Mac and Windows that zooms by following your cursor and is licensed per computer. Recordio runs in Chrome on any OS, zooms by reading the page itself and shares walkthroughs as a link with view analytics and a team library.',
    chooseThem: [
        'You record on one or two fixed machines, alone or with a couple of colleagues, and want to pay once. Advanced Lifetime is $199.99 for 5 computers on FocuSee 2.x.',
        'You record outside the browser: native desktop apps, terminals, design tools. FocuSee captures the whole screen or any window; Recordio records in Chrome.',
        'You want to work offline with a local editor, export files to your own storage, and nobody needs a share link or a view count.',
    ],
    chooseRecordio: [
        'Your recordings are walkthroughs of a web app and you want zoom that frames the input, card or menu you are using rather than a circle around the cursor.',
        'Your team is spread across Mac, Windows, Linux and ChromeOS and needs one library, roles and share links with view counts, not exported files in a chat thread.',
        'You want captions, silence removal and a clean browser toolbar applied for you, with every zoom still editable as a keyframe.',
    ],
    whatTheyDoWell: [
        {
            heading: 'A real trial and a low one-time price',
            body: 'The free trial lets you export one finished video at up to 4K, so you can judge the output before paying. Advanced Lifetime is $199.99 for 5 computers and covers every FocuSee 2.x release. For a small team that records on fixed machines and never needs to share online, that is cheap, and cheaper than most subscriptions after the second year. The catch is that the next major version costs extra.',
        },
        {
            heading: 'Cursor effects and backgrounds out of the box',
            body: 'FocuSee follows your cursor to zoom, highlights clicks and drops the recording onto a background with padding and shadow. A webcam overlay and a GIF export are included. For a desktop app that records anything on screen, that is a lot of polish for very little work, and it is why FocuSee sits ahead of plain capture tools like [Bandicam](/compare/bandicam/).',
        },
        {
            heading: 'Runs offline on Mac and Windows',
            body: 'Recording, editing and export happen on your machine. Only the AI features draw on credits. If you record on a plane, in a locked-down office or on a network you do not trust, FocuSee works where a browser-based recorder does not. Recordio needs a connection and a signed-in account.',
        },
    ],
    differences: [
        {
            heading: 'Zoom that reads the page, not the cursor',
            body: 'FocuSee zooms toward wherever the pointer goes, which means it also zooms when you drift across empty space or park the cursor while you talk. Recordio reads the page DOM while you record, so it frames the input, card or menu you actually use and never clips the edge of a form. Every zoom becomes a keyframe you can move, resize or delete. That is the difference between a cursor effect and a [product walkthrough](/blog/best-screen-recorders-2026/) that follows the story of the page.',
            media: { video: 'zoom.webm', alt: 'Recordio auto zoom framing a form field, driven by the page rather than the cursor' },
        },
        {
            heading: 'A 3D spotlight and a browser that looks clean',
            body: 'FocuSee highlights a click with a ring around the cursor. Recordio lifts the element you interact with in 3D, so a button or menu item stands off the page while the rest dims. The simplified toolbar replaces your bookmarks bar, tab strip and extension icons with a clean frame, so nobody has to tidy their browser or open a fresh profile before pressing record. Both are applied while you record, and the spotlight sits on the same editable keyframes as the zoom.',
            media: { video: 'spotlight.webm', alt: 'Recordio 3D spotlight lifting a button on a web page' },
        },
        {
            heading: 'Silence cut and captions without buying credits',
            body: 'FocuSee\'s AI captions use credits: Standard buyers purchase them separately and Advanced includes 3,600 a year. Recordio Pro includes AI captions with word-level timing at no extra cost, and deleting a caption line cuts that segment of the video too. AutoCut removes the dead air between sentences while keeping the pauses where you are typing or clicking. For a five-minute walkthrough that is usually a minute less video and no time in an editor.',
            media: { video: 'captions.webm', alt: 'Editable word-level AI captions on a Recordio recording' },
        },
        {
            heading: 'Per person on any OS, with a link at the end',
            body: 'FocuSee counts computers: 1 on Standard, 3 on Advanced, 5 on Lifetime, and a new laptop means a licence reshuffle. Recordio counts people. Sign in from Chrome, Edge or Brave on [Windows](/for/windows/), [Mac](/for/mac/), [Linux](/for/linux/) or ChromeOS and every recording lands in the same team library. Pro renders in the cloud and gives you a share link with view counts and watch time, and everyone who only watches is free. Downloads are still there at 1080p on Free and 4K on Pro.',
            media: { video: 'after.webm', alt: 'A finished Recordio walkthrough ready to share as a link' },
        },
    ],
    table: [
        { feature: 'Auto zoom', description: 'Frames the element you interact with; each zoom is an editable keyframe', recordio: 'DOM-aware, editable', competitor: 'Cursor-tracking' },
        { feature: 'Auto spotlight', description: '3D elevation of the element you click', recordio: true, competitor: 'Click highlight around the cursor' },
        { feature: 'Smart AutoCut', description: 'Removes silence, keeps typing and clicking pauses', recordio: true, competitor: false },
        { feature: 'Simplified toolbar', description: 'Hides bookmarks, tabs and extensions', recordio: true, competitor: false },
        { feature: 'Blur sensitive regions', recordio: true, competitor: false },
        { feature: 'Webcam', recordio: 'Webcam bubble', competitor: 'Webcam overlay' },
        { feature: 'Device frames', description: 'MacBook Pro and Air frames', recordio: true, competitor: 'Backgrounds with padding and shadow' },
        { feature: 'AI captions', recordio: 'Word-level, editable (Pro)', competitor: 'Uses paid AI credits' },
        { feature: 'Export resolutions', recordio: '1080p free, up to 4K on Pro', competitor: 'Up to 4K, plus GIF' },
        { feature: 'Cloud rendering', recordio: 'Pro (browser rendering on Free)', competitor: 'Local only' },
        { feature: 'Share links with view analytics', recordio: 'Pro', competitor: false },
        { feature: 'Team workspace and roles', recordio: 'Pro', competitor: false },
        { feature: 'Unlimited viewer seats', recordio: 'Pro', competitor: 'Not applicable' },
        { feature: 'Screenshots', description: 'Full page or region, with annotation', recordio: true, competitor: false },
        { feature: 'Licence model', recordio: 'Per person who records', competitor: 'Per computer: 1, 3 or 5' },
        { feature: 'Platforms', recordio: 'Chrome, Edge, Brave on Mac, Windows, Linux, ChromeOS', competitor: 'Mac and Windows apps' },
        { feature: 'Free plan', recordio: '5 active projects, 1080p, no watermark', competitor: 'Trial exports one video, up to 4K' },
        { feature: 'Price', recordio: 'Free, or Pro $12 per seat per month billed annually', competitor: 'From $49.99 per computer per year, or $199.99 lifetime for 5 computers' },
    ],
    pricing: {
        competitorMonthly: '$24.99 per month for 1 computer (Standard) or $29.99 per month for 3 computers (Advanced)',
        competitorAnnual: '$49.99 per year for 1 computer (Standard) or $79.99 per year for 3 computers (Advanced)',
        competitorFree: 'Free trial that exports one video at up to 4K',
        competitorTeamOfFive: 'Two Advanced yearly plans cover 6 computers: 2 x $79.99 = $159.98 per year, about $13 per month. Or one Advanced Lifetime at $199.99 covers 5 computers for as long as you stay on FocuSee 2.x.',
        competitorViewers: 'Not applicable. FocuSee exports files; hosting and sharing are up to you.',
        notes: 'FocuSee licences count computers, not people. Standard needs separately purchased AI credits; Advanced includes 3,600 a year. The lifetime price is a sale price against a $719.99 list and covers version 2.x only; the next major version costs extra. Recordio charges per person who records, and everyone who only watches is free.',
        checkedOn: '2026-09-22',
    },
    faq: [
        {
            question: 'Is Recordio a FocuSee alternative for Linux or ChromeOS?',
            answer: 'Yes. FocuSee ships desktop apps for Mac and Windows only. Recordio is a Chrome extension with a web app, so it runs in Chrome, Edge or Brave on macOS, Windows, Linux and ChromeOS from one account. A designer on a MacBook and an engineer on Ubuntu record into the same team library.',
        },
        {
            question: 'How do I switch from FocuSee to Recordio?',
            answer: 'There is nothing to migrate. Videos you already exported from FocuSee stay as MP4 files wherever you saved them. Install the Recordio extension, sign in with a free account and record your next walkthrough in the browser. FocuSee project files cannot be imported, so finish any recording you are mid-way through in FocuSee first.',
        },
        {
            question: 'Is Recordio cheaper than FocuSee?',
            answer: 'It depends on the team. One person on one PC who never shares online pays FocuSee $199.99 once and is done for version 2.x. A team pays Recordio $12 per seat per month billed annually, gets a free plan for occasional recorders, and pays nothing for people who only watch. Over five seats that is $60 a month with links, roles and a shared library included.',
        },
        {
            question: 'Does Recordio zoom automatically like FocuSee?',
            answer: 'Yes, but differently. FocuSee tracks the cursor and zooms toward it. Recordio reads the page while you record and zooms into the input, card or menu you interact with, so the framing matches the element rather than the pointer. Every zoom is a keyframe you can adjust or remove in the editor at app.recordio.io.',
        },
        {
            question: 'Can I use Recordio offline or without signing in?',
            answer: 'No. Recordio is cloud-based, so you install the extension, sign in with a free account and record while connected. Recordings, edits and the team library live in the web app. If you must record with no connection, FocuSee or another desktop recorder is the better fit for that situation.',
        },
    ],
    related: {
        compare: ['screen-studio', 'clueso', 'bandicam'],
        post: '/blog/best-screen-recorders-2026/',
        platform: '/for/windows/',
    },
    updated: '2026-09-22',
};
