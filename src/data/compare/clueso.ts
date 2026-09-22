import type { Competitor } from './types';

// Clueso prices checked 2026-09-22 at clueso.io/pricing. Free $0: 1 user, 10 minutes of
// video exports per month, 15 articles per month, no card. Solo $40 per month billed
// yearly: 1 user, 3 hours of video exports per year, 180 articles per year, 2K max
// export. Business $120 per month billed yearly: 2 users, 6 hours of video exports per
// year, 360 articles per year, 4K export. Monthly billing is about 20% higher ("save
// 20%" on yearly). Enterprise is custom with more users and higher limits. Re-exports
// of the same video do not count against the cap. Extra seats are not priced publicly.
export const clueso: Competitor = {
    slug: 'clueso',
    name: 'Clueso',
    title: 'Clueso Alternative for Product Walkthroughs | Recordio',
    description:
        'Clueso caps exports and starts at $120 a month for two users. Recordio gives teams auto zoom, captions and share links. Free plan, Pro $12 per seat.',
    verdict:
        'Clueso turns one recording into a studio-voiced, translated marketing video and a help article, priced from $120 per month for two users with export caps. Recordio is for teams that record walkthroughs often: DOM-aware auto zoom, captions and share links from Chrome, with a free plan and Pro at $12 per seat with no export cap.',
    chooseThem: [
        'You publish product videos in several languages and want the AI voiceover and translation done from one English recording.',
        'You need a help article generated from the same recording, so video and docs ship together from one workflow.',
        'You make a handful of polished marketing videos a year and a strict house style matters more than volume.',
    ],
    chooseRecordio: [
        'You record often: demos for prospects, bug walkthroughs, onboarding clips, async updates. Pro has no export cap, so nobody counts minutes.',
        'You want your own voice in the recording, framed by zoom that reads the page and a 3D spotlight, with every zoom still editable.',
        'You have more than two people who record and want per-seat pricing at $12 on Pro, with unlimited free viewer seats and a free plan to start.',
    ],
    whatTheyDoWell: [
        {
            heading: 'AI voiceover and translation',
            body: 'Clueso replaces your recorded voice with a studio-quality AI voice, cleans up the script and can produce the same video in other languages. For a product marketing team that ships a feature video in English, German and Japanese, that is a real pipeline and not a gimmick. Recordio keeps your own voice and does not do voiceover replacement or translation. If multilingual output is the job, Clueso is built for it.',
        },
        {
            heading: 'Docs from the same recording',
            body: 'Clueso generates a step-by-step help article with screenshots from the video you just recorded. Customer education teams get a video and an article from one session, and the article counts are generous relative to the video caps. Recordio has a screenshots sub-product for annotated captures, but it does not write the article for you.',
        },
        {
            heading: 'A very polished house style',
            body: 'Clueso\'s output looks like a marketing team made it: consistent brand kit, backgrounds, music and motion, every time. If you produce a small number of launch videos and want them to look identical on the website and in the app, Clueso\'s defaults are strong and there is little to adjust.',
        },
    ],
    differences: [
        {
            heading: 'No export cap on Pro',
            body: 'Clueso\'s pricing is built around export hours: 10 minutes a month on Free, 3 hours a year on Solo, 6 hours a year on Business. Six hours is 180 two-minute demos for a whole company for a whole year. That fits a marketing team publishing a few videos a quarter, and it does not fit a team where sales, support and product all record. Recordio Pro has unlimited projects and no export cap, at $12 per seat per month billed annually. The free plan gives 5 active projects to try it, and Pro adds 4K, cloud rendering, no expiry and a 30-day restore for deleted videos.',
            media: { video: 'after.webm', alt: 'A finished Recordio walkthrough ready to share without counting export minutes' },
        },
        {
            heading: 'Zoom that reads the page, and a spotlight',
            body: 'Both tools zoom automatically. Clueso\'s auto zoom is AI-driven from the recording. Recordio reads the page DOM while you record, so it knows the input, card or menu you are interacting with and frames that element rather than a region around the cursor. Every zoom is a keyframe you can move or delete. A 3D spotlight lifts the element you click, and the simplified toolbar hides bookmarks, tabs and extensions from the recording. These run in the extension as you record, so a [walkthrough](/blog/best-screen-recorders-2026/) looks finished without a render queue or a review pass.',
            media: { video: 'zoom.webm', alt: 'Recordio auto zoom framing a form field during a product walkthrough' },
        },
        {
            heading: 'Your voice, tidied, with captions',
            body: 'Clueso swaps your voice for an AI voice, which is right for a polished launch video and wrong for a demo to a prospect who just spoke to you. Recordio keeps your voice and runs Smart AutoCut, which removes silence between sentences but keeps the pauses where you are typing or clicking. Pro adds AI captions with word-level timing; delete a caption line and that segment is cut from the video. For teams that want a recording to sound like the person who made it, this is the more honest default.',
            media: { video: 'captions.webm', alt: 'Editable AI captions with word-level timing on a Recordio recording' },
        },
        {
            heading: 'Priced per seat, with a team workspace',
            body: 'Clueso Business covers two users. Extra seats are not priced publicly, so a five-person team is an Enterprise conversation. Recordio is $12 per seat per month billed annually or $15 monthly, and everyone who only watches is free. Pro includes a team workspace with roles, a shared library and share links with view counts and watch time. It runs as a [Chrome extension](/for/chrome/) with a web app, so it works on [Mac](/for/mac/), Windows, Linux and ChromeOS from one account. For a per-seat comparison with another async tool, see [Recordio vs Loom](/compare/loom/).',
            media: { video: 'toolbar.webm', alt: 'Recordio replacing a cluttered browser toolbar with a clean one for a team recording' },
        },
    ],
    table: [
        { feature: 'Auto zoom', description: 'Frames the element you interact with; each zoom is an editable keyframe', recordio: 'DOM-aware, editable', competitor: 'AI auto zoom' },
        { feature: 'Auto spotlight', description: '3D elevation of the element you click', recordio: true, competitor: false },
        { feature: 'Smart AutoCut', description: 'Removes silence, keeps typing and clicking pauses', recordio: true, competitor: 'Script cleanup with AI voice' },
        { feature: 'Simplified toolbar', description: 'Hides bookmarks, tabs and extensions', recordio: true, competitor: false },
        { feature: 'Blur sensitive regions', recordio: true, competitor: false },
        { feature: 'Webcam', recordio: 'Webcam bubble', competitor: false },
        { feature: 'Device frames', description: 'MacBook Pro and Air frames', recordio: true, competitor: 'Backgrounds and brand kit' },
        { feature: 'AI captions', recordio: 'Word-level, editable (Pro)', competitor: 'AI captions, multi-language' },
        { feature: 'AI voiceover and translation', description: 'Replace your voice and localise the video', recordio: false, competitor: true },
        { feature: 'Export cap', recordio: 'None on Pro', competitor: '10 min per month free, 3 or 6 hours per year paid' },
        { feature: 'Export resolutions', recordio: '1080p free, up to 4K on Pro', competitor: '2K on Solo, 4K on Business' },
        { feature: 'Cloud rendering', recordio: 'Pro (browser rendering on Free)', competitor: true },
        { feature: 'Share links with view analytics', recordio: 'Pro', competitor: 'Share links' },
        { feature: 'Team workspace and roles', recordio: 'Pro', competitor: '2 users on Business, more on Enterprise' },
        { feature: 'Unlimited viewer seats', recordio: 'Pro', competitor: 'Viewers free via link' },
        { feature: 'Screenshots', description: 'Full page or region, with annotation', recordio: true, competitor: 'Generated help articles' },
        { feature: 'Platforms', recordio: 'Chrome, Edge, Brave on Mac, Windows, Linux, ChromeOS', competitor: 'Web app' },
        { feature: 'Free plan', recordio: '5 active projects, 1080p, no watermark', competitor: '1 user, 10 minutes of exports per month' },
        { feature: 'Price', recordio: 'Free, or Pro $12 per seat per month billed annually', competitor: 'Solo $40 or Business $120 per month billed yearly' },
    ],
    pricing: {
        competitorMonthly: 'About $50 (Solo) or $150 (Business) per month, roughly 20% above yearly',
        competitorAnnual: '$40 per month (Solo, 1 user) or $120 per month (Business, 2 users), billed yearly',
        competitorFree: 'Free: 1 user, 10 minutes of video exports and 15 articles per month, no card',
        competitorTeamOfFive: 'Business covers 2 users and extra seats are not priced publicly, so five people means Enterprise, or three Business plans: 3 x $120 = $360 per month, $4,320 per year, with a combined cap of 18 hours of exports a year.',
        competitorViewers: 'Free. Anyone with the link can watch without a Clueso account.',
        notes: 'Clueso prices by plan and export hours rather than by seat, and re-exporting a video you already exported does not count against the cap. The three-plan arithmetic above is a workaround, not a published option. Recordio charges $12 per seat for people who record, with no export cap, and everyone who only watches is free.',
        checkedOn: '2026-09-22',
    },
    faq: [
        {
            question: 'Does Recordio have export caps like Clueso?',
            answer: 'No. Clueso limits video exports to 10 minutes a month on Free, 3 hours a year on Solo and 6 hours a year on Business. Recordio Pro has unlimited projects and no export cap. The free plan allows up to 5 active projects with 1080p downloads, and videos on Free expire after 7 days.',
        },
        {
            question: 'How much does Recordio cost for a team of five compared with Clueso?',
            answer: 'Recordio Pro is $12 per seat per month billed annually, so five people pay $60 per month or $720 per year, with unlimited free viewers. Clueso Business is $120 per month for two users; five people means Enterprise pricing or three Business plans at $360 per month, $4,320 per year.',
        },
        {
            question: 'Does Recordio do AI voiceover and translation?',
            answer: 'No. Recordio keeps your own voice, removes silence with Smart AutoCut and adds editable AI captions on Pro. It does not replace your voice with an AI narrator or translate the video. If you need one recording in several languages, Clueso does that well and it is a fair reason to pick it.',
        },
        {
            question: 'What platforms does Recordio run on?',
            answer: 'Recordio is a Chrome extension, which also runs on Edge and Brave, plus a web app at app.recordio.io. That covers macOS, Windows, Linux and ChromeOS from one account. Clueso is a web app you record into. Both need an account; Recordio\'s free account needs no card.',
        },
        {
            question: 'How do I switch from Clueso to Recordio?',
            answer: 'Export your existing Clueso videos as MP4 files and keep your generated articles; Recordio does not import Clueso projects. Then install the extension, sign in with a free account and record your next walkthrough. Most teams run both for a few weeks, keeping Clueso for translated launch videos and moving everyday demos to Recordio. Our Loom alternatives guide covers the same trade-off.',
        },
    ],
    related: {
        compare: ['tella', 'loom', 'focusee'],
        post: '/blog/best-loom-alternatives-2026/',
        platform: '/for/chrome/',
    },
    updated: '2026-09-22',
};
