import type { Competitor } from './types';

// Bandicam prices checked 2026-09-22 at bandicam.com/buy/ and bandicam.com/faqs/license-plans/.
// Personal annual lists at $36.95 per PC per year ($33.26 on sale that day), Personal
// perpetual lists at $77 ($53.90 on sale), Business annual lists at $65.95 per PC. The
// free version watermarks recordings and caps each at 10 minutes. Bandicam now ships a
// macOS build alongside Windows.
export const bandicam: Competitor = {
    slug: 'bandicam',
    name: 'Bandicam',
    title: 'Bandicam Alternative for Mac, Linux and Teams | Recordio',
    description:
        'Bandicam records games and desktop apps to a file. Recordio records web app walkthroughs in Chrome on any OS, polishes them for you and shares a link.',
    verdict:
        'Bandicam is a desktop recorder for games and Windows or Mac software that saves a file to disk. Recordio runs in Chrome on any OS, polishes product walkthroughs automatically and shares them as a link with view analytics.',
    chooseThem: [
        'You record games or desktop software that does not run in a browser. Bandicam hooks into DirectX, OpenGL and Vulkan; Recordio does not.',
        'You want a raw MP4 or AVI on disk to edit elsewhere, or to keep as-is, and nobody needs a share link or a view count.',
        'You work alone on one PC and would rather pay once for a perpetual licence than pay per seat.',
    ],
    chooseRecordio: [
        'Your recordings are product walkthroughs, demos or async updates of a web app, and they should look finished without a timeline. See [Recordio vs Camtasia](/compare/camtasia/) if you were about to buy an editor for that.',
        'You want zoom, spotlight, a clean browser toolbar and captions applied for you, with every zoom still editable.',
        'Your team needs one shared library and links with view counts, not video files passed around in chat, and new hires should find last quarter\'s walkthroughs without asking.',
    ],
    whatTheyDoWell: [
        {
            heading: 'Game and full-screen capture',
            body: 'Bandicam started as a game recorder and it still shows. Game mode attaches to DirectX, OpenGL and Vulkan applications, records at high frame rates with hardware encoding and overlays an FPS counter. If you record gameplay, a 3D tool or any native desktop app, Bandicam is the right kind of software and Recordio is not.',
        },
        {
            heading: 'Device recording',
            body: 'Bandicam captures external sources: webcams, capture cards, consoles over HDMI and other devices. A browser extension cannot see those inputs. If your walkthroughs involve hardware rather than software, this alone decides it, and no browser-based tool will change that.',
        },
        {
            heading: 'A one-time licence',
            body: 'A Personal perpetual licence lists at $77 per PC and covers the current major version for good. For an individual who records occasionally on one machine and never needs to share online, that is cheap, and cheaper than any subscription over a few years. Business use needs the separate Business licence, which is annual.',
        },
    ],
    differences: [
        {
            heading: 'Finished output, not raw footage',
            body: 'Bandicam gives you exactly the pixels on screen. Recordio reads the page DOM while you record, so it zooms into the input, card or menu you are using and never clips the edge of a form. Every zoom becomes a keyframe you can move or delete, and a 3D spotlight lifts the element you click. This is the difference between a screen capture and a [product walkthrough](/blog/best-screen-recorders-2026/) you would send to a customer. Bandicam users usually fix this in a separate editor, one zoom at a time; Recordio users open the editor only when they want to change something.',
            media: { video: 'zoom.webm', alt: 'Recordio auto zoom framing a form field during a recording' },
        },
        {
            heading: 'A link with analytics, not a file in a folder',
            body: 'Bandicam writes an MP4 or AVI to disk; getting it to a colleague means uploading it somewhere. Recordio renders the video in the cloud on Pro and gives you a share link with view counts and watch time, plus a team library where sales, support and product can find every walkthrough. Downloads are still there at 1080p on Free and 4K on Pro, so nothing stops you from dropping the file into a deck or a knowledge base as well.',
            media: { video: 'after.webm', alt: 'A finished Recordio walkthrough with device frame and background' },
        },
        {
            heading: 'Silence cut and captions written for you',
            body: 'Bandicam has no editor; its companion Bandicut is a separate purchase. Recordio\'s AutoCut removes the dead air between sentences while keeping the pauses where you are typing or clicking, and Pro adds AI captions with word-level timing. Delete a caption line and that segment of the video is cut too. For a five-minute walkthrough, that usually means a minute less video and no time in an editor.',
            media: { video: 'captions.webm', alt: 'Editable AI captions on a Recordio recording' },
        },
        {
            heading: 'Runs where your whole team already works',
            body: 'Bandicam runs on Windows and, more recently, macOS. Recordio is a Chrome extension with a web app, so it works on [Windows](/for/windows/), [Mac](/for/mac/), [Linux](/for/linux/) and ChromeOS, and a designer on a MacBook and an engineer on Ubuntu share one library. The simplified toolbar hides your bookmarks, tabs and extensions from every recording, so nobody has to clean up their browser before pressing record.',
            media: { video: 'toolbar.webm', alt: 'Recordio replacing a cluttered browser toolbar with a clean one' },
        },
    ],
    table: [
        { feature: 'Auto zoom', description: 'Frames the element you interact with; each zoom is an editable keyframe', recordio: 'DOM-aware, editable', competitor: false },
        { feature: 'Auto spotlight', description: '3D elevation of the element you click', recordio: true, competitor: false },
        { feature: 'Smart AutoCut', description: 'Removes silence, keeps typing and clicking pauses', recordio: true, competitor: false },
        { feature: 'Simplified toolbar', description: 'Hides bookmarks, tabs and extensions', recordio: true, competitor: false },
        { feature: 'Blur sensitive regions', recordio: true, competitor: false },
        { feature: 'Webcam', recordio: 'Webcam bubble', competitor: 'Webcam overlay' },
        { feature: 'Device frames', description: 'MacBook Pro and Air frames', recordio: true, competitor: false },
        { feature: 'AI captions', recordio: 'Word-level, editable (Pro)', competitor: false },
        { feature: 'Export resolutions', recordio: '1080p free, up to 4K on Pro', competitor: 'Up to 4K, watermarked on free' },
        { feature: 'Cloud rendering', recordio: 'Pro (browser rendering on Free)', competitor: 'Local only' },
        { feature: 'Share links with view analytics', recordio: 'Pro', competitor: false },
        { feature: 'Team workspace and roles', recordio: 'Pro', competitor: false },
        { feature: 'Unlimited viewer seats', recordio: 'Pro', competitor: 'Not applicable' },
        { feature: 'Screenshots', description: 'Full page or region, with annotation', recordio: true, competitor: 'Screen area only' },
        { feature: 'Game and device capture', recordio: false, competitor: 'DirectX, OpenGL, Vulkan, HDMI' },
        { feature: 'Platforms', recordio: 'Chrome, Edge, Brave on Mac, Windows, Linux, ChromeOS', competitor: 'Windows and macOS apps' },
        { feature: 'Free plan', recordio: '5 active projects, 1080p, no watermark', competitor: 'Watermark, 10-minute cap' },
        { feature: 'Price', recordio: 'Free, or Pro $12 per seat per month billed annually', competitor: 'From $36.95 per PC per year, or $77 perpetual' },
    ],
    pricing: {
        competitorMonthly: 'No monthly plan',
        competitorAnnual: '$36.95 per PC per year (Personal, non-commercial)',
        competitorFree: 'Free version with a watermark and a 10-minute cap on each recording',
        competitorTeamOfFive: 'Commercial use needs the Business licence: 5 PCs x $65.95 = $329.75 per year, about $27 per month. Personal licences are non-commercial.',
        competitorViewers: 'Not applicable. Bandicam makes files; sharing and hosting are up to you.',
        notes: 'Bandicam licences are per PC, not per person, and Personal licences cannot be used for work. The Business annual price above is the list price; Bandicam runs frequent sales. Recordio charges per person who records, and everyone who only watches is free.',
        checkedOn: '2026-09-22',
    },
    faq: [
        {
            question: 'Is Recordio a Bandicam alternative for Mac?',
            answer: 'Yes. Bandicam added a macOS version, but Recordio runs in Chrome, Edge or Brave on macOS, Windows, Linux and ChromeOS from a single account, so a mixed team uses one tool and one library.',
        },
        {
            question: 'Can Recordio record games like Bandicam?',
            answer: 'No. Recordio records what happens in the browser and is built for product walkthroughs of web apps. For gameplay, native desktop software or capture cards, keep Bandicam or use OBS, which is free and runs on Linux too.',
        },
        {
            question: 'Does Recordio put a watermark on free recordings?',
            answer: 'No. The free plan downloads clean 1080p video, includes auto zoom, spotlight and AutoCut, and allows up to 5 active projects. Videos on the free plan expire after 7 days. Pro removes the project limit and the expiry, adds 4K exports and cloud rendering, and keeps deleted videos restorable for 30 days.',
        },
        {
            question: 'Do I still get a video file with Recordio?',
            answer: 'Yes. Every recording can be downloaded as an MP4 at 1080p on Free or up to 4K on Pro. Pro also gives you a share link with view analytics so you do not have to send the file at all.',
        },
        {
            question: 'Do I need an account to use Recordio?',
            answer: 'Yes. Recordio is cloud-based, so you install the extension and sign in with a free account. Your recordings, edits and team library live in the web app at app.recordio.io, which is also where you invite teammates and set roles.',
        },
    ],
    related: {
        compare: ['obs', 'camtasia', 'screen-studio'],
        post: '/blog/best-bandicam-alternatives-2026/',
        platform: '/for/windows/',
    },
    updated: '2026-09-22',
};
