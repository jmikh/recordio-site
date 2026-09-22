import { useEffect, useRef, useCallback } from 'react';
import { VIDEOS_BASE, LINKEDIN_URL } from '../../utils/constants';

const BlogArticle = () => {
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
                    Best Screen Recorders in 2026: An Honest Comparison
                </h1>
                <p className="text-text-muted text-base">
                    Last updated: September 2026 · 10 min read
                </p>
            </header>

            <p>
                Screen recorders used to capture pixels and stop there. The best ones now behave like a
                small post-production studio: they zoom, spotlight, caption, and trim your recording for
                you, with no video editor in sight. <strong>Screen Studio</strong> and{' '}
                <strong>FocuSee</strong> have been in this category for a while. <strong>Recordio</strong> is
                the newer entrant, and it takes a different approach to the same problem.
            </p>
            <p>
                We're the team behind Recordio, so we're biased. We also use all three tools constantly.
                Below is a straight comparison of features and pricing, including the places where a
                competitor is the better pick.
            </p>

            <hr />

            {/* ═══════════════════════════════ 1. RECORDIO ═══════════════════════════════ */}

            <h2>
                1. Recordio: <span className="text-primary-highlighted">The Best Pick</span> for
                Web App Recordings
            </h2>

            <p className="text-text-muted text-sm mb-1">
                <strong className="text-text-highlighted">Platforms:</strong> Chrome extension (also works in Edge and Brave) on Mac, Windows, Linux, and ChromeOS
            </p>
            <p className="text-text-muted text-sm mb-6">
                <strong className="text-text-highlighted">Pricing:</strong> Free plan · Pro $12 per seat/month billed annually · $15 per seat/month billed monthly
            </p>

            <p>
                Recordio doesn't run as a desktop app that watches your screen. It runs <em>inside</em> your
                browser as an extension. That sounds like a small distinction, but it changes what the
                recorder can know about your video.
            </p>

            <h3>Why the Browser Extension Approach Matters</h3>
            <p>
                Because Recordio lives inside Chrome, it sees more than pixels. It understands the layout
                of the web app you're recording: which elements are on the page, how big they are, and how
                they relate to each other. It doesn't read your content, only the structure. It knows when
                you're hovering over a card, when you're typing into an input, and whether the thing under
                your cursor is a dropdown, a modal, or a sidebar.
            </p>
            <p>That page awareness powers two features no other screen recorder can match:</p>

            <h4>DOM-Aware Auto Zoom</h4>
            <p>
                Most screen recorders zoom by following your cursor. The result is jittery and imprecise,
                and it clips things constantly: you zoom toward a form and the input you're typing in gets
                cut off at the edge. Worse, the auto-zooms these tools generate usually can't be edited.
                If one looks wrong, you delete it and redo it by hand.
            </p>
            <p>
                Recordio targets the actual UI element you're interacting with, so the frame lands on the
                whole input, the whole card, or the whole menu. Every zoom is a keyframe on the timeline,
                so you can adjust timing, position, and framing without starting over.
            </p>
            <p>
                For product demos, onboarding walkthroughs, and bug reports recorded in a web app, this
                is the whole pitch. Press record, do the thing, and the zoom just works.
            </p>

            <h4>Auto Spotlight (3D Card Elevation)</h4>
            <p>
                Only Recordio does this. When you hover over a card, popover, or other interactive element,
                Recordio lifts it forward with a subtle 3D elevation and glow while dimming the background.
                It's completely automatic and gives the viewer's eye somewhere to land.
            </p>

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

            <h3>Features Only Recordio Has</h3>
            <p>
                Beyond the DOM-aware intelligence, a few features are unique to Recordio:
            </p>

            <h4>Device Frame Wrapping</h4>
            <p>
                Recordio can wrap your recording in a MacBook Pro or MacBook Air frame. Instead of a flat
                screen capture, your video looks like it's playing on a real device. It's a small touch
                that makes product demos and marketing clips look noticeably more finished.
            </p>

            <div className="not-prose my-6">
                <img
                    src="/assets/device-frames.webp"
                    alt="Recordio device frame wrapping — recording displayed inside a MacBook Pro frame"
                    className="w-full h-auto block rounded-xl border border-border"
                    loading="lazy"
                />
            </div>

            <h4>Smart AutoCut</h4>
            <p>
                AutoCut removes dead air, but it isn't just listening for silence. It also watches your
                interactions with the page. If you're quiet but actively typing or clicking, that footage
                stays. It only cuts when there's no voice <em>and</em> no interaction, which is usually
                the moment you're thinking about what to say next.
            </p>
            <p>
                Voice-only silence detection tends to cut the parts where you're doing something important
                but not narrating it. AutoCut doesn't make that mistake.
            </p>

            <h4>Clean Chrome Toolbar</h4>
            <p>
                If you've ever recorded a Chrome window and cringed at your bookmark bar, 47 open tabs, and
                a pile of extension icons, this one is for you. Recordio replaces the real toolbar with a
                clean, minimal bar that shows just the page title. No messy bookmarks, no stray tabs, no
                embarrassing URLs.
            </p>

            <div className="not-prose my-6 grid grid-cols-1 gap-6">
                <div className="relative rounded-xl overflow-visible border border-border">
                    <img
                        src="/assets/toolbar-before.webp"
                        alt="Chrome toolbar before — messy bookmarks, tabs, and extensions visible"
                        className="w-full h-auto block rounded-xl"
                        loading="lazy"
                    />
                    <span className="before-after-label before-after-label--before" style={{ top: '-0.75rem' }}>BEFORE</span>
                </div>
                <div className="relative rounded-xl overflow-visible border border-border border-primary/30">
                    <img
                        src="/assets/toolbar-after.webp"
                        alt="Chrome toolbar after — clean, simplified toolbar by Recordio"
                        className="w-full h-auto block rounded-xl"
                        loading="lazy"
                    />
                    <span className="before-after-label before-after-label--after" style={{ top: '-0.75rem' }}>AFTER</span>
                </div>
            </div>

            <h3>Shareable Links, View Analytics, and a Team Library</h3>
            <p>
                Instead of exporting a file and sending it around, Recordio Pro lets you share a link.
                Anyone with the link can watch, and you can see how the video performed: total views and
                average watch time. Pro also includes a shared team library with unlimited viewer seats,
                so your teammates can browse and watch recordings without each needing a paid seat. If
                you've been using Loom for this workflow, Recordio gives you the same sharing with
                much better-looking output.
            </p>

            <h3>Other Notable Features</h3>
            <ul>
                <li><strong>AI Captions with Word-Level Timing</strong>: OpenAI-powered captions that track to the individual word. Edit any mistake in place, or highlight a caption line and delete it to cut that segment from the video. No timeline scrubbing.</li>
                <li><strong>Overlays and Blur</strong>: Blur out sensitive information, or add text, arrows, and shapes to call out what matters.</li>
                <li><strong>Backgrounds and Music</strong>: Pick from a curated library, build a gradient, or upload a brand image. Add a music track from the built-in library.</li>
                <li><strong>Smart Webcam Overlay</strong>: Add your face with customizable position and style. It shrinks out of the way when a zoom kicks in so it never covers what you're showing.</li>
                <li><strong>Cloud Rendering on Pro</strong>: Free plan videos render in your browser tab. On Pro, rendering happens on our servers, so you can close the tab and come back when it's done.</li>
                <li><strong>Cross-Platform by Default</strong>: It's a browser extension, so it works everywhere Chrome, Edge, or Brave do. No macOS lock-in.</li>
            </ul>

            <h3>Where Recordio Falls Short</h3>
            <p>
                If you mostly record native desktop apps (Figma desktop, Xcode, Final Cut), Recordio's
                auto-zoom and auto-spotlight won't fire automatically, because they rely on reading the
                browser DOM. You can still record these apps through screen or window capture and add
                zooms and spotlights manually in the editor. The zoom and spotlight timelines are simpler
                than what Screen Studio and FocuSee offer, and since cursor-based auto-zoom usually needs
                manual cleanup anyway, you may still come out ahead. But it's not the zero-effort
                experience you get with web apps. Native desktop apps are on our roadmap.
            </p>

            <h3>Free to Start, No Credit Card</h3>
            <p>
                Recordio's free plan isn't a trial. It includes auto zoom, auto spotlight, silence
                cutting, the background and music library, and 1080p downloads, for up to 5 active
                projects. Pro adds 4K exports, AI captions, shareable links, cloud rendering, and the team
                library. Neither Screen Studio nor FocuSee offers any free export at all.
            </p>

            <hr />

            {/* ═══════════════════════════════ 2. SCREEN STUDIO ═══════════════════════════════ */}

            <h2>2. Screen Studio: The macOS Pioneer</h2>

            <p className="text-text-muted text-sm mb-1">
                <strong className="text-text-highlighted">Platforms:</strong> macOS only
            </p>
            <p className="text-text-muted text-sm mb-6">
                <strong className="text-text-highlighted">Pricing:</strong> $9/mo billed annually ($108/yr)
                · $29/mo monthly · No free plan · One-time licenses are no longer sold
            </p>

            <p>
                Screen Studio created the "beautiful screen recording" category. It has been the dominant
                choice on macOS for years, and for good reason: smooth cursor-following zoom, cinematic
                motion blur, and a big library of wallpapers and backgrounds.
            </p>

            <h3>Strengths</h3>
            <ul>
                <li><strong>Mature product</strong>: More years of polish, more edge cases handled, and a large, loyal user base.</li>
                <li><strong>Full desktop capture</strong>: As a native macOS app, it records any app on your system with equal fidelity, not just browser tabs. It can also pull higher webcam resolutions and frame rates, though that rarely shows once the webcam is tucked in a corner.</li>
                <li><strong>Motion blur and cursor smoothing</strong>: Transitions get cinematic motion blur and cursor movement is smoothed, which gives recordings a polished feel.</li>
            </ul>

            <h3>Weaknesses</h3>
            <ul>
                <li><strong>macOS only</strong>: If anyone on your team uses Windows or Linux, Screen Studio is out.</li>
                <li><strong>Cursor-based zoom only</strong>: It follows the mouse, so it doesn't know what you're interacting with. Zooms feel imprecise in dense UIs where elements sit close together.</li>
                <li><strong>No auto-spotlight</strong>: Nothing equivalent to Recordio's 3D card elevation.</li>
                <li><strong>No free plan</strong>: There's no way to export a video without paying. Recordio's free plan is genuinely free.</li>
                <li><strong>Pricier month to month</strong>: $29/mo versus Recordio's $15. On annual billing Screen Studio is slightly cheaper ($9/mo versus $12), but you're paying for one Mac app rather than a cross-platform tool with links and a team library.</li>
                <li><strong>No view analytics or team library</strong>: You can share a file, but there's no insight into who watched or a shared place for your team's recordings.</li>
                <li><strong>No clean toolbar</strong>: Your browser chrome is whatever it is.</li>
            </ul>

            <hr />

            {/* ═══════════════════════════════ 3. FOCUSEE ═══════════════════════════════ */}

            <h2>3. FocuSee: The AI Avatar Bet</h2>

            <p className="text-text-muted text-sm mb-1">
                <strong className="text-text-highlighted">Platforms:</strong> Windows, macOS
            </p>
            <p className="text-text-muted text-sm mb-6">
                <strong className="text-text-highlighted">Pricing:</strong> $19.99/mo · $49.99/yr standard · $79.99/yr advanced
                · $199.99 one-time (tied to the current major version) · No free plan
            </p>

            <p>
                FocuSee is a cross-platform desktop app that borrows heavily from Screen Studio's editing
                model. Where it differs is its bet on AI: AI-generated avatars, AI voice replacement, and
                AI-assisted content creation. If you want a talking-head video without recording yourself,
                FocuSee is one of the few tools offering it.
            </p>
            <p>
                That bet is a mixed one. Viewers can usually tell when a voice is synthetic or an avatar is
                generated, and engagement drops when they do. Real voice and a real face still outperform
                AI stand-ins in product demos and tutorials.
            </p>
            <p>
                Beyond the AI features (which run on a credit system, so heavy use costs extra), FocuSee
                offers the same cursor-based zoom as Screen Studio, with no DOM awareness, no
                auto-spotlight, no device frames, no toolbar cleanup, and no free plan.
            </p>

            <hr />

            {/* ═══════════════════════════════ PRICING TABLE ═══════════════════════════════ */}

            <h2>Pricing Comparison</h2>
            <div className="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Recordio</th>
                            <th>Screen Studio</th>
                            <th>FocuSee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Monthly</td><td>$15 per seat</td><td>$29</td><td>$19.99 (without AI)</td></tr>
                        <tr><td>Annual</td><td>$12 per seat/mo ($144/yr)</td><td>$9/mo ($108/yr)</td><td>$49.99/yr (without AI)</td></tr>
                        <tr><td>One-time license</td><td>No</td><td>No longer offered</td><td>$199.99 (current major version)</td></tr>
                        <tr><td>Free plan</td><td>Yes (5 active projects, 1080p downloads)</td><td>No</td><td>No</td></tr>
                        <tr><td>Shareable links</td><td>Yes, with view analytics (Pro)</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Platforms</td><td>Chrome, Edge, Brave (any OS)</td><td>macOS only</td><td>Windows, macOS</td></tr>
                    </tbody>
                </table>
            </div>

            <hr />

            {/* ═══════════════════════════════ FEATURE TABLE ═══════════════════════════════ */}

            <h2>Feature Comparison</h2>
            <div className="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Recordio</th>
                            <th>Screen Studio</th>
                            <th>FocuSee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Auto Zoom</td><td>DOM-aware + cursor</td><td>Cursor-based</td><td>Cursor-based</td></tr>
                        <tr><td>Auto Zoom Editable</td><td>Yes (keyframes)</td><td>No (delete &amp; redo)</td><td>No (delete &amp; redo)</td></tr>
                        <tr><td>Auto Spotlight</td><td>Yes (3D elevation)</td><td>Dimming only</td><td>Dimming only</td></tr>
                        <tr><td>Device Frames</td><td>Yes</td><td>Yes</td><td>No</td></tr>
                        <tr><td>Smart AutoCut</td><td>Voice + interaction</td><td>Basic</td><td>Basic</td></tr>
                        <tr><td>Clean Toolbar</td><td>Yes</td><td>No</td><td>No</td></tr>
                        <tr><td>AI Captions</td><td>Yes, word-level, edit to cut</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Overlays &amp; Blur</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Webcam Overlay</td><td>Yes, auto-shrinks on zoom</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Shareable Links</td><td>Yes, with view analytics</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Team Library</td><td>Yes (Pro)</td><td>No</td><td>No</td></tr>
                        <tr><td>Music</td><td>Yes</td><td>Yes</td><td>No</td></tr>
                        <tr><td>Custom Backgrounds</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>AI Avatars</td><td>No</td><td>No</td><td>Yes</td></tr>
                    </tbody>
                </table>
            </div>

            <hr />

            {/* ═══════════════════════════════ BOTTOM LINE ═══════════════════════════════ */}

            <h2>The Bottom Line</h2>
            <p>
                If you record <strong>web apps</strong> (SaaS products, internal tools, dashboards,
                anything in a browser), Recordio is the best pick. DOM-aware zoom and spotlight produce
                results that cursor-tracking tools can't, and device frames, AutoCut, and the clean
                toolbar round it out. It's also the only one of the three with a real free plan, and the
                only one built around sharing: links, view analytics, and a team library that works on
                every operating system.
            </p>
            <p>
                If you live in the <strong>macOS native app ecosystem</strong> and rarely record browser
                content, Screen Studio remains a strong, mature choice. It's Mac-only and has no free
                plan, but it's proven.
            </p>
            <p>
                If you want <strong>AI-generated avatars and voice replacement</strong>, FocuSee is about
                the only option here. Just know that audiences still prefer authentic recordings.
            </p>
            <p>
                For most people building, demoing, or documenting web-based products in 2026,{' '}
                <strong>Recordio is the best screen recorder you can get</strong>.
            </p>

            {/* ── Author ── */}
            <div className="not-prose flex items-center justify-between gap-4 py-6 mt-10 border-t border-border">
                <div className="flex items-center gap-4">
                    <img
                        src="/assets/john.webp"
                        alt="John Mikhail"
                        width={96}
                        height={96}
                        className="rounded-full shrink-0"
                        loading="lazy"
                    />
                    <div className="flex flex-col gap-0.5">
                        <a href="/about/" className="text-text-highlighted text-base font-semibold hover:text-primary transition-colors">
                            John Mikhail
                        </a>
                        <span className="text-text-muted text-sm">
                            Founder of Recordio
                        </span>
                        <span className="text-text-muted text-sm mt-2">
                            MIT grad · Previously at Google and Mixpanel · Tech and AI enthusiast
                        </span>
                    </div>
                </div>
                <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-[#0a66c2] transition-colors shrink-0"
                    aria-label="John Mikhail on LinkedIn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>
            </div>

        </article>
    );
};

export default BlogArticle;
