/**
 * Single source of truth for the FAQ. Rendered by components/FAQ.tsx and
 * emitted as FAQPage JSON-LD by layouts/BaseLayout.astro (only on pages that
 * actually render the FAQ section).
 */
export interface FaqItem {
    question: string;
    answer: string;
}

export const faqs: FaqItem[] = [
    {
        question: 'Is Recordio free?',
        answer: 'Yes! Recordio offers a generous free plan that includes auto-zoom, automatic silence cutting, and more — no credit card required. Free users get up to 5 active projects with videos available for 7 days. When you need more, Pro unlocks unlimited recordings, cloud rendering, longer video retention, and premium transcription.',
    },
    {
        question: 'What\'s the difference between Free and Pro?',
        answer: 'The Free plan gives you up to 5 active projects with all the core smart-editing features. Videos expire after 7 days, transcription uses a lightweight local model, and rendering happens in your browser (the tab needs to stay in focus). Pro removes all those limits — you get unlimited recordings that never expire, cloud rendering so you can close your tab, transcription powered by a top-tier OpenAI model, and the ability to restore deleted videos for up to 30 days.',
    },
    {
        question: 'What does "browser rendering" mean?',
        answer: 'On the Free plan, your video is rendered right in your browser. It works great, but the tab needs to stay open and in focus while rendering. Pro users get cloud rendering — your video is processed on our servers so you can close the tab and come back when it\'s ready.',
    },
    {
        question: 'How is Recordio different from other screen recorders?',
        answer: 'Other screen recorders just blindly follow your mouse, often leading to jittery or incoherent zooms. Recordio actually understands your web app. It detects when you\'re typing, scrolling, or hovering over a card, and uses advanced algorithms to perfectly frame the important elements. It\'s also the only recorder that automatically spotlights cards, popovers, and other elements you interact with, giving your videos a polished, studio-quality look.',
    },
    {
        question: 'Does Recordio work outside of Chrome?',
        answer: 'Right now, Recordio is a Chrome extension (also works on Edge and Brave). Native desktop apps and support for more browsers are on the way.',
    },
];
