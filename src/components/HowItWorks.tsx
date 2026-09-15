const steps = [
    {
        number: '1',
        title: 'Install and record',
        description: 'Add Recordio from the Chrome Web Store. Hit record on any tab, window, or your whole desktop.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        number: '2',
        title: 'Let it edit itself',
        description: 'Auto Zoom, Auto Spotlight and captions are applied as you record. Tweak anything on the timeline, or don\'t.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.8 4.6L18.4 9l-4.6 1.8L12 15.4l-1.8-4.6L5.6 9l4.6-1.4L12 3zM5 17l.9 2.1L8 20l-2.1.9L5 23l-.9-2.1L2 20l2.1-.9L5 17zM19 15l.7 1.6 1.6.7-1.6.7L19 19.6l-.7-1.6-1.6-.7 1.6-.7L19 15z" />
            </svg>
        ),
    },
    {
        number: '3',
        title: 'Export and share',
        description: 'Download in 1080p on the free plan or 4K on Pro, or send a link and watch the view count climb.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 4v12m0-12l-4 4m4-4l4 4" />
            </svg>
        ),
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" aria-label="How it works" className="how-section">
            <div className="max-w-7xl mx-auto px-6">
                <div className="section-head">
                    <span className="eyebrow">How it works</span>
                    <h2 className="section-title">From recording to published in minutes.</h2>
                    <p className="section-subtitle">Three steps. No timeline scrubbing, no learning curve.</p>
                </div>

                <ol className="how-grid">
                    {steps.map((step) => (
                        <li key={step.number} className="how-card">
                            <span className="how-number" aria-hidden="true">{step.number}</span>
                            <span className="how-icon">{step.icon}</span>
                            <h3 className="how-title">{step.title}</h3>
                            <p className="how-desc">{step.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default HowItWorks;
