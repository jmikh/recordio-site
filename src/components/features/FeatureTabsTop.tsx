import { useState } from 'react';
import { features } from './features.data';

const FeatureTabsTop = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = features[activeIndex];

    return (
        <div className="flex flex-col gap-12">
            {/* Top: Horizontal Tabs */}
            <div className="flex justify-center">
                <div className="inline-flex p-1.5 rounded-2xl bg-surface-raised border border-border overflow-x-auto max-w-full">
                    {features.map((feature, index) => (
                        <button
                            key={feature.id}
                            onClick={() => setActiveIndex(index)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 text-sm font-semibold whitespace-nowrap ${index === activeIndex
                                ? 'bg-surface-overlay text-text-highlighted shadow-md'
                                : 'text-text-muted hover:text-text-main hover:bg-surface-overlay/50'
                                }`}
                        >
                            {/* Small Icon */}
                            <div className={`w-5 h-5 ${index === activeIndex ? 'text-primary' : 'text-current opacity-70'}`}>
                                {feature.icon}
                            </div>
                            {feature.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-5xl mx-auto w-full">
                <div
                    key={active.id}
                    className="animate-in fade-in zoom-in-95 duration-300 grid lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-raised border border-border mb-6`}>
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`} />
                            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">{active.label}</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-text-highlighted mb-6 leading-tight">
                            {active.headline}
                        </h3>
                        <p className="text-text-main text-lg leading-relaxed mb-8">
                            {active.body}
                        </p>

                        <ul className="space-y-4">
                            {active.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${active.gradient}`} />
                                    <span className="text-text-main">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Media */}
                    <div className="order-1 lg:order-2">
                        <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-surface-raised border border-border group`}>
                            {active.video ? (
                                <video
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src={active.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-surface-overlay">
                                    <span className="text-text-muted">Preview</span>
                                </div>
                            )}

                            {/* Glossy overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureTabsTop;
