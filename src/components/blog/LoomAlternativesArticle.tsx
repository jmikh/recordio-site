import { useEffect, useRef, useCallback } from 'react';
import { VIDEOS_BASE, SUPPORT_EMAIL, LINKEDIN_URL } from '../../utils/constants';

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
            <a href="/blog/" className="not-prose inline-flex items-center gap-1 text-sm text-text-muted hover:text-primary transition-colors mb-8">
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
                    By <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">John Mikhail</a>,
                    founder of Recordio · Last updated: September 2026 · 9 min read
                </p>
            </header>

            <p>
                Loom pioneered async video for teams. The idea was simple: record your screen, share a
                link, skip the meeting. It worked, and millions of people adopted it.
            </p>
            <p>
                In 2026, Loom's value is harder to justify. Business seats run $15 per user per month
                billed annually ($18 monthly), and Business + AI runs $20 per user per month ($24
                monthly). For a team of 20, that's $3,600 to $4,800 a year for what is still a fairly
                basic recording tool. The free Starter plan caps you at 25 videos of 5 minutes each.
            </p>
            <p>
                The bigger issue is quality. Loom has added AI zoom and manual spotlight tools, but the
                results are basic: cursor-following zoom that doesn't understand what you're interacting
                with, and shapes you draw yourself. Most Loom videos are shared internally, so there has
                been little pressure to go further. What you record is still mostly what you get.
            </p>
            <p>
                We're the team behind <strong>Recordio</strong>, so we're biased. But we built it
                specifically to fix this: studio-quality recordings that are just as easy to share, at a
                lower price per seat. Here's why teams are switching. If you only want the feature table
                and a five-person price, go straight to <a href="/compare/loom/">Recordio vs Loom</a>.
            </p>

            <hr />

            {/* ═══════════════════════════════ THE QUALITY GAP ═══════════════════════════════ */}

            <h2>The Quality Gap: Why Loom Videos Look Like Loom Videos</h2>

            <p>
                You've seen it. Someone shares a Loom and it's a flat screen recording with a webcam
                bubble, visible browser clutter, and nothing telling the viewer where to look. It gets the
                job done internally. Send it to a prospect or a client, or drop it into documentation, and
                it falls flat.
            </p>
            <p>
                Recordio changes that. Every recording gets DOM-aware auto zoom (it reads your page's
                structure and zooms to the right element), auto spotlight that lifts the element you're
                interacting with off the page with a 3D effect, and a clean Chrome toolbar that hides your
                bookmarks and 47 open tabs. The result is a studio-quality video, produced automatically,
                with no manual editing.
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
                            <source src={`${VIDEOS_BASE}/after.webm`} type="video/webm" />
                            <source src={`${VIDEOS_BASE}/after.mp4`} type="video/mp4" />
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
                            <source src={`${VIDEOS_BASE}/before.webm`} type="video/webm" />
                            <source src={`${VIDEOS_BASE}/before.mp4`} type="video/mp4" />
                        </video>
                    </div>
                    <span className="before-after-label before-after-label--before">
                        LOOM
                    </span>
                </div>
            </div>

            <p>
                The "before" is essentially what Loom gives you. The "after" is what Recordio produces
                from the same recording session with zero manual edits: auto zoom, auto spotlight, a
                device frame, a background, and a clean toolbar, all applied automatically.
            </p>

            <hr />

            {/* ═══════════════════════════════ RECORDIO ═══════════════════════════════ */}

            <h2>Recordio: Loom's Shareability + Studio Quality</h2>

            <p>
                Recordio keeps the sharing workflow people like about Loom and adds the production quality
                Loom has never had. Here's what makes it a real alternative:
            </p>

            <h3>Shareable Links, View Analytics, and a Team Library</h3>
            <p>
                Just like Loom, you share a link and anyone with it can watch. Recordio also shows you how
                the video performed, with total views and average watch time, so you know whether people
                actually watched. Pro includes a shared team library with unlimited viewer seats: your
                teammates can browse and watch everything without each needing a paid seat.
            </p>

            <h3>Studio-Quality Output, Zero Effort</h3>
            <p>
                This is where Recordio pulls ahead of everything else. Because it runs as a Chrome
                extension, it reads the structure of the web app you're recording. It knows what you're
                clicking on, what you're hovering over, and what deserves the viewer's attention. That
                page awareness powers:
            </p>
            <ul>
                <li><strong>DOM-Aware Auto Zoom</strong>: Zooms to the exact UI element you're interacting with, so inputs and forms never get clipped. No jittery cursor-following, and every zoom is an editable keyframe.</li>
                <li><strong>Auto Spotlight (3D Card Elevation)</strong>: When you hover over a card or interactive element, Recordio lifts it forward with a subtle glow while dimming the background. Completely automatic.</li>
                <li><strong>Clean Chrome Toolbar</strong>: Replaces your bookmarks, tabs, and extension icons with a minimal bar that shows just the page title.</li>
                <li><strong>Device Frame Wrapping</strong>: Wraps your recording in a MacBook Pro or MacBook Air frame so product demos look finished.</li>
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
                Loom recordings are full of dead air: the pauses where you're deciding what to say or
                navigating to the next screen. Recordio's AutoCut removes that silence automatically. It
                tracks both your voice and your interactions, so it won't cut footage where you're quietly
                typing or clicking through something important.
            </p>

            <h3>More Ways Recordio Goes Further</h3>
            <ul>
                <li><strong>AI Captions You Can Edit to Cut</strong>: OpenAI-powered captions timed to the word. Fix any mistake in place, or delete a caption line and that segment is cut from the video.</li>
                <li><strong>Overlays and Blur</strong>: Blur sensitive data before you share, or add text, arrows, and shapes to point at what matters.</li>
                <li><strong>Backgrounds and Music</strong>: A curated background library, custom gradients, brand image uploads, and a music library.</li>
                <li><strong>Smart Webcam Overlay</strong>: Customizable position and style, and it shrinks out of the way when a zoom kicks in.</li>
                <li><strong>4K Exports on Pro</strong>: Download in 1080p on the free plan or 4K on Pro, alongside the shareable link.</li>
                <li><strong>Team Workspace</strong>: Invite teammates with roles, collaborate on projects, and keep every walkthrough in a shared team library on Pro. Viewer seats are unlimited and free.</li>
                <li><strong>Full-Page Screenshots</strong>: The same extension captures the visible area, the full page, or a region. Annotate it in the web app with text, arrows, shapes, and blur, then copy it, download a PNG or PDF, or share a link.</li>
                <li><strong>Cross-Platform</strong>: Works in Chrome, Edge, and Brave on Mac, Windows, Linux, and ChromeOS.</li>
            </ul>

            <h3>Cost: Lower Per Seat, Free for Viewers</h3>
            <p>
                Recordio Pro is $12 per seat per month billed annually, or $15 monthly. Loom Business is
                $15 per user annually, or $20 with AI. Only the people who record need a Recordio seat;
                viewers are unlimited and free. And the free plan isn't a trial: it includes auto zoom,
                auto spotlight, silence cutting, and 1080p downloads for up to 5 active projects, with no
                credit card. For team pricing, reach out
                to <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
            </p>

            <hr />

            {/* ═══════════════════════════════ A NOTE ON OTHERS ═══════════════════════════════ */}

            <h2>What About Screen Studio?</h2>
            <p>
                Screen Studio is a macOS-only desktop app that produces polished recordings with
                cursor-based auto zoom and motion blur. It's a solid tool for making demos look good.
                But it's not a Loom replacement: there's no free plan, no shared video library, no view
                analytics, and no team features. It's a recording and editing tool, not an async
                communication platform, and it leaves out anyone on Windows or Linux. We list eight
                options for those users in <a href="/blog/best-screen-studio-alternatives-2026/">best
                Screen Studio alternatives</a>.
            </p>

            <h2>Leaving a Different Tool?</h2>
            <p>
                The same honest format, with pricing checked on each vendor's own site, is available for
                the other recorders teams tend to outgrow:{' '}
                <a href="/blog/best-camtasia-alternatives-2026/">best Camtasia alternatives</a> for
                demos without a timeline,{' '}
                <a href="/blog/best-bandicam-alternatives-2026/">best Bandicam alternatives</a> for Mac
                and Linux users, and{' '}
                <a href="/blog/best-screencastify-alternatives-2026/">best Screencastify alternatives</a>{' '}
                for schools and Chrome users. Every head-to-head lives on the{' '}
                <a href="/compare/">compare page</a>.
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
                        <tr><td>Shareable Links</td><td>Yes, with view analytics</td><td>Yes</td></tr>
                        <tr><td>Auto Zoom</td><td>DOM-aware (reads page structure)</td><td>Cursor-based (AI)</td></tr>
                        <tr><td>Auto Zoom Editable</td><td>Yes (keyframes)</td><td>No</td></tr>
                        <tr><td>Auto Spotlight</td><td>Automatic, 3D elevation</td><td>Manual shapes (circles, arrows)</td></tr>
                        <tr><td>Device Frames</td><td>Yes</td><td>No</td></tr>
                        <tr><td>Smart AutoCut</td><td>Voice + interaction aware</td><td>Filler word removal (AI plan)</td></tr>
                        <tr><td>Clean Toolbar</td><td>Yes</td><td>No</td></tr>
                        <tr><td>AI Captions</td><td>Yes, word-level, edit to cut</td><td>Yes</td></tr>
                        <tr><td>Overlays &amp; Blur</td><td>Yes</td><td>Basic</td></tr>
                        <tr><td>Custom Backgrounds</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Team Library</td><td>Yes (Pro)</td><td>Yes</td></tr>
                        <tr><td>Viewer Seats</td><td>Unlimited, free</td><td>Free viewers</td></tr>
                        <tr><td>Free Plan</td><td>5 active projects, 1080p downloads</td><td>25 videos, 5 min each</td></tr>
                        <tr><td>Pro Price</td><td>$12/seat/mo annual · $15 monthly</td><td>$15/user/mo annual · $20 with AI</td></tr>
                    </tbody>
                </table>
            </div>

            <hr />

            {/* ═══════════════════════════════ BOTTOM LINE ═══════════════════════════════ */}

            <h2>The Bottom Line</h2>
            <p>
                Loom set the standard for async video at work. But in 2026, "record your screen and
                share a link" is table stakes. What Loom hasn't done is make recordings look good, and
                that's where Recordio wins.
            </p>
            <p>
                You get the same shareable links and view analytics, but your videos come out looking
                like a design team produced them. Auto zoom that understands what you're showing,
                spotlight effects that guide the eye, a clean toolbar, device frames, and smart silence
                removal. All of it automatic, at a lower price per seat.
            </p>
            <p>
                If your team records web apps, documents processes, or creates product demos,{' '}
                <strong>Recordio is the Loom alternative worth trying</strong>. The{' '}
                <a href="/">free plan</a> makes it risk-free to see the difference for yourself, and the{' '}
                <a href="/compare/loom/">full Recordio vs Loom comparison</a> has the feature table.
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
                        <a href="/about/" className="text-text-highlighted font-semibold text-base leading-snug hover:text-primary transition-colors">
                            John Mikhail
                        </a>
                        <span className="text-primary-highlighted text-sm leading-snug mt-0.5">
                            Founder of Recordio
                        </span>
                        <span className="text-text-muted text-sm leading-snug mt-2">
                            MIT grad · Previously at Google and Mixpanel · Tech and AI enthusiast
                        </span>
                    </div>
                </div>
                <a
                    href={LINKEDIN_URL}
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
