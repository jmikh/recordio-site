import { jsx, jsxs } from 'react/jsx-runtime';
import { g as getCWSLink } from './BaseLayout_B_QZKqTv.mjs';
import { t as trackInstallExtension } from './Header_BUQfr5uo.mjs';

const PlatformSteps = ({
  eyebrow = "How it works",
  heading,
  intro,
  steps,
  image,
  ctaLabel = "Install the free extension",
  ctaSection,
  variant = "purple",
  id = "how-to-record"
}) => {
  const sectionClass = variant === "white" ? "section-panel-white" : "section-panel";
  return /* @__PURE__ */ jsx("section", { id, className: `${sectionClass} py-20 px-6`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: heading }),
      intro && /* @__PURE__ */ jsx("p", { className: "section-subtitle mt-4", children: intro })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `grid gap-12 items-start ${image ? "lg:grid-cols-2" : "max-w-3xl mx-auto"}`, children: [
      /* @__PURE__ */ jsx("ol", { className: "flex flex-col gap-6", children: steps.map((step, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            className: "shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center",
            children: i + 1
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-text-highlighted mb-1", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted leading-relaxed", children: step.body })
        ] })
      ] }, step.title)) }),
      image && /* @__PURE__ */ jsxs("figure", { className: "lg:sticky lg:top-28", children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-border overflow-hidden bg-surface-overlay/40", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: image.src,
            alt: image.alt,
            loading: "lazy",
            decoding: "async",
            className: "w-full h-auto block"
          }
        ) }),
        image.caption && /* @__PURE__ */ jsx("figcaption", { className: "mt-3 text-sm text-text-muted text-center", children: image.caption })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: getCWSLink(ctaSection),
        target: "_blank",
        rel: "noopener noreferrer",
        className: "btn-primary text-lg px-10 py-4",
        onClick: () => trackInstallExtension(ctaSection),
        children: ctaLabel
      }
    ) })
  ] }) });
};

export { PlatformSteps as P };
