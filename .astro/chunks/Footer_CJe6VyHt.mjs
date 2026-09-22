import { jsx, jsxs } from 'react/jsx-runtime';
import { d as CWS_REVIEWS_URL, a as SUPPORT_EMAIL } from './BaseLayout_42pqqQrf.mjs';

const SITE_NAV_LINKS = [
  { label: "Compare", href: "/compare/" },
  { label: "Platforms", href: "/for/" },
  { label: "Blog", href: "/blog/" }
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
const PLATFORM_FOOTER_LINKS = [
  ...PLATFORM_PAGES.map((p) => ({ label: p.label, href: platformHref(p.slug) })),
  { label: "All platforms", href: "/for/" }
];

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

export { Footer as F, SITE_NAV_LINKS as S };
