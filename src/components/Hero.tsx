import { getCWSLink, CWS_REVIEWS_URL } from '../utils/constants';
import { trackInstallExtension } from '../utils/analytics';

const Star = () => (
    <svg className="w-3.5 h-3.5 text-secondary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const Hero = () => {
    return (
        <section aria-label="Hero" className="relative overflow-hidden hero-bg">
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-8 lg:pb-12">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Eyebrow: rating badge */}
                    <a
                        href={CWS_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-eyebrow hero-entrance hero-entrance-delay-1"
                    >
                        <img src="/assets/chrome-store.svg" alt="" className="w-4 h-4" />
                        <span className="flex gap-0.5" aria-label="5 out of 5 stars">
                            {[...Array(5)].map((_, i) => <Star key={i} />)}
                        </span>
                        <span className="font-semibold text-text-highlighted">5.0</span>
                        <span className="text-text-muted">on the Chrome Web Store</span>
                    </a>

                    <h1 className="hero-title mt-6 hero-entrance hero-entrance-delay-1">
                        The screen recorder your product <span className="accent-word">deserves.</span>
                    </h1>

                    <p className="mt-6 text-xl md:text-2xl text-text-muted max-w-2xl mx-auto leading-relaxed hero-entrance hero-entrance-delay-2">
                        Recordio understands the page you're recording. Zooms, spotlights and captions land exactly where they should, automatically.
                    </p>

                    {/* CTAs */}
                    <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 hero-entrance hero-entrance-delay-3">
                        <a
                            href={getCWSLink('hero')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary btn-lg"
                            onClick={() => trackInstallExtension('hero')}
                        >
                            <img src="/assets/chrome-store.svg" alt="" className="w-5 h-5" />
                            Add to Chrome — it's free
                        </a>
                        <a href="#feature-videos" className="btn-secondary btn-lg">
                            See it in action
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>

                    {/* Facts line */}
                    <ul className="hero-facts mt-6 hero-entrance hero-entrance-delay-3">
                        <li>One-click install</li>
                        <li>Mac, Windows, Linux &amp; ChromeOS</li>
                        <li>No credit card</li>
                        <li>Also captures <a href="/screenshots/" className="underline underline-offset-4 decoration-border hover:text-primary hover:decoration-primary transition-colors">full-page screenshots</a></li>
                    </ul>
                </div>

                {/* ── Editor image, glowing and fading out at the bottom ── */}
                <div className="hero-image-wrap mt-14 lg:mt-20 hero-entrance hero-entrance-delay-4">
                    <div className="hero-image-glow" aria-hidden="true" />
                    <img
                        src="/assets/hero-editor.webp"
                        srcSet="/assets/hero-editor-1440.webp 1440w, /assets/hero-editor.webp 2872w"
                        sizes="(max-width: 1280px) 100vw, 1152px"
                        alt="The Recordio editor: screen settings on the left, a recording framed in a MacBook Pro on a purple background on the right"
                        width={2872}
                        height={1064}
                        fetchPriority="high"
                        decoding="async"
                        className="hero-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
