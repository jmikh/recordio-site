import { SUPPORT_EMAIL, CWS_REVIEWS_URL } from '../utils/constants';

const columns = [
    {
        title: 'Product',
        links: [
            { label: 'Features', href: '/#feature-videos' },
            { label: 'Pricing', href: '/#pricing' },
            { label: 'FAQ', href: '/#faq' },
        ],
    },
    {
        title: 'Compare',
        links: [
            { label: 'vs Loom', href: '/compare/loom/' },
            { label: 'vs Screen Studio', href: '/compare/screen-studio/' },
            { label: 'vs Tella', href: '/compare/tella/' },
            { label: 'vs Bandicam', href: '/compare/bandicam/' },
            { label: 'vs OBS', href: '/compare/obs/' },
            { label: 'vs Camtasia', href: '/compare/camtasia/' },
            { label: 'All comparisons', href: '/compare/' },
        ],
    },
    {
        title: 'Platforms',
        links: [
            { label: 'Mac', href: '/for/mac/' },
            { label: 'Windows', href: '/for/windows/' },
            { label: 'Linux', href: '/for/linux/' },
            { label: 'Chrome', href: '/for/chrome/' },
            { label: 'All platforms', href: '/for/' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'Blog', href: '/blog/' },
            { label: 'Reviews', href: CWS_REVIEWS_URL },
            { label: 'Privacy', href: '/privacy/' },
            { label: 'Terms', href: '/terms/' },
            { label: 'Contact', href: `mailto:${SUPPORT_EMAIL}` },
        ],
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
                    {/* Brand */}
                    <div className="flex flex-col gap-3">
                        <a href="/" className="inline-block">
                            <img
                                src="/assets/fulllogo-light.webp"
                                alt="Recordio"
                                className="h-7 w-auto"
                            />
                        </a>
                        <p className="text-text-muted text-sm max-w-xs">
                            The screen recorder that understands your product.
                        </p>
                    </div>

                    {columns.map((col) => (
                        <div key={col.title}>
                            <div className="text-xs font-bold uppercase tracking-[0.12em] text-text-muted mb-3">{col.title}</div>
                            <ul className="space-y-2">
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        <a
                                            href={l.href}
                                            className="text-sm text-text-main hover:text-primary transition-colors"
                                            {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        >
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-text-muted">
                    <span>© {currentYear} Recordio. All rights reserved.</span>
                    <span>Made for people who'd rather ship than edit.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
