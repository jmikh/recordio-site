import { useState } from 'react';
import { trackFaqExpanded } from '../utils/analytics';
import { SUPPORT_EMAIL } from '../utils/constants';
import { faqs as defaultFaqs, type FaqItem } from '../data/faq';


interface FAQProps {
    /** Page-specific questions; defaults to the shared homepage list. Pass the same array to BaseLayout's faqItems. */
    items?: FaqItem[];
}

const FAQ = ({ items }: FAQProps) => {
    const faqs = items ?? defaultFaqs;
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
