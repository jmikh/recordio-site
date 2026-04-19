import { useEffect, useRef, useCallback } from 'react';

const CDN_BASE = '/videos';

const LoomAlternativesArticle = () => {
    const beforeRef = useRef<HTMLVideoElement>(null);
    const afterRef = useRef<HTMLVideoElement>(null);
    const videoSectionRef = useRef<HTMLDivElement>(null);
    const hasStarted = useRef(false);

    /* ── Start playback when videos enter viewport ── */
    const startPlayback = useCallback(() => {
        if (hasStarted.current) return;
        const before = beforeRef.current;
        const after = afterRef.current;
        if (!before || !after) return;
        hasStarted.current = true;

        before.preload = 'auto';
        after.preload = 'auto';
        before.load();
        after.load();

        let played = false;

        const tryPlay = () => {
            if (played) return;
            if (before.readyState >= 3 && after.readyState >= 3) {
                played = true;
                before.currentTime = 0;
                after.currentTime = 0;
                before.play().catch(() => {});
                after.play().catch(() => {});
            }
        };

        before.addEventListener('canplay', tryPlay);
        after.addEventListener('canplay', tryPlay);
        tryPlay();
    }, []);

    useEffect(() => {
        const el = videoSectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) startPlayback(); },
            { threshold: 0.25 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [startPlayback]);

    /* ── Gentle sync: only correct large drift ── */
    useEffect(() => {
        const before = beforeRef.current;
        const after = afterRef.current;
        if (!before || !after) return;

        const interval = setInterval(() => {
            if (before.paused || after.paused) return;
            if (Math.abs(before.currentTime - after.currentTime) > 0.5) {
                after.currentTime = before.currentTime;
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <article className="prose max-w-3xl mx-auto px-6 py-12 md:py-20">
            {/* ── Back link ── */}
            <a href="/blog" className="not-prose inline-flex items-center gap-1 text-sm text-text-muted hover:text-primary transition-colors mb-8">
                ← Back to Blog
            </a>

            {/* ── Blog Hero ── */}
            <header className="mb-12 text-center">
                <p className="text-primary-highlighted text-sm font-semibold uppercase tracking-wider mb-4">
                    Comparison
                </p>
                <h1 className="text-3xl md:text-5xl font-bold text-text-highlighted leading-tight mb-4">
                    Best Loom Alternatives in 2026: Why Teams Are Switching
                </h1>
                <p className="text-text-muted text-base">
                    Last updated: March 2026 · 8 min read
                </p>
            </header>

            <p>
                Loom pioneered async video for teams. The idea was simple: record your screen, share a
                link, and skip the meeting. It worked. Millions of people adopted it.
            </p>
            <p>
                But in 2026, Loom's value proposition has gotten harder to justify. After the Atlassian
                acquisition, pricing shifted to $15/user/month (Business) or $20/user/month for AI
                features. Creator Lite seats were eliminated, meaning every team member now costs the
                full per-seat price. For a team of 20, that's $3,600-$4,800/year for what remains a
                fairly basic recording tool.
            </p>
            <p>
                The bigger issue is quality. Loom has started adding AI-powered zoom and manual
                spotlight tools, but the results are basic: cursor-following zoom that doesn't understand
                what you're interacting with, and shapes you have to draw yourself. Since most Loom
                videos are shared internally, there's been little incentive to go further. What you
                record is still mostly what you get.
            </p>
            <p>
                We're the team behind <strong>Recordio</strong>, so we're biased. But we built it
                specifically to solve this: studio-quality recordings that are just as easy to share,
                without the per-seat pricing. Here's why teams are switching.
            </p>

            <hr />

            {/* ═══════════════════════════════ THE QUALITY GAP ═══════════════════════════════ */}

            <h2>The Quality Gap: Why Loom Videos Look Like Loom Videos</h2>

            <p>
                You've seen it before. Someone shares a Loom and it's a flat screen recording with a
                webcam bubble, visible browser clutter, and no visual hierarchy telling the viewer where
                to look. It gets the job done internally, but try sending that to a prospect, a client,
                or including it in documentation, and it falls flat.
            </p>
            <p>
                Recordio changes this completely. Every recording is automatically enhanced with
                DOM-aware auto-zoom (it reads your page structure and zooms into the right element),
                auto-spotlight that highlights what you're interacting with using a 3D elevation effect,
                and a simplified Chrome toolbar that hides your messy bookmarks and 47 open tabs. The
                result is a studio-quality video, produced automatically, with zero manual editing.
            </p>

            <p>Here's what the difference looks like:</p>

            {/* ── Before / After video showcase ── */}
            <div ref={videoSectionRef} className="my-12 -mx-6 md:-mx-16 lg:-mx-32 flex flex-col gap-4">
                {/* After (Recordio) */}
                <div className="relative">
                    <div className="before-after-video before-after-video--after">
                        <video
                            ref={afterRef}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="w-full h-auto block"
                        >
                            <source src={`${CDN_BASE}/after.webm`} type="video/webm" />
                            <source src={`${CDN_BASE}/after.mp4`} type="video/mp4" />
                        </video>
                    </div>
                    <span className="before-after-label before-after-label--after">
                        RECORDIO
                    </span>
                </div>

                {/* Before (Loom) */}
                <div className="relative text-opacity-80">
                    <div className="before-after-video opacity-80 backdrop-blur-sm grayscale-[20%]">
                        <video
                            ref={beforeRef}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="w-full h-auto block"
                        >
                            <source src={`${CDN_BASE}/before.webm`} type="video/webm" />
                            <source src={`${CDN_BASE}/before.mp4`} type="video/mp4" />
                        </video>
                    </div>
                    <span className="before-after-label before-after-label--before">
                        LOOM
                    </span>
                </div>
            </div>

            <p>
                The "before" is essentially what Loom gives you. The "after" is what Recordio produces
                from the exact same recording session, with zero manual edits. Auto-zoom, auto-spotlight,
                device frames, background, and a clean toolbar, all applied automatically.
            </p>

            <hr />

            {/* ═══════════════════════════════ RECORDIO ═══════════════════════════════ */}

            <h2>Recordio: Loom's Shareability + Studio Quality</h2>

            <p>
                Recordio combines the sharing workflow people love about Loom with the production quality
                that Loom has never offered. Here's what makes it a real alternative:
            </p>

            <h3>Shareable Links with Viewership Analytics</h3>
            <p>
                Just like Loom, you can share a link and anyone can watch without signing up. But Recordio
                also gives you viewership analytics: total view count and average watch time, so you know
                if people actually watched your video. Permissions (controlling who can view) are coming
                soon, completing the Loom replacement.
            </p>

            <h3>Studio-Quality Output, Zero Effort</h3>
            <p>
                This is where Recordio pulls ahead of everything else. Because it runs as a Chrome
                extension, it reads the DOM structure of whatever web app you're recording. It
                knows what you're clicking on, what you're hovering over, and what deserves the viewer's
                attention. That page awareness powers:
            </p>
            <ul>
                <li><strong>DOM-Aware Auto Zoom</strong>: Automatically zooms into the exact UI element you're interacting with. No jittery cursor-following. Every auto-generated zoom is fully editable through a keyframe system.</li>
                <li><strong>Auto Spotlight (3D Card Elevation)</strong>: When you hover over a card or interactive element, Recordio lifts it from the page with a 3D elevation effect while dimming the background. Completely automatic.</li>
                <li><strong>Simplified Chrome Toolbar</strong>: Hides your messy bookmarks, open tabs, and extensions. Shows a clean URL bar with shortened links.</li>
                <li><strong>Device Frame Wrapping</strong>: Wraps your recording in a MacBook Pro or MacBook Air frame, making product demos look polished.</li>
            </ul>

            <div className="not-prose my-6 grid grid-cols-1 gap-6">
                <div className="relative rounded-xl overflow-visible border border-border">
                    <img
                        src="/assets/toolbar-before.webp"
                        alt="Chrome toolbar before, showing messy bookmarks, tabs, and extensions"
                        className="w-full h-auto block rounded-xl"
                        loading="lazy"
                    />
                    <span className="before-after-label before-after-label--before" style={{ top: '-0.75rem' }}>BEFORE</span>
                </div>
                <div className="relative rounded-xl overflow-visible border border-border border-primary/30">
                    <img
                        src="/assets/toolbar-after.webp"
                        alt="Chrome toolbar after, clean and simplified by Recordio"
                        className="w-full h-auto block rounded-xl"
                        loading="lazy"
                    />
                    <span className="before-after-label before-after-label--after" style={{ top: '-0.75rem' }}>AFTER</span>
                </div>
            </div>

            <h3>Smart AutoCut</h3>
            <p>
                Loom recordings are often full of dead air: moments where you're thinking about what to say
                or navigating to the next thing. Recordio's AutoCut removes that silence automatically. It
                tracks both your voice and your interactions, so it won't cut footage where you're quietly
                typing or clicking through something important.
            </p>

            <h3>Other Features Loom Doesn't Have</h3>
            <ul>
                <li><strong>Auto Captions with Word-by-Word Highlighting</strong>: Generated locally, fully editable, with individual words highlighting in sync with your speech.</li>
                <li><strong>Dynamic Camera Placement</strong>: Set your webcam to full-screen for intros, then have it automatically return to a corner. Auto-shrinks when you zoom into content.</li>
                <li><strong>Camera Feathering</strong>: Softens webcam feed edges so it blends naturally rather than looking pasted on.</li>
                <li><strong>Custom Backgrounds</strong>: Swap your recording background or upload your own.</li>
                <li><strong>Local Processing</strong>: Everything runs in your browser. Transcription uses on-device Whisper models. Your recordings never touch a server during editing (unlike Loom, which is cloud-only).</li>
                <li><strong>Cross-Platform</strong>: Works on Mac, Windows, Linux, and ChromeOS.</li>
            </ul>

            <h3>Cost: Built to Be Cheaper</h3>
            <p>
                Because Recordio runs entirely in your browser, there's no heavy cloud infrastructure
                behind every recording. Videos are only uploaded if you choose to share them via a link.
                That means Recordio can offer significantly lower pricing than tools like Loom that
                process everything server-side. For team pricing, reach out
                to <a href="mailto:support@recordio.cc">support@recordio.cc</a>.
            </p>

            <hr />

            {/* ═══════════════════════════════ A NOTE ON OTHERS ═══════════════════════════════ */}

            <h2>What About Screen Studio?</h2>
            <p>
                Screen Studio is a macOS-only desktop app that produces polished recordings with
                cursor-based auto-zoom and motion blur. It's a solid tool for making demos look good.
                But at $108/yr with no free tier, it's more expensive than both Recordio and Loom. More
                importantly, it's not a Loom replacement: Screen Studio has no shared video library,
                no viewership analytics, and no team collaboration features. It's a recording and editing
                tool, not an async communication platform.
            </p>

            <hr />

            {/* ═══════════════════════════════ COMPARISON TABLE ═══════════════════════════════ */}

            <h2>Recordio vs Loom: Feature Comparison</h2>
            <div className="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Recordio</th>
                            <th>Loom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Shareable Links</td><td>Yes, with viewership analytics</td><td>Yes</td></tr>
                        <tr><td>Auto Zoom</td><td>DOM-aware (reads page structure)</td><td>Cursor-based (AI)</td></tr>
                        <tr><td>Auto Zoom Editable</td><td>Yes (keyframe system)</td><td>No</td></tr>
                        <tr><td>Auto Spotlight</td><td>Automatic, 3D elevation</td><td>Manual shapes (circles, arrows)</td></tr>
                        <tr><td>Device Frames</td><td>Yes</td><td>No</td></tr>
                        <tr><td>Smart AutoCut</td><td>Voice + interaction aware</td><td>No</td></tr>
                        <tr><td>Simplified Toolbar</td><td>Yes</td><td>No</td></tr>
                        <tr><td>Auto Captions</td><td>Yes (local, 99 languages)</td><td>Yes (cloud, 50+ languages)</td></tr>
                        <tr><td>Word-by-Word Highlighting</td><td>Yes</td><td>No</td></tr>
                        <tr><td>Custom Backgrounds</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Local Processing</td><td>Yes (fully in-browser)</td><td>No (cloud-only)</td></tr>
                        <tr><td>Library Management</td><td>Coming soon</td><td>Yes</td></tr>
                        <tr><td>Permissions</td><td>Coming soon</td><td>Yes</td></tr>
                    </tbody>
                </table>
            </div>

            <hr />

            {/* ═══════════════════════════════ BOTTOM LINE ═══════════════════════════════ */}

            <h2>The Bottom Line</h2>
            <p>
                Loom set the standard for async video at work. But in 2026, "record your screen and
                share a link" is table stakes. What Loom hasn't done is make recordings look good,
                and that's where Recordio wins.
            </p>
            <p>
                You get the same shareable links and viewership analytics, but your videos come out
                looking like they were produced by a design team. Auto-zoom that actually understands
                what you're showing, spotlight effects that guide the viewer's eye, a clean toolbar,
                device frames, and smart silence removal. All of it automatic.
            </p>
            <p>
                If your team records web apps, documents processes, or creates product demos,{' '}
                <strong>Recordio is the Loom alternative worth trying</strong>. The free tier and 7-day
                Pro trial make it risk-free to see the difference for yourself.
            </p>

            {/* ── Author ── */}
            <div className="not-prose flex items-center justify-between gap-4 py-6 mt-10 border-t border-border">
                <div className="flex items-center gap-4">
                    <img
                        src="/assets/john.webp"
                        alt="John Mikhail"
                        className="w-24 h-24 rounded-full object-cover border-2 border-border flex-shrink-0"
                        loading="lazy"
                    />
                    <div className="flex flex-col">
                        <span className="text-text-highlighted font-semibold text-base leading-snug">
                            John Mikhail
                        </span>
                        <span className="text-primary-highlighted text-sm leading-snug mt-0.5">
                            Founder of Recordio
                        </span>
                        <span className="text-text-muted text-sm leading-snug mt-2">
                            MIT grad · Previously at Google and Mixpanel · Tech and AI enthusiast
                        </span>
                    </div>
                </div>
                <a
                    href="https://www.linkedin.com/in/john-mikhail/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-text-muted hover:text-primary transition-colors"
                    aria-label="John Mikhail on LinkedIn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
            </div>
        </article>
    );
};

export default LoomAlternativesArticle;
