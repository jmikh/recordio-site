interface FooterProps {
    onJoinWaitlist: () => void;
}

const Footer = ({ onJoinWaitlist }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface-body border-t border-border">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <a href="/" className="inline-block">
                            <img
                                src="/assets/fulllogo-dark.png"
                                alt="Recordio"
                                className="h-8 w-auto transition-opacity hover:opacity-80"
                            />
                        </a>
                        <p className="text-text-muted text-sm max-w-md text-center md:text-left">
                            Professional screen recordings — polished and ready to share.
                        </p>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={onJoinWaitlist}
                        className="btn-primary flex-shrink-0"
                    >
                        Join Waitlist
                    </button>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-text-muted text-sm">
                        © {currentYear} Recordio. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                        <a href="/privacy" className="text-text-muted hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="/terms" className="text-text-muted hover:text-primary transition-colors">Terms of Service</a>
                        <a href="mailto:support@recordio.cc" className="text-text-muted hover:text-primary transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
