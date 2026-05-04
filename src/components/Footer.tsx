import { useScrollReveal } from '../hooks/useScrollReveal';
import { getCWSLink, SUPPORT_EMAIL } from '../utils/constants';
import { trackInstallExtension } from '../utils/analytics';

const Footer = ({ source = 'footer' }: { source?: string }) => {
    const ctaSource = source === 'footer' ? 'footer' : `${source}_footer`;
    const currentYear = new Date().getFullYear();
    const contentRef = useScrollReveal();

    return (
        <footer className="bg-surface-body border-t border-border">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div ref={contentRef} className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 scroll-reveal">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <a href="/" className="inline-block">
                            <img
                                src="/assets/fulllogo-light.webp"
                                alt="Recordio logo"
                                className="h-8 w-auto transition-opacity hover:opacity-80"
                            />
                        </a>
                        <p className="text-text-muted text-sm max-w-md text-center md:text-left">
                            Professional screen recordings — polished and ready to share.
                        </p>
                    </div>

                    {/* CTA */}
                    <a
                        href={getCWSLink(ctaSource)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-shrink-0"
                        onClick={() => trackInstallExtension(ctaSource)}
                    >
                        Install Extension
                    </a>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-text-muted text-sm">
                        © {currentYear} Recordio. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                        <a href="/compare/" className="text-text-muted hover:text-primary transition-colors">Compare</a>
                        <a href="/for/" className="text-text-muted hover:text-primary transition-colors">Platforms</a>
                        <a href="/blog/" className="text-text-muted hover:text-primary transition-colors">Blog</a>
                        <a href="/privacy/" className="text-text-muted hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="/terms/" className="text-text-muted hover:text-primary transition-colors">Terms of Service</a>
                        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-text-muted hover:text-primary transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
