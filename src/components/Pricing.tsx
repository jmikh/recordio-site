import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PricingProps {
    onJoinWaitlist: () => void;
}

const Pricing = ({ onJoinWaitlist }: PricingProps) => {
    const [isAnnual, setIsAnnual] = useState(true);
    const headerRef = useScrollReveal();
    const cardsRef = useScrollReveal();

    const plans = [
        {
            name: 'Free',
            price: '$0',
            period: 'forever',
            description: 'Try the full product, on us',
            features: [
                'Unlimited 720p exports with watermark',
                '1 free 4K export',
                'Auto Zoom, Spotlight & Captions',
                'Advanced Editor',
                'Unlimited projects',
            ],
            cta: 'Start Free',
            ctaLink: 'https://chrome.google.com/webstore',
            popular: false,
            style: 'secondary' as const,
        },
        {
            name: 'Pro',
            price: isAnnual ? '$59' : '$12',
            period: isAnnual ? 'per year' : 'per month',
            priceNote: isAnnual ? 'That\'s less than $5/mo' : '$59/yr if billed annually',
            description: 'For creators who ship often',
            features: [
                'Everything in Free, plus:',
                'Unlimited 4K exports',
                'Custom branding & watermarks',
                'Priority support',
            ],
            cta: 'Get Pro',
            popular: true,
            style: 'primary' as const,
        },
        {
            name: 'Teams',
            description: 'For teams that create together',
            features: [
                'Everything in Pro, plus:',
                'Unlimited team members',
                'Team management dashboard',
                'Shared presets & templates',
            ],
            cta: 'Contact Us',
            ctaLink: 'mailto:support@recordio.cc',
            popular: false,
            style: 'secondary' as const,
        },
    ];

    return (
        <section id="pricing" className="py-24 bg-surface-body relative overflow-hidden">
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
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Every feature on every plan. Pay only for volume.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div ref={cardsRef} className="flex flex-wrap justify-center gap-8 scroll-reveal scroll-reveal-delay-2">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative w-[320px] ${plan.popular
                                ? 'card-premium ring-2 ring-primary scale-100 md:scale-105'
                                : 'card-premium'
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-text-on-primary text-sm font-bold shadow-lg">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Plan Name */}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-text-highlighted mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-text-muted text-sm">{plan.description}</p>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-4">
                                {'price' in plan && (plan as any).price ? (
                                    <>
                                        <div className="flex items-baseline justify-center">
                                            <span className="text-5xl font-bold text-primary-highlighted">
                                                {(plan as any).price}
                                            </span>
                                        </div>
                                        <div className="text-text-muted mt-2">{(plan as any).period}</div>
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
                                            <span className="ml-1 opacity-80">-59%</span>
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature: string, featureIndex: number) => (
                                    <li key={featureIndex} className="flex items-start">
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
                                        <span
                                            className={
                                                feature.startsWith('Everything')
                                                    ? 'text-text-muted font-semibold'
                                                    : 'text-text-main'
                                            }
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            {plan.ctaLink?.startsWith('mailto') ? (
                                <a
                                    href={plan.ctaLink}
                                    className="btn-secondary w-full block text-center"
                                >
                                    {plan.cta}
                                </a>
                            ) : (
                                <button
                                    onClick={onJoinWaitlist}
                                    className={`w-full ${plan.style === 'primary'
                                        ? 'btn-primary'
                                        : 'btn-secondary'
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Pricing;
