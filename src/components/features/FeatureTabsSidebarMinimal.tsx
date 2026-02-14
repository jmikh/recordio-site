import { useState, useEffect } from 'react';
import { features } from './features.data';

const FeatureTabsSidebarMinimal = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = features[activeIndex];

    // Prefetch all demo videos in the background after mount
    useEffect(() => {
        const videoUrls = features
            .map((f) => f.video)
            .filter((url): url is string => !!url);

        const links: HTMLLinkElement[] = [];

        videoUrls.forEach((url) => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.as = 'video';
            link.href = url;
            document.head.appendChild(link);
            links.push(link);
        });

        return () => {
            links.forEach((link) => document.head.removeChild(link));
        };
    }, []);

    return (
        <>
            {/* ── Mobile: Stacked feature list ── */}
            <div className="lg:hidden flex flex-col gap-16 items-center">
                {features.map((feature) => (
                    <div key={feature.id} className="flex flex-col gap-4 w-full max-w-[700px]">
                        {/* Name & tagline */}
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-text-highlighted">
                                {feature.label}
                            </h3>
                            <p className="text-sm text-text-muted mt-1">
                                {feature.tagline}
                            </p>
                        </div>

                        {/* Video */}
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface-raised border border-border shadow-2xl">
                            {feature.video ? (
                                <video
                                    className="w-full h-full object-cover"
                                    src={feature.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-surface-overlay flex items-center justify-center">
                                    <div className="text-text-muted">Preview for {feature.label}</div>
                                </div>
                            )}
                            <div className={`absolute inset-0 bg-gradient-to-tr ${feature.gradient} opacity-10`} />
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Desktop: Sidebar tabs + content ── */}
            <div className="hidden lg:flex lg:flex-row lg:items-start justify-center gap-16">
                {/* Left: Feature Tabs */}
                <div className="w-[300px] flex-shrink-0 pt-16">
                    <div className="flex flex-col gap-0 border-l-2 border-surface-raised pl-0 relative">
                        {/* Active Track indicator */}
                        <div
                            className="absolute left-[-2px] w-[2px] bg-gradient-to-b from-primary to-primary-highlighted transition-all duration-300 ease-out"
                            style={{
                                height: 64,
                                transform: `translateY(${activeIndex * 88}px)`
                            }}
                        />

                        {features.map((feature, index) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveIndex(index)}
                                className={`group text-left px-6 py-4 transition-all duration-300 relative ${index === activeIndex
                                    ? 'opacity-100'
                                    : 'opacity-55 hover:opacity-70'
                                    }`}
                            >
                                <div className="flex flex-col gap-1">
                                    <span className={`text-lg font-bold transition-colors duration-300 ${index === activeIndex ? 'text-text-highlighted' : 'text-text-main'
                                        }`}>
                                        {feature.label}
                                    </span>
                                    <span className="text-sm text-text-muted">
                                        {feature.tagline}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Feature Content */}
                <div className="flex-1 min-w-0 max-w-[700px]">
                    <div
                        key={active.id}
                        className="animate-in fade-in duration-300"
                    >
                        {/* Demo Video */}
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-surface-raised border border-border shadow-2xl">
                            {active.video ? (
                                <video
                                    key={active.id}
                                    className="w-full h-full object-cover"
                                    src={active.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-surface-overlay flex items-center justify-center">
                                    <div className="text-text-muted">Preview for {active.label}</div>
                                </div>
                            )}
                            <div className={`absolute inset-0 bg-gradient-to-tr ${active.gradient} opacity-10`} />
                        </div>

                        {/* Text Content */}
                        <div className="max-w-2xl text-left min-h-[140px]">
                            <h3 className="text-2xl md:text-3xl font-bold text-text-highlighted mb-4">
                                {active.headline}
                            </h3>
                            <p className="text-text-main text-lg leading-relaxed mb-6">
                                {active.body}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureTabsSidebarMinimal;
