import { SUPPORT_EMAIL, CWS_REVIEWS_URL } from '../utils/constants';
import { COMPARE_FOOTER_LINKS, PLATFORM_FOOTER_LINKS, PRODUCT_LINKS, USE_CASE_LINKS, type SiteLink } from '../data/siteLinks';

interface FooterProps {
    /** Page identifier for analytics; currently unused but passed by every page. */
    source?: string;
}

const columns: { title: string; links: SiteLink[] }[] = [
    {
        title: 'Product',
        links: [
            ...PRODUCT_LINKS,
            { label: 'Pricing', href: '/#pricing' },
            { label: 'FAQ', href: '/#faq' },
        ],
    },
    {
        title: 'Use cases',
        links: [...USE_CASE_LINKS, { label: 'All use cases', href: '/use-cases/' }],
    },
    {
        title: 'Compare',
        links: [...COMPARE_FOOTER_LINKS, { label: 'All comparisons', href: '/compare/' }],
    },
    {
        title: 'Platforms',
        links: PLATFORM_FOOTER_LINKS,
    },
    {
        title: 'Company',
        links: [
            { label: 'Blog', href: '/blog/' },
            { label: 'About', href: '/about/' },
            { label: 'Reviews', href: CWS_REVIEWS_URL },
            { label: 'Privacy', href: '/privacy/' },
            { label: 'Terms', href: '/terms/' },
            { label: 'Contact', href: `mailto:${SUPPORT_EMAIL}` },
        ],
    },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Footer = ({ source }: FooterProps = {}) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.3fr_repeat(5,1fr)]">
                    {/* Brand */}
                    <div className="flex flex-col gap-3 sm:col-span-2 md:col-span-3 lg:col-span-1">
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
                                    <li key={l.href}>
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
