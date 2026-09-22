import { d as createAstro, c as createComponent, a as renderTemplate, u as unescapeHTML, b as addAttribute, m as maybeRenderHead } from './astro/server_C5ewKNw0.mjs';
import 'piccolore';
import 'clsx';
import { S as SITE_URL } from './BaseLayout_42pqqQrf.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://recordio.io");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items, class: className = "" } = Astro2.props;
  const trail = [{ name: "Home", href: "/" }, ...items];
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": trail.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": c.name,
      ...c.href ? { "item": `${SITE_URL}${c.href}` } : {}
    }))
  });
  return renderTemplate(_a || (_a = __template(["", '<nav aria-label="Breadcrumb"', '> <ol class="flex flex-wrap items-center gap-1 text-sm text-text-muted"> ', ' </ol> </nav> <script type="application/ld+json">', "<\/script>"])), maybeRenderHead(), addAttribute(`breadcrumbs ${className}`, "class"), trail.map((c, i) => renderTemplate`<li class="flex items-center gap-1"> ${c.href && i < trail.length - 1 ? renderTemplate`<a${addAttribute(c.href, "href")} class="hover:text-primary transition-colors">${c.name}</a>` : renderTemplate`<span aria-current="page" class="text-text-highlighted">${c.name}</span>`} ${i < trail.length - 1 && renderTemplate`<span aria-hidden="true" class="opacity-50">/</span>`} </li>`), unescapeHTML(jsonLd));
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Breadcrumbs.astro", void 0);

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

export { $$Breadcrumbs as $, RelatedLinks as R };
