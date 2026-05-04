import { useEffect, useRef, useCallback } from 'react';
import { VIDEOS_BASE } from '../../utils/constants';

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
            <a href="/blog" className="not-prose inline-flex items-center gap-1 text-sm text-text-muted hover:text-primary transition-colors mb-8">
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
                    Last updated: March 2026 · 10 min read
                </p>
            </header>

            <p>
                The screen recording space has evolved dramatically. What started as simple screen capture
                tools have become full post-production studios, adding auto-zoom, spotlight effects,
                captions, and more, all without touching a video editor. Tools like <strong>Screen Studio</strong> and{' '}
                <strong>Focusee</strong> have been around longer, but a newcomer, <strong>Recordio</strong>,
                is challenging the status quo with a fundamentally different approach.
            </p>
            <p>
                We're the team behind Recordio, so yes, we're biased. But we're also builders who obsess
                over this space daily. We'll lay out the facts, show you where each tool shines, and let
                you decide.
            </p>

            <hr />

            {/* ═══════════════════════════════ 1. RECORDIO ═══════════════════════════════ */}

            <h2>
                1. Recordio: <span className="text-primary-highlighted">The Clear Winner</span> for
                Web App Recordings
            </h2>

            <p className="text-text-muted text-sm mb-1">
                <strong className="text-text-highlighted">Platforms:</strong> Chrome Extension (Mac, Windows, Linux, ChromeOS)
            </p>
            <p className="text-text-muted text-sm mb-6">
                <strong className="text-text-highlighted">Pricing:</strong> $4/mo billed annually ($48/yr) · $15/mo
                monthly · Free tier + 7-day Pro trial (no credit card)
            </p>

            <p>
                Recordio takes a fundamentally different approach to screen recording. Instead of running
                as a desktop app that watches your pixels, it runs <em>inside</em> your browser as a
                Chrome extension. That distinction sounds small, but it unlocks a lot.
            </p>

            <h3>Why the Browser Extension Approach Matters</h3>
            <p>
                Because Recordio lives inside Chrome, it doesn't just see your screen. It understands the
                DOM structure of whatever web app you're using. It doesn't read your text or content; it
                reads the <em>layout</em>: the hierarchy of elements on the page, how they're sized, and
                how they relate to each other. It knows when you're hovering over a card. It knows when
                you're typing into an input field, and how large that field is. It can distinguish a
                dropdown menu from a modal from a sidebar.
            </p>
            <p>This page-awareness powers two features that no other screen recorder can match:</p>

            <h4>DOM-Aware Auto Zoom</h4>
            <p>
                Most screen recorders apply zoom by following your mouse cursor. The result is jittery,
                imprecise, and often requires manual cleanup. What makes it worse is that the auto-zoom
                these tools generate isn't editable. If a zoom doesn't look right, you have to delete it
                entirely and reapply it manually. That's because cursor-based zoom follows a mouse path
                rather than working in a keyframe system.
            </p>
            <p>
                Recordio's zoom is different. It reads the HTML structure of the page and targets the
                actual UI element you're interacting with. The result is smooth, precise zooms that frame
                exactly the right thing, every time. And because it uses a keyframe system, every
                auto-generated zoom is fully editable: you can adjust timing, position, and framing
                without starting over.
            </p>
            <p>
                For web app recordings (product demos, onboarding walkthroughs, bug reports), this is a
                no-brainer. You press record, do your thing, and the zoom just <em>works</em>. No
                post-editing required.
            </p>

            <h4>Auto Spotlight (3D Card Elevation)</h4>
            <p>
                This is something only Recordio does. When you hover over a card or interactive element,
                Recordio detects it, makes it visually "pop" from the page by floating it forward with a 3D
                elevation effect while dimming the background. It's completely automatic and makes your
                recordings look like they were produced by a design team.
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
                            <source src={`${VIDEO_BASE}/after.webm`} type="video/webm" />
                            <source src={`${VIDEO_BASE}/after.mp4`} type="video/mp4" />
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
                            <source src={`${VIDEO_BASE}/before.webm`} type="video/webm" />
                            <source src={`${VIDEO_BASE}/before.mp4`} type="video/mp4" />
                        </video>
                    </div>
                    <span className="before-after-label before-after-label--before">
                        LOOM
                    </span>
                </div>
            </div>

            <h3>Features Only Recordio Has</h3>
            <p>
                Beyond the DOM-aware intelligence, Recordio packs several features you won't find
                anywhere else:
            </p>

            <h4>Device Frame Wrapping</h4>
            <p>
                Recordio is the only screen recorder that lets you wrap your recording in a device frame,
                like a MacBook Pro or MacBook Air. Instead of exporting a flat screen capture, your video
                looks like it's being played on an actual device. It's a subtle touch that makes product
                demos and marketing videos look significantly more polished.
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
                AutoCut removes dead air from your recordings, but it's not just listening for silence.
                It also tracks your interactions with the app. If you're quiet but actively typing or
                clicking, it keeps that footage. It only cuts when there's both no voice <em>and</em> no
                interaction, i.e. the moments where you're probably thinking about what to say next.
            </p>
            <p>
                This is meaningfully better than voice-only silence detection, which tends to cut moments
                where you're doing something important but not narrating it.
            </p>

            <h4>Simplified Chrome Toolbar</h4>
            <p>
                If you've ever recorded a Chrome window and cringed at your messy bookmark bar, 47 open
                tabs, and personal extensions visible in the toolbar, this feature is for you. Recordio
                replaces the real toolbar with a clean, simplified version that shows just the essentials.
                It can even shorten long URLs by stripping project IDs and query parameters, leaving a
                clean, professional-looking address bar.
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

            <h3>Shareable Links with Viewership Analytics</h3>
            <p>
                Instead of exporting and sending files around, Recordio lets you share a link directly.
                Anyone with the link can watch your video without downloading anything or signing up. It goes further
                than basic sharing: you get viewership analytics like total view count and average watch
                time. If you've been using Loom for this, Recordio gives you the same sharing workflow
                with significantly better-looking output. Imagine Loom, but with studio-quality
                videos. Permissions (controlling who can view) are coming soon.
            </p>

            <h3>Other Notable Features</h3>
            <ul>
                <li><strong>Auto Shrink Webcam</strong>: Your webcam automatically shrinks when you zoom into content, so it doesn't block what you're showing. It restores to full size when the zoom ends.</li>
                <li><strong>Dynamic Camera Placement</strong>: Set your webcam to full-screen for intros and outros, then have it automatically return to a corner position for the main content.</li>
                <li><strong>Local Transcription in 99 Languages</strong>: The generated transcript is fully editable if the AI gets a word wrong.</li>
                <li><strong>Word-by-Word Caption Highlighting</strong>: As captions appear on screen, individual words highlight in sync with your speech.</li>
                <li><strong>Camera Feathering</strong>: A soft edge effect that blends your webcam into the background, so your face doesn't feel like it's pasted on top.</li>
                <li><strong>Custom Backgrounds</strong>: Swap your recording background or upload your own.</li>
                <li><strong>Cross-Platform by Default</strong>: Since it's a Chrome extension, it works everywhere Chrome does, with no macOS lock-in.</li>
                <li><strong>Privacy-First, Local Processing</strong>: Both Recordio and Screen Studio process everything locally; your recordings never leave your machine during editing. What's notable about Recordio is that it achieves this entirely within the browser, with no native app install required. Transcription runs on-device via Whisper models. The only exception is shared links, where the final video is uploaded to our cloud (which we take security seriously on).</li>
            </ul>

            <h3>Where Recordio Falls Short</h3>
            <p>
                If you're recording native desktop apps (Figma desktop, Xcode, Final Cut), Recordio's
                auto-zoom and auto-spotlight won't work automatically since they rely on reading the browser
                DOM. You can still record these apps via screen/window capture and apply zooms and
                spotlights manually through the editor. Recordio's zoom and spotlight timelines are more
                intuitive than what Screen Studio and Focusee offer, and since you often end up manually
                editing their auto-zoom anyway (because cursor-based zoom rarely nails it), you might
                still save time with Recordio. That said, for pure desktop app recording, it's not the
                zero-effort experience you get with web apps.
            </p>

            <h3>Free to Try, No Strings Attached</h3>
            <p>
                Recordio offers a permanent free tier with unlimited 720p exports. On top of that, every
                new user gets a 7-day Pro trial, no credit card required. If you just need to make a
                one-off video, Recordio Pro is basically yours for free. We believe in building the best
                product and trusting that users will come back, which is why we offer the most generous
                trial in the space. Neither Screen Studio nor Focusee offer any free export option.
            </p>

            <hr />

            {/* ═══════════════════════════════ 2. SCREEN STUDIO ═══════════════════════════════ */}

            <h2>2. Screen Studio: The macOS Pioneer</h2>

            <p className="text-text-muted text-sm mb-1">
                <strong className="text-text-highlighted">Platforms:</strong> macOS only
            </p>
            <p className="text-text-muted text-sm mb-6">
                <strong className="text-text-highlighted">Pricing:</strong> $9/mo billed annually ($108/yr)
                · $29/mo monthly · $209 one-time (1 year of updates)
            </p>

            <p>
                Screen Studio was the first tool to popularize the "beautiful screen recording" category.
                It's been the dominant player in the macOS ecosystem for a couple of years, and for good
                reason: it produces great-looking recordings with smooth cursor-following zoom and solid
                background/wallpaper options.
            </p>

            <h3>Strengths</h3>
            <ul>
                <li><strong>Mature product</strong>: Screen Studio has had more time to polish edge cases and build a loyal user base.</li>
                <li><strong>Full desktop capture</strong>: Because it's a native macOS app, it can record any app on your system with equal fidelity, not just browser tabs. Native apps can also access the camera at higher resolutions and frame rates, though this is rarely noticeable since the webcam ends up minimized in most recordings anyway.</li>
                <li><strong>Motion blur and cursor smoothing</strong>: Screen Studio adds cinematic motion blur to transitions and smooths out cursor movements, which gives recordings a polished, professional feel.</li>
            </ul>

            <h3>Weaknesses</h3>
            <ul>
                <li><strong>macOS only</strong>: If you're on Windows or Linux, Screen Studio isn't an option.</li>
                <li><strong>Cursor-based zoom only</strong>: It follows your mouse, which means it doesn't understand what you're interacting with. The zoom can feel imprecise, especially in dense UIs where multiple elements are close together.</li>
                <li><strong>No auto-spotlight</strong>: No equivalent to Recordio's card elevation / 3D spotlight effect.</li>
                <li><strong>More expensive</strong>: At $108/year, it's more than double Recordio's annual price. The monthly rate of $29 is nearly twice Recordio's $15/mo.</li>
                <li><strong>No free tier</strong>: No way to try before you buy. There's no freemium export option.</li>
                <li><strong>No viewership analytics</strong>: Shareable links exist, but no insight into who watched or how much.</li>
                <li><strong>No simplified toolbar</strong>: You're stuck with whatever your browser chrome looks like.</li>
                <li><strong>No device frames</strong>: No option to wrap your recording in a MacBook frame.</li>
            </ul>

            <hr />

            {/* ═══════════════════════════════ 3. FOCUSEE ═══════════════════════════════ */}

            <h2>3. Focusee: The AI Avatar Bet</h2>

            <p className="text-text-muted text-sm mb-1">
                <strong className="text-text-highlighted">Platforms:</strong> Windows, macOS
            </p>
            <p className="text-text-muted text-sm mb-6">
                <strong className="text-text-highlighted">Pricing:</strong> $49.99/yr standard · $79.99/yr advanced
                · $19.99/mo standard · $199.99 one-time (5 PCs)
            </p>

            <p>
                Focusee is a cross-platform desktop app that borrows heavily from Screen Studio's editing
                model. Where it differentiates is its heavy investment in AI: AI-generated avatars, AI voice
                replacement, and AI-powered content creation. If you want to generate a talking-head video
                without actually recording yourself, Focusee is one of the few tools offering that.
            </p>
            <p>
                That said, the AI approach has been controversial. Viewers can usually tell when a voice is
                synthetic or when an avatar is AI-generated, and engagement tends to drop. Authentic voice
                and face consistently outperform AI alternatives in product demos and tutorials. This isn't new;
                AI-generated content has been promising "just as good as real" for years, but audiences
                still prefer the real thing.
            </p>
            <p>
                Beyond the AI features (which run on a credit system, so heavy use costs extra), Focusee
                offers the same cursor-based zoom as Screen Studio with no DOM awareness, no auto-spotlight,
                no device frames for desktop recordings, no toolbar simplification, and no free tier.
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
                            <th>Focusee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Monthly</td><td>$15/mo</td><td>$29/mo</td><td>$19.99/mo (without AI)</td></tr>
                        <tr><td>Annual</td><td>$48/yr ($4/mo)</td><td>$108/yr ($9/mo)</td><td>$49.99/yr (without AI)</td></tr>
                        <tr><td>Free Tier Exports</td><td>Yes (720p, watermark)</td><td>No</td><td>No</td></tr>
                        <tr><td>Shareable Links</td><td>Yes (with analytics)</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Platforms</td><td>Chrome (any OS)</td><td>macOS only</td><td>Windows, macOS</td></tr>
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
                            <th>Focusee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Auto Zoom</td><td>DOM + cursor based</td><td>Cursor-based</td><td>Cursor-based</td></tr>
                        <tr><td>Auto Zoom Editable</td><td>Yes</td><td>No (delete &amp; redo)</td><td>No (delete &amp; redo)</td></tr>
                        <tr><td>Auto Spotlight</td><td>Yes (3D elevation)</td><td>Dimming only</td><td>Dimming only</td></tr>
                        <tr><td>Device Frames</td><td>Yes</td><td>No</td><td>No</td></tr>
                        <tr><td>Smart AutoCut</td><td>Voice + interaction</td><td>Basic</td><td>No</td></tr>
                        <tr><td>Simplified Toolbar</td><td>Yes</td><td>No</td><td>No</td></tr>
                        <tr><td>Auto Captions</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Webcam Auto Shrink</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Dynamic Camera Positions</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Captions Word Highlighting</td><td>Yes</td><td>Yes</td><td>No</td></tr>
                        <tr><td>Shareable Links</td><td>Yes, with viewership analytics</td><td>Yes</td><td>Yes</td></tr>
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
                web-based workflows), Recordio is the clear winner. Its DOM-aware intelligence produces
                auto-zoom and auto-spotlight results that simply aren't possible with cursor-tracking
                tools. Add in device frames, smart AutoCut, and simplified toolbar, and you're looking at
                a screen recorder that was purpose-built for this use case, at roughly half the price of
                Screen Studio. And because it's web-based, Recordio is actively building toward a full
                Loom replacement, with library management, viewership analytics, and permissions: a
                direction that desktop-only tools simply aren't positioned for.
            </p>
            <p>
                If you live entirely in the <strong>macOS native app ecosystem</strong> and rarely record
                browser content, Screen Studio remains a strong, mature choice. It's pricier, but it's
                proven.
            </p>
            <p>
                If you want <strong>AI-generated avatars and voice replacement</strong>, Focusee is about
                the only option in this category. Just know that audiences still overwhelmingly prefer
                authentic recordings over synthetic ones.
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
                        <span className="text-text-highlighted text-base font-semibold">
                            John Mikhail
                        </span>
                        <span className="text-text-muted text-sm">
                            Founder of Recordio
                        </span>
                        <span className="text-text-muted text-sm mt-2">
                            MIT grad · Previously at Google and Mixpanel · Tech and AI enthusiast
                        </span>
                    </div>
                </div>
                <a
                    href="https://www.linkedin.com/in/john-mikhail/"
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
