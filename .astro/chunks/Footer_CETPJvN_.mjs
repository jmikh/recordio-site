import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { c as getAppLink, g as getCWSLink, d as CWS_REVIEWS_URL, a as SUPPORT_EMAIL } from './BaseLayout_BMmOTL_5.mjs';

const trackEvent = (eventName, eventParams) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};
const trackInstallExtension = (location) => {
  trackEvent("install_extension_click", {
    event_category: "engagement",
    event_label: location,
    value: 1
  });
};
const trackFaqExpanded = (question) => {
  trackEvent("faq_expanded", {
    event_category: "engagement",
    event_label: question,
    value: 1
  });
};
const trackOpenApp = (location) => {
  trackEvent("open_app_click", {
    event_category: "engagement",
    event_label: location,
    value: 1
  });
};

const SITE_NAV_LINKS = [
  { label: "Compare", href: "/compare/" },
  { label: "Platforms", href: "/for/" },
  { label: "Blog", href: "/blog/" }
];
const COMPARE_GROUPS = [
  {
    key: "async",
    title: "Async video tools",
    lead: "Record, share a link, skip the meeting. These tools compete with Recordio most directly on share links, view analytics and price per seat."
  },
  {
    key: "polished",
    title: "Polished recorders",
    lead: "Desktop apps that add cursor zoom and motion to a raw capture. The comparison comes down to platform support, editing depth and how the finished video reaches your team."
  },
  {
    key: "desktop",
    title: "Desktop capture",
    lead: "Traditional recorders that save a file to disk. They win on raw capture options and offline work. Recordio wins on time from recording to a finished, shareable walkthrough."
  },
  {
    key: "extension",
    title: "Chrome extensions",
    lead: "Recorders that live in the browser, like Recordio does. The differences are in what happens after capture: auto zoom, captions, rendering and analytics."
  }
];
const COMPARE_PAGES = [
  {
    slug: "loom",
    name: "Loom",
    group: "async",
    blurb: "The async video standard, compared on price per seat, auto zoom and free viewer seats.",
    related: ["tella", "clueso", "screencastify"],
    post: "best-loom-alternatives-2026"
  },
  {
    slug: "tella",
    name: "Tella",
    group: "async",
    blurb: "Creator-friendly clips and templates, compared on team libraries and zoom quality.",
    related: ["loom", "clueso", "screen-studio"]
  },
  {
    slug: "clueso",
    name: "Clueso",
    group: "async",
    blurb: "AI voiceovers and docs from one recording, compared on editing and free plans.",
    related: ["loom", "tella", "focusee"]
  },
  {
    slug: "screen-studio",
    name: "Screen Studio",
    group: "polished",
    blurb: "The Mac-first cursor-effects benchmark, compared on Windows, Linux and sharing.",
    related: ["focusee", "loom", "camtasia"],
    post: "best-screen-recorders-2026"
  },
  {
    slug: "focusee",
    name: "FocuSee",
    group: "polished",
    blurb: "Desktop auto zoom for Mac and Windows, compared on capture and team features.",
    related: ["screen-studio", "clueso", "screenity"],
    post: "best-screen-recorders-2026"
  },
  {
    slug: "obs",
    name: "OBS",
    group: "desktop",
    blurb: "Free, open source and built for streaming, compared for product demos and tutorials.",
    related: ["bandicam", "camtasia", "screenity"]
  },
  {
    slug: "camtasia",
    name: "Camtasia",
    group: "desktop",
    blurb: "A full timeline editor with a perpetual licence, compared on time to a finished video.",
    related: ["obs", "screen-studio", "bandicam"]
  },
  {
    slug: "bandicam",
    name: "Bandicam",
    group: "desktop",
    blurb: "Windows game and desktop capture, compared for walkthroughs on any operating system.",
    related: ["obs", "camtasia", "screencastify"]
  },
  {
    slug: "screencastify",
    name: "Screencastify",
    group: "extension",
    blurb: "The classroom Chrome recorder, compared on auto zoom and view analytics for teams.",
    related: ["screenity", "loom", "bandicam"]
  },
  {
    slug: "screenity",
    name: "Screenity",
    group: "extension",
    blurb: "A free, open source Chrome extension, compared on rendering, captions and share links.",
    related: ["screencastify", "obs", "focusee"]
  }
];
const compareHref = (slug) => `/compare/${slug}/`;
const compareEntry = (slug) => {
  const entry = COMPARE_PAGES.find((c) => c.slug === slug);
  if (!entry) throw new Error(`Unknown compare slug: ${slug}`);
  return entry;
};
const compareLink = (slug) => {
  const c = compareEntry(slug);
  return { label: `Recordio vs ${c.name}`, href: compareHref(c.slug), blurb: c.blurb };
};
const COMPARE_FOOTER_LINKS = COMPARE_PAGES.map((c) => ({
  label: `vs ${c.name}`,
  href: compareHref(c.slug)
}));
const PLATFORM_PAGES = [
  {
    slug: "mac",
    label: "Mac",
    title: "Screen recorder for Mac",
    summary: "Chrome, Edge or Brave on macOS, with no desktop app to install. Auto zoom and spotlight are applied as you record, and every video lands in your team library.",
    blurb: "The same walkthrough recorder for teammates on macOS."
  },
  {
    slug: "windows",
    label: "Windows",
    title: "Screen recorder for Windows",
    summary: "Runs in the browser on any Windows PC, so there is nothing to install beyond the extension. Same recorder and same share links as the Mac half of your team.",
    blurb: "Set-up notes for Windows laptops and PCs."
  },
  {
    slug: "linux",
    label: "Linux",
    title: "Screen recorder for Linux",
    summary: "Works on Ubuntu, Fedora, Debian, Arch and any distro with a Chromium browser. Tab capture behaves the same on Wayland and X11, with no PPA or Snap to add.",
    blurb: "Ubuntu, Fedora and any distro with a Chromium browser."
  },
  {
    slug: "chromebook",
    label: "Chromebook",
    title: "Screen recorder for Chromebook",
    summary: "Runs on any Chromebook, including managed school and work devices, with an admin allow-list guide. Cloud rendering on Pro keeps the work off a small machine.",
    blurb: "ChromeOS, including managed school and work devices."
  },
  {
    slug: "chrome",
    label: "Chrome",
    title: "Screen recorder for Chrome",
    summary: "How the extension itself works: tab capture, the simplified toolbar, blur and the editor at app.recordio.io. The same notes apply to Edge and Brave.",
    blurb: "How the extension records any tab in Chrome, Edge or Brave."
  }
];
const platformHref = (slug) => `/for/${slug}/`;
const platformLink = (slug) => {
  const p = PLATFORM_PAGES.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown platform slug: ${slug}`);
  return { label: p.title, href: platformHref(p.slug), blurb: p.blurb };
};
const PLATFORM_FOOTER_LINKS = [
  ...PLATFORM_PAGES.map((p) => ({ label: p.label, href: platformHref(p.slug) })),
  { label: "All platforms", href: "/for/" }
];
const otherPlatforms = (slug) => [
  ...PLATFORM_PAGES.filter((p) => p.slug !== slug).map((p) => platformLink(p.slug)),
  { label: "All platforms", href: "/for/", blurb: "One recorder and one team library on every operating system." }
];
const BLOG_POSTS = [
  {
    slug: "best-screen-recorders-2026",
    label: "Best screen recorders in 2026",
    href: "/blog/best-screen-recorders-2026/",
    blurb: "Recordio, Screen Studio and FocuSee compared for demos and tutorials."
  },
  {
    slug: "best-loom-alternatives-2026",
    label: "Best Loom alternatives in 2026",
    href: "/blog/best-loom-alternatives-2026/",
    blurb: "What Loom costs per seat and which tools teams switch to."
  }
];

const DEFAULT_NAV_LINKS = [
  { label: "Features", href: "#feature-videos" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];
const linkClass = "text-text-main hover:text-text-highlighted transition-colors duration-200";
const mobileLinkClass = "block px-5 py-3 text-sm font-medium text-text-main hover:text-text-highlighted hover:bg-surface-overlay/40 transition-colors duration-150";
const Header = ({ navLinks }) => {
  const anchors = navLinks ?? DEFAULT_NAV_LINKS;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [menuOpen]);
  return /* @__PURE__ */ jsx("header", { className: "fixed top-4 left-0 right-0 z-50 px-4", children: /* @__PURE__ */ jsx("nav", { className: "max-w-5xl mx-auto px-6 py-4 rounded-2xl glass shadow-lg/20 backdrop-blur-xl", "aria-label": "Main", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center shrink-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/assets/fulllogo-light.webp",
        alt: "Recordio",
        className: "h-8 w-auto transition-opacity hover:opacity-80"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-5 lg:gap-6", children: [
      anchors.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        anchors.map(({ label, href }) => /* @__PURE__ */ jsx("a", { href, className: `hidden lg:inline ${linkClass}`, children: label }, href)),
        /* @__PURE__ */ jsx("span", { className: "hidden lg:block h-4 w-px bg-border", "aria-hidden": "true" })
      ] }),
      SITE_NAV_LINKS.map(({ label, href }) => /* @__PURE__ */ jsx("a", { href, className: linkClass, children: label }, href))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-2 lg:gap-3", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: getAppLink("header"),
          className: "btn-secondary !px-3.5 !py-2 text-sm",
          onClick: () => trackOpenApp("header"),
          children: "Open App"
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: getCWSLink("header"),
          target: "_blank",
          rel: "noopener noreferrer",
          className: "btn-primary",
          onClick: () => trackInstallExtension("header"),
          children: [
            /* @__PURE__ */ jsx("img", { src: "/assets/chrome-store.svg", alt: "", className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Add to Chrome" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:hidden relative", ref: menuRef, children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setMenuOpen((v) => !v),
          className: "flex items-center justify-center w-10 h-10 rounded-xl\n                                       text-text-main hover:text-text-highlighted\n                                       hover:bg-surface-overlay/60\n                                       transition-all duration-200",
          "aria-label": menuOpen ? "Close menu" : "Open menu",
          "aria-expanded": menuOpen,
          children: /* @__PURE__ */ jsxs("div", { className: "w-5 h-4 flex flex-col justify-between relative", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center
                                        ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `block h-0.5 w-full bg-current rounded-full transition-all duration-200
                                        ${menuOpen ? "opacity-0 scale-x-0" : ""}`
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center
                                        ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute right-0 top-full mt-4 w-56 rounded-xl bg-white/90 backdrop-blur-2xl border border-border shadow-xl/20 overflow-hidden
                                        transition-all duration-200 origin-top-right
                                        ${menuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`,
          children: /* @__PURE__ */ jsxs("div", { className: "py-2", children: [
            anchors.map(({ label, href }) => /* @__PURE__ */ jsx(
              "a",
              {
                href,
                onClick: () => setMenuOpen(false),
                className: mobileLinkClass,
                children: label
              },
              href
            )),
            anchors.length > 0 && /* @__PURE__ */ jsx("div", { className: "my-2 border-t border-border" }),
            SITE_NAV_LINKS.map(({ label, href }) => /* @__PURE__ */ jsx(
              "a",
              {
                href,
                onClick: () => setMenuOpen(false),
                className: mobileLinkClass,
                children: label
              },
              href
            )),
            /* @__PURE__ */ jsx("div", { className: "my-2 border-t border-border" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: getAppLink("header-mobile"),
                onClick: () => {
                  setMenuOpen(false);
                  trackOpenApp("header-mobile");
                },
                className: "block px-5 py-3 text-sm font-semibold text-text-highlighted\n                                               hover:bg-surface-overlay/40 transition-colors duration-150",
                children: "Open App"
              }
            )
          ] })
        }
      )
    ] })
  ] }) }) });
};

const columns = [
  {
    title: "Product",
    links: [
      // TODO (Plans 05 to 07): add Features hub (/features/), Use cases hub
      // (/use-cases/) and Screenshots (/screenshots/) once those pages exist.
      { label: "Features", href: "/#feature-videos" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" }
    ]
  },
  {
    title: "Compare",
    links: [...COMPARE_FOOTER_LINKS, { label: "All comparisons", href: "/compare/" }]
  },
  {
    title: "Platforms",
    links: PLATFORM_FOOTER_LINKS
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "/blog/" },
      // TODO (Plan 10): add { label: 'About', href: '/about/' } once the page exists.
      { label: "Reviews", href: CWS_REVIEWS_URL },
      { label: "Privacy", href: "/privacy/" },
      { label: "Terms", href: "/terms/" },
      { label: "Contact", href: `mailto:${SUPPORT_EMAIL}` }
    ]
  }
];
const Footer = ({ source } = {}) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-14", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_repeat(4,1fr)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 sm:col-span-2 md:col-span-1", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "inline-block", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/assets/fulllogo-light.webp",
            alt: "Recordio",
            className: "h-7 w-auto"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-text-muted text-sm max-w-xs", children: "The screen recorder that understands your product." })
      ] }),
      columns.map((col) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-bold uppercase tracking-[0.12em] text-text-muted mb-3", children: col.title }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: col.links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: l.href,
            className: "text-sm text-text-main hover:text-primary transition-colors",
            ...l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {},
            children: l.label
          }
        ) }, l.href)) })
      ] }, col.title))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-text-muted", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        currentYear,
        " Recordio. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Made for people who'd rather ship than edit." })
    ] })
  ] }) });
};

export { BLOG_POSTS as B, COMPARE_GROUPS as C, Footer as F, Header as H, PLATFORM_PAGES as P, COMPARE_PAGES as a, compareHref as b, compareLink as c, trackFaqExpanded as d, otherPlatforms as o, platformHref as p, trackInstallExtension as t };
