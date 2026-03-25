import { useEffect, useRef, useState } from 'react';
import { TbZoomIn, TbBackground, TbArticle } from 'react-icons/tb';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { CgToolbarTop } from 'react-icons/cg';
import { LuLayers3 } from 'react-icons/lu';

// ── Feature definitions ──
// Video filenames live in /public/videos/ and are served at /videos/
interface Feature {
    label: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    video: string; // filename in /videos/
}

const FEATURES: Feature[] = [
    {
        label: 'Auto Zoom',
        icon: <TbZoomIn size={14} className="mr-1" />,
        title: 'Zooms to exactly what matters',
        description: 'Recordio doesn\'t just follow the cursor, it understands the layout of all elements you are interacting with, so no input box or form is clipped out. A zoom that gets it right every single time.',
        video: 'zoom.webm',
    },
    {
        label: 'Auto Spotlight',
        icon: <RiLightbulbFlashLine size={14} className="mr-1" />,
        title: 'Elevate important elements',
        description: 'The background dims and the element you interact with pops forward with a subtle glow. It makes the page comes alive.',
        video: 'spotlight.webm',
    },
    {
        label: 'Backgrounds',
        icon: <TbBackground size={14} className="mr-1" />,
        title: 'Beautiful, dynamic canvas',
        description: 'Add depth and polish with vibrant backgrounds. Pick from a curated library, build your own using color gradients, or upload your own brand-matched image.',
        video: 'backgrounds.webm',
    },
    {
        label: 'Captions',
        icon: <TbArticle size={14} className="mr-1" />,
        title: 'Locally AI-generated captions',
        description: 'AI generates perfectly-timed captions from your audio. Easily edit any mistakes, and style everything — font, color, position — to match your brand.',
        video: 'captions.webm',
    },
    {
        label: 'Clean Toolbar',
        icon: <CgToolbarTop size={14} className="mr-1" />,
        title: 'No more messy browser tabs',
        description: 'Your toolbar is replaced with a clean, minimal bar that shows just the page title. No messy bookmark bars, 47 open tabs, or embarrassing URLs.',
        video: 'toolbar.webm',
    },
    {
        label: 'Overlays',
        icon: <LuLayers3 size={14} className="mr-1" />,
        title: 'Blur sensitive information',
        description: 'Use overlays to blur out sensitive information, add explanatory text, arrows or overlays to highlight important information.',
        video: 'overlays.webm',
    },
];

const ADDITIONAL_FEATURES = [
    'Music',
    'Cursor effects',
    'Keyboard effects',
    'Aspect ratio formatting',
    'Cut and trim',
    'Speed up',
    '4K exports',
    'Shared links',
    'Intros and outros',
    'Intuitive editor',
    'Camera auto shrink',
    'Dynamic camera layouts',
    'Light and dark mode',
    'Viewership stats',
];

// ── Lazy video: only loads when section enters viewport ──
const LazyVideo = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

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
            { rootMargin: '200px' }, // start loading slightly before visible
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Play when visible
    useEffect(() => {
        if (!shouldLoad) return;
        const video = videoRef.current;
        const el = containerRef.current;
        if (!video || !el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => { });
                } else {
                    video.pause();
                }
            },
            { threshold: 0.3 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [shouldLoad]);

    return (
        <div
            ref={containerRef}
            className="feature-video-container"
        >
            {/* Shimmer placeholder while loading */}
            {!isLoaded && (
                <div className="feature-video-placeholder" />
            )}

            {shouldLoad && (
                <video
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onLoadedData={() => setIsLoaded(true)}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.4s ease',
                    }}
                >
                    <source src={src} type="video/mp4" />
                </video>
            )}
        </div>
    );
};

// ── Single feature row ──
const FeatureRow = ({ feature, index }: { feature: Feature; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [revealed, setRevealed] = useState(false);
    const isEven = index % 2 === 0;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className="step-section"
            style={{
                flexDirection: isEven ? undefined : 'row-reverse',
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(32px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
        >
            {/* Text column */}
            <div className="step-text">
                <div className="mb-4 inline-flex items-center px-3 py-1 bg-primary/10 text-primary uppercase tracking-wider text-xs font-bold rounded-full">
                    {feature.icon}
                    {feature.label}
                </div>
                <h3 className="step-title">{feature.title}</h3>
                <p className="step-description">{feature.description}</p>
            </div>

            {/* Video column */}
            <div className="step-visual">
                <LazyVideo src={`/videos/${feature.video}`} />
            </div>
        </div>
    );
};

// ── Main component ──
const FeatureVideos = () => {
    return (
        <section
            id="feature-videos"
            aria-label="Features"
            className="step-showcase section-panel-white"
        >
            <div className="step-showcase-header">
                <h2 className="step-showcase-title">
                    Pro-level features. Zero effort.
                </h2>
                <p className="step-showcase-subtitle">
                    A suite of intelligent tools that do the heavy lifting so you don't have to.
                </p>
            </div>

            {FEATURES.map((feature, i) => (
                <FeatureRow key={i} feature={feature} index={i} />
            ))}

            {/* Additional Features Marquee */}
            <div className="mt-20 pt-16 border-t border-border/50 max-w-7xl mx-auto">
                <div className="text-center mb-10 px-6">
                    <h3 className="text-3xl font-bold text-text-highlighted">
                        And so much more...
                    </h3>
                </div>

                <div className="feature-marquee-wrapper">
                    <div className="feature-marquee-track">
                        {/* Duplicate the array twice for seamless continuous scrolling */}
                        {[...ADDITIONAL_FEATURES, ...ADDITIONAL_FEATURES].map((feat, i) => (
                            <div
                                key={i}
                                className="inline-flex items-center px-5 py-2.5 rounded-full border border-border bg-surface-raised font-medium whitespace-nowrap text-text-main shadow-sm"
                            >
                                {feat}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureVideos;
