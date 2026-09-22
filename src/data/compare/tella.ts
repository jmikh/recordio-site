import type { Competitor } from './types';

// Tella prices checked 2026-09-22 at tella.com/pricing. No free plan; every workspace
// starts with a 7-day free trial of Pro, no card required. Pro $13 per user per month
// billed annually, Premium $19 per user per month billed annually. Annual is shown as
// 50% off monthly, so monthly billing is $26 (Pro) and $39 (Premium). Enterprise is
// custom. Pro includes 4K export, basic analytics, AI transcription and subtitles, AI
// auto zoom and silence removal. Premium adds 60 FPS export, advanced analytics
// (funnels, individual viewer tracking) and AI document generation.
export const tella: Competitor = {
    slug: 'tella',
    name: 'Tella',
    title: 'Tella Alternative With a Free Plan for Teams | Recordio',
    description:
        'Tella has no free plan and starts at $13 per user. Recordio polishes walkthroughs with DOM-aware zoom and captions. Free plan, Pro from $12 per seat.',
    verdict:
        'Tella is a creator-focused recorder with layouts, takes and a very good default look, priced from $13 per user per month with a 7-day trial and no free plan. Recordio is built for teams recording product walkthroughs in Chrome, with DOM-aware auto zoom, a free plan to start and Pro from $12 per seat.',
    chooseThem: [
        'You make talking-head content for an audience: courses, founder updates, launch videos. Tella\'s scenes and layouts are designed for exactly that.',
        'You want to record in takes and arrange them on a timeline, switching between camera, screen and split layouts as you go.',
        'You need viewer-level analytics such as funnels and individual watch history, which Tella offers on Premium.',
    ],
    chooseRecordio: [
        'Your recordings are walkthroughs of a web app for customers, prospects or teammates, and they should look finished without planning takes or layouts.',
        'You want zoom that reads the page and frames the actual input or menu you use, with every zoom still an editable keyframe.',
        'You want a free plan to start, per-seat pricing at $12 on Pro, and unlimited free viewer seats for everyone who only watches.',
    ],
    whatTheyDoWell: [
        {
            heading: 'The best default look for camera plus screen',
            body: 'Tella\'s output looks designed from the first recording. Backgrounds, rounded camera bubbles, split layouts and generous padding are on by default, and the result is closer to a launch video than a screen capture. If most of your content is you talking to camera with a screen beside you, Tella\'s defaults are ahead of most recorders, including ours for that specific format.',
        },
        {
            heading: 'Layouts and takes for longer videos',
            body: 'Tella records in clips and lets you switch between layouts (camera only, screen only, side by side, picture in picture) between takes. For a 20-minute course lesson or a monthly founder update that is a real advantage: you re-record one clip instead of the whole thing, and the layout changes give the video structure. Recordio records in one pass and is optimised for shorter walkthroughs.',
        },
        {
            heading: 'Analytics that go deep on Premium',
            body: 'Pro gives you views, unique viewers and watch time. Premium adds funnels and individual viewer tracking, so you can see that a specific prospect watched to minute four and dropped off. Recordio\'s share analytics cover view counts and watch time per link, which is enough for most team use, but Tella Premium goes further for sales and marketing use cases.',
        },
    ],
    differences: [
        {
            heading: 'Zoom that reads the page, not the cursor',
            body: 'Tella\'s auto zoom is AI and cursor driven. It follows where you click and zooms toward it, which works but can land on the edge of a form or crop a dropdown. Recordio reads the page DOM while you record, so it knows the input, card or menu you are interacting with and frames that whole element. Every zoom becomes a keyframe you can move, resize or delete in the editor. For a [product walkthrough](/blog/best-screen-recorders-2026/) of a settings page or a checkout flow, that is the difference between a video you send and a video you re-record.',
            media: { video: 'zoom.webm', alt: 'Recordio auto zoom framing a form field during a recording, unlike cursor-based zoom' },
        },
        {
            heading: 'A spotlight and a clean toolbar, applied for you',
            body: 'Tella\'s polish comes from layouts and backgrounds around the recording. Recordio also polishes what is inside it. A 3D spotlight lifts the element you click so the viewer\'s eye goes there, and the simplified toolbar replaces your bookmarks, tabs and extensions with a clean browser chrome. Neither needs setup; you press record and they are in the output. Tella has no equivalent for either, so a busy browser window looks busy in the final video.',
            media: { video: 'spotlight.webm', alt: 'Recordio 3D spotlight elevating a button as it is clicked' },
        },
        {
            heading: 'Silence removed, typing pauses kept',
            body: 'Both tools remove silence. The difference is what counts as silence. Tella cuts quiet stretches. Recordio\'s Smart AutoCut removes the dead air between sentences but keeps the pauses where you are typing or clicking, because in a walkthrough those pauses are the content. On Pro, AI captions arrive with word-level timing, and deleting a caption line cuts that segment of video too. Tella\'s transcript editor does a similar job; the Recordio version simply needs fewer decisions for a short demo.',
            media: { video: 'autocut.webm', alt: 'Recordio Smart AutoCut trimming silence while keeping a typing pause' },
        },
        {
            heading: 'Free to start, priced per seat for the team',
            body: 'Tella has no free plan. You get a 7-day trial, then every workspace member pays $13 per month on Pro billed annually, or $26 month to month. Recordio\'s free plan is $0 with no card: 5 active projects, 1080p downloads and no watermark, with videos expiring after 7 days. Pro is $12 per seat per month billed annually, with a team workspace, roles, a shared library and unlimited free viewer seats. It runs as a Chrome extension with a web app, so a [Mac](/for/mac/), [Windows](/for/windows/) or [Linux](/for/linux/) teammate uses the same account and library.',
            media: { video: 'after.webm', alt: 'A finished Recordio walkthrough with device frame and background' },
        },
    ],
    table: [
        { feature: 'Auto zoom', description: 'Frames the element you interact with; each zoom is an editable keyframe', recordio: 'DOM-aware, editable', competitor: 'AI, cursor and click driven' },
        { feature: 'Auto spotlight', description: '3D elevation of the element you click', recordio: true, competitor: false },
        { feature: 'Smart AutoCut', description: 'Removes silence, keeps typing and clicking pauses', recordio: true, competitor: 'AI silence removal' },
        { feature: 'Simplified toolbar', description: 'Hides bookmarks, tabs and extensions', recordio: true, competitor: false },
        { feature: 'Blur sensitive regions', recordio: true, competitor: false },
        { feature: 'Webcam', recordio: 'Webcam bubble', competitor: 'Camera layouts and bubble' },
        { feature: 'Device frames', description: 'MacBook Pro and Air frames', recordio: true, competitor: false },
        { feature: 'AI captions', recordio: 'Word-level, editable (Pro)', competitor: 'AI subtitles and transcript' },
        { feature: 'Layouts and takes', description: 'Switch camera and screen arrangements between clips', recordio: false, competitor: 'Scenes and clip-based recording' },
        { feature: 'Export resolutions', recordio: '1080p free, up to 4K on Pro', competitor: '4K on Pro, 60 FPS on Premium' },
        { feature: 'Cloud rendering', recordio: 'Pro (browser rendering on Free)', competitor: true },
        { feature: 'Share links with view analytics', recordio: 'Pro', competitor: 'Basic on Pro, funnels on Premium' },
        { feature: 'Team workspace and roles', recordio: 'Pro', competitor: 'Workspaces' },
        { feature: 'Unlimited viewer seats', recordio: 'Pro', competitor: 'Viewers free via link' },
        { feature: 'Screenshots', description: 'Full page or region, with annotation', recordio: true, competitor: false },
        { feature: 'Platforms', recordio: 'Chrome, Edge, Brave on Mac, Windows, Linux, ChromeOS', competitor: 'Mac and Windows apps, Chrome extension, web app' },
        { feature: 'Free plan', recordio: '5 active projects, 1080p, no watermark', competitor: 'None, 7-day trial of Pro' },
        { feature: 'Price', recordio: 'Free, or Pro $12 per seat per month billed annually', competitor: 'Pro $13 or Premium $19 per user per month billed annually' },
    ],
    pricing: {
        competitorMonthly: '$26 per user per month (Pro), $39 (Premium)',
        competitorAnnual: '$13 per user per month (Pro), $19 (Premium), billed annually',
        competitorFree: 'No free plan. A 7-day trial of Pro, no card required.',
        competitorTeamOfFive: 'Pro: 5 x $13 = $65 per month, $780 per year. Premium: 5 x $19 = $95 per month, $1,140 per year.',
        competitorViewers: 'Free. Anyone with the link can watch without a Tella account.',
        notes: 'Both figures use annual billing; month to month doubles them. Tella Pro already includes 4K export, transcription and basic analytics, so Pro is the fair comparison with Recordio Pro. Recordio charges $12 per seat for people who record, and everyone who only watches is free.',
        checkedOn: '2026-09-22',
    },
    faq: [
        {
            question: 'Does Tella have a free plan?',
            answer: 'No. Tella gives every new workspace a 7-day trial of its Pro plan without a card, then charges $13 per user per month billed annually or $26 monthly. Recordio has a free plan at $0 with no card, up to 5 active projects, 1080p downloads and no watermark. Videos on Free expire after 7 days.',
        },
        {
            question: 'How much cheaper is Recordio than Tella for a team?',
            answer: 'For five people on annual billing, Tella Pro is 5 x $13, so $65 per month or $780 per year. Recordio Pro is 5 x $12, so $60 per month or $720 per year. The gap is small on Pro and larger against Tella Premium at $95 per month. Viewers are free on both.',
        },
        {
            question: 'Can I switch from Tella to Recordio without losing my videos?',
            answer: 'Your Tella videos stay in Tella, and you can export them as MP4 files to keep. Recordio does not import Tella projects. Most teams keep old links live during a transition and record new walkthroughs in Recordio, since a typical two-minute demo takes less time to re-record than to migrate.',
        },
        {
            question: 'Does Recordio work on Windows and Linux like Tella?',
            answer: 'Tella has Mac and Windows desktop apps, a Chrome extension and a web app. Recordio is a Chrome extension with a web app, so it runs on macOS, Windows, Linux and ChromeOS from one account. There is no native desktop app yet, and it records what happens in the browser rather than native software.',
        },
        {
            question: 'Does Recordio have layouts and takes like Tella?',
            answer: 'No. Recordio records in one pass and polishes the result with auto zoom, spotlight, AutoCut and device frames, which suits short walkthroughs and demos. If you record long courses or updates and want to re-record one clip or switch layouts mid-video, Tella is the better fit. See how Loom compares if you want a simpler async recorder.',
        },
    ],
    related: {
        compare: ['loom', 'clueso', 'screen-studio'],
        post: '/blog/best-loom-alternatives-2026/',
        platform: '/for/mac/',
    },
    updated: '2026-09-22',
};
