import { useState, useEffect, useRef, useCallback } from 'react';
import { getCWSLink, VIDEOS_BASE } from '../utils/constants';
import { trackInstallExtension } from '../utils/analytics';

const Hero = () => {
    const [typewriterKey, setTypewriterKey] = useState(0);
    const beforeRef = useRef<HTMLVideoElement>(null);
    const afterRef = useRef<HTMLVideoElement>(null);
    const videoSectionRef = useRef<HTMLDivElement>(null);
    const hasStarted = useRef(false);

    useEffect(() => {
        setTypewriterKey(k => k + 1);
    }, []);

    /* ── Start playback when videos enter viewport ── */
    const startPlayback = useCallback(() => {
        if (hasStarted.current) return;
        const before = beforeRef.current;
        const after = afterRef.current;
        if (!before || !after) return;
        hasStarted.current = true;

        // Kick off loading, then play together once both are ready
        before.preload = 'auto';
        after.preload = 'auto';
        before.load();
        after.load();

        let played = false;

        const tryPlay = () => {
            if (played) return;
            if (before.readyState >= 3 && after.readyState >= 3) {
                played = true;
                before.currentTime = 0;
                after.currentTime = 0;
                before.play().catch(() => {});
                after.play().catch(() => {});
            }
        };

        before.addEventListener('canplay', tryPlay);
        after.addEventListener('canplay', tryPlay);
        tryPlay();
    }, []);

    useEffect(() => {
        const el = videoSectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) startPlayback(); },
            { threshold: 0.25 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [startPlayback]);

    /* ── Gentle sync: only correct large drift, no mid-playback seeks ── */
    useEffect(() => {
        const before = beforeRef.current;
        const after = afterRef.current;
        if (!before || !after) return;

        // Check drift every 2 seconds — only correct if >500ms off
        const interval = setInterval(() => {
            if (before.paused || after.paused) return;
            const drift = Math.abs(before.currentTime - after.currentTime);
            if (drift > 0.5) {
                after.currentTime = before.currentTime;
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section aria-label="Hero" className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-section-purple)' }}>
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
                {/* Two-column: text left, videos right */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* ── Text column ── */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-text-highlighted hero-entrance hero-entrance-delay-1">
                            The screen recorder your product <span className="underline decoration-primary decoration-4 underline-offset-4">deserves.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed hero-entrance hero-entrance-delay-2">
                            Loom recordings don't do your brand justice. Recordio automatically turns messy walkthroughs into stunning product videos that your customers will love.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 pt-4 hero-entrance hero-entrance-delay-3">
                            <a
                                href={getCWSLink('hero')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-lg px-8 py-4"
                                onClick={() => trackInstallExtension('hero')}
                            >
                                <span className="flex items-center space-x-2">
                                    <span>Install Extension — It's Free</span>
                                </span>
                            </a>
                        </div>



                        {/* Social proof strip */}
                        <div className="flex items-center lg:justify-start justify-center gap-2 text-sm hero-entrance hero-entrance-delay-3">
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

                    {/* ── Videos column ── */}
                    <div ref={videoSectionRef} className="flex-1 w-full max-w-xl lg:max-w-none flex flex-col gap-4 hero-entrance hero-entrance-delay-2">
                        {/* After (Recordio) */}
                        <div className="relative">
                            <div className="before-after-video before-after-video--after">
                                <video
                                    ref={afterRef}
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-auto block"
                                >
                                    <source src={`${VIDEOS_BASE}/after.webm`} type="video/webm" />
                                    <source src={`${VIDEOS_BASE}/after.mp4`} type="video/mp4" />
                                </video>
                            </div>
                            <span className="before-after-label before-after-label--after">
                                RECORDIO
                            </span>
                        </div>

                        {/* Before (Loom) */}
                        <div className="relative text-opacity-80">
                            <div className="before-after-video opacity-80 backdrop-blur-sm grayscale-[20%]">
                                <video
                                    ref={beforeRef}
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-auto block"
                                >
                                    <source src={`${VIDEOS_BASE}/before.webm`} type="video/webm" />
                                    <source src={`${VIDEOS_BASE}/before.mp4`} type="video/mp4" />
                                </video>
                            </div>
                            <span className="before-after-label before-after-label--before">
                                LOOM
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
