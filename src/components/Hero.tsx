import { useState, useEffect } from 'react';
import { getCWSLink } from '../utils/constants';

const AUTO_POLISHED_TEXT = 'Auto-Polished.';

const Hero = () => {
    const [typewriterKey, setTypewriterKey] = useState(0);

    useEffect(() => {
        setTypewriterKey(k => k + 1);
    }, []);

    return (
        <section aria-label="Hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Spline Background is rendered as a separate client:idle Astro island */}

            {/* Animated Background (Optional overlay) */}
            <div className="absolute inset-0 animated-gradient opacity-30 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 gradient-mesh opacity-40 pointer-events-none" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float" />
                <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-highlighted/10 rounded-full blur-3xl float" style={{ animationDelay: '4s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
                <div className="space-y-8">
                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                        <span className="text-text-highlighted hero-entrance hero-entrance-delay-1">Professional Screen Recordings.</span>
                        <br />
                        <span className="effect-sparkle-container" key={typewriterKey}>
                            <span>
                                {AUTO_POLISHED_TEXT.split('').map((char, i) => (
                                    <span
                                        key={i}
                                        className={`effect-typewriter-sparkle-letter${char === ' ' ? ' space' : ''}`}
                                        style={{ animationDelay: `${0.5 + i * 0.06}s` }}
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </span>
                                ))}
                            </span>
                            {Array.from({ length: 8 }).map((_, i) => (
                                <span key={i} className="sparkle-particle" />
                            ))}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed hero-entrance hero-entrance-delay-3">
                        Other recorders just follow your cursor. Recordio understands your page. Precise zoom, automatic spotlight, and studio-quality video in seconds.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 hero-entrance hero-entrance-delay-4">
                        <a
                            href={getCWSLink('hero')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-lg px-8 py-4"
                        >
                            <span className="flex items-center space-x-2">
                                <span>Install Extension — It's Free</span>
                            </span>
                        </a>
                        <button
                            onClick={() => document.getElementById('before-after')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-secondary text-lg px-8 py-4"
                        >
                            See It in Action ↓
                        </button>
                    </div>

                    {/* Launch announcement pill */}
                    <div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm hero-entrance hero-entrance-delay-4"
                        style={{
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            background: 'rgba(139, 92, 246, 0.06)',
                            boxShadow: '0 0 20px rgba(139, 92, 246, 0.08)',
                        }}
                    >
                        <span>🚀</span>
                        <span>
                            <span className="text-text-highlighted font-medium">Limited Time</span>
                            <span className="text-text-muted"> — Free 7 days of Pro. No credit card · No BS.</span>
                        </span>
                    </div>

                    {/* Social proof strip */}
                    <div className="flex items-center justify-center gap-2 text-sm hero-entrance hero-entrance-delay-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-text-highlighted font-semibold">5.0</span>
                        <span className="text-text-muted">·</span>
                        <span className="text-text-muted">Loved on Chrome Web Store</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
