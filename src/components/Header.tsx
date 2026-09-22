import { useState, useEffect, useRef } from 'react';
import { getAppLink, getCWSLink } from '../utils/constants';
import { trackInstallExtension, trackOpenApp } from '../utils/analytics';
import { PRODUCT_LINKS, SITE_NAV_LINKS } from '../data/siteLinks';

const DEFAULT_NAV_LINKS = [
    { label: 'Features', href: '#feature-videos' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
];

interface HeaderProps {
    /**
     * In-page anchors for this page. Omit for the homepage defaults; pass `[]`
     * on pages with no matching sections (hubs, blog). Site links (Compare,
     * Platforms, Blog) are always rendered in addition.
     */
    navLinks?: { label: string; href: string }[];
}

const linkClass = 'text-text-main hover:text-text-highlighted transition-colors duration-200';
const mobileLinkClass =
    'block px-5 py-3 text-sm font-medium text-text-main hover:text-text-highlighted hover:bg-surface-overlay/40 transition-colors duration-150';

const Header = ({ navLinks }: HeaderProps) => {
    const anchors = navLinks ?? DEFAULT_NAV_LINKS;
    const [menuOpen, setMenuOpen] = useState(false);
    const [productOpen, setProductOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const productRef = useRef<HTMLDivElement>(null);

    // Close the mobile menu and the Product dropdown when clicking outside or pressing Escape
    useEffect(() => {
        if (!menuOpen && !productOpen) return;
        const handleClick = (e: MouseEvent) => {
            const t = e.target as Node;
            if (menuRef.current && !menuRef.current.contains(t)) setMenuOpen(false);
            if (productRef.current && !productRef.current.contains(t)) setProductOpen(false);
        };
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMenuOpen(false);
                setProductOpen(false);
            }
        };
        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKey);
        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleKey);
        };
    }, [menuOpen, productOpen]);

    return (
        <header className="fixed top-4 left-0 right-0 z-50 px-4">
            <nav className="max-w-5xl mx-auto px-6 py-4 rounded-2xl glass shadow-lg/20 backdrop-blur-xl" aria-label="Main">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center shrink-0">
                        <img
                            src="/assets/fulllogo-light.webp"
                            alt="Recordio"
                            className="h-8 w-auto transition-opacity hover:opacity-80"
                        />
                    </a>

                    {/* Desktop Navigation: in-page anchors (lg and up), then Product dropdown and site links (md and up) */}
                    <div className="hidden md:flex items-center gap-5 lg:gap-6">
                        {anchors.length > 0 && (
                            <>
                                {anchors.map(({ label, href }) => (
                                    <a key={href} href={href} className={`hidden lg:inline ${linkClass}`}>
                                        {label}
                                    </a>
                                ))}
                                <span className="hidden lg:block h-4 w-px bg-border" aria-hidden="true" />
                            </>
                        )}
                        <div
                            ref={productRef}
                            className="relative"
                            onMouseEnter={() => setProductOpen(true)}
                            onMouseLeave={() => setProductOpen(false)}
                        >
                            <button
                                type="button"
                                className={`inline-flex items-center gap-1 ${linkClass}`}
                                aria-haspopup="true"
                                aria-expanded={productOpen}
                                onClick={() => setProductOpen((v) => !v)}
                            >
                                Product
                                <svg className={`w-3.5 h-3.5 transition-transform ${productOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {/* Invisible bridge so the pointer can travel from the button to the panel */}
                            <div className={`absolute left-0 right-0 top-full h-4 ${productOpen ? '' : 'hidden'}`} aria-hidden="true" />
                            <div
                                className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 rounded-xl bg-white/95 backdrop-blur-2xl border border-border shadow-xl/20 overflow-hidden
                                            transition-all duration-150 origin-top
                                            ${productOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
                            >
                                <div className="py-2">
                                    {PRODUCT_LINKS.map(({ label, href }) => (
                                        <a key={href} href={href} className={mobileLinkClass}>
                                            {label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {SITE_NAV_LINKS.map(({ label, href }) => (
                            <a key={href} href={href} className={linkClass}>
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center gap-2 lg:gap-3">
                        <a
                            href={getAppLink('header')}
                            className="btn-secondary !px-3.5 !py-2 text-sm"
                            onClick={() => trackOpenApp('header')}
                        >
                            Open App
                        </a>
                        <a
                            href={getCWSLink('header')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            onClick={() => trackInstallExtension('header')}
                        >
                            <img src="/assets/chrome-store.svg" alt="" className="w-4 h-4" />
                            <span>Add to Chrome</span>
                        </a>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden relative" ref={menuRef}>
                        <button
                            onClick={() => setMenuOpen((v) => !v)}
                            className="flex items-center justify-center w-10 h-10 rounded-xl
                                       text-text-main hover:text-text-highlighted
                                       hover:bg-surface-overlay/60
                                       transition-all duration-200"
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                        >
                            {/* Animated hamburger / X icon */}
                            <div className="w-5 h-4 flex flex-col justify-between relative">
                                <span
                                    className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center
                                        ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
                                />
                                <span
                                    className={`block h-0.5 w-full bg-current rounded-full transition-all duration-200
                                        ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
                                />
                                <span
                                    className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center
                                        ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
                                />
                            </div>
                        </button>

                        {/* Dropdown */}
                        <div
                            className={`absolute right-0 top-full mt-4 w-56 rounded-xl bg-white/90 backdrop-blur-2xl border border-border shadow-xl/20 overflow-hidden
                                        transition-all duration-200 origin-top-right
                                        ${menuOpen
                                    ? 'opacity-100 scale-100 pointer-events-auto'
                                    : 'opacity-0 scale-95 pointer-events-none'}`}
                        >
                            <div className="py-2">
                                {anchors.map(({ label, href }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        onClick={() => setMenuOpen(false)}
                                        className={mobileLinkClass}
                                    >
                                        {label}
                                    </a>
                                ))}
                                {anchors.length > 0 && <div className="my-2 border-t border-border" />}
                                <div className="px-5 pt-2 pb-1 text-xs font-bold uppercase tracking-[0.12em] text-text-muted">Product</div>
                                {PRODUCT_LINKS.map(({ label, href }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        onClick={() => setMenuOpen(false)}
                                        className={mobileLinkClass}
                                    >
                                        {label}
                                    </a>
                                ))}
                                <div className="my-2 border-t border-border" />
                                {SITE_NAV_LINKS.map(({ label, href }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        onClick={() => setMenuOpen(false)}
                                        className={mobileLinkClass}
                                    >
                                        {label}
                                    </a>
                                ))}
                                <div className="my-2 border-t border-border" />
                                <a
                                    href={getAppLink('header-mobile')}
                                    onClick={() => {
                                        setMenuOpen(false);
                                        trackOpenApp('header-mobile');
                                    }}
                                    className="block px-5 py-3 text-sm font-semibold text-text-highlighted
                                               hover:bg-surface-overlay/40 transition-colors duration-150"
                                >
                                    Open App
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
