const Terms = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
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
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold text-text-highlighted mb-4">
                        Terms of <span className="gradient-text">Service</span>
                    </h1>
                    <p className="text-xl text-text-muted">
                        Last updated: January 21, 2026
                    </p>
                </div>

                {/* Terms Content */}
                <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
                    {/* Acceptance */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-text-highlighted">1. Acceptance of Terms</h2>
                        <p className="text-text-main">
                            By accessing or using Recordio, you agree to be bound by these Terms of Service. If you do not agree, do not use the service.
                        </p>
                    </section>

                    {/* License */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-text-highlighted">2. License to Use</h2>
                        <p className="text-text-main">
                            We grant you a limited, non-exclusive, non-transferable, revocable license to use Recordio for personal or commercial use, subject to these terms.
                        </p>
                    </section>

                    {/* Subscriptions */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-text-highlighted">3. Subscriptions and Billing</h2>
                        <ul className="space-y-2 text-text-main ml-6">
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Subscriptions are billed monthly or annually through Stripe</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Subscriptions auto-renew unless canceled before the renewal date</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Refunds are issued at our discretion within 7 days of purchase</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>You can cancel anytime through your account settings</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Price changes will be communicated 30 days in advance</span>
                            </li>
                        </ul>
                    </section>

                    {/* User Responsibilities */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-text-highlighted">4. User Responsibilities</h2>
                        <p className="text-text-main mb-2">You agree to:</p>
                        <ul className="space-y-2 text-text-main ml-6">
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Provide accurate account information</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Maintain the security of your account credentials</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Use the service in compliance with all applicable laws</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Not share your account with others</span>
                            </li>
                        </ul>
                    </section>

                    {/* Prohibited Uses */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-text-highlighted">5. Prohibited Uses</h2>
                        <p className="text-text-main mb-2">You may not:</p>
                        <ul className="space-y-2 text-text-main ml-6">
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Reverse engineer, decompile, or attempt to extract the source code</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Use automated systems to access the service without permission</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Use the service to record content without proper authorization</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Violate any third-party rights, including privacy and intellectual property</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Resell or redistribute the service without authorization</span>
                            </li>
                        </ul>
                    </section>

                    {/* Intellectual Property */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-text-highlighted">6. Intellectual Property</h2>
                        <p className="text-text-main">
                            All content, features, and functionality of Recordio are owned by us and protected by copyright, trademark, and other intellectual property laws. You retain ownership of content you create using the service.
                        </p>
                    </section>

                    {/* Data and Privacy */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-text-highlighted">7. Data and Privacy</h2>
                        <p className="text-text-main">
                            Your use of Recordio is subject to our{' '}
                            <a href="/privacy" className="text-primary-highlighted hover:text-secondary underline">
                                Privacy Policy
                            </a>
                            . Video recordings are stored locally in your browser and are not uploaded to our servers unless you choose to export them.
                        </p>
                    </section>

                    {/* Service Availability */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-text-highlighted">8. Service Availability</h2>
                        <p className="text-text-main">
                            We strive for 99.9% uptime but do not guarantee uninterrupted service. We may modify, suspend, or discontinue features at any time with reasonable notice.
                        </p>
                    </section>

                    {/* Termination */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-text-highlighted">9. Termination</h2>
                        <p className="text-text-main">
                            We may terminate or suspend your access immediately for violation of these terms. You may terminate your account at any time through account settings. Upon termination, your right to use the service ceases immediately.
                        </p>
                    </section>

                    {/* Warranties and Liability */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-text-highlighted">10. Warranties and Liability</h2>
                        <div className="bg-surface-raised rounded-2xl p-6 space-y-3">
                            <p className="text-text-main">
                                <strong className="text-text-highlighted">AS-IS BASIS:</strong> Recordio is provided "as is" without warranties of any kind, express or implied.
                            </p>
                            <p className="text-text-main">
                                <strong className="text-text-highlighted">LIMITATION OF LIABILITY:</strong> We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our total liability shall not exceed the amount you paid in the last 12 months.
                            </p>
                        </div>
                    </section>

                    {/* Indemnification */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-text-highlighted">11. Indemnification</h2>
                        <p className="text-text-main">
                            You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your use of the service or violation of these terms.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-text-highlighted">12. Governing Law</h2>
                        <p className="text-text-main">
                            These terms are governed by the laws of the United States. Any disputes shall be resolved in the courts of the applicable jurisdiction.
                        </p>
                    </section>

                    {/* Changes to Terms */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-text-highlighted">13. Changes to Terms</h2>
                        <p className="text-text-main">
                            We may update these terms at any time. Material changes will be notified via email or in-app notification. Continued use after changes constitutes acceptance.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-text-highlighted">14. Contact</h2>
                        <p className="text-text-main">
                            For questions about these terms, contact us at{' '}
                            <a href="mailto:legal@recordio.site" className="text-primary-highlighted hover:text-secondary underline">
                                legal@recordio.site
                            </a>
                        </p>
                    </section>

                    {/* Back to Home */}
                    <div className="pt-6 border-t border-border text-center">
                        <a href="/" className="btn-secondary inline-flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span>Back to Home</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
