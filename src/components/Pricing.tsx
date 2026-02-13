import { useState } from 'react';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);

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
            ctaLink: '#',
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
            {/* Animated background */}
            <div className="absolute inset-0 animated-gradient opacity-50" />
            <div className="absolute inset-0 gradient-mesh opacity-30" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-highlighted mb-4">
                        Simple, <span className="gradient-text">Transparent Pricing</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Every feature on every plan. Pay only for volume.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="flex flex-wrap justify-center gap-8">
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
                                            <span className="text-5xl font-bold gradient-text">
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
                            <a
                                href={plan.ctaLink}
                                target={plan.ctaLink.startsWith('http') ? '_blank' : undefined}
                                rel={plan.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className={`block text-center ${plan.style === 'primary'
                                    ? 'btn-primary w-full'
                                    : 'btn-secondary w-full'
                                    }`}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom trust line */}
                <div className="mt-10 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-text-muted text-sm">
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            No credit card required
                        </span>
                        <span className="text-border">•</span>
                        <span>Cancel anytime</span>
                        <span className="text-border">•</span>
                        <span>All features on every plan</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
