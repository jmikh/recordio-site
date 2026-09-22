import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { g as getCWSLink } from './BaseLayout_B_QZKqTv.mjs';
import { t as trackInstallExtension } from './Header_BUQfr5uo.mjs';

const Check = ({ className = "" }) => /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 shrink-0 mt-0.5 ${className}`, fill: "none", stroke: "currentColor", strokeWidth: 2.2, viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) });
const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const free = {
    features: [
      "Auto smart zooms, spotlights & more",
      "Automatic silence cutting",
      "1080p downloads",
      "Beautiful music & background library",
      "Up to 5 active projects"
    ]
  };
  const pro = {
    price: isAnnual ? "$12" : "$15",
    note: isAnnual ? "per seat / month, billed annually" : "per seat / month, billed monthly",
    features: [
      "4K exports",
      "Auto-generated captions",
      "Collaboration and team library",
      "Unlimited viewer seats",
      "Shareable links"
    ]
  };
  return /* @__PURE__ */ jsx("section", { id: "pricing", "aria-label": "Pricing", className: "py-24 relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Pricing" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Start free. Upgrade when your team does." }),
      /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "No credit card for the free plan. Cancel Pro any time." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 inline-flex items-center gap-1 p-1 rounded-full bg-surface-raised border border-border", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsAnnual(false),
            "aria-pressed": !isAnnual,
            className: `toggle-pill ${!isAnnual ? "is-on" : ""}`,
            children: "Monthly"
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setIsAnnual(true),
            "aria-pressed": isAnnual,
            className: `toggle-pill ${isAnnual ? "is-on" : ""}`,
            children: [
              "Annual",
              /* @__PURE__ */ jsx("span", { className: "toggle-save", children: "save 20%" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "price-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "price-card", children: [
        /* @__PURE__ */ jsx("div", { className: "price-plan", children: "Free" }),
        /* @__PURE__ */ jsxs("div", { className: "price-amount", children: [
          /* @__PURE__ */ jsx("span", { className: "price-number", children: "$0" }),
          /* @__PURE__ */ jsx("span", { className: "price-period", children: "forever" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "price-note", children: "Everything you need to make a great video." }),
        /* @__PURE__ */ jsx("ul", { className: "price-list", children: free.features.map((f) => /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx(Check, { className: "text-primary" }),
          f
        ] }, f)) }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: getCWSLink("pricing"),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "btn-secondary w-full justify-center",
            onClick: () => trackInstallExtension("pricing"),
            children: "Start for free"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "price-card price-card--pro", children: [
        /* @__PURE__ */ jsx("div", { className: "price-card-glow", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "price-plan", children: "Pro" }),
            /* @__PURE__ */ jsx("span", { className: "price-badge", children: "Most popular" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "price-amount", children: [
            /* @__PURE__ */ jsx("span", { className: "price-number", children: pro.price }),
            /* @__PURE__ */ jsx("span", { className: "price-period", children: "/ month" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "price-note", children: pro.note }),
          /* @__PURE__ */ jsxs("ul", { className: "price-list", children: [
            /* @__PURE__ */ jsxs("li", { className: "font-semibold", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-secondary" }),
              "Everything in Free"
            ] }),
            pro.features.map((f) => /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(Check, { className: "text-secondary" }),
              f
            ] }, f))
          ] }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: getCWSLink("pricing-pro"),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "btn-on-dark w-full justify-center",
              onClick: () => trackInstallExtension("pricing-pro"),
              children: "Get Pro"
            }
          )
        ] })
      ] })
    ] })
  ] }) });
};

export { Pricing as P };
