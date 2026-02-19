import { useState, useEffect, lazy, Suspense } from 'react';

const SplineBackground = lazy(() => import('./SplineBackground'));

interface HeroProps {
    onJoinWaitlist: () => void;
}

const AUTO_POLISHED_TEXT = 'Auto-Polished.';

const Hero = ({ onJoinWaitlist }: HeroProps) => {
    const [typewriterKey, setTypewriterKey] = useState(0);

    useEffect(() => {
        setTypewriterKey(k => k + 1);
    }, []);

    return (
        <section aria-label="Hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Spline Background — lazy-loaded to avoid blocking initial paint */}
            <Suspense fallback={null}>
                <SplineBackground />
            </Suspense>

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
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
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
                        Other recorders just follow your cursor. Recordio understands the page. Precise zoom, automatic spotlight, and studio-quality video in seconds.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 hero-entrance hero-entrance-delay-4">
                        <button
                            onClick={onJoinWaitlist}
                            className="btn-primary text-lg px-8 py-4"
                        >
                            <span className="flex items-center space-x-2">
                                <span>Join the Waitlist</span>
                            </span>
                        </button>
                        <button
                            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-secondary text-lg px-8 py-4"
                        >
                            See It in Action ↓
                        </button>
                    </div>

                    {/* Trust line */}
                    <p className="text-text-muted text-sm pt-2 hero-entrance hero-entrance-delay-4">
                        ✦ Your first 4K export is free — no watermark, no catch.
                    </p>
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
