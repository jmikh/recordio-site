const Privacy = () => {
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
                        Privacy <span className="gradient-text">Policy</span>
                    </h1>
                    <p className="text-xl text-text-muted">
                        Last updated: January 21, 2026
                    </p>
                </div>

                {/* Policy Content */}
                <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
                    {/* Introduction */}
                    <section>
                        <p className="text-text-main text-lg leading-relaxed">
                            At <span className="text-primary-highlighted font-semibold">Recordio</span>, we take your privacy seriously. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our Chrome extension, web application, and related services.
                        </p>
                    </section>

                    {/* What We Collect */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-text-highlighted flex items-center">
                            <svg className="w-8 h-8 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            What Data We Collect
                        </h2>

                        <div className="bg-surface-raised rounded-2xl p-6 space-y-4">
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-text-highlighted">Account Information</h3>
                                <ul className="space-y-2 text-text-main ml-6">
                                    <li className="flex items-start">
                                        <span className="text-secondary mr-2">•</span>
                                        <span><strong className="text-text-highlighted">Email address</strong> from your Google account</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-secondary mr-2">•</span>
                                        <span><strong className="text-text-highlighted">Google profile information</strong> (name, profile picture)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-secondary mr-2">•</span>
                                        <span><strong className="text-text-highlighted">User ID</strong> generated during account creation</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-border">
                                <h3 className="text-xl font-semibold text-text-highlighted">Usage Data</h3>
                                <ul className="space-y-2 text-text-main ml-6">
                                    <li className="flex items-start">
                                        <span className="text-secondary mr-2">•</span>
                                        <span><strong className="text-text-highlighted">Subscription status</strong> and payment history</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-secondary mr-2">•</span>
                                        <span><strong className="text-text-highlighted">Project metadata</strong> (e.g. creation date, duration) — video content stays in your browser</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-secondary mr-2">•</span>
                                        <span><strong className="text-text-highlighted">Error logs</strong> and diagnostic data (via Sentry) to improve our service</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Use It */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-text-highlighted flex items-center">
                            <svg className="w-8 h-8 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            How We Use Your Data
                        </h2>

                        <div className="bg-surface-raised rounded-2xl p-6">
                            <p className="text-text-main mb-4">We use your information for the following purposes:</p>
                            <ul className="space-y-3 text-text-main">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span><strong className="text-text-highlighted">Authentication:</strong> To verify your identity and provide secure access to your account</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span><strong className="text-text-highlighted">Account Management:</strong> To manage your subscription, process payments, and deliver premium features</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span><strong className="text-text-highlighted">Service Improvement:</strong> To monitor errors, fix bugs, and enhance user experience</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span><strong className="text-text-highlighted">Communication:</strong> To send important updates about your account and our service</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* How We Store It */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-text-highlighted flex items-center">
                            <svg className="w-8 h-8 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                            How We Store Your Data
                        </h2>

                        <div className="bg-surface-raised rounded-2xl p-6 space-y-4">
                            <p className="text-text-main">
                                We use industry-standard security measures to protect your information:
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-primary-highlighted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-text-highlighted font-semibold">Supabase Database</h3>
                                        <p className="text-text-main">Your account information and subscription data are securely stored in <strong>Supabase</strong>, a trusted PostgreSQL database with enterprise-grade security and encryption.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-primary-highlighted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-text-highlighted font-semibold">Local Browser Storage</h3>
                                        <p className="text-text-main">Your video recordings and projects are stored <strong>locally</strong> in your browser's IndexedDB and never leave your device unless you choose to export them.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-primary-highlighted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-text-highlighted font-semibold">Secure Payment Processing</h3>
                                        <p className="text-text-main">Payment information is processed securely through <strong>Stripe</strong>. We never store your credit card details on our servers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-text-highlighted flex items-center">
                            <svg className="w-8 h-8 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            Your Rights
                        </h2>

                        <div className="bg-surface-raised rounded-2xl p-6">
                            <p className="text-text-main mb-4">You have the following rights regarding your personal data:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-surface-overlay rounded-xl p-4 border border-border">
                                    <h3 className="text-text-highlighted font-semibold mb-2 flex items-center">
                                        <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        Access
                                    </h3>
                                    <p className="text-text-main text-sm">View and access all personal data we have about you</p>
                                </div>

                                <div className="bg-surface-overlay rounded-xl p-4 border border-border">
                                    <h3 className="text-text-highlighted font-semibold mb-2 flex items-center">
                                        <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Export
                                    </h3>
                                    <p className="text-text-main text-sm">Download your data in a portable format</p>
                                </div>

                                <div className="bg-surface-overlay rounded-xl p-4 border border-border">
                                    <h3 className="text-text-highlighted font-semibold mb-2 flex items-center">
                                        <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Deletion
                                    </h3>
                                    <p className="text-text-main text-sm">Request complete deletion of your account and data</p>
                                </div>

                                <div className="bg-surface-overlay rounded-xl p-4 border border-border">
                                    <h3 className="text-text-highlighted font-semibold mb-2 flex items-center">
                                        <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Correction
                                    </h3>
                                    <p className="text-text-main text-sm">Update or correct inaccurate information</p>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/30">
                                <p className="text-text-main">
                                    To exercise any of these rights, please contact us at{' '}
                                    <a href="mailto:support@recordio.cc" className="text-primary-highlighted hover:text-secondary underline font-semibold">
                                        support@recordio.cc
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Data Sharing */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-text-highlighted flex items-center">
                            <svg className="w-8 h-8 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            Data Sharing
                        </h2>

                        <div className="bg-surface-raised rounded-2xl p-6">
                            <p className="text-text-main mb-4">
                                We do <strong className="text-text-highlighted">not sell</strong> your personal information. We only share data with third-party services necessary to operate our platform:
                            </p>
                            <ul className="space-y-2 text-text-main ml-6">
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">•</span>
                                    <span><strong className="text-text-highlighted">Supabase:</strong> Authentication and database services</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">•</span>
                                    <span><strong className="text-text-highlighted">Stripe:</strong> Payment processing</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">•</span>
                                    <span><strong className="text-text-highlighted">Sentry:</strong> Error tracking and monitoring</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">•</span>
                                    <span><strong className="text-text-highlighted">Google:</strong> OAuth authentication</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">•</span>
                                    <span><strong className="text-text-highlighted">Google Analytics:</strong> Anonymous usage analytics to help us understand how users interact with our site and improve the product</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">•</span>
                                    <span><strong className="text-text-highlighted">Hugging Face:</strong> AI model hosting for captions. Models are downloaded to your browser and run locally — your audio is never sent to external servers</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Cookies & Tracking */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-text-highlighted flex items-center">
                            <svg className="w-8 h-8 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Cookies & Tracking Technologies
                        </h2>

                        <div className="bg-surface-raised rounded-2xl p-6 space-y-4">
                            <p className="text-text-main">
                                We use a limited number of cookies and similar technologies to operate and improve the Service:
                            </p>
                            <ul className="space-y-2 text-text-main ml-6">
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">•</span>
                                    <span><strong className="text-text-highlighted">Google Analytics cookies</strong> (<code className="text-text-muted">_ga</code>, <code className="text-text-muted">_ga_*</code>): Used to collect anonymous usage statistics such as page views, session duration, and general traffic patterns. This data helps us understand how users interact with our site and improve the product. No personally identifiable information is collected through these cookies.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">•</span>
                                    <span><strong className="text-text-highlighted">Authentication tokens:</strong> Stored in your browser's local storage to keep you securely signed in to your account.</span>
                                </li>
                            </ul>
                            <p className="text-text-main">
                                We do not use advertising cookies or third-party tracking cookies. You can manage or disable cookies through your browser settings, though this may affect the functionality of some features.
                            </p>
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold text-text-highlighted flex items-center">
                            <svg className="w-8 h-8 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact Us
                        </h2>

                        <div className="bg-surface-raised rounded-2xl p-6">
                            <p className="text-text-main mb-4">
                                If you have any questions or concerns about this Privacy Policy or how we handle your data, please reach out:
                            </p>
                            <div className="flex flex-col space-y-3">
                                <a href="mailto:support@recordio.cc" className="text-primary-highlighted hover:text-secondary underline text-lg font-semibold flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    support@recordio.cc
                                </a>
                                <a href="https://recordio.cc" className="text-text-main hover:text-primary-highlighted flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                    https://recordio.cc
                                </a>
                            </div>
                        </div>
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

export default Privacy;
