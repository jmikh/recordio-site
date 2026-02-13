import { useEffect, useRef, useState } from 'react';
import { features } from './features.data';

const FeatureScroll = () => {
    const [activeFeatureId, setActiveFeatureId] = useState(features[0].id);
    const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = features.map((feature, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveFeatureId(feature.id);
                    }
                },
                { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
            );

            if (observerRefs.current[index]) {
                observer.observe(observerRefs.current[index]);
            }

            return observer;
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    // activeFeature was unused, removed.

    return (
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            {/* Sticky Visual Side */}
            <div className="hidden lg:block lg:w-1/2 relative">
                <div className="sticky top-32 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border bg-surface-raised">
                    <div className="relative w-full h-full">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className={`absolute inset-0 transition-opacity duration-500 ${feature.id === activeFeatureId ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                    }`}
                            >
                                {feature.video ? (
                                    <video
                                        className="w-full h-full object-cover"
                                        src={feature.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                ) : (
                                    <div className="w-full h-full bg-surface-overlay flex items-center justify-center">
                                        <div className="text-text-muted">Preview for {feature.label}</div>
                                    </div>
                                )}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 mix-blend-overlay`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scrolling Text Side */}
            <div className="lg:w-1/2 py-12 lg:py-0">
                <div className="space-y-32">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            ref={(el) => {
                                observerRefs.current[index] = el;
                            }}
                            className="min-h-[50vh] flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.gradient} text-text-on-primary shadow-lg`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-text-highlighted">{feature.label}</h3>
                            </div>

                            {/* Mobile Visual (visible only on small screens) */}
                            <div className="lg:hidden w-full aspect-video rounded-xl bg-surface-raised mb-6 overflow-hidden border border-border">
                                {feature.video && (
                                    <video
                                        className="w-full h-full object-cover"
                                        src={feature.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                )}
                            </div>

                            <p className="text-2xl font-medium text-text-highlighted mb-4 leading-tight">
                                {feature.headline}
                            </p>
                            <p className="text-text-muted text-lg leading-relaxed mb-8">
                                {feature.body}
                            </p>
                            <ul className="space-y-4">
                                {feature.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-text-main font-medium">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureScroll;
