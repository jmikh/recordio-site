import { trackInstallExtension } from '../utils/analytics';
import SplineBackground from './SplineBackground';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Spline Background */}
            <SplineBackground />

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
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-2 pulse-glow" />
                        <span className="text-sm text-text-highlighted font-medium">
                            Now Available on Chrome Web Store
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                        <span className="gradient-text">Professional Screen Recordings.</span>
                        <br />
                        <span className="text-text-highlighted">Zero Editing.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed">
                        Record your screen, get auto-zoom, spotlight, and captions — polished and ready to share.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a
                            href="https://chrome.google.com/webstore"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-lg px-8 py-4"
                            onClick={() => trackInstallExtension('hero')}
                        >
                            <span className="flex items-center space-x-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z" />
                                </svg>
                                <span>Start Recording — Free</span>
                            </span>
                        </a>
                        <button
                            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-secondary text-lg px-8 py-4"
                        >
                            See It in Action ↓
                        </button>
                    </div>

                    {/* Trust line */}
                    <p className="text-text-muted text-sm pt-2">
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
