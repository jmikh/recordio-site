import type { Competitor } from './types';

// OBS Studio checked 2026-09-22 at obsproject.com. Free and open source under the GPL,
// no plans, no pricing, no account. Native apps for macOS, Windows and Linux. Records to
// MKV or MP4 on disk and streams to Twitch, YouTube and custom RTMP targets. Community
// support and plugins; no built-in editor, captions or hosting.
export const obs: Competitor = {
    slug: 'obs',
    name: 'OBS',
    title: 'OBS Alternative for Product Demos and Tutorials | Recordio',
    description:
        'OBS is a free streaming tool that saves a file. Recordio records web app demos in Chrome, adds zoom, spotlight and captions for you, and shares a link.',
    verdict:
        'OBS Studio is free, open source software for live streaming and multi-source recording on Mac, Windows and Linux. Recordio records web app walkthroughs in Chrome on the same operating systems, polishes them automatically and shares them as a link with view analytics.',
    chooseThem: [
        'You stream live to Twitch, YouTube or a company all-hands. OBS is the standard for that, and Recordio does not stream at all.',
        'You need scenes that mix a game, a camera, a capture card and several audio sources, with full control over encoder, bitrate and container.',
        'You want $0 forever without signing in, and you are happy to configure, edit and host the result yourself.',
    ],
    chooseRecordio: [
        'Your recordings are product demos, tutorials and async updates of a web app, and they should look finished without a separate editor.',
        'You want DOM-aware auto zoom, spotlight, a clean browser toolbar and silence removal applied for you, with every zoom still editable.',
        'Your team needs one shared library and links with view counts, not MKV files in a shared drive.',
    ],
    whatTheyDoWell: [
        {
            heading: 'Live streaming and multi-source scenes',
            body: 'OBS was built for broadcasting and it is still the best free tool for it. Scenes combine a display capture, a window, a webcam, a capture card, a browser source and image overlays, and hotkeys switch between them while you are live. The audio mixer has per-source filters for noise suppression, gates and compression. A virtual camera feeds any of this into Zoom or Meet. Recordio records what happens in your browser, with a webcam bubble, and nothing more.',
        },
        {
            heading: 'Total control over encoding and quality',
            body: 'OBS exposes every setting: x264 or hardware encoders, CBR or CQP, bitrate, keyframe interval, colour space, frame rate and output resolution, plus MKV recording that survives a crash and remuxes to MP4 afterwards. If you need a specific codec profile for a broadcast pipeline or a 60 fps capture of a game, OBS does it and a browser extension does not. Recordio exports MP4 at 480p to 1080p on Free and up to 4K on Pro, with the encoder chosen for you.',
        },
        {
            heading: 'Free, open source and on Linux',
            body: 'OBS costs nothing, has no tiers, and runs natively on macOS, Windows and Linux under the GPL. Hundreds of community plugins add everything from scene switchers to source filters, and if a plugin does not exist you can write one. Recordio is also free to start and also [runs on Linux](/for/linux/) through Chrome, but it is a cloud product with a paid Pro tier, and it will never be something you can fork.',
        },
    ],
    differences: [
        {
            heading: 'Zoom and spotlight that follow the page',
            body: 'OBS records exactly the pixels on screen. To zoom into a form field you either crop a source ahead of time or fix it later in an editor OBS does not include. Recordio reads the page DOM while you record, so it frames the input, menu or card you interact with and adds a keyframe you can move or delete afterwards. A 3D spotlight lifts the element you click. For a [product demo](/blog/best-screen-recorders-2026/) of a web app, that is the difference between a screen capture and a video you would send to a customer.',
            media: { video: 'zoom.webm', alt: 'Recordio auto zoom framing a form field during a web app recording' },
        },
        {
            heading: 'Silence cut and captions written for you',
            body: 'An OBS recording is one long take. Every pause, every misclick and every "hold on" stays in the file until you open a separate editor. Smart AutoCut removes the dead air between sentences and keeps the pauses where you are typing or clicking, so the walkthrough stays readable. Pro adds AI captions with word-level timing; delete a caption line and that part of the video is cut too. A five-minute tutorial usually loses a minute of silence and none of your time.',
            media: { video: 'captions.webm', alt: 'Editable AI captions with word-level timing on a Recordio recording' },
        },
        {
            heading: 'A share link with view analytics, not an MKV on disk',
            body: 'OBS writes an MKV or MP4 to a folder. Getting it in front of a customer means remuxing, uploading to YouTube or a drive, and pasting a link with no idea whether anyone watched. Recordio renders in the cloud on Pro and gives you a share link with view counts and watch time, plus a team workspace with roles and a shared library. Sales, support and product find every walkthrough in one place, and downloads are still there at 1080p on Free and up to 4K on Pro.',
            media: { video: 'after.webm', alt: 'A finished Recordio walkthrough with a device frame and background, ready to share as a link' },
        },
        {
            heading: 'The same tool on Mac, Windows and Linux, with no scene to set up',
            body: 'OBS and Recordio both cover [Linux](/for/linux/), [Mac](/for/mac/) and [Windows](/for/windows/), and Recordio adds ChromeOS. The difference is the first ten minutes. OBS needs a scene, a display or window source, an audio device, an encoder and an output folder before the first recording, and each teammate repeats that on their own machine. Recordio is a Chrome extension and one account: press record, and the simplified toolbar hides bookmarks, tabs and extensions so nobody tidies their browser first. Blur covers customer data before the video leaves your workspace.',
            media: { video: 'toolbar.webm', alt: 'Recordio replacing a cluttered browser toolbar with a clean one in the recording' },
        },
    ],
    table: [
        { feature: 'Auto zoom', description: 'Frames the element you interact with; each zoom is an editable keyframe', recordio: 'DOM-aware, editable', competitor: false },
        { feature: 'Auto spotlight', description: '3D elevation of the element you click', recordio: true, competitor: false },
        { feature: 'Smart AutoCut', description: 'Removes silence, keeps typing and clicking pauses', recordio: true, competitor: false },
        { feature: 'Simplified toolbar', description: 'Hides bookmarks, tabs and extensions', recordio: true, competitor: false },
        { feature: 'Blur sensitive regions', recordio: true, competitor: 'Plugins only' },
        { feature: 'Webcam', recordio: 'Webcam bubble', competitor: 'Webcam source in a scene' },
        { feature: 'Device frames', description: 'MacBook Pro and Air frames', recordio: true, competitor: false },
        { feature: 'AI captions', recordio: 'Word-level, editable (Pro)', competitor: false },
        { feature: 'Export resolutions', recordio: '1080p free, up to 4K on Pro', competitor: 'Any resolution your encoder supports' },
        { feature: 'Cloud rendering', recordio: 'Pro (browser rendering on Free)', competitor: 'Local only' },
        { feature: 'Share links with view analytics', recordio: 'Pro', competitor: false },
        { feature: 'Team workspace and roles', recordio: 'Pro', competitor: false },
        { feature: 'Unlimited viewer seats', recordio: 'Pro', competitor: 'Not applicable' },
        { feature: 'Screenshots', description: 'Full page or region, with annotation', recordio: true, competitor: 'Source screenshot hotkey only' },
        { feature: 'Live streaming', recordio: false, competitor: 'Twitch, YouTube, custom RTMP' },
        { feature: 'Platforms', recordio: 'Chrome, Edge, Brave on Mac, Windows, Linux, ChromeOS', competitor: 'macOS, Windows and Linux apps' },
        { feature: 'Free plan', recordio: '5 active projects, 1080p, no watermark', competitor: 'Entirely free, open source' },
        { feature: 'Price', recordio: 'Free, or Pro $12 per seat per month billed annually', competitor: '$0' },
    ],
    pricing: {
        competitorMonthly: '$0',
        competitorAnnual: '$0',
        competitorFree: 'Everything. OBS is free and open source under the GPL, with no paid tier.',
        competitorTeamOfFive: '5 x $0 = $0. The real cost is the editor, the hosting and the time each person spends configuring scenes and encoders on their own machine.',
        competitorViewers: 'Not applicable. OBS makes files and live streams; where people watch them is up to you.',
        notes: 'OBS has no plans and no company behind support; help comes from community forums and plugin authors. Recordio Free is also $0 with up to 5 active projects and 7-day expiry. Pro is $12 per seat per month billed annually or $15 monthly, and everyone who only watches is free.',
        checkedOn: '2026-09-22',
    },
    faq: [
        {
            question: 'Is Recordio free like OBS?',
            answer: 'Recordio has a free plan at $0 with no card: up to 5 active projects, 1080p downloads, auto zoom, spotlight and AutoCut, and videos that expire after 7 days. OBS is free with nothing held back because it is open source. Recordio Pro, at $12 per seat per month billed annually, adds 4K, captions, share links with analytics and a team library.',
        },
        {
            question: 'Does Recordio work on Linux like OBS?',
            answer: 'Yes. Recordio runs as a Chrome, Edge or Brave extension with a web app, so it works on Ubuntu, Fedora and any other distribution that runs Chrome, as well as on macOS, Windows and ChromeOS. A Linux engineer and a Mac designer share one account and one library. See the Linux page for setup notes.',
        },
        {
            question: 'Can Recordio live stream?',
            answer: 'No. Recordio records product walkthroughs and demos and shares them as links; it does not stream to Twitch, YouTube or an RTMP server. If you stream, keep OBS for that and use Recordio for the recorded tutorials and async updates that need zoom, captions and a share link with view counts.',
        },
        {
            question: 'How do I switch from OBS to Recordio?',
            answer: 'Install the Chrome extension, sign in with a free account and record a walkthrough of your web app. There are no scenes, sources or encoder settings to configure; zoom, spotlight and AutoCut are applied on the first recording. Your existing OBS files stay where they are as MKV or MP4, and Recordio does not import them.',
        },
        {
            question: 'Can Recordio record games or desktop apps like OBS?',
            answer: 'No. Recordio records what you do in the browser and is built for walkthroughs of web apps, where its DOM-aware zoom works. For games, native desktop software, capture cards or multi-source scenes, keep OBS, or look at Bandicam if you want a simpler paid recorder for Windows or Mac.',
        },
    ],
    related: {
        compare: ['bandicam', 'camtasia', 'screenity'],
        post: '/blog/best-screen-recorders-2026/',
        platform: '/for/linux/',
    },
    updated: '2026-09-22',
};
