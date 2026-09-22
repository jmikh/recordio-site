import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { g as getCWSLink } from './BaseLayout_B_QZKqTv.mjs';
import { t as trackInstallExtension } from './Header_BUQfr5uo.mjs';

const CompareHero = ({ slug, name, verdict }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const cta = `compare-${slug}`;
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    const el = containerRef.current;
    if (!video || !el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setIsLoaded(true)).catch(() => {
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative overflow-hidden",
      style: { backgroundColor: "var(--color-section-purple)" },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-40 pointer-events-none", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-32 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-20 flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsxs("span", { className: "mb-8 inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary uppercase tracking-widest text-xs font-bold rounded-full border border-primary/20 hero-entrance hero-entrance-delay-1", children: [
            name,
            " Alternative"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-text-highlighted leading-tight mb-6 hero-entrance hero-entrance-delay-1", children: [
            "Recordio vs ",
            name
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed hero-entrance hero-entrance-delay-2", children: verdict }),
          /* @__PURE__ */ jsxs("div", { className: "mb-14 flex flex-col sm:flex-row items-center gap-4 hero-entrance hero-entrance-delay-2", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: getCWSLink(cta),
                target: "_blank",
                rel: "noopener noreferrer",
                className: "btn-primary text-lg px-10 py-4",
                onClick: () => trackInstallExtension(cta),
                children: "Add to Chrome, it's free"
              }
            ),
            /* @__PURE__ */ jsx("a", { href: "#pricing-comparison", className: "btn-secondary text-lg px-10 py-4", children: "See pricing" })
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              ref: containerRef,
              className: "w-full max-w-4xl hero-entrance hero-entrance-delay-3",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "before-after-video before-after-video--after", children: [
                  !isLoaded && /* @__PURE__ */ jsx("div", { className: "feature-video-placeholder", style: { aspectRatio: "16/9" } }),
                  shouldLoad && /* @__PURE__ */ jsxs(
                    "video",
                    {
                      ref: videoRef,
                      muted: true,
                      loop: true,
                      playsInline: true,
                      preload: "metadata",
                      onLoadedData: () => setIsLoaded(true),
                      onCanPlay: () => setIsLoaded(true),
                      className: "w-full h-auto block",
                      style: {
                        opacity: isLoaded ? 1 : 0,
                        transition: "opacity 0.5s ease"
                      },
                      children: [
                        /* @__PURE__ */ jsx("source", { src: "/videos/after.webm", type: "video/webm" }),
                        /* @__PURE__ */ jsx("source", { src: "/videos/after.mp4", type: "video/mp4" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("span", { className: "before-after-label before-after-label--after", children: "RECORDIO" })
              ]
            }
          )
        ] })
      ]
    }
  );
};

function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

const CheckIcon = ({ variant = "recordio" }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className: `w-5 h-5 ${variant === "recordio" ? "text-secondary" : "text-text-muted"}`,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" })
  }
);
const XIcon = () => /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-text-muted opacity-40", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 12h14" }) });
const renderCell = (value, variant) => {
  if (typeof value === "boolean") {
    return value ? /* @__PURE__ */ jsx(CheckIcon, { variant }) : /* @__PURE__ */ jsx(XIcon, {});
  }
  return /* @__PURE__ */ jsx("span", { className: `text-sm font-medium ${variant === "recordio" ? "text-text-highlighted" : "text-text-muted"}`, children: value });
};
const CompareFeatureTable = ({ competitorName, rows, variant = "white" }) => {
  const tableRef = useScrollReveal();
  const sectionClass = variant === "white" ? "section-panel-white" : "section-panel";
  return /* @__PURE__ */ jsx("section", { id: "comparison", className: `${sectionClass} py-20 px-6`, children: /* @__PURE__ */ jsxs("div", { ref: tableRef, className: "max-w-4xl mx-auto scroll-reveal", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-text-highlighted mb-12 text-center", children: "Feature Comparison" }),
    /* @__PURE__ */ jsx("div", { className: "compare-table-wrapper", children: /* @__PURE__ */ jsxs("table", { className: "compare-table", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "compare-th compare-th--feature", children: "Feature" }),
        /* @__PURE__ */ jsxs("th", { className: "compare-th compare-th--recordio", children: [
          /* @__PURE__ */ jsx("img", { src: "/favicon-32x32.png", alt: "Recordio", className: "w-5 h-5 rounded inline-block mr-2 -mt-0.5" }),
          "Recordio"
        ] }),
        /* @__PURE__ */ jsx("th", { className: "compare-th compare-th--competitor", children: competitorName })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxs("tr", { className: "compare-row", children: [
        /* @__PURE__ */ jsxs("td", { className: "compare-td compare-td--feature", children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium text-text-highlighted text-sm", children: row.feature }),
          row.description && /* @__PURE__ */ jsx("div", { className: "text-xs text-text-muted mt-0.5", children: row.description })
        ] }),
        /* @__PURE__ */ jsx("td", { className: "compare-td compare-td--recordio", children: renderCell(row.recordio, "recordio") }),
        /* @__PURE__ */ jsx("td", { className: "compare-td compare-td--competitor", children: renderCell(row.competitor, "competitor") })
      ] }, i)) })
    ] }) })
  ] }) });
};

const CompareCTA = ({ competitorName, variant = "white" }) => {
  const ref = useScrollReveal();
  const slug = competitorName.toLowerCase().replace(/\s+/g, "-");
  const sectionClass = variant === "white" ? "section-panel-white" : "section-panel";
  return /* @__PURE__ */ jsxs("section", { className: `${sectionClass} py-24 px-6 relative overflow-hidden`, children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-30 pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { ref, className: "relative z-10 max-w-3xl mx-auto text-center scroll-reveal", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-text-highlighted mb-6", children: "Ready to make the switch?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-text-muted mb-10 leading-relaxed", children: "Install the Chrome extension and see the difference in your first recording. Free tier, no credit card required." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: getCWSLink(`compare-${slug}-cta`),
          target: "_blank",
          rel: "noopener noreferrer",
          className: "btn-primary text-lg px-10 py-4",
          onClick: () => trackInstallExtension(`compare-${slug}-cta`),
          children: "Get Started with Recordio"
        }
      )
    ] })
  ] });
};

export { CompareHero as C, CompareFeatureTable as a, CompareCTA as b, useScrollReveal as u };
