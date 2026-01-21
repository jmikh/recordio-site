const Pricing = () => {
    const plans = [
        {
            name: 'Free',
            price: '$0',
            period: 'forever',
            description: 'Perfect for getting started',
            features: [
                'Unlimited recordings',
                'Up to 5 minutes per video',
                '720p export quality',
                'Basic editing tools',
                'Chrome extension',
                'Community support',
            ],
            cta: 'Start Free',
            popular: false,
        },
        {
            name: 'Pro',
            price: '$12',
            period: 'per month',
            description: 'For serious creators',
            features: [
                'Everything in Free, plus:',
                'Unlimited video length',
                '4K export quality',
                'Advanced editing suite',
                'Auto captions & transcription',
                'Custom branding',
                'Priority support',
                'Cloud storage (100GB)',
            ],
            cta: 'Start Pro Trial',
            popular: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: 'contact us',
            description: 'For teams and organizations',
            features: [
                'Everything in Pro, plus:',
                'Unlimited team members',
                'SSO & advanced security',
                'Dedicated account manager',
                'Custom integrations',
                'API access',
                'Unlimited storage',
                'SLA guarantee',
            ],
            cta: 'Contact Sales',
            popular: false,
        },
    ];

    return (
        <section id="pricing" className="py-24 bg-surface-body relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 animated-gradient opacity-50" />
            <div className="absolute inset-0 gradient-mesh opacity-30" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-highlighted mb-4">
                        Simple, <span className="gradient-text">Transparent Pricing</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative ${plan.popular
                                    ? 'card-premium ring-2 ring-primary scale-105 md:scale-110'
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
                            <div className="text-center mb-8">
                                <div className="flex items-baseline justify-center">
                                    <span className="text-5xl font-bold gradient-text">
                                        {plan.price}
                                    </span>
                                </div>
                                <div className="text-text-muted mt-2">{plan.period}</div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
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
                            <button
                                className={
                                    plan.popular
                                        ? 'btn-primary w-full'
                                        : 'btn-secondary w-full'
                                }
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* FAQ */}
                <div className="mt-20 text-center">
                    <p className="text-text-muted mb-4">
                        Have questions? Check out our{' '}
                        <a href="#" className="text-primary hover:text-primary-highlighted underline">
                            FAQ
                        </a>{' '}
                        or{' '}
                        <a href="#" className="text-primary hover:text-primary-highlighted underline">
                            contact support
                        </a>
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-text-muted text-sm">
                        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>No credit card required</span>
                        <span className="text-border">•</span>
                        <span>Cancel anytime</span>
                        <span className="text-border">•</span>
                        <span>14-day money-back guarantee</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
