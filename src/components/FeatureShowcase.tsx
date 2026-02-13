import FeatureTabsSidebarMinimal from './features/FeatureTabsSidebarMinimal';

const FeatureShowcase = () => {
    return (
        <section id="features" className="py-24 bg-surface-body relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold tracking-widest uppercase text-primary-highlighted mb-4 block">
                        Intelligent Editing
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-highlighted mb-4">
                        Features That <span className="gradient-text">Set Us Apart</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Powered by real page understanding — not just cursor tracking
                    </p>
                </div>

                {/* Content */}
                <div className="min-h-[600px]">
                    <FeatureTabsSidebarMinimal />
                </div>
            </div>
        </section>
    );
};

export default FeatureShowcase;


