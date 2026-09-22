import type { Competitor } from './types';

// Screenity prices checked 2026-09-22 at screenity.io/pricing. The recorder is free and open
// source (GPLv3, 18k+ GitHub stars) and the developer says it stays free. Pro, which unlocks the
// editor and cloud features, lists at $10 per month or $120 billed yearly (the page says yearly
// saves 29%), with a 7-day free trial. Pro exports unlimited 1080p MP4s, allows recordings up
// to 1 hour, and hosts the cloud media library in Europe. One Pro subscription per person.
export const screenity: Competitor = {
    slug: 'screenity',
    name: 'Screenity',
    title: 'Screenity Alternative for Polished Demos | Recordio',
    description:
        'Screenity is a free, open-source Chrome recorder. Recordio adds DOM-aware zoom, 3D spotlight, AutoCut, 4K and team share links with view analytics.',
    verdict:
        'Screenity is a free, open-source Chrome extension that records your screen with drawing tools and live blur, and sells a Pro editor for polish. Recordio is a Chrome extension that reads the page to zoom and spotlight for you, cuts silence, and shares walkthroughs to a team library with view analytics.',
    chooseThem: [
        'You want a recorder that is free and open source, with the code on GitHub and the developer\'s word that it stays free.',
        'You draw on the screen while recording, or need live blur to hide data as you go, and a local file is all you need at the end.',
        'Your data has to stay in Europe. Screenity Pro hosts its cloud media library in the EU.',
    ],
    chooseRecordio: [
        'You record walkthroughs of a web app and want zoom that frames the input, card or menu you are using, not a zoom fired by each click.',
        'Your team needs one workspace with roles, a shared library and free viewer seats, plus view counts and watch time on every link.',
        'You want silence cut, captions and a clean browser toolbar applied for you, and 4K exports when a demo goes on a big screen.',
    ],
    whatTheyDoWell: [
        {
            heading: 'A genuinely free recorder',
            body: 'Screenity is GPLv3 and has more than 18,000 GitHub stars. The free extension records any tab, window, application or camera, with microphone and system audio, and saves the file locally. There is no upsell inside the recording flow itself. If you want to inspect the code or fork it, you can, which none of the closed [Chrome screen recorders](/for/chrome/) can say.',
        },
        {
            heading: 'Drawing tools and live blur while you record',
            body: 'You can draw arrows and shapes on the page as you talk, blur a region live so it is never captured, and turn on a cursor spotlight. For teaching, code reviews and bug reports this is useful, and Recordio does not draw on the page while recording. Recordio blurs sensitive regions in the editor instead.',
        },
        {
            heading: 'EU hosting and an active community',
            body: 'Screenity Pro keeps its cloud media library in Europe and the project is open about how it handles data. Issues and feature requests are worked through in public on GitHub. For a small team with a European data policy and no need for a workspace, that is a reasonable place to be.',
        },
    ],
    differences: [
        {
            heading: 'Zoom that reads the page, not your clicks',
            body: 'Screenity Pro adds zoom in the editor, triggered by the points where you clicked. Recordio reads the page DOM while you record, so it frames the input, card or menu you use, including elements you type into or hover without clicking, and it never clips the edge of a form. Each zoom becomes a keyframe you can move, resize or delete. This is what makes a recording look like a [product walkthrough](/blog/best-loom-alternatives-2026/) rather than a screen capture with effects on top.',
            media: { video: 'zoom.webm', alt: 'Recordio auto zoom framing a form field by reading the page' },
        },
        {
            heading: '3D spotlight and a simplified toolbar',
            body: 'Screenity\'s spotlight is a circle around the cursor. Recordio lifts the element you interact with in 3D so a button or menu item stands off the page while the rest dims, and it happens during recording rather than as an editor pass. The simplified toolbar hides your bookmarks bar, tabs and extension icons from every recording, so you do not need a clean browser profile to make a clean demo.',
            media: { video: 'spotlight.webm', alt: 'Recordio 3D spotlight elevating a menu item on a web page' },
        },
        {
            heading: 'AutoCut and captions built for narration',
            body: 'Screenity Pro gives you trimming, speed changes and word-by-word captions in the editor. Recordio\'s AutoCut removes the silence between sentences on its own while keeping the pauses where you are typing or clicking, so the screen never jumps ahead of the voiceover. Pro adds AI captions with word-level timing, and deleting a caption line cuts that segment of the video. A five-minute walkthrough usually loses about a minute of dead air and needs no time on a timeline.',
            media: { video: 'autocut.webm', alt: 'Recordio AutoCut removing silence while keeping a typing pause' },
        },
        {
            heading: 'A team workspace, not a personal library',
            body: 'Screenity Pro is one person\'s editor and cloud library with a share link. Recordio Pro is a workspace: roles for who can record, edit and manage, a shared library that sales, support and product can search, unlimited free viewer seats, and view counts and watch time on every link. Rendering happens in the cloud on Pro, exports go up to 4K, and the same account works in Chrome, Edge or Brave on [Mac](/for/mac/), [Windows](/for/windows/), Linux and ChromeOS. If you are weighing [Loom](/compare/loom/) for the same reason, the workspace is the part to compare.',
            media: { video: 'after.webm', alt: 'A finished Recordio walkthrough with device frame and background, ready to share' },
        },
    ],
    table: [
        { feature: 'Auto zoom', description: 'Frames the element you interact with; each zoom is an editable keyframe', recordio: 'DOM-aware, editable', competitor: 'Click-based (Pro)' },
        { feature: 'Auto spotlight', description: '3D elevation of the element you click', recordio: true, competitor: 'Cursor spotlight' },
        { feature: 'Smart AutoCut', description: 'Removes silence, keeps typing and clicking pauses', recordio: true, competitor: 'Manual trimming (Pro)' },
        { feature: 'Simplified toolbar', description: 'Hides bookmarks, tabs and extensions', recordio: true, competitor: false },
        { feature: 'Blur sensitive regions', recordio: true, competitor: 'Live blur while recording' },
        { feature: 'Webcam', recordio: 'Webcam bubble', competitor: 'Camera overlay' },
        { feature: 'Device frames', description: 'MacBook Pro and Air frames', recordio: true, competitor: 'Device and browser mockups (Pro)' },
        { feature: 'AI captions', recordio: 'Word-level, editable (Pro)', competitor: 'Word-by-word (Pro)' },
        { feature: 'Export resolutions', recordio: '1080p free, up to 4K on Pro', competitor: 'Unlimited 1080p MP4 (Pro)' },
        { feature: 'Cloud rendering', recordio: 'Pro (browser rendering on Free)', competitor: 'Free saves locally; Pro editor is cloud-based' },
        { feature: 'Share links with view analytics', recordio: 'Pro', competitor: 'Share links (Pro), no analytics' },
        { feature: 'Team workspace and roles', recordio: 'Pro', competitor: false },
        { feature: 'Unlimited viewer seats', recordio: 'Pro', competitor: 'Links are free to watch (Pro)' },
        { feature: 'Screenshots', description: 'Full page or region, with annotation', recordio: true, competitor: false },
        { feature: 'Open source', recordio: false, competitor: 'GPLv3, 18k+ GitHub stars' },
        { feature: 'Platforms', recordio: 'Chrome, Edge, Brave on Mac, Windows, Linux, ChromeOS', competitor: 'Chrome and Chromium browsers' },
        { feature: 'Free plan', recordio: '5 active projects, 1080p, no watermark', competitor: 'Full recorder, saves locally' },
        { feature: 'Price', recordio: 'Free, or Pro $12 per seat per month billed annually', competitor: 'Recorder free; Pro $10 per month or $120 per year' },
    ],
    pricing: {
        competitorMonthly: '$10 per person per month (Pro)',
        competitorAnnual: '$120 per person per year (Pro)',
        competitorFree: 'The recorder is free and open source; Pro has a 7-day free trial',
        competitorTeamOfFive: 'Five Pro subscriptions: 5 x $10 = $50 per month, or 5 x $120 = $600 per year. The free recorder costs nothing for anyone who does not need the editor.',
        competitorViewers: 'Free. Anyone with a Pro share link can watch.',
        notes: 'The arithmetic assumes one Pro subscription per person, since Screenity has no team plan. Pro caps each recording at 1 hour and exports at 1080p. Recordio charges per person who records, and everyone who only watches is free.',
        checkedOn: '2026-09-22',
    },
    faq: [
        {
            question: 'Is Recordio free like Screenity?',
            answer: 'Recordio has a free plan rather than a free product. It costs $0 with no card, includes auto zoom, spotlight, AutoCut and clean 1080p downloads, and allows 5 active projects that expire after 7 days. Screenity\'s recorder is free without those limits; its editor is the paid part at $10 per month. Recordio Pro is $12 per seat per month billed annually.',
        },
        {
            question: 'How do I switch from Screenity to Recordio?',
            answer: 'Install the Recordio extension from the Chrome Web Store, sign in with a free account and record. Screenity files you saved locally stay where they are, and Screenity Pro cloud recordings can be exported as MP4 first. The two extensions can sit side by side in Chrome while you decide, since neither interferes with the other.',
        },
        {
            question: 'Does Recordio run on the same browsers as Screenity?',
            answer: 'Both are Chrome extensions, so both run in Chrome, Edge, Brave and other Chromium browsers on macOS, Windows, Linux and ChromeOS. Recordio also has a web app at app.recordio.io where editing, sharing and the team library live, so teammates who only watch do not need the extension at all.',
        },
        {
            question: 'Is Recordio open source?',
            answer: 'No. Recordio is a closed, cloud-based product with a free plan and a Pro plan. If open source or self-hosting is a requirement, Screenity is the right choice and Recordio is not. If you need a shared library, roles and view analytics, that is where the difference in price goes.',
        },
        {
            question: 'Can I draw on the screen or blur live in Recordio?',
            answer: 'Not while recording. Recordio blurs sensitive regions in the editor after the fact and annotates screenshots with text, arrows, shapes and blur in the web app. Screenity draws on the page and blurs live as you record, which is one of its real strengths. Recordio focuses on zoom, spotlight and AutoCut that happen automatically instead.',
        },
    ],
    related: {
        compare: ['screencastify', 'obs', 'loom'],
        post: '/blog/best-loom-alternatives-2026/',
        platform: '/for/chrome/',
    },
    updated: '2026-09-22',
};
