import { useCallback, useEffect, useRef, useState } from 'react';
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
    hue: number;   // oklch hue that colors this row's panel, pill and glow
}

const FEATURES: Feature[] = [
    {
        label: 'Auto Zoom',
        icon: <TbZoomIn size={14} className="mr-1" />,
        title: 'Zooms to exactly what matters',
        description: 'Recordio doesn\'t just follow the cursor, it understands the layout of all elements you are interacting with, so no input box or form is clipped out. A zoom that gets it right every single time.',
        video: 'zoom.webm',
        hue: 290,
    },
    {
        label: 'Auto Spotlight',
        icon: <RiLightbulbFlashLine size={14} className="mr-1" />,
        title: 'Elevate important elements',
        description: 'The background dims and the element you interact with pops forward with a subtle glow. It makes the page comes alive.',
        video: 'spotlight.webm',
        hue: 78,
    },
    {
        label: 'Backgrounds',
        icon: <TbBackground size={14} className="mr-1" />,
        title: 'Beautiful, dynamic canvas',
        description: 'Add depth and polish with vibrant backgrounds. Pick from a curated library, build your own using color gradients, or upload your own brand-matched image.',
        video: 'backgrounds.webm',
        hue: 290,
    },
    {
        label: 'Captions',
        icon: <TbArticle size={14} className="mr-1" />,
        title: 'AI-generated captions',
        description: 'AI generates perfectly-timed captions from your audio that tracks to the word level. Easily edit any mistakes, or cut the video based on the captions.',
        video: 'captions.webm',
        hue: 78,
    },
    {
        label: 'Clean Toolbar',
        icon: <CgToolbarTop size={14} className="mr-1" />,
        title: 'No more messy browser tabs',
        description: 'Your toolbar is replaced with a clean, minimal bar that shows just the page title. No messy bookmark bars, 47 open tabs, or embarrassing URLs.',
        video: 'toolbar.webm',
        hue: 290,
    },
    {
        label: 'Overlays',
        icon: <LuLayers3 size={14} className="mr-1" />,
        title: 'Blur sensitive information',
        description: 'Use overlays to blur out sensitive information, add explanatory text, arrows or overlays to highlight important information.',
        video: 'overlays.webm',
        hue: 78,
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

/**
 * Decides which single video should be playing: the one whose container is
 * most in view (at least 40% visible, closest to the viewport centre).
 * Everything else is paused.
 */
const useSinglePlayer = () => {
    const observer = useRef<IntersectionObserver | null>(null);
    const ratios = useRef(new Map<Element, number>());

    const evaluate = useCallback(() => {
        const viewportCenter = window.innerHeight / 2;
        let best: Element | null = null;
        let bestDistance = Infinity;

        ratios.current.forEach((ratio, el) => {
            if (ratio < 0.4) return;
            const rect = el.getBoundingClientRect();
            const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
            if (distance < bestDistance) {
                bestDistance = distance;
                best = el;
            }
        });

        ratios.current.forEach((_, el) => {
            const video = el.querySelector('video');
            if (!video) return;
            if (el === best) {
                if (video.paused) video.play().catch(() => { });
            } else if (!video.paused) {
                video.pause();
            }
        });
    }, []);

    const getObserver = useCallback(() => {
        if (!observer.current) {
            observer.current = new IntersectionObserver(
                (entries) => {
                    entries.forEach((e) => ratios.current.set(e.target, e.intersectionRatio));
                    evaluate();
                },
                { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] },
            );
        }
        return observer.current;
    }, [evaluate]);

    // Container refs attach before this effect runs, so the observer is created lazily
    const register = useCallback((el: HTMLElement | null) => {
        if (el) getObserver().observe(el);
    }, [getObserver]);

    useEffect(() => () => observer.current?.disconnect(), []);

    return { register, evaluate };
};

// ── Lazy video: loads when near the viewport; playback is decided by the parent ──
interface LazyVideoProps {
    src: string;
    register: (el: HTMLElement | null) => void;
    onMounted: () => void;
}

const LazyVideo = ({ src, register, onMounted }: LazyVideoProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        register(el);

        const loader = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    loader.unobserve(el);
                }
            },
            { rootMargin: '300px' }, // start loading before it scrolls into view
        );
        loader.observe(el);
        return () => loader.disconnect();
    }, [register]);

    // Once the <video> exists, let the parent re-decide who plays
    useEffect(() => {
        if (shouldLoad) onMounted();
    }, [shouldLoad, onMounted]);

    return (
        <div ref={containerRef} className="feature-video-container">
            {!isLoaded && <div className="feature-video-placeholder" />}

            {shouldLoad && (
                <video
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onPlaying={() => setIsLoaded(true)}
                    onLoadedData={() => setIsLoaded(true)}
                    className="feature-video"
                    style={{ opacity: isLoaded ? 1 : 0 }}
                >
                    <source src={src} type="video/webm" />
                    <source src={src.replace('.webm', '.mp4')} type="video/mp4" />
                </video>
            )}
        </div>
    );
};

// ── Single feature row ──
interface FeatureRowProps {
    feature: Feature;
    index: number;
    register: (el: HTMLElement | null) => void;
    onVideoMounted: () => void;
}

const FeatureRow = ({ feature, index, register, onVideoMounted }: FeatureRowProps) => {
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
            className={`feature-panel${revealed ? ' is-revealed' : ''}${isEven ? '' : ' is-flipped'}`}
            style={{ '--hue': feature.hue } as React.CSSProperties}
        >
            {/* Text column */}
            <div className="feature-panel-text">
                <div className="feature-pill">
                    {feature.icon}
                    {feature.label}
                </div>
                <h3 className="step-title">{feature.title}</h3>
                <p className="step-description">{feature.description}</p>
            </div>

            {/* Video column */}
            <div className="feature-panel-visual">
                <LazyVideo src={`/videos/${feature.video}`} register={register} onMounted={onVideoMounted} />
            </div>
        </div>
    );
};

// ── Main component ──
const FeatureVideos = () => {
    const { register, evaluate } = useSinglePlayer();

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

            <div className="feature-panels">
                {FEATURES.map((feature, i) => (
                    <FeatureRow
                        key={feature.video}
                        feature={feature}
                        index={i}
                        register={register}
                        onVideoMounted={evaluate}
                    />
                ))}
            </div>

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
