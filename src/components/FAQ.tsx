import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { trackFaqExpanded } from '../utils/analytics';

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
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const headerRef = useScrollReveal();
    const accordionRef = useScrollReveal<HTMLDListElement>();

    const toggle = (index: number) => {
        const isOpening = openIndex !== index;
        setOpenIndex(isOpening ? index : null);
        if (isOpening) {
            trackFaqExpanded(faqs[index].question);
        }
    };

    return (
        <section id="faq" aria-label="Frequently Asked Questions" className="py-24 section-panel relative overflow-hidden">
            <div className="absolute inset-0 gradient-mesh opacity-20" />

            <div className="relative z-10 max-w-3xl mx-auto px-6">
                {/* Section Header */}
                <div ref={headerRef} className="text-center mb-16 scroll-reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-highlighted mb-4">
                        Frequently <span className="text-primary-highlighted">Asked Questions</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Everything you need to know about Recordio.
                    </p>
                </div>

                {/* Accordion */}
                <dl ref={accordionRef} className="space-y-3 scroll-reveal scroll-reveal-delay-2">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="rounded-xl border border-border bg-surface-raised/50 transition-colors duration-300 hover:border-border-highlighted"
                            >
                                <dt>
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-lg font-semibold text-text-highlighted">
                                            {faq.question}
                                        </span>
                                        <svg
                                            className={`w-5 h-5 flex-shrink-0 text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                </dt>
                                <dd>
                                    <div
                                        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                                        style={{
                                            gridTemplateRows: isOpen ? '1fr' : '0fr',
                                        }}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-6 pb-5 text-text-muted leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
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
