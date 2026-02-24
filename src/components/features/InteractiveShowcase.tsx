import { useEffect, useRef, useState } from 'react';

// ── Asset paths ──
const ASSETS = '/assets/interactive-demo';
const SCREEN_NO_TOOLBAR = `${ASSETS}/screen-without-toolbar.png`;
const OLD_TOOLBAR = `${ASSETS}/old-toolbar.png`;
const NEW_TOOLBAR = `${ASSETS}/new-toolbar.png`;
const MACBOOK = `${ASSETS}/macbook.png`;
const BACKGROUND = `${ASSETS}/background.avif`;
const CALENDAR_EVENT = `${ASSETS}/calendar-event.png`;
const WEBCAM = `${ASSETS}/webcam-overlay.png`;
const CAPTIONS = `${ASSETS}/captions-bar.png`;

// ── MacBook cutout coordinates (percentage of frame) ──
const CUTOUT = {
    left: (288 / 3131) * 100,   // ~9.2%
    top: (101 / 1932) * 100,    // ~5.23%
    width: (2548 / 3131) * 100, // ~81.38%
    height: (1600 / 1932) * 100 // ~82.82%
};

// ── Layout math ──
const OLD_TB_PCT = ((233 * 2548 / 2908) / 1600) * 100;    // ~12.75%
const NEW_TB_PCT = ((74 * 2548 / 2908) / 1600) * 100;     // ~4.05%

// ── Step definitions ──
const STEPS = [
    { label: 'Record Your Demo', subtitle: 'Record your tab, window, or screen — toolbar and all.' },
    { label: 'Custom Toolbar', subtitle: 'Hide your bookmarks, tabs, and other mess with a simplified clean toolbar.' },
    { label: 'Device Frame', subtitle: 'Wrap it in a premium MacBook frame.' },
    { label: 'Background', subtitle: 'Choose from beautiful presets or upload your own.' },
    { label: 'Camera & Captions', subtitle: 'Add your webcam recording and auto generated subtitles — fully styled.' },
    { label: 'Auto Zoom', subtitle: 'Intelligently zooms into your interactions while keeping surrounding context visible.' },
    { label: 'Auto Spotlight', subtitle: 'Automatically detects and highlights important elements and dims the rest.' },
];

const TOTAL_STEPS = STEPS.length;
const SCROLL_HEIGHT_VH = 200 * TOTAL_STEPS; // 200vh per step = 1400vh

// ── Transition duration for gate-triggered animations ──
const ANIM_DURATION = '0.7s';
const ANIM_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';
const TRANSITION = `all ${ANIM_DURATION} ${ANIM_EASING}`;

const InteractiveShowcase = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState(-1); // -1 = nothing visible yet

    useEffect(() => {
        const handleScroll = () => {
            const el = containerRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const scrollableHeight = el.offsetHeight - window.innerHeight;
            if (scrollableHeight <= 0) return;

            // Trigger step 0 when section is partially in view (30% visible)
            if (rect.top > window.innerHeight * 0.7) {
                setStep(-1);
                return;
            }

            const scrolled = -rect.top;
            const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
            const newStep = Math.min(Math.floor(progress * TOTAL_STEPS), TOTAL_STEPS - 1);
            setStep(newStep);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ── Gate checks: has this step been reached? ──
    const reached = (s: number) => step >= s;

    // Convenient booleans
    const hasScreen = reached(0);     // step 0: screen + old toolbar + calendar
    const hasNewTb = reached(1);      // step 1: toolbar swap
    const hasMacbook = reached(2);    // step 2: macbook frame
    const hasBg = reached(3);         // step 3: background
    const hasCamCap = reached(4);     // step 4: camera + captions
    const hasZoom = reached(5);       // step 5: zoom
    const hasSpotlight = reached(6);  // step 6: spotlight

    // Derived
    const zoomScale = hasZoom ? 1.4 : 1;
    const tbTopPct = hasNewTb ? NEW_TB_PCT : OLD_TB_PCT;
    const inSection = step >= 0;

    // ── Navigation helpers ──
    const scrollToStep = (targetStep: number) => {
        const el = containerRef.current;
        if (!el) return;
        const scrollableHeight = el.offsetHeight - window.innerHeight;
        const stepProgress = targetStep / TOTAL_STEPS;
        const targetScroll = el.offsetTop + stepProgress * scrollableHeight;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    };

    const skipSection = () => {
        const el = containerRef.current;
        if (!el) return;
        window.scrollTo({ top: el.offsetTop + el.offsetHeight, behavior: 'smooth' });
    };

    return (
        <section
            id="interactive-demo"
            ref={containerRef}
            className="relative"
            style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
        >
            {/* Sticky viewport */}
            <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden px-6 py-6">

                {/* ── Step navigation — vertical on right, hidden on small screens ── */}
                <nav
                    className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-end gap-3 transition-opacity duration-500"
                    style={{
                        opacity: inSection ? 1 : 0,
                        pointerEvents: inSection ? 'auto' : 'none',
                    }}
                >
                    {STEPS.map((s, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToStep(i)}
                            className="flex items-center gap-2"
                            aria-label={s.label}
                        >
                            {/* Text label */}
                            <span
                                className="hidden min-[1480px]:inline text-xs whitespace-nowrap"
                                style={{
                                    opacity: step === i ? 0.8 : 0,
                                    transform: step === i ? 'translateX(0)' : 'translateX(8px)',
                                    transition: 'all 0.3s ease',
                                    color: 'var(--color-text-muted)',
                                }}
                            >
                                {s.label}
                            </span>
                            {/* Number */}
                            <span
                                className="flex items-center justify-center rounded-full text-xs font-medium transition-all duration-300"
                                style={{
                                    width: 24,
                                    height: 24,
                                    backgroundColor: step === i
                                        ? 'var(--color-text-highlighted)'
                                        : 'transparent',
                                    color: step === i
                                        ? '#0a0a0a'
                                        : step >= i
                                            ? 'var(--color-text-highlighted)'
                                            : 'var(--color-text-muted)',
                                    opacity: step >= i ? 1 : 0.4,
                                }}
                            >
                                {i + 1}
                            </span>
                        </button>
                    ))}
                </nav>


                {/* ── Step label — full width ── */}
                <div className="w-full max-w-[1100px] mx-auto text-center mb-4 flex-shrink-0 h-16 flex flex-col items-center justify-center relative">
                    {STEPS.map((s, i) => (
                        <div
                            key={i}
                            className="absolute"
                            style={{
                                opacity: step === i ? 1 : 0,
                                transform: step === i ? 'translateY(0)' : 'translateY(12px)',
                                transition: TRANSITION,
                                pointerEvents: step === i ? 'auto' : 'none',
                            }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-text-highlighted">
                                {s.label}
                            </h3>
                            <p className="text-text-muted text-lg mt-1">
                                {s.subtitle}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── Video wrapper — width constrained by viewport height to preserve aspect ratio ── */}
                <div className="relative w-full mx-auto flex-1 min-h-0 flex items-center justify-center"
                    style={{ maxWidth: 'min(1100px, calc((100vh - 160px) * 3131 / 1932))' }}
                >

                    {/* ── Outer border frame ── */}
                    <div
                        className="relative w-full mx-auto"
                        style={{
                            aspectRatio: '3131 / 1932',
                            borderRadius: hasBg ? '16px' : '0px',
                            border: hasBg ? '2px solid var(--color-border-highlighted)' : '2px solid transparent',
                            overflow: 'hidden',
                            transition: TRANSITION,
                        }}
                    >
                        {/* ── Zoomable content ── */}
                        <div
                            className="relative w-full h-full"
                            style={{
                                transform: `scale(${zoomScale})`,
                                transformOrigin: 'center center',
                                transition: `transform 1s ${ANIM_EASING}`,
                            }}
                        >

                            {/* Background */}
                            <img
                                src={BACKGROUND}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover"
                                style={{ opacity: hasBg ? 1 : 0, transition: TRANSITION }}
                            />

                            {/* MacBook frame */}
                            <img
                                src={MACBOOK}
                                alt="MacBook frame"
                                className="absolute inset-0 w-full h-full object-contain z-20"
                                style={{ opacity: hasMacbook ? 1 : 0, transition: TRANSITION }}
                            />

                            {/* ── Screen content area ── */}
                            <div
                                className="absolute z-10"
                                style={{
                                    left: `${CUTOUT.left}%`,
                                    top: `${CUTOUT.top}%`,
                                    width: `${CUTOUT.width}%`,
                                    height: `${CUTOUT.height}%`,
                                }}
                            >
                                {/* Old toolbar */}
                                <img
                                    src={OLD_TOOLBAR}
                                    alt=""
                                    className="absolute left-0 w-full z-10"
                                    style={{
                                        top: 0,
                                        height: `${OLD_TB_PCT}%`,
                                        objectFit: 'fill',
                                        opacity: hasScreen && !hasNewTb ? 1 : 0,
                                        transform: hasNewTb ? 'translateY(-100%)' : 'translateY(0)',
                                        transition: TRANSITION,
                                    }}
                                />

                                {/* New toolbar */}
                                <img
                                    src={NEW_TOOLBAR}
                                    alt=""
                                    className="absolute left-0 w-full z-10"
                                    style={{
                                        top: 0,
                                        height: `${NEW_TB_PCT}%`,
                                        objectFit: 'fill',
                                        opacity: hasNewTb ? 1 : 0,
                                        transform: hasNewTb ? 'translateY(0)' : 'translateY(-100%)',
                                        transition: TRANSITION,
                                    }}
                                />

                                {/* Screen content */}
                                <img
                                    src={SCREEN_NO_TOOLBAR}
                                    alt="Screen recording"
                                    className="absolute left-0 w-full"
                                    style={{
                                        top: `${tbTopPct}%`,
                                        bottom: 0,
                                        objectFit: 'fill',
                                        opacity: hasScreen ? 1 : 0,
                                        transition: TRANSITION,
                                    }}
                                />

                                {/* Spotlight dim overlay */}
                                <div
                                    className="absolute inset-0 z-30 pointer-events-none"
                                    style={{
                                        backgroundColor: hasSpotlight ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
                                        transition: TRANSITION,
                                    }}
                                />

                                {/* Calendar event */}
                                <img
                                    src={CALENDAR_EVENT}
                                    alt="Calendar event"
                                    className="absolute pointer-events-none"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                        width: `${(898 / 2548) * 100}%`,
                                        transform: `translate(-50%, -50%) scale(${hasSpotlight ? 1.15 : 1})`,
                                        opacity: hasScreen ? 1 : 0,
                                        zIndex: hasSpotlight ? 40 : 15,
                                        filter: hasSpotlight
                                            ? 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.5))'
                                            : 'drop-shadow(0 0 0 transparent)',
                                        transition: TRANSITION,
                                    }}
                                />
                            </div>
                        </div>

                        {/* ── Webcam + Captions — NOT affected by zoom ── */}
                        <div className="absolute inset-0 z-30 pointer-events-none">
                            {/* Webcam */}
                            <img
                                src={WEBCAM}
                                alt="Camera"
                                className="absolute pointer-events-none"
                                style={{
                                    left: '4%',
                                    bottom: '4%',
                                    width: `${(392 / 3131) * 100}%`,
                                    borderRadius: '50%',
                                    border: '2px solid var(--color-border-highlighted)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                                    opacity: hasCamCap ? 1 : 0,
                                    transform: `scale(${hasCamCap ? 1 / zoomScale : 0.8})`,
                                    transformOrigin: 'bottom left',
                                    transition: TRANSITION,
                                }}
                            />

                            {/* Captions */}
                            <img
                                src={CAPTIONS}
                                alt="Captions"
                                className="absolute pointer-events-none rounded-xl"
                                style={{
                                    left: '50%',
                                    bottom: '4%',
                                    width: `${(1766 / 3131) * 100}%`,
                                    transform: `translateX(-50%) translateY(${hasCamCap ? 0 : 20}px)`,
                                    opacity: hasCamCap ? 1 : 0,
                                    transition: TRANSITION,
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* ── Skip button — below video ── */}
                <button
                    onClick={skipSection}
                    className="flex-shrink-0 mt-4 text-sm flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-500 hover:opacity-100"
                    style={{
                        color: 'var(--color-text-muted)',
                        backgroundColor: 'var(--color-surface-secondary)',
                        border: '1px solid var(--color-border-muted)',
                        opacity: inSection ? 0.7 : 0,
                        pointerEvents: inSection ? 'auto' : 'none',
                    }}
                >
                    Skip demo ↓
                </button>
            </div>
        </section>
    );
};

export default InteractiveShowcase;
