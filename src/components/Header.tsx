

interface HeaderProps {
    onJoinWaitlist: () => void;
}

const Header = ({ onJoinWaitlist }: HeaderProps) => {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

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
                        <button
                            onClick={() => scrollToSection('faq')}
                            className="text-text-main hover:text-text-highlighted transition-colors duration-200"
                        >
                            FAQ
                        </button>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={onJoinWaitlist}
                        className="btn-primary inline-flex items-center space-x-2"
                    >
                        <span>Join Waitlist</span>
                    </button>
                </div>
            </nav>
        </header >
    );
};

export default Header;
