import Header from '../components/Header'
import Hero from '../components/Hero'
import VideoCarousel from '../components/VideoCarousel'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

// Set to true to show under construction page
const UNDER_CONSTRUCTION = true;

const UnderConstruction = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                <div className="glass rounded-3xl p-12 space-y-8">
                    {/* Logo/Icon */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-highlighted flex items-center justify-center shadow-2xl pulse-glow">
                                <svg className="w-12 h-12 text-text-on-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 w-24 h-24 rounded-full bg-primary/20 animate-ping" />
                        </div>
                    </div>

                    {/* Heading */}
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-text-highlighted mb-4">
                            <span className="gradient-text">Recordio</span> is Coming Soon
                        </h1>
                        <p className="text-xl text-text-main leading-relaxed">
                            We're building something amazing for you
                        </p>
                    </div>

                    {/* Message */}
                    <div className="bg-surface-raised rounded-2xl p-6 space-y-4 text-left">
                        <div className="flex items-start space-x-3">
                            <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h3 className="text-text-highlighted font-semibold mb-2">Product Under Development</h3>
                                <p className="text-text-main">
                                    Our team is working hard to bring you the best screen recording and video editing experience.
                                    We're in the final stages of development and testing.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3 pt-4 border-t border-border">
                            <svg className="w-6 h-6 text-primary-highlighted flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div>
                                <h3 className="text-text-highlighted font-semibold mb-2">Check Back Soon</h3>
                                <p className="text-text-main">
                                    We expect to launch within <strong className="text-primary-highlighted">the next week</strong>.
                                    Stay tuned for updates!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* What's Coming */}
                    <div className="space-y-3">
                        <p className="text-text-highlighted font-semibold">What to expect:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center space-x-2 text-text-main">
                                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Chrome Extension</span>
                            </div>
                            <div className="flex items-center space-x-2 text-text-main">
                                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Built-in Video Editor</span>
                            </div>
                            <div className="flex items-center space-x-2 text-text-main">
                                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>AI-Powered Captions</span>
                            </div>
                            <div className="flex items-center space-x-2 text-text-main">
                                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>4K Export Quality</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="pt-6 border-t border-border">
                        <p className="text-text-muted text-sm">
                            Questions? Reach out to{' '}
                            <a href="mailto:hello@recordio.site" className="text-primary-highlighted hover:text-secondary underline">
                                hello@recordio.site
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    // Show under construction page if flag is enabled
    if (UNDER_CONSTRUCTION) {
        return <UnderConstruction />;
    }

    // Normal home page
    return (
        <>
            <Header />
            <main>
                <Hero />
                <VideoCarousel />
                <Features />
                <Testimonials />
                <Pricing />
            </main>
            <Footer />
        </>
    );
};

export default Home;
