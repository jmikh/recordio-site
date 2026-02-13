import { useState, useEffect } from 'react';
import { trackInstallExtension } from '../utils/analytics';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            className="fixed top-4 left-0 right-0 z-50 px-4"
        >
            <nav
                className={`max-w-5xl mx-auto px-6 py-4 rounded-2xl transition-all duration-300 ${isScrolled ? 'glass shadow-lg/20 backdrop-blur-xl' : 'bg-transparent'
                    }`}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img
                            src="/assets/fulllogo-dark.png"
                            alt="Recordio"
                            className="h-8 w-auto transition-opacity hover:opacity-80"
                        />
                    </a>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('features')}
                            className="text-text-main hover:text-text-highlighted transition-colors duration-200"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection('pricing')}
                            className="text-text-main hover:text-text-highlighted transition-colors duration-200"
                        >
                            Pricing
                        </button>
                    </div>

                    {/* CTA Button */}
                    <a
                        href="https://chrome.google.com/webstore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center space-x-2"
                        onClick={() => trackInstallExtension('header')}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z" />
                            <path d="M12 6a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z" />
                        </svg>
                        <span>Install Extension</span>
                    </a>
                </div>
            </nav>
        </header >
    );
};

export default Header;
