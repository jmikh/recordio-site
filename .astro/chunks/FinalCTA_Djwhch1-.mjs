import { jsx, jsxs } from 'react/jsx-runtime';
import { g as getCWSLink } from './BaseLayout_42pqqQrf.mjs';
import { t as trackInstallExtension } from './Header_4On9n2CP.mjs';

const FinalCTA = ({ source = "final-cta" }) => {
  return /* @__PURE__ */ jsx("section", { "aria-label": "Get started", className: "py-16 lg:py-24", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "final-cta", children: [
    /* @__PURE__ */ jsx("div", { className: "final-cta-glow", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "final-cta-title", children: "Your next product video, done in minutes." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-white/75", children: "Install the extension, hit record, and let Recordio handle the zooms, spotlights and captions." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-3", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: getCWSLink(source),
          target: "_blank",
          rel: "noopener noreferrer",
          className: "btn-on-dark btn-lg",
          onClick: () => trackInstallExtension(source),
          children: [
            /* @__PURE__ */ jsx("img", { src: "/assets/chrome-store.svg", alt: "", className: "w-5 h-5" }),
            "Add to Chrome — it's free"
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm text-white/60", children: "Free plan included. No credit card." })
    ] })
  ] }) }) });
};

export { FinalCTA as F };
