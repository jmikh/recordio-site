import { jsx, jsxs } from 'react/jsx-runtime';
import { u as useScrollReveal } from './CompareCTA_-l2rcKI9.mjs';

const CompareValueProps = ({ competitorName, props, variant = "purple" }) => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const sectionClass = variant === "white" ? "section-panel-white" : "section-panel";
  return /* @__PURE__ */ jsx("section", { className: `${sectionClass} py-20 px-6`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { ref: headerRef, className: "text-center mb-12 scroll-reveal", children: /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-text-highlighted mb-4", children: [
      "Why teams switch from ",
      competitorName
    ] }) }),
    /* @__PURE__ */ jsx("div", { ref: gridRef, className: "grid md:grid-cols-2 gap-6 scroll-reveal scroll-reveal-delay-2", children: props.map((prop, i) => /* @__PURE__ */ jsxs("div", { className: "card-premium", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-text-highlighted mb-3", children: prop.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-text-muted leading-relaxed", children: prop.description })
    ] }, i)) })
  ] }) });
};

export { CompareValueProps as C };
