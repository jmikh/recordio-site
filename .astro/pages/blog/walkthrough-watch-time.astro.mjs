import { c as createComponent, a as renderTemplate, u as unescapeHTML, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { a as SUPPORT_EMAIL, S as SITE_URL, $ as $$BaseLayout } from '../../chunks/BaseLayout_B_QZKqTv.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_D9D60H77.mjs';
import { R as RelatedLinks } from '../../chunks/RelatedLinks_DlwSg6Vn.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { F as Footer } from '../../chunks/Footer_BaI97hcR.mjs';
export { renderers } from '../../renderers.mjs';

const report = {
  status: "draft",
  sampleSize: 0,
  viewCount: 0,
  periodStart: "2026-06-01",
  periodEnd: "2026-08-31",
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  minimumViewsPerVideo: 5,
  medianLengthSeconds: 94,
  medianWatchPercent: 61,
  completionRate: 38,
  retention: [
    { percentOfVideo: 0, viewersRemaining: 100 },
    { percentOfVideo: 10, viewersRemaining: 88 },
    { percentOfVideo: 20, viewersRemaining: 79 },
    { percentOfVideo: 30, viewersRemaining: 71 },
    { percentOfVideo: 40, viewersRemaining: 64 },
    { percentOfVideo: 50, viewersRemaining: 58 },
    { percentOfVideo: 60, viewersRemaining: 53 },
    { percentOfVideo: 70, viewersRemaining: 48 },
    { percentOfVideo: 80, viewersRemaining: 44 },
    { percentOfVideo: 90, viewersRemaining: 40 },
    { percentOfVideo: 100, viewersRemaining: 34 }
  ],
  byLength: [
    { label: "Under 1 min", walkthroughs: 0, completionRate: 55, medianWatchSeconds: 38 },
    { label: "1 to 2 min", walkthroughs: 0, completionRate: 42, medianWatchSeconds: 66 },
    { label: "2 to 4 min", walkthroughs: 0, completionRate: 31, medianWatchSeconds: 101 },
    { label: "4 to 8 min", walkthroughs: 0, completionRate: 22, medianWatchSeconds: 142 },
    { label: "Over 8 min", walkthroughs: 0, completionRate: 14, medianWatchSeconds: 170 }
  ],
  captions: [
    { label: "With captions", walkthroughs: 0, completionRate: 44, avgWatchPercent: 66 },
    { label: "Without captions", walkthroughs: 0, completionRate: 33, avgWatchPercent: 55 }
  ],
  findings: [
    {
      heading: "The first ten percent decides most of it",
      body: "PLACEHOLDER. Describe the drop between 0% and 10% and what the walkthroughs that kept viewers did in their opening seconds (showed the result first, skipped the intro)."
    },
    {
      heading: "Two minutes is the practical ceiling",
      body: "PLACEHOLDER. Compare completion in the under-2-minute buckets with the over-4-minute buckets. Suggest splitting long walkthroughs into a series."
    },
    {
      heading: "Captions keep people watching",
      body: "PLACEHOLDER. State the completion gap between captioned and uncaptioned walkthroughs and note that many views happen with sound off."
    }
  ]
};
const formatSeconds = (s) => {
  const m = Math.floor(s / 60);
  const r = Math.round(s % 60);
  return m > 0 ? `${m} min ${r} s` : `${r} s`;
};

const SERIES = {
  primary: "#6d28d9",
  secondary: "#eb6834",
  grid: "#e4dff0",
  axis: "#7a7686"
};
const fmtDate = (iso) => (/* @__PURE__ */ new Date(`${iso}T00:00:00Z`)).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
const fmtMonth = (iso) => (/* @__PURE__ */ new Date(`${iso}T00:00:00Z`)).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
const RetentionChart = ({ points }) => {
  const w = 640, h = 300, padL = 44, padR = 56, padT = 16, padB = 36;
  const x = (p) => padL + p / 100 * (w - padL - padR);
  const y = (v) => padT + (1 - v / 100) * (h - padT - padB);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${x(p.percentOfVideo)},${y(p.viewersRemaining)}`).join(" ");
  const area = `${path} L${x(100)},${y(0)} L${x(0)},${y(0)} Z`;
  const last = points[points.length - 1];
  const half = points.find((p) => p.percentOfVideo === 50);
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 ${w} ${h}`, role: "img", "aria-labelledby": "fig1-title", className: "w-full h-auto", children: [
    /* @__PURE__ */ jsx("title", { id: "fig1-title", children: "Share of viewers still watching at each tenth of a walkthrough" }),
    [0, 25, 50, 75, 100].map((v) => /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx("line", { x1: padL, x2: w - padR, y1: y(v), y2: y(v), stroke: SERIES.grid, strokeWidth: "1" }),
      /* @__PURE__ */ jsxs("text", { x: padL - 8, y: y(v) + 4, fontSize: "12", textAnchor: "end", fill: SERIES.axis, children: [
        v,
        "%"
      ] })
    ] }, v)),
    [0, 20, 40, 60, 80, 100].map((p) => /* @__PURE__ */ jsxs("text", { x: x(p), y: h - padB + 20, fontSize: "12", textAnchor: "middle", fill: SERIES.axis, children: [
      p,
      "%"
    ] }, p)),
    /* @__PURE__ */ jsx("path", { d: area, fill: SERIES.primary, opacity: "0.1" }),
    /* @__PURE__ */ jsx("path", { d: path, fill: "none", stroke: SERIES.primary, strokeWidth: "2", strokeLinejoin: "round", strokeLinecap: "round" }),
    points.map((p) => /* @__PURE__ */ jsx("circle", { cx: x(p.percentOfVideo), cy: y(p.viewersRemaining), r: "4", fill: SERIES.primary, stroke: "#fafafa", strokeWidth: "2", children: /* @__PURE__ */ jsx("title", { children: `${p.percentOfVideo}% of video: ${p.viewersRemaining}% of viewers still watching` }) }, p.percentOfVideo)),
    half && /* @__PURE__ */ jsxs("text", { x: x(50), y: y(half.viewersRemaining) - 12, fontSize: "12", textAnchor: "middle", fill: "#30303a", fontWeight: "600", children: [
      half.viewersRemaining,
      "% at halfway"
    ] }),
    /* @__PURE__ */ jsxs("text", { x: x(100) + 10, y: y(last.viewersRemaining) + 4, fontSize: "12", fill: "#30303a", fontWeight: "600", children: [
      last.viewersRemaining,
      "%"
    ] }),
    /* @__PURE__ */ jsx("text", { x: (padL + w - padR) / 2, y: h - 4, fontSize: "12", textAnchor: "middle", fill: SERIES.axis, children: "Position in the video" })
  ] });
};
const LengthChart = () => {
  const rows = report.byLength;
  const w = 640, h = 280, padL = 44, padR = 16, padT = 24, padB = 40;
  const band = (w - padL - padR) / rows.length;
  const bar = Math.min(24, band * 0.5);
  const y = (v) => padT + (1 - v / 100) * (h - padT - padB);
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 ${w} ${h}`, role: "img", "aria-labelledby": "fig2-title", className: "w-full h-auto", children: [
    /* @__PURE__ */ jsx("title", { id: "fig2-title", children: "Completion rate by walkthrough length" }),
    [0, 25, 50, 75, 100].map((v) => /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx("line", { x1: padL, x2: w - padR, y1: y(v), y2: y(v), stroke: SERIES.grid, strokeWidth: "1" }),
      /* @__PURE__ */ jsxs("text", { x: padL - 8, y: y(v) + 4, fontSize: "12", textAnchor: "end", fill: SERIES.axis, children: [
        v,
        "%"
      ] })
    ] }, v)),
    rows.map((r, i) => {
      const cx = padL + band * i + band / 2;
      const top = y(r.completionRate);
      const bottom = y(0);
      const height = bottom - top;
      return /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx("rect", { x: cx - bar / 2, y: top, width: bar, height, rx: "4", ry: "4", fill: SERIES.primary, children: /* @__PURE__ */ jsx("title", { children: `${r.label}: ${r.completionRate}% completion, median watch ${formatSeconds(r.medianWatchSeconds)}` }) }),
        /* @__PURE__ */ jsx("rect", { x: cx - bar / 2, y: bottom - 4, width: bar, height: 4, fill: SERIES.primary }),
        /* @__PURE__ */ jsxs("text", { x: cx, y: top - 8, fontSize: "12", textAnchor: "middle", fill: "#30303a", fontWeight: "600", children: [
          r.completionRate,
          "%"
        ] }),
        /* @__PURE__ */ jsx("text", { x: cx, y: h - padB + 20, fontSize: "12", textAnchor: "middle", fill: SERIES.axis, children: r.label })
      ] }, r.label);
    })
  ] });
};
const CaptionsChart = () => {
  const rows = report.captions;
  const metrics = [
    { key: "completionRate", label: "Completion rate" },
    { key: "avgWatchPercent", label: "Average share watched" }
  ];
  const w = 640, h = 260, padL = 44, padR = 16, padT = 24, padB = 40;
  const band = (w - padL - padR) / metrics.length;
  const bar = 24;
  const y = (v) => padT + (1 - v / 100) * (h - padT - padB);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("ul", { className: "flex gap-6 text-sm text-text-main mb-2 list-none p-0", "aria-label": "Legend", children: rows.map((r, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "inline-block w-3 h-3 rounded-sm", style: { background: i === 0 ? SERIES.primary : SERIES.secondary } }),
      r.label
    ] }, r.label)) }),
    /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 ${w} ${h}`, role: "img", "aria-labelledby": "fig3-title", className: "w-full h-auto", children: [
      /* @__PURE__ */ jsx("title", { id: "fig3-title", children: "Completion and share watched, with and without captions" }),
      [0, 25, 50, 75, 100].map((v) => /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx("line", { x1: padL, x2: w - padR, y1: y(v), y2: y(v), stroke: SERIES.grid, strokeWidth: "1" }),
        /* @__PURE__ */ jsxs("text", { x: padL - 8, y: y(v) + 4, fontSize: "12", textAnchor: "end", fill: SERIES.axis, children: [
          v,
          "%"
        ] })
      ] }, v)),
      metrics.map((m, mi) => {
        const cx = padL + band * mi + band / 2;
        return /* @__PURE__ */ jsxs("g", { children: [
          rows.map((r, ri) => {
            const v = r[m.key];
            const x = cx + (ri === 0 ? -bar - 1 : 1);
            const top = y(v);
            const bottom = y(0);
            return /* @__PURE__ */ jsxs("g", { children: [
              /* @__PURE__ */ jsx("rect", { x, y: top, width: bar, height: bottom - top, rx: "4", ry: "4", fill: ri === 0 ? SERIES.primary : SERIES.secondary, children: /* @__PURE__ */ jsx("title", { children: `${r.label}, ${m.label.toLowerCase()}: ${v}%` }) }),
              /* @__PURE__ */ jsx("rect", { x, y: bottom - 4, width: bar, height: 4, fill: ri === 0 ? SERIES.primary : SERIES.secondary }),
              /* @__PURE__ */ jsxs("text", { x: x + bar / 2, y: top - 8, fontSize: "12", textAnchor: "middle", fill: "#30303a", fontWeight: "600", children: [
                v,
                "%"
              ] })
            ] }, r.label);
          }),
          /* @__PURE__ */ jsx("text", { x: cx, y: h - padB + 20, fontSize: "12", textAnchor: "middle", fill: SERIES.axis, children: m.label })
        ] }, m.key);
      })
    ] })
  ] });
};
const Figure = ({ n, title, children, table }) => /* @__PURE__ */ jsxs("figure", { className: "my-10 rounded-2xl border border-border bg-surface-body p-5 md:p-6", children: [
  /* @__PURE__ */ jsxs("figcaption", { className: "text-sm font-semibold text-text-highlighted mb-4", children: [
    "Figure ",
    n,
    ". ",
    title
  ] }),
  children,
  /* @__PURE__ */ jsxs("details", { className: "mt-4 text-sm", children: [
    /* @__PURE__ */ jsx("summary", { className: "cursor-pointer text-text-muted", children: "Show the numbers as a table" }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 overflow-x-auto", children: table })
  ] })
] });
const WatchTimeReport = () => {
  const r = report;
  const drop10 = 100 - (r.retention.find((p) => p.percentOfVideo === 10)?.viewersRemaining ?? 100);
  const captioned = r.captions.find((c) => c.label === "With captions");
  const uncaptioned = r.captions.find((c) => c.label === "Without captions");
  const captionGap = captioned && uncaptioned ? captioned.completionRate - uncaptioned.completionRate : 0;
  return /* @__PURE__ */ jsxs("article", { className: "prose max-w-3xl mx-auto px-6 py-12 md:py-20", children: [
    /* @__PURE__ */ jsxs("div", { role: "alert", className: "not-prose mb-8 rounded-xl border-2 border-secondary bg-surface-raised p-4 text-sm text-text-highlighted", children: [
      /* @__PURE__ */ jsx("strong", { children: "Draft with placeholder numbers." }),
      " Replace every value in src/data/watch-time-report.ts from Mux Data, set status to final, and rename the page before publishing."
    ] }),
    /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Original research" }),
    /* @__PURE__ */ jsxs("h1", { children: [
      "What ",
      r.sampleSize.toLocaleString(),
      " product walkthroughs taught us about watch time"
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-text-muted text-sm", children: [
      "By John Mikhail, founder of Recordio. Published ",
      fmtDate(r.datePublished),
      r.dateModified !== r.datePublished,
      "."
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Teams record walkthroughs so that other people watch them. So we looked at how far viewers actually get. This report covers ",
      r.sampleSize.toLocaleString(),
      " product walkthroughs shared through Recordio share links between ",
      fmtMonth(r.periodStart),
      " and ",
      fmtMonth(r.periodEnd),
      ", with ",
      r.viewCount.toLocaleString(),
      " views between them. Numbers are aggregated and anonymised. No individual video, viewer or workspace is identifiable."
    ] }),
    /* @__PURE__ */ jsx("div", { className: "not-prose grid grid-cols-2 md:grid-cols-4 gap-3 my-8", children: [
      { label: "Median length", value: formatSeconds(r.medianLengthSeconds) },
      { label: "Median share watched", value: `${r.medianWatchPercent}%` },
      { label: "Reached the end", value: `${r.completionRate}%` },
      { label: "Left in the first 10%", value: `${drop10}%` }
    ].map((t) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-surface-body p-4", children: [
      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-text-highlighted", children: t.value }),
      /* @__PURE__ */ jsx("div", { className: "text-xs text-text-muted mt-1", children: t.label })
    ] }, t.label)) }),
    /* @__PURE__ */ jsx("h2", { children: "Where viewers leave" }),
    /* @__PURE__ */ jsx("p", { children: "The curve below shows the share of viewers still watching at each tenth of a walkthrough. The steepest loss happens before the first tenth is over, when the viewer decides whether the video answers their question." }),
    /* @__PURE__ */ jsx(
      Figure,
      {
        n: 1,
        title: "Share of viewers still watching at each tenth of a walkthrough",
        table: /* @__PURE__ */ jsxs("table", { children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { children: "Position in video" }),
            /* @__PURE__ */ jsx("th", { children: "Viewers still watching" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: r.retention.map((p) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsxs("td", { children: [
              p.percentOfVideo,
              "%"
            ] }),
            /* @__PURE__ */ jsxs("td", { children: [
              p.viewersRemaining,
              "%"
            ] })
          ] }, p.percentOfVideo)) })
        ] }),
        children: /* @__PURE__ */ jsx(RetentionChart, { points: r.retention })
      }
    ),
    /* @__PURE__ */ jsx("h2", { children: "Length and completion" }),
    /* @__PURE__ */ jsx("p", { children: "Completion means the view reached the last tenth of the video. Shorter walkthroughs are finished far more often, and the median seconds watched grows much more slowly than the video length does." }),
    /* @__PURE__ */ jsx(
      Figure,
      {
        n: 2,
        title: "Completion rate by walkthrough length",
        table: /* @__PURE__ */ jsxs("table", { children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { children: "Length" }),
            /* @__PURE__ */ jsx("th", { children: "Walkthroughs" }),
            /* @__PURE__ */ jsx("th", { children: "Completion rate" }),
            /* @__PURE__ */ jsx("th", { children: "Median watch time" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: r.byLength.map((b) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: b.label }),
            /* @__PURE__ */ jsx("td", { children: b.walkthroughs.toLocaleString() }),
            /* @__PURE__ */ jsxs("td", { children: [
              b.completionRate,
              "%"
            ] }),
            /* @__PURE__ */ jsx("td", { children: formatSeconds(b.medianWatchSeconds) })
          ] }, b.label)) })
        ] }),
        children: /* @__PURE__ */ jsx(LengthChart, {})
      }
    ),
    /* @__PURE__ */ jsx("h2", { children: "Captions" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Walkthroughs with captions were completed ",
      captionGap,
      " percentage points more often than walkthroughs without them. Many views happen with the sound off, in a chat window or during a meeting, and captions let those viewers keep following."
    ] }),
    /* @__PURE__ */ jsx(
      Figure,
      {
        n: 3,
        title: "Completion and share watched, with and without captions",
        table: /* @__PURE__ */ jsxs("table", { children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { children: "Group" }),
            /* @__PURE__ */ jsx("th", { children: "Walkthroughs" }),
            /* @__PURE__ */ jsx("th", { children: "Completion rate" }),
            /* @__PURE__ */ jsx("th", { children: "Average share watched" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: r.captions.map((c) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: c.label }),
            /* @__PURE__ */ jsx("td", { children: c.walkthroughs.toLocaleString() }),
            /* @__PURE__ */ jsxs("td", { children: [
              c.completionRate,
              "%"
            ] }),
            /* @__PURE__ */ jsxs("td", { children: [
              c.avgWatchPercent,
              "%"
            ] })
          ] }, c.label)) })
        ] }),
        children: /* @__PURE__ */ jsx(CaptionsChart, {})
      }
    ),
    /* @__PURE__ */ jsx("h2", { children: "What this means for your next walkthrough" }),
    r.findings.map((f) => /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h3", { children: f.heading }),
      /* @__PURE__ */ jsx("p", { children: f.body })
    ] }, f.heading)),
    /* @__PURE__ */ jsx("h2", { children: "Method" }),
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsxs("li", { children: [
        "Sample: walkthroughs shared via a Recordio share link with at least ",
        r.minimumViewsPerVideo,
        " views, recorded between ",
        fmtMonth(r.periodStart),
        " and ",
        fmtMonth(r.periodEnd),
        "."
      ] }),
      /* @__PURE__ */ jsx("li", { children: "Watch position and watch time come from the video player, aggregated per video and then across the sample. Owner views are excluded." }),
      /* @__PURE__ */ jsx("li", { children: "Completion means the viewer reached the last 10% of the video. Retention at a point means the share of views whose furthest position passed it." }),
      /* @__PURE__ */ jsx("li", { children: "The captions split compares videos with an enabled caption track to videos without one. It is an observed difference, not a controlled experiment." }),
      /* @__PURE__ */ jsx("li", { children: "Everything is aggregated. We do not publish or share per-video, per-viewer or per-workspace data." })
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Cite freely with a link to this page. For the aggregate tables as CSV, or to ask about the method, email ",
      /* @__PURE__ */ jsx("a", { href: `mailto:${SUPPORT_EMAIL}`, children: SUPPORT_EMAIL }),
      "."
    ] }),
    /* @__PURE__ */ jsx("h2", { children: "Record walkthroughs people finish" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Recordio adds ",
      /* @__PURE__ */ jsx("a", { href: "/features/auto-zoom/", children: "automatic zoom" }),
      " and ",
      /* @__PURE__ */ jsx("a", { href: "/features/ai-captions/", children: "captions" }),
      " to every recording and gives you ",
      /* @__PURE__ */ jsx("a", { href: "/features/share-links/", children: "a share link with view analytics" }),
      ", so you can see your own retention curve for every walkthrough. See ",
      /* @__PURE__ */ jsx("a", { href: "/use-cases/product-walkthrough-video/", children: "how teams use it for product walkthroughs" }),
      ", or start with ",
      /* @__PURE__ */ jsx("a", { href: "/compare/loom/", children: "how it compares to Loom" }),
      "."
    ] }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsxs("div", { className: "not-prose flex items-center justify-between gap-6 flex-wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("img", { src: "/assets/john.webp", alt: "John Mikhail", className: "w-24 h-24 rounded-full object-cover border-2 border-border flex-shrink-0", loading: "lazy" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "text-text-highlighted font-semibold text-base leading-snug", children: "John Mikhail" }),
          /* @__PURE__ */ jsx("span", { className: "text-primary-highlighted text-sm leading-snug mt-0.5", children: "Founder of Recordio" }),
          /* @__PURE__ */ jsx("span", { className: "text-text-muted text-sm leading-snug mt-2", children: "MIT grad. Previously at Google and Mixpanel." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/john-mikhail/", target: "_blank", rel: "noopener noreferrer", className: "text-text-muted hover:text-primary transition-colors text-sm", children: "LinkedIn" })
    ] })
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$WalkthroughWatchTime = createComponent(($$result, $$props, $$slots) => {
  const path = "/blog/walkthrough-watch-time/";
  const headline = `What ${report.sampleSize.toLocaleString()} product walkthroughs taught us about watch time`;
  const description = "Retention, completion and the effect of captions across product walkthroughs shared with Recordio. Anonymised data with charts you can cite.";
  const jsonLd = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": headline,
      "description": description,
      "datePublished": report.datePublished,
      "dateModified": report.dateModified,
      "author": {
        "@type": "Person",
        "name": "John Mikhail",
        "jobTitle": "Founder of Recordio",
        "url": "https://www.linkedin.com/in/john-mikhail/"
      },
      "image": `${SITE_URL}/og-image.png`,
      "publisher": { "@type": "Organization", "@id": `${SITE_URL}/#organization`, "name": "Recordio" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}${path}` }
    },
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": "Product walkthrough watch-time benchmarks",
      "description": `Aggregated retention, completion and captions statistics for ${report.sampleSize} product walkthroughs shared through Recordio, ${report.periodStart} to ${report.periodEnd}.`,
      "url": `${SITE_URL}${path}`,
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "creator": { "@type": "Organization", "@id": `${SITE_URL}/#organization`, "name": "Recordio" },
      "temporalCoverage": `${report.periodStart}/${report.periodEnd}`,
      "variableMeasured": ["viewer retention by position", "completion rate by video length", "completion rate with and without captions"]
    }
  ]);
  return renderTemplate(_a || (_a = __template(["", ' <script type="application/ld+json">', "<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Product Walkthrough Watch Time: What the Data Says | Recordio", "description": description, "ogType": "article", "noindex": report.status === "draft" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pt-12 md:pt-20"> <div class="max-w-3xl mx-auto px-6"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ name: "Blog", href: "/blog/" }, { name: "Walkthrough watch time" }] })} </div> ${renderComponent($$result2, "WatchTimeReport", WatchTimeReport, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/blog/WatchTimeReport", "client:component-export": "default" })} ${renderComponent($$result2, "RelatedLinks", RelatedLinks, { "client:visible": true, "heading": "Keep reading", "links": [
    { label: "How to make a product walkthrough video", href: "/blog/how-to-make-a-product-walkthrough-video/", blurb: "Plan, record and share a walkthrough people finish." },
    { label: "Share links with view analytics", href: "/features/share-links/", blurb: "See your own retention curve for every recording." },
    { label: "AI captions", href: "/features/ai-captions/", blurb: "Word-level captions, editable, delete a line to cut the clip." },
    { label: "Best Loom alternatives in 2026", href: "/blog/best-loom-alternatives-2026/", blurb: "What Loom costs per seat and how the alternatives compare." }
  ], "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/RelatedLinks", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "source": "blog_walkthrough-watch-time", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` }), unescapeHTML(jsonLd));
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/blog/walkthrough-watch-time.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/blog/walkthrough-watch-time.astro";
const $$url = "/blog/walkthrough-watch-time/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$WalkthroughWatchTime,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
