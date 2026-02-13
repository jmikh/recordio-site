import { useState } from 'react';
import { features } from './features.data';

const FeatureTabs = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = features[activeIndex];

    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left: Feature Tabs */}
            <div className="lg:w-[340px] flex-shrink-0">
                {/* Mobile: horizontal scroll */}
                <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-2 px-2 lg:mx-0 lg:px-0">
                    {features.map((feature, index) => (
                        <button
                            key={feature.id}
                            onClick={() => setActiveIndex(index)}
                            className={`flex-shrink-0 lg:flex-shrink text-left w-[260px] lg:w-full p-4 rounded-xl border transition-all duration-300 group ${index === activeIndex
                                ? 'bg-surface-raised border-primary shadow-lg shadow-primary/10'
                                : 'bg-transparent border-border hover:border-border-highlighted hover:bg-surface-raised/50'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                {/* Icon */}
                                <div
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${index === activeIndex
                                        ? `bg-gradient-to-br ${feature.gradient} text-text-on-primary shadow-md`
                                        : 'bg-surface-overlay text-text-muted group-hover:text-text-highlighted'
                                        }`}
                                >
                                    {feature.icon}
                                </div>
                                <div className="min-w-0">
                                    <div
                                        className={`font-semibold transition-colors duration-300 ${index === activeIndex
                                            ? 'text-text-highlighted'
                                            : 'text-text-main group-hover:text-text-highlighted'
                                            }`}
                                    >
                                        {feature.label}
                                    </div>
                                    <div className="text-sm text-text-muted truncate">
                                        {feature.tagline}
                                    </div>
                                </div>
                            </div>

                            {/* Active indicator bar */}
                            {index === activeIndex && (
                                <div className="hidden lg:block mt-3 h-0.5 rounded-full bg-gradient-to-r from-primary to-primary-highlighted" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right: Feature Content */}
            <div className="flex-1 min-w-0">
                <div
                    key={active.id}
                    className="animate-in fade-in duration-300"
                >
                    {/* Demo Video */}
                    <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-gradient-to-br ${active.gradient}`}>
                        {active.video ? (
                            <video
                                key={active.id}
                                className="w-full h-full object-contain"
                                src={active.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                            />
                        ) : (
                            <>
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                                        <svg className="w-10 h-10 text-surface-body ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-sm">
                                    <span className="text-white text-sm font-medium">Demo coming soon</span>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Text Content */}
                    <h3 className="text-2xl md:text-3xl font-bold text-text-highlighted mb-4">
                        {active.headline}
                    </h3>
                    <p className="text-text-main text-lg leading-relaxed mb-6">
                        {active.body}
                    </p>
                    <ul className="space-y-3">
                        {active.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-text-main">{bullet}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FeatureTabs;
