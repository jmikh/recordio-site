const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 animated-gradient" />
            <div className="absolute inset-0 gradient-mesh opacity-60" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float" />
                <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-highlighted/10 rounded-full blur-3xl float" style={{ animationDelay: '4s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
                <div className="space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-2 pulse-glow" />
                        <span className="text-sm text-text-highlighted font-medium">
                            Smart Screen Recording for Chrome
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                        <span className="gradient-text">Record. Edit. Share.</span>
                        <br />
                        <span className="text-text-highlighted">Effortlessly.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed">
                        Transform your screen recordings into professional videos with Recordio.
                        Capture, edit, and share stunning content in seconds—right from your browser.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a
                            href="https://chrome.google.com/webstore"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-lg px-8 py-4"
                        >
                            <span className="flex items-center space-x-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z" />
                                </svg>
                                <span>Add to Chrome - It's Free</span>
                            </span>
                        </a>
                        <button
                            onClick={() => document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-secondary text-lg px-8 py-4"
                        >
                            Watch Demo
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text">50K+</div>
                            <div className="text-text-muted text-sm">Active Users</div>
                        </div>
                        <div className="w-px h-12 bg-border hidden sm:block" />
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text">500K+</div>
                            <div className="text-text-muted text-sm">Videos Recorded</div>
                        </div>
                        <div className="w-px h-12 bg-border hidden sm:block" />
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text">4.8★</div>
                            <div className="text-text-muted text-sm">Chrome Store Rating</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
