import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getCWSLink, SUPPORT_EMAIL } from '../utils/constants';
import { trackInstallExtension } from '../utils/analytics';
const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    const headerRef = useScrollReveal();
    const cardsRef = useScrollReveal();

    const plans = [
        {
            name: 'FREE',
            price: '$0',
            period: '/ forever',
            priceNote: 'No card needed',
            features: [
                'Auto-zooms, auto cut silences & more',
                'Up to 5 recordings',
                'Video expires after 7 days',
                'Transcription via small local model',
                'Rendering in the browser (tab must stay in focus)',
            ],
            cta: 'Your current plan',
            ctaLink: getCWSLink('pricing'),
            popular: false,
            style: 'secondary' as const,
        },
        {
            name: 'PRO',
            price: isAnnual ? '$12' : '$15',
            period: '/ month',
            priceNote: isAnnual ? 'Billed annually' : 'Billed monthly',
            features: [
                '**Everything in Free**',
                '**Cloud rendering**',
                '**Unlimited recordings**',
                '**Transcription via top OpenAI model**',
                '**No video expiration**',
                '**Restore deleted videos within 30 days**',
            ],
            cta: 'Get Started',
            ctaLink: getCWSLink('pricing-pro'),
            popular: true,
            style: 'primary' as const,
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
                <div ref={headerRef} className="text-center mb-12 scroll-reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-highlighted mb-4">
                        Simple, <span className="text-primary-highlighted">Transparent Pricing</span>
                    </h2>
                </div>

                {/* Pricing Cards */}
                <div ref={cardsRef} className="flex flex-wrap justify-center gap-8 scroll-reveal scroll-reveal-delay-2">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative w-[320px] flex flex-col ${plan.popular
                                ? 'card-premium ring-2 ring-primary scale-100 md:scale-105'
                                : 'card-premium'
                                }`}
                        >



                            {plan.popular && (
                                <div className="absolute -top-[14px] left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wider bg-primary text-text-on-primary shadow-md border border-primary-highlighted whitespace-nowrap">
                                        Recommended
                                    </span>
                                </div>
                            )}

                            {/* Plan Name */}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-text-highlighted mb-2">
                                    {plan.name}
                                </h3>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-4">
                                {'price' in plan && (plan as any).price ? (
                                    <>
                                        <div className="flex items-baseline justify-center gap-2">
                                            <span className="text-5xl font-bold text-primary-highlighted">
                                                {(plan as any).price}
                                            </span>
                                            {plan.popular && (plan as any).period && (
                                                <span className="text-xl text-text-muted ml-1">{(plan as any).period}</span>
                                            )}
                                        </div>
                                        {!plan.popular && (plan as any).period && (
                                            <div className="text-text-muted mt-2">{(plan as any).period}</div>
                                        )}
                                        {'priceNote' in plan && (plan as any).priceNote && (
                                            <div className="text-text-muted text-xs mt-1">{(plan as any).priceNote}</div>
                                        )}
                                    </>
                                ) : (
                                    <div className="flex items-baseline justify-center">
                                        <span className="text-3xl font-bold text-text-highlighted">
                                            Custom
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Annual/Monthly Toggle — only inside Pro card */}
                            {plan.popular && (
                                <div className="flex justify-center mb-6">
                                    <div className="inline-flex items-center gap-1 p-1 rounded-full bg-surface-raised border border-border">
                                        <button
                                            onClick={() => setIsAnnual(false)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${!isAnnual
                                                ? 'bg-gradient-to-r from-primary to-primary-highlighted text-text-on-primary shadow-md'
                                                : 'text-text-muted hover:text-text-main'
                                                }`}
                                        >
                                            Monthly
                                        </button>
                                        <button
                                            onClick={() => setIsAnnual(true)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${isAnnual
                                                ? 'bg-gradient-to-r from-primary to-primary-highlighted text-text-on-primary shadow-md'
                                                : 'text-text-muted hover:text-text-main'
                                                }`}
                                        >
                                            Annual
                                            <span className="ml-1 opacity-80">-20%</span>
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Features + CTA pushed to bottom */}
                            <div className="mt-auto">
                                {/* Features */}
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature: string, featureIndex: number) => {
                                        const isBold = feature.startsWith('**') && feature.endsWith('**');
                                        const label = isBold ? feature.slice(2, -2) : feature;
                                        return (
                                            <li key={featureIndex} className="flex items-start">
                                                <svg
                                                    className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-secondary"
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
                                                <span className={isBold ? 'text-text-main font-semibold' : 'text-text-main'}>
                                                    {label}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* CTA Button */}
                                {plan.popular ? (
                                    <a
                                        href={(plan as any).ctaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary w-full block text-center"
                                        onClick={() => trackInstallExtension('pricing-pro')}
                                    >
                                        {plan.cta}
                                    </a>
                                ) : (
                                    <a
                                        href={getCWSLink('pricing')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary w-full block text-center"
                                        onClick={() => trackInstallExtension('pricing')}
                                    >
                                        {plan.cta}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team inquiry note */}
                <p className="text-center text-text-muted text-sm mt-10">
                    Looking to get Recordio for your team?{' '}
                    Contact <a
                        href={`mailto:${SUPPORT_EMAIL}`}
                        className="text-text-highlighted hover:underline"
                    >
                        {SUPPORT_EMAIL}
                    </a>
                </p>

            </div>
        </section>
    );
};

export default Pricing;
