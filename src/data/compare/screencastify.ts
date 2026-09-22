import type { Competitor } from './types';

// Screencastify prices checked 2026-09-22 at screencastify.com/pricing.
// Free: $0, up to 10 videos, up to 30 minutes each, watermark on videos.
// Starter: $7 per user per month billed annually, or $19 billed monthly;
// 60-minute recordings, unlimited videos, basic editing.
// Pro: $10 per user per month billed annually, or $25 billed monthly;
// 180-minute recordings, AI captions, transcripts, translations, teleprompter.
// Enterprise and EDU plans are custom quoted.
export const screencastify: Competitor = {
    slug: 'screencastify',
    name: 'Screencastify',
    title: 'Screencastify Alternative With Auto Zoom | Recordio',
    description:
        'Screencastify records a plain capture from Chrome. Recordio is also a Chrome extension, but adds auto zoom, spotlight, AutoCut and captions to every video.',
    verdict:
        'Screencastify is a Chrome recorder built for classrooms, with Google Classroom and Drive integration, quizzes and student video submissions. Recordio is a Chrome recorder built for product walkthroughs: it zooms into what you interact with, cuts silence, adds captions and shares a link with view analytics.',
    chooseThem: [
        'You teach. Screencastify posts to Google Classroom, saves to Drive, collects student submissions and adds quizzes and polls to a video.',
        'You need a very long single take. Paid plans record 60 or 180 minutes in one go; Recordio is built for short walkthroughs.',
        'Your school or district already pays for an EDU licence and your admin manages it for you.',
    ],
    chooseRecordio: [
        'Your recordings are product demos, onboarding walkthroughs or async updates that should look finished without editing.',
        'You want auto zoom, spotlight, a clean browser toolbar and silence removal applied for you, with every zoom still editable.',
        'You want a free plan that downloads clean 1080p video with no watermark, and a Pro plan where people who only watch are free.',
    ],
    whatTheyDoWell: [
        {
            heading: 'The classroom workflow',
            body: 'Screencastify is built around Google Classroom and Google Drive. A teacher records a lesson, it lands in Drive, and it posts to a class in a click. Students can record and submit their own videos, and the editor adds quizzes, polls and video requests so a lesson becomes an assignment. Recordio has none of this, and does not try to. If your videos are lessons rather than product walkthroughs, Screencastify is the right choice.',
        },
        {
            heading: 'A recorder anyone can use',
            body: 'The extension asks three things: tab, desktop or webcam. There is almost nothing else to decide, which is why it has spread through schools where the people recording are not technical and the person supporting them is one IT admin for a whole district.',
        },
        {
            heading: 'Long recordings on paid plans',
            body: 'Starter records 60 minutes in one take and Pro records 180. That fits a full lecture or a recorded meeting. Recordio is tuned for the two-to-ten-minute walkthrough, where a long unedited take is the problem rather than the goal.',
        },
    ],
    differences: [
        {
            heading: 'Zoom into what you interact with',
            body: 'Screencastify records the tab exactly as it looks, so a form field on a 27-inch monitor becomes a few pixels in the finished video and the viewer squints. Recordio reads the page DOM while you record and zooms into the input, card or menu you are using, then lifts it with a 3D spotlight. The zoom is automatic, and every zoom is a keyframe you can move or delete in the web editor. Screencastify has trim, crop, text and blur, but no automatic zoom, so the same effect means placing every zoom by hand.',
            media: { video: 'zoom.webm', alt: 'Recordio auto zoom framing a form field during a Chrome recording, which Screencastify does not do' },
        },
        {
            heading: 'Silence cut and captions written for you',
            body: 'A raw Screencastify take keeps every pause while you find the next button. Recordio\'s Smart AutoCut removes the dead air between sentences and keeps the pauses where you are typing or clicking, so a five-minute walkthrough usually loses a minute without touching a timeline. Pro adds AI captions with word-level timing that you can edit, and deleting a caption line cuts that segment from the video. Screencastify Pro also offers AI captions and transcripts, but you still edit the video itself by hand.',
            media: { video: 'autocut.webm', alt: 'Recordio Smart AutoCut removing silent gaps while keeping typing pauses' },
        },
        {
            heading: 'A clean toolbar and a finished frame',
            body: 'Screencastify shows your real browser: bookmarks bar, twenty tabs, every extension icon. Recordio\'s simplified toolbar replaces all of that with a clean strip on every recording, so nobody has to tidy their browser before pressing record. Add a MacBook frame, a background and the webcam bubble, and the recording looks like a [product demo](/blog/best-screen-recorders-2026/) rather than a screen capture, on [Chrome](/for/chrome/) on [Windows](/for/windows/), Mac, Linux or a [Chromebook](/for/chromebook/).',
            media: { video: 'toolbar.webm', alt: 'Recordio replacing a cluttered browser toolbar with a clean one during recording' },
        },
        {
            heading: 'A free plan you can actually publish from',
            body: 'Screencastify\'s free plan caps you at 10 videos of 30 minutes and puts a watermark on each one. Recordio\'s free plan downloads clean 1080p video with auto zoom, spotlight and AutoCut included, allows 5 active projects, and videos expire after 7 days. Pro is $12 per seat per month billed annually and adds 4K, cloud rendering, share links with view counts and watch time, a team workspace with roles and a shared library, and unlimited free viewer seats. Compare that with [Loom](/compare/loom/), which also charges per creator.',
            media: { video: 'after.webm', alt: 'A finished Recordio walkthrough with device frame and background, downloaded without a watermark' },
        },
    ],
    table: [
        { feature: 'Auto zoom', description: 'Frames the element you interact with; each zoom is an editable keyframe', recordio: 'DOM-aware, editable', competitor: false },
        { feature: 'Auto spotlight', description: '3D elevation of the element you click', recordio: true, competitor: false },
        { feature: 'Smart AutoCut', description: 'Removes silence, keeps typing and clicking pauses', recordio: true, competitor: false },
        { feature: 'Simplified toolbar', description: 'Hides bookmarks, tabs and extensions', recordio: true, competitor: false },
        { feature: 'Blur sensitive regions', recordio: true, competitor: 'Blur in the editor' },
        { feature: 'Webcam', recordio: 'Webcam bubble', competitor: 'Webcam overlay or webcam-only' },
        { feature: 'Device frames', description: 'MacBook Pro and Air frames', recordio: true, competitor: false },
        { feature: 'AI captions', recordio: 'Word-level, editable (Pro)', competitor: 'Captions and transcripts (Pro)' },
        { feature: 'Export resolutions', recordio: '1080p free, up to 4K on Pro', competitor: 'MP4 download, watermarked on free' },
        { feature: 'Cloud rendering', recordio: 'Pro (browser rendering on Free)', competitor: 'Web-based editor' },
        { feature: 'Share links with view analytics', recordio: 'Pro', competitor: 'Share links' },
        { feature: 'Team workspace and roles', recordio: 'Pro', competitor: 'Enterprise and EDU' },
        { feature: 'Unlimited viewer seats', recordio: 'Pro', competitor: 'Viewers free via link' },
        { feature: 'Screenshots', description: 'Full page or region, with annotation', recordio: true, competitor: false },
        { feature: 'Google Classroom, quizzes, video requests', recordio: false, competitor: true },
        { feature: 'Platforms', recordio: 'Chrome, Edge, Brave on Mac, Windows, Linux, ChromeOS', competitor: 'Chrome extension and web editor' },
        { feature: 'Free plan', recordio: '5 active projects, 1080p, no watermark', competitor: '10 videos, 30 minutes each, watermark' },
        { feature: 'Price', recordio: 'Free, or Pro $12 per seat per month billed annually', competitor: 'Starter $7 or Pro $10 per user per month billed annually' },
    ],
    pricing: {
        competitorMonthly: 'Starter $19 or Pro $25 per user per month',
        competitorAnnual: 'Starter $7 or Pro $10 per user per month billed annually',
        competitorFree: 'Free plan: up to 10 videos, 30 minutes each, with a watermark',
        competitorTeamOfFive: 'Starter: 5 users x $7 = $35 per month, $420 per year. Pro: 5 users x $10 = $50 per month, $600 per year. Both on annual billing.',
        competitorViewers: 'Free. Anyone with the link can watch without a seat.',
        notes: 'The arithmetic uses annual billing; monthly billing is roughly two and a half times as much. Screencastify Pro is the tier with AI captions, which is the closest match to Recordio Pro. Enterprise and EDU plans are quoted. Recordio charges per person who records, and viewers are free.',
        checkedOn: '2026-09-22',
    },
    faq: [
        {
            question: 'Is Recordio a Chrome extension like Screencastify?',
            answer: 'Yes. Recordio installs from the Chrome Web Store and also runs in Edge and Brave, on macOS, Windows, Linux and ChromeOS. Recording happens in the extension and editing, sharing and the team library happen in the web app at app.recordio.io. You sign in with a free account, the same as Screencastify.',
        },
        {
            question: 'Does Recordio put a watermark on free videos?',
            answer: 'No. Screencastify\'s free plan adds a watermark and caps you at 10 videos of 30 minutes. Recordio\'s free plan downloads clean 1080p video, includes auto zoom, spotlight and AutoCut, and allows 5 active projects. Free videos expire after 7 days; Pro removes the expiry and keeps deleted videos restorable for 30 days.',
        },
        {
            question: 'How does Recordio pricing compare with Screencastify?',
            answer: 'Screencastify Starter is $7 and Pro is $10 per user per month billed annually, or $19 and $25 monthly. Recordio Pro is $12 per seat per month billed annually or $15 monthly, and includes 4K, AI captions, share links with view analytics and a team library. Only people who record need a seat.',
        },
        {
            question: 'Does Recordio integrate with Google Classroom?',
            answer: 'No. Recordio has no Classroom, Drive, quiz or assignment features and is not aimed at schools. It shares a link with view analytics and keeps recordings in a team library. If your videos are lessons and assignments, stay with Screencastify; if they are product walkthroughs, Recordio does far more for you automatically.',
        },
        {
            question: 'How do I switch from Screencastify to Recordio?',
            answer: 'Download any Screencastify videos you want to keep as MP4 from your library or Drive; Recordio does not import them. Then install the Recordio extension, sign in with a free account and record your next walkthrough. The recorder asks the same tab, desktop or webcam question, then applies zoom, spotlight and AutoCut for you.',
        },
    ],
    related: {
        compare: ['screenity', 'loom', 'tella'],
        post: '/blog/best-screencastify-alternatives-2026/',
        platform: '/for/chrome/',
    },
    updated: '2026-09-22',
};
