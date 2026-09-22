import { jsx, jsxs } from 'react/jsx-runtime';

const RelatedLinks = ({ heading = "Related", links, variant = "white" }) => {
  const sectionClass = variant === "white" ? "section-panel-white" : "section-panel";
  return /* @__PURE__ */ jsx("section", { "aria-label": heading, className: `${sectionClass} py-16 px-6`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-text-highlighted mb-8", children: heading }),
    /* @__PURE__ */ jsx("ul", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: l.href,
        className: "block h-full rounded-2xl border border-border bg-surface-overlay/40 hover:border-primary/40 transition-colors p-5",
        children: [
          /* @__PURE__ */ jsx("span", { className: "block font-semibold text-text-highlighted", children: l.label }),
          l.blurb && /* @__PURE__ */ jsx("span", { className: "block mt-1 text-sm text-text-muted", children: l.blurb })
        ]
      }
    ) }, l.href)) })
  ] }) });
};

export { RelatedLinks as R };
