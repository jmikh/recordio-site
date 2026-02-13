import { features } from './features.data';

const FeatureBento = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
            {features.map((feature, index) => (
                <div
                    key={feature.id}
                    className={`group relative overflow-hidden rounded-3xl bg-surface-raised border border-border hover:border-border-highlighted transition-all duration-300 ${index === 0 || index === 3 ? 'md:col-span-2' : ''
                        }`}
                >
                    <div className="flex flex-col h-full">
                        {/* Content Header */}
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.gradient} text-text-on-primary shadow-lg`}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-text-highlighted">{feature.label}</h3>
                                    <p className="text-text-muted">{feature.tagline}</p>
                                </div>
                            </div>
                            <p className="text-text-main leading-relaxed max-w-2xl">
                                {feature.body}
                            </p>
                        </div>

                        {/* Video/Preview Area */}
                        <div className={`relative flex-1 min-h-[300px] mt-4 mx-4 mb-4 rounded-2xl overflow-hidden bg-surface-overlay/50 border border-border/50 group-hover:border-primary/20 transition-colors duration-500`}>
                            {feature.video ? (
                                <video
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src={feature.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-surface-raised">
                                    <div className="text-text-muted text-sm">Demo Preview</div>
                                </div>
                            )}

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-surface-raised via-transparent to-transparent opacity-20`} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeatureBento;
