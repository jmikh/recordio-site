import { useEffect, useRef } from 'react';

interface FeatureCategory {
    title: string;
    items: string[];
}

const featureCategories: FeatureCategory[] = [
    {
        title: 'Auto Zoom',
        items: [
            'Automatically zooms to the element you interact with',
            'Each zoom is its own editable block — move, resize, adjust timing',
            'No tangled keyframes — every zoom is independent',
        ],
    },
    {
        title: 'Auto Spotlight',
        items: [
            'Dims the background to draw viewer attention',
            'Elevates and expands the spotlighted element',
            'Fully editable blocks, just like zoom',
        ],
    },
    {
        title: 'Webcam',
        items: [
            'Full control over layout, size, and position',
            'Auto shrink during zoom',
            'Dynamic layout — full-screen intros, outros, or hide it entirely',
            'Feathering — blend the camera into the screen behind it',
            'Shadow borders and glow effects',
        ],
    },
    {
        title: 'Backgrounds',
        items: [
            'Customizable gradient colors',
            'Solid background colors',
            'Presets from a beautiful built-in library',
            'Upload your own image',
            'Blur the background image',
        ],
    },
    {
        title: 'Click & Keystroke Effects',
        items: [
            'Visual mouse-click and drag effects',
            'Sound effects for clicks and drags',
            'Multiple visual styles with full color control',
            'Keyboard shortcut overlays (⌘C, ⌘V, etc.)',
            'Customizable sizing and positioning',
        ],
    },
    {
        title: 'Captions',
        items: [
            'Auto-generated from your audio — edit if the AI gets it wrong',
            'Control size, font, and colors',
            'Word-by-word highlighting as you speak',
        ],
    },
    {
        title: 'Music',
        items: [
            'Choose from a built-in preset library',
            'Upload your own tracks',
        ],
    },
    {
        title: 'Export & Sharing',
        items: [
            'Download locally or publish a shareable link',
            'Viewership analytics on published links',
            '4K resolution at up to 60 fps',
            'Multiple aspect ratios for any platform',
        ],
    },
    {
        title: 'Recording Tools',
        items: [
            'Crop the recorded area',
            'Blur sensitive information during recording',
        ],
    },
];

const Check = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        style={{ flexShrink: 0, marginTop: '0.15em' }}
    >
        <path
            d="M3.5 8.5L6.5 11.5L12.5 4.5"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

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
                    maxWidth: '64rem',
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

                {/* Feature list — multi-column flow */}
                <div className="feature-checklist">
                    {featureCategories.map((cat) => (
                        <div key={cat.title} className="feature-checklist-group">
                            <h3
                                style={{
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em',
                                    color: 'var(--color-primary-highlighted)',
                                    marginBottom: '0.75rem',
                                }}
                            >
                                {cat.title}
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {cat.items.map((item) => (
                                    <li
                                        key={item}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.6rem',
                                            fontSize: '0.9rem',
                                            color: 'var(--color-text-main)',
                                            lineHeight: 1.55,
                                            paddingBlock: '0.3rem',
                                        }}
                                    >
                                        <Check />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <style>{`
                    .feature-checklist {
                        columns: 3;
                        column-gap: 3rem;
                    }
                    .feature-checklist-group {
                        break-inside: avoid;
                        margin-bottom: 2rem;
                    }
                    @media (max-width: 900px) {
                        .feature-checklist { columns: 2; column-gap: 2.5rem; }
                    }
                    @media (max-width: 560px) {
                        .feature-checklist { columns: 1; }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default FeatureBento;
