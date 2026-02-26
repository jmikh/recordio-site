import { trackInstallExtension } from '../utils/analytics';
import { getCWSLink } from '../utils/constants';

const steps = [
    {
        number: '01',
        title: 'Install & Record',
        description: 'Add Recordio from the Chrome Web Store. Hit record on any tab, window, or your full desktop.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Auto-Edit',
        description: 'Recordio applies Auto Zoom, Auto Spotlight, and captions automatically. Tweak anything on the timeline.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Export & Share',
        description: 'Export in 4K. Your first export is free — no watermark, no paywall surprise.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
        ),
    },
];

const HowItWorks = () => {
    return (
        <section className="py-24 bg-surface-body relative overflow-hidden">
            <div className="absolute inset-0 gradient-mesh opacity-20" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-highlighted mb-4">
                        From Recording to Published <span className="gradient-text">in Minutes</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Three steps. No learning curve.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative text-center group">
                            {/* Connector line (hidden on last item and mobile) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-gradient-to-r from-border-highlighted to-border" />
                            )}

                            {/* Icon */}
                            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary-highlighted flex items-center justify-center text-text-on-primary mx-auto mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300">
                                {step.icon}
                            </div>

                            {/* Step number */}
                            <div className="text-xs font-bold tracking-widest uppercase text-primary-highlighted mb-2">
                                Step {step.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-text-highlighted mb-3">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-text-muted leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <a
                        href={getCWSLink('how-it-works')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-block text-lg px-8 py-4"
                        onClick={() => trackInstallExtension('how-it-works')}
                    >
                        Start Recording — Free
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
