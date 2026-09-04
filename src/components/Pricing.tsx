import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getCWSLink } from '../utils/constants';
import { trackInstallExtension } from '../utils/analytics';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    const headerRef = useScrollReveal();
    const cardsRef = useScrollReveal();

    const plans = [
        {
            name: 'PRO',
            price: isAnnual ? '$12' : '$15',
            period: '/ seat / month',
            priceNote: isAnnual ? 'Billed annually' : 'Billed monthly',
            features: [
                '4K exports',
                'Auto-generated captions',
                'Collaboration and team library',
                'Automatic zooms, spotlights and more',
                'Shareable links',
            ],
            cta: 'Start For Free',
            ctaLink: getCWSLink('pricing-pro'),
            popular: true,
            highlight: true,
        },
    ];

    return (
        <section id="pricing" aria-label="Pricing" className="section-panel-white py-24 relative overflow-hidden">
            {/* Background — matches features section */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div ref={headerRef} className="text-center mb-10 scroll-reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-highlighted mb-4">
                        Simple, <span className="text-primary-highlighted">Transparent Pricing</span>
                    </h2>

                    {/* Billing toggle */}
                    <div className="flex justify-center mt-6">
                        <div className="inline-flex items-center gap-1 p-1 rounded-full bg-surface-raised border border-border">
                            <button
                                onClick={() => setIsAnnual(false)}
                                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${!isAnnual
                                    ? 'bg-linear-to-r from-primary to-primary-highlighted text-text-on-primary shadow-md'
                                    : 'text-text-muted hover:text-text-main'
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setIsAnnual(true)}
                                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${isAnnual
                                    ? 'bg-linear-to-r from-primary to-primary-highlighted text-text-on-primary shadow-md'
                                    : 'text-text-muted hover:text-text-main'
                                    }`}
                            >
                                Annual
                                <span className="ml-1 opacity-80">-20%</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div ref={cardsRef} className="flex flex-wrap justify-center gap-8 scroll-reveal scroll-reveal-delay-2">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="relative w-88 flex flex-col card-premium ring-2 ring-primary scale-100 md:scale-105"
                        >
                            {/* Plan Name */}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-text-highlighted mb-2">
                                    {plan.name}
                                </h3>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-6">
                                <div className="flex items-baseline justify-center gap-1 flex-wrap">
                                    <span className="text-5xl font-bold text-primary-highlighted">
                                        {plan.price}
                                    </span>
                                    <span className="text-lg text-text-muted ml-1">{plan.period}</span>
                                </div>
                                <div className="text-text-muted text-xs mt-1">{plan.priceNote}</div>
                            </div>

                            {/* Features + CTA pushed to bottom */}
                            <div className="mt-auto">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature: string, featureIndex: number) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <svg
                                                className="w-5 h-5 mr-3 shrink-0 mt-0.5 text-secondary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-text-main">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <a
                                    href={plan.ctaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full block text-center"
                                    onClick={() => trackInstallExtension('pricing-pro')}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
