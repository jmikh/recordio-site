import { getCWSLink } from '../utils/constants';

const Header = () => {

    return (
        <header
            className="absolute top-4 left-0 right-0 z-50 px-4"
        >
            <nav
                className="max-w-5xl mx-auto px-6 py-4 rounded-2xl glass shadow-lg/20 backdrop-blur-xl"
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img
                            src="/assets/fulllogo-dark.webp"
                            alt="Recordio"
                            className="h-8 w-auto transition-opacity hover:opacity-80"
                        />
                    </a>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#interactive-demo"
                            className="text-text-main hover:text-text-highlighted transition-colors duration-200"
                        >
                            Demo
                        </a>
                        <a
                            href="#all-features"
                            className="text-text-main hover:text-text-highlighted transition-colors duration-200"
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            className="text-text-main hover:text-text-highlighted transition-colors duration-200"
                        >
                            Pricing
                        </a>
                    </div>

                    {/* CTA Button */}
                    <a
                        href={getCWSLink('header')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center space-x-2"
                    >
                        <span>+ Install Extension</span>
                    </a>
                </div>
            </nav>
        </header >
    );
};

export default Header;
