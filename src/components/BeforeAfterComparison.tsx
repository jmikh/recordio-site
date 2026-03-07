import { useRef, useEffect, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CDN_BASE = 'https://cdn.recordio.cc/demos';

const BeforeAfterComparison = () => {
    const sectionRef = useScrollReveal();
    const beforeRef = useRef<HTMLVideoElement>(null);
    const afterRef = useRef<HTMLVideoElement>(null);
    const hasStarted = useRef(false);

    /* ── Sync playback: start both videos when section enters viewport ── */
    const startPlayback = useCallback(() => {
        if (hasStarted.current) return;
        const before = beforeRef.current;
        const after = afterRef.current;
        if (!before || !after) return;

        hasStarted.current = true;
        before.play().catch(() => { });
        after.play().catch(() => { });
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) startPlayback();
            },
            { threshold: 0.25 },
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, [startPlayback, sectionRef]);

    /* ── Keep videos frame-locked on loop restart ── */
    useEffect(() => {
        const before = beforeRef.current;
        const after = afterRef.current;
        if (!before || !after) return;

        const resync = () => {
            if (Math.abs(before.currentTime - after.currentTime) > 0.15) {
                after.currentTime = before.currentTime;
            }
        };

        before.addEventListener('seeked', resync);
        before.addEventListener('play', resync);
        return () => {
            before.removeEventListener('seeked', resync);
            before.removeEventListener('play', resync);
        };
    }, []);

    return (
        <section
            id="before-after"
            ref={sectionRef}
            className="section-panel scroll-reveal relative py-24 md:py-32 overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* ── Heading ── */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-highlighted mb-4">
                        See the{' '}
                        <span className="text-primary-highlighted">Difference</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
                        Same recording. One click. Studio-quality output.
                    </p>
                </div>

                {/* ── Video pair ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Before */}
                    <div className="relative">
                        <div className="before-after-video">
                            <video
                                ref={beforeRef}
                                src={`${CDN_BASE}/before.mp4`}
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                className="w-full h-auto block"
                            />
                        </div>
                        <span className="before-after-label before-after-label--before">
                            BEFORE
                        </span>
                    </div>

                    {/* After */}
                    <div className="relative">
                        <div className="before-after-video before-after-video--after">
                            <video
                                ref={afterRef}
                                src={`${CDN_BASE}/after.mp4`}
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                className="w-full h-auto block"
                            />
                        </div>
                        <span className="before-after-label before-after-label--after">
                            AFTER
                        </span>
                    </div>
                </div>

                {/* ── Trust callout ── */}
                <div className="flex justify-center mt-10">
                    <div className="callout-pill">
                        <span className="text-primary-highlighted text-lg leading-none">✦</span>
                        <span className="text-text-main text-sm md:text-base">
                            <strong className="text-text-highlighted">Zero manual edits.</strong>{' '}
                            Every zoom and spotlight in the After video was automatically generated
                            by Recordio&nbsp;— no tweaking, no adjustments.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterComparison;
