const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Chen',
            role: 'Product Designer',
            company: 'TechFlow',
            avatar: 'bg-gradient-to-br from-pink-400 to-purple-600',
            rating: 5,
            quote: 'Recordio has completely transformed how I create design walkthroughs. The built-in editor is a game-changer!',
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Software Engineer',
            company: 'DevCorp',
            avatar: 'bg-gradient-to-br from-blue-400 to-cyan-600',
            rating: 5,
            quote: 'Best screen recorder I\'ve used. The quality is incredible and it doesn\'t slow down my system at all.',
        },
        {
            name: 'Emily Watson',
            role: 'Content Creator',
            company: 'YouTube',
            avatar: 'bg-gradient-to-br from-green-400 to-emerald-600',
            rating: 5,
            quote: 'The auto-captions feature saves me hours every week. Recordio is now an essential part of my workflow.',
        },
        {
            name: 'David Park',
            role: 'Customer Success',
            company: 'SaaSCo',
            avatar: 'bg-gradient-to-br from-orange-400 to-red-600',
            rating: 5,
            quote: 'Creating support videos for customers has never been easier. Recordio makes me look professional every time.',
        },
        {
            name: 'Lisa Thompson',
            role: 'Educator',
            company: 'Online Academy',
            avatar: 'bg-gradient-to-br from-indigo-400 to-purple-600',
            rating: 5,
            quote: 'My students love the clarity of my lesson recordings. Recordio helps me create engaging educational content.',
        },
        {
            name: 'James Miller',
            role: 'Marketing Manager',
            company: 'GrowthLabs',
            avatar: 'bg-gradient-to-br from-yellow-400 to-orange-600',
            rating: 5,
            quote: 'We use Recordio for all our product demos and training materials. It\'s intuitive, powerful, and reliable.',
        },
    ];

    return (
        <section id="testimonials" className="py-24 bg-surface relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-highlighted mb-4">
                        Loved by <span className="gradient-text">Creators Worldwide</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Join thousands of professionals who trust Recordio for their screen recording needs
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="card-premium"
                        >
                            {/* Stars */}
                            <div className="flex space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-secondary"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-text-main leading-relaxed mb-6 italic">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center space-x-4 pt-4 border-t border-border">
                                {/* Avatar */}
                                <div className={`w-12 h-12 rounded-full ${testimonial.avatar} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                    <span className="text-white font-bold text-lg">
                                        {testimonial.name.charAt(0)}
                                    </span>
                                </div>

                                {/* Info */}
                                <div>
                                    <div className="font-semibold text-text-highlighted">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-text-muted">
                                        {testimonial.role} at {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-20 text-center">
                    <p className="text-text-muted mb-8">Trusted by teams at</p>
                    <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
                        {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((company) => (
                            <div key={company} className="text-2xl font-bold text-text-highlighted">
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
