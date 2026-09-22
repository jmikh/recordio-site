import { c as createComponent, a as renderTemplate, u as unescapeHTML, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { V as VIDEOS_BASE, a as SUPPORT_EMAIL, L as LINKEDIN_URL, S as SITE_URL, $ as $$BaseLayout } from '../../chunks/BaseLayout_BMmOTL_5.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useCallback, useEffect } from 'react';
import { c as compareLink, H as Header, F as Footer } from '../../chunks/Footer_CETPJvN_.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_DNl1Z9iS.mjs';
import { R as RelatedLinks } from '../../chunks/RelatedLinks_DlwSg6Vn.mjs';
export { renderers } from '../../renderers.mjs';

const LoomAlternativesArticle = () => {
  const beforeRef = useRef(null);
  const afterRef = useRef(null);
  const videoSectionRef = useRef(null);
  const hasStarted = useRef(false);
  const startPlayback = useCallback(() => {
    if (hasStarted.current) return;
    const before = beforeRef.current;
    const after = afterRef.current;
    if (!before || !after) return;
    hasStarted.current = true;
    before.preload = "auto";
    after.preload = "auto";
    before.load();
    after.load();
    let played = false;
    const tryPlay = () => {
      if (played) return;
      if (before.readyState >= 3 && after.readyState >= 3) {
        played = true;
        before.currentTime = 0;
        after.currentTime = 0;
        before.play().catch(() => {
        });
        after.play().catch(() => {
        });
      }
    };
    before.addEventListener("canplay", tryPlay);
    after.addEventListener("canplay", tryPlay);
    tryPlay();
  }, []);
  useEffect(() => {
    const el = videoSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startPlayback();
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startPlayback]);
  useEffect(() => {
    const before = beforeRef.current;
    const after = afterRef.current;
    if (!before || !after) return;
    const interval = setInterval(() => {
      if (before.paused || after.paused) return;
      if (Math.abs(before.currentTime - after.currentTime) > 0.5) {
        after.currentTime = before.currentTime;
      }
    }, 2e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs("article", { className: "prose max-w-3xl mx-auto px-6 py-12 md:py-20", children: [
    /* @__PURE__ */ jsx("a", { href: "/blog/", className: "not-prose inline-flex items-center gap-1 text-sm text-text-muted hover:text-primary transition-colors mb-8", children: "← Back to Blog" }),
    /* @__PURE__ */ jsxs("header", { className: "mb-12 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-primary-highlighted text-sm font-semibold uppercase tracking-wider mb-4", children: "Comparison" }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl font-bold text-text-highlighted leading-tight mb-4", children: "Best Loom Alternatives in 2026: Why Teams Are Switching" }),
      /* @__PURE__ */ jsx("p", { className: "text-text-muted text-base", children: "Last updated: September 2026 · 8 min read" })
    ] }),
    /* @__PURE__ */ jsx("p", { children: "Loom pioneered async video for teams. The idea was simple: record your screen, share a link, skip the meeting. It worked, and millions of people adopted it." }),
    /* @__PURE__ */ jsx("p", { children: "In 2026, Loom's value is harder to justify. Business seats run $15 per user per month billed annually ($18 monthly), and Business + AI runs $20 per user per month ($24 monthly). For a team of 20, that's $3,600 to $4,800 a year for what is still a fairly basic recording tool. The free Starter plan caps you at 25 videos of 5 minutes each." }),
    /* @__PURE__ */ jsx("p", { children: "The bigger issue is quality. Loom has added AI zoom and manual spotlight tools, but the results are basic: cursor-following zoom that doesn't understand what you're interacting with, and shapes you draw yourself. Most Loom videos are shared internally, so there has been little pressure to go further. What you record is still mostly what you get." }),
    /* @__PURE__ */ jsxs("p", { children: [
      "We're the team behind ",
      /* @__PURE__ */ jsx("strong", { children: "Recordio" }),
      ", so we're biased. But we built it specifically to fix this: studio-quality recordings that are just as easy to share, at a lower price per seat. Here's why teams are switching."
    ] }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsx("h2", { children: "The Quality Gap: Why Loom Videos Look Like Loom Videos" }),
    /* @__PURE__ */ jsx("p", { children: "You've seen it. Someone shares a Loom and it's a flat screen recording with a webcam bubble, visible browser clutter, and nothing telling the viewer where to look. It gets the job done internally. Send it to a prospect or a client, or drop it into documentation, and it falls flat." }),
    /* @__PURE__ */ jsx("p", { children: "Recordio changes that. Every recording gets DOM-aware auto zoom (it reads your page's structure and zooms to the right element), auto spotlight that lifts the element you're interacting with off the page with a 3D effect, and a clean Chrome toolbar that hides your bookmarks and 47 open tabs. The result is a studio-quality video, produced automatically, with no manual editing." }),
    /* @__PURE__ */ jsx("p", { children: "Here's what the difference looks like:" }),
    /* @__PURE__ */ jsxs("div", { ref: videoSectionRef, className: "my-12 -mx-6 md:-mx-16 lg:-mx-32 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "before-after-video before-after-video--after", children: /* @__PURE__ */ jsxs(
          "video",
          {
            ref: afterRef,
            muted: true,
            loop: true,
            playsInline: true,
            preload: "metadata",
            className: "w-full h-auto block",
            children: [
              /* @__PURE__ */ jsx("source", { src: `${VIDEOS_BASE}/after.webm`, type: "video/webm" }),
              /* @__PURE__ */ jsx("source", { src: `${VIDEOS_BASE}/after.mp4`, type: "video/mp4" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("span", { className: "before-after-label before-after-label--after", children: "RECORDIO" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative text-opacity-80", children: [
        /* @__PURE__ */ jsx("div", { className: "before-after-video opacity-80 backdrop-blur-sm grayscale-[20%]", children: /* @__PURE__ */ jsxs(
          "video",
          {
            ref: beforeRef,
            muted: true,
            loop: true,
            playsInline: true,
            preload: "metadata",
            className: "w-full h-auto block",
            children: [
              /* @__PURE__ */ jsx("source", { src: `${VIDEOS_BASE}/before.webm`, type: "video/webm" }),
              /* @__PURE__ */ jsx("source", { src: `${VIDEOS_BASE}/before.mp4`, type: "video/mp4" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("span", { className: "before-after-label before-after-label--before", children: "LOOM" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { children: 'The "before" is essentially what Loom gives you. The "after" is what Recordio produces from the same recording session with zero manual edits: auto zoom, auto spotlight, a device frame, a background, and a clean toolbar, all applied automatically.' }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsx("h2", { children: "Recordio: Loom's Shareability + Studio Quality" }),
    /* @__PURE__ */ jsx("p", { children: "Recordio keeps the sharing workflow people like about Loom and adds the production quality Loom has never had. Here's what makes it a real alternative:" }),
    /* @__PURE__ */ jsx("h3", { children: "Shareable Links, View Analytics, and a Team Library" }),
    /* @__PURE__ */ jsx("p", { children: "Just like Loom, you share a link and anyone with it can watch. Recordio also shows you how the video performed, with total views and average watch time, so you know whether people actually watched. Pro includes a shared team library with unlimited viewer seats: your teammates can browse and watch everything without each needing a paid seat." }),
    /* @__PURE__ */ jsx("h3", { children: "Studio-Quality Output, Zero Effort" }),
    /* @__PURE__ */ jsx("p", { children: "This is where Recordio pulls ahead of everything else. Because it runs as a Chrome extension, it reads the structure of the web app you're recording. It knows what you're clicking on, what you're hovering over, and what deserves the viewer's attention. That page awareness powers:" }),
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "DOM-Aware Auto Zoom" }),
        ": Zooms to the exact UI element you're interacting with, so inputs and forms never get clipped. No jittery cursor-following, and every zoom is an editable keyframe."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Auto Spotlight (3D Card Elevation)" }),
        ": When you hover over a card or interactive element, Recordio lifts it forward with a subtle glow while dimming the background. Completely automatic."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Clean Chrome Toolbar" }),
        ": Replaces your bookmarks, tabs, and extension icons with a minimal bar that shows just the page title."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Device Frame Wrapping" }),
        ": Wraps your recording in a MacBook Pro or MacBook Air frame so product demos look finished."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "not-prose my-6 grid grid-cols-1 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative rounded-xl overflow-visible border border-border", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/assets/toolbar-before.webp",
            alt: "Chrome toolbar before, showing messy bookmarks, tabs, and extensions",
            className: "w-full h-auto block rounded-xl",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "before-after-label before-after-label--before", style: { top: "-0.75rem" }, children: "BEFORE" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative rounded-xl overflow-visible border border-border border-primary/30", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/assets/toolbar-after.webp",
            alt: "Chrome toolbar after, clean and simplified by Recordio",
            className: "w-full h-auto block rounded-xl",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "before-after-label before-after-label--after", style: { top: "-0.75rem" }, children: "AFTER" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("h3", { children: "Smart AutoCut" }),
    /* @__PURE__ */ jsx("p", { children: "Loom recordings are full of dead air: the pauses where you're deciding what to say or navigating to the next screen. Recordio's AutoCut removes that silence automatically. It tracks both your voice and your interactions, so it won't cut footage where you're quietly typing or clicking through something important." }),
    /* @__PURE__ */ jsx("h3", { children: "More Ways Recordio Goes Further" }),
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "AI Captions You Can Edit to Cut" }),
        ": OpenAI-powered captions timed to the word. Fix any mistake in place, or delete a caption line and that segment is cut from the video."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Overlays and Blur" }),
        ": Blur sensitive data before you share, or add text, arrows, and shapes to point at what matters."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Backgrounds and Music" }),
        ": A curated background library, custom gradients, brand image uploads, and a music library."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Smart Webcam Overlay" }),
        ": Customizable position and style, and it shrinks out of the way when a zoom kicks in."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "4K Exports on Pro" }),
        ": Download in 1080p on the free plan or 4K on Pro, alongside the shareable link."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Cross-Platform" }),
        ": Works in Chrome, Edge, and Brave on Mac, Windows, Linux, and ChromeOS."
      ] })
    ] }),
    /* @__PURE__ */ jsx("h3", { children: "Cost: Lower Per Seat, Free for Viewers" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Recordio Pro is $12 per seat per month billed annually, or $15 monthly. Loom Business is $15 per user annually, or $20 with AI. Only the people who record need a Recordio seat; viewers are unlimited and free. And the free plan isn't a trial: it includes auto zoom, auto spotlight, silence cutting, and 1080p downloads for up to 5 active projects, with no credit card. For team pricing, reach out to ",
      /* @__PURE__ */ jsx("a", { href: `mailto:${SUPPORT_EMAIL}`, children: SUPPORT_EMAIL }),
      "."
    ] }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsx("h2", { children: "What About Screen Studio?" }),
    /* @__PURE__ */ jsx("p", { children: "Screen Studio is a macOS-only desktop app that produces polished recordings with cursor-based auto zoom and motion blur. It's a solid tool for making demos look good. But it's not a Loom replacement: there's no free plan, no shared video library, no view analytics, and no team features. It's a recording and editing tool, not an async communication platform, and it leaves out anyone on Windows or Linux." }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsx("h2", { children: "Recordio vs Loom: Feature Comparison" }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { children: "Feature" }),
        /* @__PURE__ */ jsx("th", { children: "Recordio" }),
        /* @__PURE__ */ jsx("th", { children: "Loom" })
      ] }) }),
      /* @__PURE__ */ jsxs("tbody", { children: [
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "Shareable Links" }),
          /* @__PURE__ */ jsx("td", { children: "Yes, with view analytics" }),
          /* @__PURE__ */ jsx("td", { children: "Yes" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "Auto Zoom" }),
          /* @__PURE__ */ jsx("td", { children: "DOM-aware (reads page structure)" }),
          /* @__PURE__ */ jsx("td", { children: "Cursor-based (AI)" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "Auto Zoom Editable" }),
          /* @__PURE__ */ jsx("td", { children: "Yes (keyframes)" }),
          /* @__PURE__ */ jsx("td", { children: "No" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "Auto Spotlight" }),
          /* @__PURE__ */ jsx("td", { children: "Automatic, 3D elevation" }),
          /* @__PURE__ */ jsx("td", { children: "Manual shapes (circles, arrows)" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "Device Frames" }),
          /* @__PURE__ */ jsx("td", { children: "Yes" }),
          /* @__PURE__ */ jsx("td", { children: "No" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "Smart AutoCut" }),
          /* @__PURE__ */ jsx("td", { children: "Voice + interaction aware" }),
          /* @__PURE__ */ jsx("td", { children: "Filler word removal (AI plan)" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "Clean Toolbar" }),
          /* @__PURE__ */ jsx("td", { children: "Yes" }),
          /* @__PURE__ */ jsx("td", { children: "No" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "AI Captions" }),
          /* @__PURE__ */ jsx("td", { children: "Yes, word-level, edit to cut" }),
          /* @__PURE__ */ jsx("td", { children: "Yes" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "Overlays & Blur" }),
          /* @__PURE__ */ jsx("td", { children: "Yes" }),
          /* @__PURE__ */ jsx("td", { children: "Basic" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "Custom Backgrounds" }),
          /* @__PURE__ */ jsx("td", { children: "Yes" }),
          /* @__PURE__ */ jsx("td", { children: "Yes" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "Team Library" }),
          /* @__PURE__ */ jsx("td", { children: "Yes (Pro)" }),
          /* @__PURE__ */ jsx("td", { children: "Yes" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "Viewer Seats" }),
          /* @__PURE__ */ jsx("td", { children: "Unlimited, free" }),
          /* @__PURE__ */ jsx("td", { children: "Free viewers" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "Free Plan" }),
          /* @__PURE__ */ jsx("td", { children: "5 active projects, 1080p downloads" }),
          /* @__PURE__ */ jsx("td", { children: "25 videos, 5 min each" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: "Pro Price" }),
          /* @__PURE__ */ jsx("td", { children: "$12/seat/mo annual · $15 monthly" }),
          /* @__PURE__ */ jsx("td", { children: "$15/user/mo annual · $20 with AI" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsx("h2", { children: "The Bottom Line" }),
    /* @__PURE__ */ jsx("p", { children: `Loom set the standard for async video at work. But in 2026, "record your screen and share a link" is table stakes. What Loom hasn't done is make recordings look good, and that's where Recordio wins.` }),
    /* @__PURE__ */ jsx("p", { children: "You get the same shareable links and view analytics, but your videos come out looking like a design team produced them. Auto zoom that understands what you're showing, spotlight effects that guide the eye, a clean toolbar, device frames, and smart silence removal. All of it automatic, at a lower price per seat." }),
    /* @__PURE__ */ jsxs("p", { children: [
      "If your team records web apps, documents processes, or creates product demos,",
      " ",
      /* @__PURE__ */ jsx("strong", { children: "Recordio is the Loom alternative worth trying" }),
      ". The free plan makes it risk-free to see the difference for yourself."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "not-prose flex items-center justify-between gap-4 py-6 mt-10 border-t border-border", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/assets/john.webp",
            alt: "John Mikhail",
            className: "w-24 h-24 rounded-full object-cover border-2 border-border flex-shrink-0",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("a", { href: "/about/", className: "text-text-highlighted font-semibold text-base leading-snug hover:text-primary transition-colors", children: "John Mikhail" }),
          /* @__PURE__ */ jsx("span", { className: "text-primary-highlighted text-sm leading-snug mt-0.5", children: "Founder of Recordio" }),
          /* @__PURE__ */ jsx("span", { className: "text-text-muted text-sm leading-snug mt-2", children: "MIT grad · Previously at Google and Mixpanel · Tech and AI enthusiast" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: LINKEDIN_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex-shrink-0 text-text-muted hover:text-primary transition-colors",
          "aria-label": "John Mikhail on LinkedIn",
          children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "28", height: "28", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }) })
        }
      )
    ] })
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BestLoomAlternatives2026 = createComponent(($$result, $$props, $$slots) => {
  const related = [
    compareLink("loom"),
    compareLink("tella"),
    compareLink("clueso"),
    { label: "Best screen recorders in 2026", href: "/blog/best-screen-recorders-2026/", blurb: "Recordio, Screen Studio and FocuSee compared for demos and tutorials." },
    { label: "All comparisons", href: "/compare/", blurb: "Recordio compared with ten other screen recorders." }
  ];
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Loom Alternatives in 2026: Why Teams Are Switching",
    "description": "Looking for a Loom alternative? See why teams are switching to Recordio for studio-quality recordings, shareable links with view analytics, and a free plan with no credit card.",
    "datePublished": "2026-03-05",
    "dateModified": "2026-09-15",
    "author": {
      "@type": "Person",
      "name": "John Mikhail",
      "jobTitle": "Founder of Recordio",
      "url": "https://www.linkedin.com/in/john-mikhail/",
      "description": "MIT grad, previously at Google and Mixpanel, tech and AI enthusiast"
    },
    "image": `${SITE_URL}/og-image.png`,
    "publisher": {
      "@type": "Organization",
      "name": "Recordio",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/assets/fulllogo-light.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/best-loom-alternatives-2026/`
    }
  });
  return renderTemplate(_a || (_a = __template(["", ' <script type="application/ld+json">', "<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Best Loom Alternatives in 2026 for Teams | Recordio", "description": "Loom alternatives in 2026: what Loom costs per seat, where its videos fall short, and how Recordio and Screen Studio compare on features and price.", "ogType": "article" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": [], "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-28 md:pt-36"> <div class="max-w-3xl mx-auto px-6"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ name: "Blog", href: "/blog/" }, { name: "Best Loom alternatives in 2026" }] })} </div> ${renderComponent($$result2, "LoomAlternativesArticle", LoomAlternativesArticle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/blog/LoomAlternativesArticle", "client:component-export": "default" })} ${renderComponent($$result2, "RelatedLinks", RelatedLinks, { "heading": "Related", "links": related, "variant": "purple" })} </main> ${renderComponent($$result2, "Footer", Footer, { "source": "blog_best-loom-alternatives-2026", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` }), unescapeHTML(jsonLd));
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/blog/best-loom-alternatives-2026.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/blog/best-loom-alternatives-2026.astro";
const $$url = "/blog/best-loom-alternatives-2026/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$BestLoomAlternatives2026,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
