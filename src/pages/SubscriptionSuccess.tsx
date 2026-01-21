import { useEffect, useState } from 'react';

const SubscriptionSuccess = () => {
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 animated-gradient" />
            <div className="absolute inset-0 gradient-mesh opacity-60" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float" />
                <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-highlighted/10 rounded-full blur-3xl float" style={{ animationDelay: '4s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
                <div className="glass rounded-3xl p-12 space-y-8">
                    {/* Success Icon */}
                    <div className="flex justify-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-secondary-highlighted flex items-center justify-center shadow-2xl">
                            <svg
                                className="w-14 h-14 text-text-on-secondary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Heading */}
                    <div>
                        <h1 className="text-5xl font-bold text-text-highlighted mb-4">
                            Welcome to <span className="gradient-text">Recordio Pro!</span>
                        </h1>
                        <p className="text-xl text-text-main">
                            Your subscription has been successfully activated
                        </p>
                    </div>

                    {/* Features unlocked */}
                    <div className="bg-surface-raised rounded-2xl p-6 space-y-4">
                        <p className="text-text-highlighted font-semibold mb-4">
                            🎉 You now have access to:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                            <div className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-text-main">Unlimited video length</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-text-main">4K export quality</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-text-main">Auto captions</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-text-main">Priority support</span>
                            </div>
                        </div>
                    </div>

                    {/* Call to action */}
                    <div className="space-y-4">
                        <p className="text-text-main">
                            You can now return to the editor and start creating amazing videos!
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={() => window.close()}
                                className="btn-primary inline-flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                <span>Return to Editor</span>
                            </button>

                            <a
                                href="/"
                                className="btn-secondary inline-flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span>Go to Homepage</span>
                            </a>
                        </div>

                        {countdown > 0 && (
                            <p className="text-text-muted text-sm">
                                This window will close automatically in {countdown} seconds
                            </p>
                        )}
                    </div>

                    {/* Support link */}
                    <div className="pt-6 border-t border-border">
                        <p className="text-text-muted text-sm">
                            Need help getting started?{' '}
                            <a href="#" className="text-primary hover:text-primary-highlighted underline">
                                View our tutorial
                            </a>
                            {' '}or{' '}
                            <a href="#" className="text-primary hover:text-primary-highlighted underline">
                                contact support
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionSuccess;
