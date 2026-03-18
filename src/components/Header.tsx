import { useState, useEffect, useRef } from 'react';
import { getCWSLink } from '../utils/constants';
import { trackInstallExtension } from '../utils/analytics';

const NAV_LINKS = [
    { label: 'Demo', href: '#interactive-demo' },
    { label: 'Features', href: '#all-features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        if (!menuOpen) return;
        const handleClick = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [menuOpen]);

    return (
        <header className="absolute top-4 left-0 right-0 z-50 px-4">
            <nav className="max-w-5xl mx-auto px-6 py-4 rounded-2xl glass shadow-lg/20 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center shrink-0">
                        <img
                            src="/assets/fulllogo-dark.webp"
                            alt="Recordio"
                            className="h-8 w-auto transition-opacity hover:opacity-80"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className="text-text-main hover:text-text-highlighted transition-colors duration-200"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <a
                        href={getCWSLink('header')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary hidden md:inline-flex items-center space-x-2"
                        onClick={() => trackInstallExtension('header')}
                    >
                        <span>+ Install Extension</span>
                    </a>

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
                            className={`absolute right-0 top-full mt-4 w-48 rounded-xl bg-surface-body/70 backdrop-blur-2xl border border-border shadow-xl/20 overflow-hidden
                                        transition-all duration-200 origin-top-right
                                        ${menuOpen
                                    ? 'opacity-100 scale-100 pointer-events-auto'
                                    : 'opacity-0 scale-95 pointer-events-none'}`}
                        >
                            <div className="py-2">
                                {NAV_LINKS.map(({ label, href }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block px-5 py-3 text-sm font-medium text-text-main
                                                   hover:text-text-highlighted hover:bg-surface-overlay/40
                                                   transition-colors duration-150"
                                    >
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
