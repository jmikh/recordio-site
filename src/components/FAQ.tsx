import { useState } from 'react';
import { trackFaqExpanded } from '../utils/analytics';
import { SUPPORT_EMAIL } from '../utils/constants';

const faqs = [
    {
        question: 'Is Recordio free?',
        answer: 'Yes! Recordio offers a generous free plan that includes auto-zoom, automatic silence cutting, and more — no credit card required. Free users get up to 5 recordings with videos available for 7 days. When you need more, Pro unlocks unlimited recordings, cloud rendering, longer video retention, and premium transcription.',
    },
    {
        question: 'What\'s the difference between Free and Pro?',
        answer: 'The Free plan gives you up to 5 recordings with all the core smart-editing features. Videos expire after 7 days, transcription uses a lightweight local model, and rendering happens in your browser (the tab needs to stay in focus). Pro removes all those limits — you get unlimited recordings that never expire, cloud rendering so you can close your tab, transcription powered by a top-tier OpenAI model, and the ability to restore deleted videos for up to 30 days.',
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

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        const isOpening = openIndex !== index;
        setOpenIndex(isOpening ? index : null);
        if (isOpening) {
            trackFaqExpanded(faqs[index].question);
        }
    };

    return (
        <section id="faq" aria-label="Frequently Asked Questions" className="py-24 section-panel">
            <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-20">
                {/* Left: heading */}
                <div className="section-head section-head--left">
                    <span className="eyebrow">FAQ</span>
                    <h2 className="section-title">Questions, answered.</h2>
                    <p className="section-subtitle">
                        Can't find what you're looking for?{' '}
                        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-semibold hover:underline underline-offset-4">
                            Email us
                        </a>{' '}
                        and a human will reply.
                    </p>
                </div>

                {/* Right: accordion */}
                <dl className="faq-list">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className={`faq-item${isOpen ? ' is-open' : ''}`}>
                                <dt>
                                    <button
                                        onClick={() => toggle(index)}
                                        className="faq-trigger"
                                        aria-expanded={isOpen}
                                    >
                                        <span>{faq.question}</span>
                                        <span className="faq-plus" aria-hidden="true" />
                                    </button>
                                </dt>
                                <dd className="faq-body" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                                    <div className="overflow-hidden">
                                        <p className="faq-answer">{faq.answer}</p>
                                    </div>
                                </dd>
                            </div>
                        );
                    })}
                </dl>
            </div>
        </section>
    );
};

export default FAQ;
