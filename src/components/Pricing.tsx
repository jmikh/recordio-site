import { useState } from 'react';
import { getCWSLink } from '../utils/constants';
import { trackInstallExtension } from '../utils/analytics';

const Check = ({ className = '' }: { className?: string }) => (
    <svg className={`w-5 h-5 shrink-0 mt-0.5 ${className}`} fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const free = {
        features: [
            'Auto smart zooms, spotlights & more',
            'Automatic silence cutting',
            '1080p downloads',
            'Beautiful music & background library',
            'Up to 5 active projects',
        ],
    };

    const pro = {
        price: isAnnual ? '$12' : '$15',
        note: isAnnual ? 'per seat / month, billed annually' : 'per seat / month, billed monthly',
        features: [
            '4K exports',
            'Auto-generated captions',
            'Collaboration and team library',
            'Unlimited viewer seats',
            'Shareable links',
        ],
    };

    return (
        <section id="pricing" aria-label="Pricing" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="section-head">
                    <span className="eyebrow">Pricing</span>
                    <h2 className="section-title">Start free. Upgrade when your team does.</h2>
                    <p className="section-subtitle">No credit card for the free plan. Cancel Pro any time.</p>

                    {/* Billing toggle */}
                    <div className="mt-8 inline-flex items-center gap-1 p-1 rounded-full bg-surface-raised border border-border">
                        <button
                            onClick={() => setIsAnnual(false)}
                            aria-pressed={!isAnnual}
                            className={`toggle-pill ${!isAnnual ? 'is-on' : ''}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            aria-pressed={isAnnual}
                            className={`toggle-pill ${isAnnual ? 'is-on' : ''}`}
                        >
                            Annual
                            <span className="toggle-save">save 20%</span>
                        </button>
                    </div>
                </div>

                <div className="price-grid">
                    {/* Free */}
                    <div className="price-card">
                        <div className="price-plan">Free</div>
                        <div className="price-amount">
                            <span className="price-number">$0</span>
                            <span className="price-period">forever</span>
                        </div>
                        <p className="price-note">Everything you need to make a great video.</p>
                        <ul className="price-list">
                            {free.features.map((f) => (
                                <li key={f}><Check className="text-primary" />{f}</li>
                            ))}
                        </ul>
                        <a
                            href={getCWSLink('pricing')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary w-full justify-center"
                            onClick={() => trackInstallExtension('pricing')}
                        >
                            Start for free
                        </a>
                    </div>

                    {/* Pro */}
                    <div className="price-card price-card--pro">
                        <div className="price-card-glow" aria-hidden="true" />
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center justify-between">
                                <div className="price-plan">Pro</div>
                                <span className="price-badge">Most popular</span>
                            </div>
                            <div className="price-amount">
                                <span className="price-number">{pro.price}</span>
                                <span className="price-period">/ month</span>
                            </div>
                            <p className="price-note">{pro.note}</p>
                            <ul className="price-list">
                                <li className="font-semibold"><Check className="text-secondary" />Everything in Free</li>
                                {pro.features.map((f) => (
                                    <li key={f}><Check className="text-secondary" />{f}</li>
                                ))}
                            </ul>
                            <a
                                href={getCWSLink('pricing-pro')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-on-dark w-full justify-center"
                                onClick={() => trackInstallExtension('pricing-pro')}
                            >
                                Get Pro
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
