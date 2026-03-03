import { useEffect, useRef } from 'react';

const ASSETS = '/assets/features';

interface BentoFeature {
    title: string;
    description: string;
    image: string;
}

/*
 * Order is intentional — CSS columns flow top-to-bottom, left-to-right.
 * With 3 columns and 7 items the browser distributes ~3-2-2:
 *   Col 1: Camera (tall), AutoCut (short), Toolbar (short)
 *   Col 2: Music (v.tall), Captions (short)
 *   Col 3: Export (medium), Hotkeys (medium)
 */
const features: BentoFeature[] = [
    /* ── Column 1 ── */
    {
        title: 'Dynamic Camera',
        description: 'Full-screen intros, outros, and transitions.',
        image: `${ASSETS}/camera-dynamic.webp`,
    },
    {
        title: 'AutoCut',
        description: 'Remove silence and dead air automatically.',
        image: `${ASSETS}/autocut.webp`,
    },
    {
        title: 'Toolbar Settings',
        description: 'Custom toolbar, dark mode, shortened URLs.',
        image: `${ASSETS}/toolbar.webp`,
    },
    /* ── Column 2 ── */
    {
        title: 'Background Music',
        description: 'Built-in presets or upload your own tracks.',
        image: `${ASSETS}/music.webp`,
    },
    {
        title: 'Auto Captions',
        description: 'Local AI — your audio never leaves your device.',
        image: `${ASSETS}/captions.webp`,
    },
    /* ── Column 3 ── */
    {
        title: 'Download or Share',
        description: 'Download locally or publish shareable links with viewership analytics.',
        image: `${ASSETS}/export.webp`,
    },
    {
        title: 'Hotkey Overlays',
        description: 'Show keyboard shortcuts during playback.',
        image: `${ASSETS}/hotkeys.png`,
    },
];

const FeatureBento = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed');
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="all-features"
            style={{
                paddingTop: '6rem',
                paddingBottom: '6rem',
                backgroundColor: 'var(--color-surface-body)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div className="gradient-mesh" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

            <div
                ref={sectionRef}
                className="scroll-reveal"
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '72rem',
                    marginInline: 'auto',
                    paddingInline: '1.5rem',
                }}
            >
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <h2
                        style={{
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                            fontWeight: 700,
                            color: 'var(--color-text-highlighted)',
                            marginBottom: '0.75rem',
                        }}
                    >
                        And there's more
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '36rem', marginInline: 'auto' }}>
                        Everything you need to make your recordings look professional.
                    </p>
                </div>

                {/* Masonry via CSS columns */}
                <div className="bento-masonry">
                    {features.map((f) => (
                        <div key={f.title} className="bento-card">
                            <div>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        color: 'var(--color-text-highlighted)',
                                        marginBottom: '0.25rem',
                                    }}
                                >
                                    {f.title}
                                </h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                                    {f.description}
                                </p>
                            </div>
                            <img
                                src={f.image}
                                alt={f.title}
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    display: 'block',
                                }}
                            />
                        </div>
                    ))}
                </div>

                <style>{`
                    .bento-masonry {
                        columns: 3;
                        column-gap: 0.75rem;
                    }
                    .bento-card {
                        break-inside: avoid;
                        margin-bottom: 0.75rem;
                        background-color: var(--color-surface-raised);
                        border: 1px solid var(--color-border);
                        border-radius: 1rem;
                        padding: 1.25rem;
                        display: inline-flex;
                        flex-direction: column;
                        gap: 0.75rem;
                        width: 100%;
                        transition: border-color 0.3s ease, box-shadow 0.3s ease;
                    }
                    .bento-card:hover {
                        border-color: var(--color-border-highlighted);
                        box-shadow: 0 0 24px color-mix(in oklch, var(--color-primary) 15%, transparent);
                    }
                    @media (max-width: 900px) {
                        .bento-masonry { columns: 2; }
                    }
                    @media (max-width: 560px) {
                        .bento-masonry { columns: 1; }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default FeatureBento;
