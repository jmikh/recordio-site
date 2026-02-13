import { MdBlurOn } from 'react-icons/md';

const CDN_BASE = 'https://cdn.recordio.cc/demos';

export interface Feature {
    id: string;
    label: string;
    tagline: string;
    headline: string;
    body: string;
    bullets: string[];
    gradient: string;
    icon: React.ReactNode;
    video?: string;
}

export const features: Feature[] = [
    {
        id: 'smart-zoom',
        label: 'Auto Zoom',
        tagline: 'Frames elements, not just cursors',
        headline: 'Zoom that actually frames the right thing.',
        body: 'Most screen recorders zoom to your cursor position, which often clips modals, cuts off form fields, or misses the element entirely. Recordio identifies the actual UI element you\'re interacting with — an input field, a dropdown, a card — and frames it properly. The result is clean, precise zoom that looks intentional, every time.',
        bullets: [
            'Detects element boundaries — never clips a modal or form field',
            'Adjusts zoom frame to match element size, not just cursor position',
            'Works automatically — no keyframes to set manually',
        ],
        gradient: 'from-primary to-primary-highlighted',
        video: `${CDN_BASE}/zoom-demo.mp4`,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
        ),
    },
    {
        id: 'auto-spotlight',
        label: 'Auto Spotlight',
        tagline: 'Automatic hover detection and elevation',
        headline: 'Your UI, with a stage director.',
        body: 'Recordio detects when you hover over interactive elements like cards, tooltips, and popups, then automatically highlights them by dimming the surrounding UI. This draws your viewer\'s attention exactly where it needs to be — without any manual editing or keyframing on your part.',
        bullets: [
            'Detects hovered cards, date pickers, menus, and flyouts automatically',
            'Dims surrounding elements for natural visual focus',
            'Lifts and emphasizes the active element — feels cinematic',
        ],
        gradient: 'from-primary to-primary-highlighted',
        video: `${CDN_BASE}/spotlight-demo.mp4`,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        id: 'element-blur',
        label: 'Element Blur',
        tagline: 'Privacy blur that follows through scroll & zoom',
        headline: 'Blur that actually works.',
        body: 'Select any element containing sensitive information — names, emails, account numbers — and blur it before or during recording. Recordio\'s blur is bound to the DOM element itself, so it follows through scrolling, zooming, and window resizes automatically. You can also let AutoCut handle the blurring for you mid-recording.',
        bullets: [
            'Blur sticks to the DOM element — not a static screen region',
            'Survives scrolling, zooming, and window resizes',
            'Set it before recording — no post-production work needed',
        ],
        gradient: 'from-primary to-primary-highlighted',
        video: `${CDN_BASE}/blur-demo.mp4`,
        icon: <MdBlurOn className="w-6 h-6" />,
    },
    {
        id: 'advanced-editor',
        label: 'Advanced Editor',
        tagline: 'Fine-tune every aspect of the video',
        headline: 'Full control over style and timing.',
        body: 'Recordio gives you a full timeline editor where every zoom, spotlight, and caption lives as an editable keyframe. Beyond timing, you can customize background color, padding, border radius, inset shadow, and camera shape — all from a clean settings panel. The result is a video that matches your brand, not a generic template.',
        bullets: [
            'Every auto-generated keyframe lives on your timeline',
            'Individually adjust, move, or delete any effect',
            'No need to start over when auto gets one thing wrong',
        ],
        gradient: 'from-primary to-primary-highlighted',
        video: `${CDN_BASE}/editor-demo.mp4`,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
        ),
    },
    {
        id: 'auto-captions',
        label: 'Auto Captions',
        tagline: 'One-click subtitles, entirely local',
        headline: 'Captions that generate themselves.',
        body: 'Recordio transcribes your recording locally using an on-device AI model — no cloud uploads, no processing delays. Captions are synced to your timeline with word-level accuracy and are fully editable, letting you adjust text, styling, and positioning before export.',
        bullets: [
            'Powered by local Whisper — nothing leaves your machine',
            'Word-level timestamps synced to your timeline',
            'Fully editable text, font, size, and position',
        ],
        gradient: 'from-primary to-primary-highlighted',
        video: `${CDN_BASE}/captions-demo.mp4`,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
        ),
    },
    {
        id: 'auto-camera-shrink',
        label: 'Auto Camera Shrink',
        tagline: 'Shrinks camera during zooms',
        headline: 'Your camera stays out of the way.',
        body: 'When Recordio zooms into a UI element, your camera bubble automatically shrinks to avoid covering the content your viewer needs to see. Once the zoom ends, the camera returns to its original size. It keeps your face on screen without competing for attention.',
        bullets: [
            'Camera shrinks automatically during zoom transitions',
            'Returns to full size when zoom completes',
            'No manual resizing or keyframing required',
        ],
        gradient: 'from-primary to-primary-highlighted',
        video: `${CDN_BASE}/autoshrink-demo.mp4`,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
    },
];
