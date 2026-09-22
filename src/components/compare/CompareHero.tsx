import { useEffect, useRef, useState } from 'react';
import { getCWSLink } from '../../utils/constants';
import { trackInstallExtension } from '../../utils/analytics';

interface CompareHeroProps {
    /** Competitor slug, e.g. "screen-studio". Used for the CTA's utm_content and analytics label. */
    slug: string;
    name: string;
    /** Two sentences shown under the H1. */
    verdict: string;
}

const CompareHero = ({ slug, name, verdict }: CompareHeroProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);
    const cta = `compare-${slug}`;

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.unobserve(el);
                }
            },
            { rootMargin: '200px' },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!shouldLoad) return;
        const video = videoRef.current;
        const el = containerRef.current;
        if (!video || !el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().then(() => setIsLoaded(true)).catch(() => { });
                } else {
                    video.pause();
                }
            },
            { threshold: 0.1 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [shouldLoad]);

    return (
        <section
            className="relative overflow-hidden"
            style={{ backgroundColor: 'var(--color-section-purple)' }}
        >
            {/* Ambient glow */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-20 flex flex-col items-center text-center">
                <span className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary uppercase tracking-widest text-xs font-bold rounded-full border border-primary/20 hero-entrance hero-entrance-delay-1">
                    {name} Alternative
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-highlighted leading-tight mb-6 hero-entrance hero-entrance-delay-1">
                    Recordio vs {name}
                </h1>

                <p className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed hero-entrance hero-entrance-delay-2">
                    {verdict}
                </p>

                <div className="mb-14 flex flex-col sm:flex-row items-center gap-4 hero-entrance hero-entrance-delay-2">
                    <a
                        href={getCWSLink(cta)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-lg px-10 py-4"
                        onClick={() => trackInstallExtension(cta)}
                    >
                        Add to Chrome, it's free
                    </a>
                    <a href="#pricing-comparison" className="btn-secondary text-lg px-10 py-4">
                        See pricing
                    </a>
                </div>

                <div
                    ref={containerRef}
                    className="w-full max-w-4xl hero-entrance hero-entrance-delay-3"
                >
                    <div className="before-after-video before-after-video--after">
                        {!isLoaded && (
                            <div className="feature-video-placeholder" style={{ aspectRatio: '16/9' }} />
                        )}
                        {shouldLoad && (
                            <video
                                ref={videoRef}
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                onLoadedData={() => setIsLoaded(true)}
                                onCanPlay={() => setIsLoaded(true)}
                                className="w-full h-auto block"
                                style={{
                                    opacity: isLoaded ? 1 : 0,
                                    transition: 'opacity 0.5s ease',
                                }}
                            >
                                <source src="/videos/after.webm" type="video/webm" />
                                <source src="/videos/after.mp4" type="video/mp4" />
                            </video>
                        )}
                    </div>
                    <span className="before-after-label before-after-label--after">
                        RECORDIO
                    </span>
                </div>
            </div>
        </section>
    );
};

export default CompareHero;
