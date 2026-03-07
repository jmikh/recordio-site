import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getCWSLink } from '../utils/constants';
import { trackGetPro } from '../utils/analytics';

const APP_URL = 'https://app.recordio.cc';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);
    const headerRef = useScrollReveal();
    const cardsRef = useScrollReveal();

    const plans = [
        {
            name: 'Basic',
            price: 'Free',
            period: 'No credit card',
            features: [
                'Unlimited 720p exports',
                'Unlimited projects',
                'Auto Zoom, Spotlight & Captions',
                '~No HD exports',
                '~Recordio watermark',
            ],
            cta: 'Start Free',
            ctaLink: getCWSLink('pricing'),
            popular: false,
            style: 'secondary' as const,
        },
        {
            name: 'Pro',
            price: isAnnual ? '$48' : '$15',
            period: isAnnual ? '/ year' : '/ month',
            priceNote: isAnnual ? 'Just $4/month' : '$4/month if billed annually',
            features: [
                'Everything in Free, plus:',
                'Unlimited 4K exports',
                'No watermarks',
                'Shareable links',
            ],
            cta: 'Get Pro',
            popular: true,
            style: 'primary' as const,
        },
        {
            name: 'Lifetime',
            price: '$89',
            period: 'one-time',
            features: [
                'Everything in Pro',
                'Pay once, yours forever',
                'Lifetime updates',
                'Priority support',
            ],
            cta: 'Get Lifetime',
            popular: false,
            bestValue: true,
            style: 'primary' as const,
        },
    ];

    return (
        <section id="pricing" aria-label="Pricing" className="section-panel py-24 relative overflow-hidden">
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



                            {/* Plan Name */}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-text-highlighted mb-2">
                                    {plan.name}
                                </h3>
                            </div>

                            {/* Launch Sale badge — Lifetime only */}
                            {(plan as any).bestValue && (
                                <div className="flex justify-center mb-3">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/15 text-secondary border border-secondary/25">
                                        🚀 Launch Sale
                                    </span>
                                </div>
                            )}

                            {/* Price */}
                            <div className="text-center mb-4">
                                {'price' in plan && (plan as any).price ? (
                                    <>
                                        <div className="flex items-baseline justify-center gap-2">
                                            {(plan as any).bestValue && (
                                                <span className="text-2xl text-text-muted line-through opacity-50">
                                                    $119
                                                </span>
                                            )}
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
                                            <span className="ml-1 opacity-80">-73%</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                            {/* Features + CTA pushed to bottom */}
                            <div className="mt-auto">
                                {/* Features */}
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature: string, featureIndex: number) => {
                                        const isNegative = feature.startsWith('~');
                                        const label = isNegative ? feature.slice(1) : feature;
                                        return (
                                            <li key={featureIndex} className="flex items-start">
                                                {isNegative ? (
                                                    <svg
                                                        className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-text-muted opacity-40"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 12h14"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${feature.startsWith('Everything')
                                                            ? 'text-text-muted'
                                                            : 'text-secondary'
                                                            }`}
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
                                                )}
                                                <span
                                                    className={
                                                        isNegative
                                                            ? 'text-text-muted opacity-60'
                                                            : feature.startsWith('Everything')
                                                                ? 'text-text-muted font-semibold'
                                                                : 'text-text-main'
                                                    }
                                                >
                                                    {label}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {!plan.popular && !(plan as any).bestValue && (
                                    <p className="text-center text-text-muted text-xs mb-3">
                                        Includes 7-day Pro trial — limited time
                                    </p>
                                )}
                                {/* CTA Button */}
                                {plan.popular ? (
                                    <a
                                        href={`${APP_URL}/?checkout=${isAnnual ? 'yearly' : 'monthly'}`}
                                        className="btn-primary w-full block text-center"
                                        onClick={() => trackGetPro(isAnnual ? 'yearly' : 'monthly')}
                                    >
                                        {plan.cta}
                                    </a>
                                ) : (plan as any).bestValue ? (
                                    <a
                                        href={`${APP_URL}/?checkout=lifetime`}
                                        className="btn-primary w-full block text-center"
                                        onClick={() => trackGetPro('lifetime')}
                                    >
                                        {plan.cta}
                                    </a>
                                ) : (
                                    <a
                                        href={getCWSLink('pricing')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary w-full block text-center"
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
                        href="mailto:support@recordio.cc"
                        className="text-text-highlighted hover:underline"
                    >
                        support@recordio.cc
                    </a>
                </p>

            </div>
        </section>
    );
};

export default Pricing;
