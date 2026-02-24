import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
    {
        question: 'Is Recordio free?',
        answer: 'Yes — record, edit, and export as many videos as you want for free. You get unlimited 720p exports with a small Recordio watermark. For a limited time, new users also get a free 1-week Pro trial with unlimited 4K exports and no watermark.',
    },
    {
        question: 'Do I need an account?',
        answer: 'No. You can record, edit, and export without signing up. An account is only needed to claim your free Pro trial or upgrade to Pro.',
    },
    {
        question: 'Do my recordings leave my computer?',
        answer: 'No. Your recordings, edits, and projects stay on your computer. Captions are also generated locally on your device — your content is never uploaded to any server.',
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
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" aria-label="Frequently Asked Questions" className="py-24 bg-surface-body relative overflow-hidden">
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
