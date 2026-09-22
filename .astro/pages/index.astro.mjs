import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { d as CWS_REVIEWS_URL, g as getCWSLink, $ as $$BaseLayout } from '../chunks/BaseLayout_BMmOTL_5.mjs';
import { t as trackInstallExtension, P as PLATFORM_PAGES, p as platformHref, H as Header, b as compareHref, F as Footer } from '../chunks/Footer_CETPJvN_.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { F as FeatureVideos } from '../chunks/FeatureVideos_wQ57yTRE.mjs';
import { F as FinalCTA } from '../chunks/FinalCTA_Djpz3v4A.mjs';
import { T as Testimonials } from '../chunks/Testimonials_CojFjmC2.mjs';
import { P as Pricing } from '../chunks/Pricing_FQzwYBKa.mjs';
import { F as FAQ } from '../chunks/FAQ_DdSn-1-7.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const Star = () => /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 text-secondary", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) });
const Hero = () => {
  return /* @__PURE__ */ jsx("section", { "aria-label": "Hero", className: "relative overflow-hidden hero-bg", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-8 lg:pb-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: CWS_REVIEWS_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hero-eyebrow hero-entrance hero-entrance-delay-1",
          children: [
            /* @__PURE__ */ jsx("img", { src: "/assets/chrome-store.svg", alt: "", className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { className: "flex gap-0.5", "aria-label": "5 out of 5 stars", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, {}, i)) }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-text-highlighted", children: "5.0" }),
            /* @__PURE__ */ jsx("span", { className: "text-text-muted", children: "on the Chrome Web Store" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("h1", { className: "hero-title mt-6 hero-entrance hero-entrance-delay-1", children: [
        "The screen recorder your product ",
        /* @__PURE__ */ jsx("span", { className: "accent-word", children: "deserves." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-xl md:text-2xl text-text-muted max-w-2xl mx-auto leading-relaxed hero-entrance hero-entrance-delay-2", children: "Recordio understands the page you're recording. Zooms, spotlights and captions land exactly where they should, automatically." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 hero-entrance hero-entrance-delay-3", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: getCWSLink("hero"),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "btn-primary btn-lg",
            onClick: () => trackInstallExtension("hero"),
            children: [
              /* @__PURE__ */ jsx("img", { src: "/assets/chrome-store.svg", alt: "", className: "w-5 h-5" }),
              "Add to Chrome — it's free"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "#feature-videos", className: "btn-secondary btn-lg", children: [
          "See it in action",
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "hero-facts mt-6 hero-entrance hero-entrance-delay-3", children: [
        /* @__PURE__ */ jsx("li", { children: "One-click install" }),
        /* @__PURE__ */ jsx("li", { children: "Mac, Windows, Linux & ChromeOS" }),
        /* @__PURE__ */ jsx("li", { children: "No credit card" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hero-image-wrap mt-14 lg:mt-20 hero-entrance hero-entrance-delay-4", children: [
      /* @__PURE__ */ jsx("div", { className: "hero-image-glow", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/assets/hero-editor.webp",
          srcSet: "/assets/hero-editor-1440.webp 1440w, /assets/hero-editor.webp 2872w",
          sizes: "(max-width: 1280px) 100vw, 1152px",
          alt: "The Recordio editor: screen settings on the left, a recording framed in a MacBook Pro on a purple background on the right",
          width: 2872,
          height: 1064,
          fetchPriority: "high",
          decoding: "async",
          className: "hero-image"
        }
      )
    ] })
  ] }) });
};

const $$Astro = createAstro("https://recordio.io");
const $$LinkStrip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkStrip;
  const { eyebrow, heading, intro, links, all, variant = "white", id } = Astro2.props;
  const sectionClass = variant === "white" ? "section-panel-white" : "section-panel";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(heading, "aria-label")}${addAttribute(`${sectionClass} py-14 px-6`, "class")}> <div class="max-w-7xl mx-auto grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] md:items-center"> <div> ${eyebrow && renderTemplate`<span class="eyebrow">${eyebrow}</span>`} <h2 class="text-2xl md:text-3xl font-bold text-text-highlighted mt-2">${heading}</h2> ${intro && renderTemplate`<p class="mt-2 text-text-muted leading-relaxed">${intro}</p>`} </div> <ul class="flex flex-wrap gap-3 md:justify-end"> ${links.map((l) => renderTemplate`<li> <a${addAttribute(l.href, "href")} class="compare-index-link !py-2.5 !px-5 !text-base">${l.label}</a> </li>`)} ${all && renderTemplate`<li class="flex items-center"> <a${addAttribute(all.href, "href")} class="inline-flex items-center px-3 py-2 font-semibold text-primary hover:underline underline-offset-4"> ${all.label} </a> </li>`} </ul> </div> </section>`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/LinkStrip.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const compareStrip = [
    { label: "Recordio vs Loom", href: compareHref("loom") },
    { label: "Recordio vs Screen Studio", href: compareHref("screen-studio") },
    { label: "Recordio vs Bandicam", href: compareHref("bandicam") }
  ];
  const platformStrip = PLATFORM_PAGES.map((p) => ({ label: p.label, href: platformHref(p.slug) }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Screen Recorder for Product Walkthroughs | Recordio", "description": "Recordio is a cloud screen recorder for teams. Record a product walkthrough, get automatic zoom, spotlight and captions, then share a link. Free plan.", "faqSchema": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "FeatureVideos", FeatureVideos, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FeatureVideos", "client:component-export": "default" })} ${renderComponent($$result2, "Testimonials", Testimonials, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "LinkStrip", $$LinkStrip, { "id": "compare", "eyebrow": "Comparisons", "heading": "Switching from Loom, Screen Studio or Bandicam?", "intro": "Honest comparisons written by the Recordio team, with pricing checked in 2026 and a section on what the other tool does better.", "links": compareStrip, "all": { label: "All comparisons", href: "/compare/" }, "variant": "white" })} ${renderComponent($$result2, "Pricing", Pricing, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Pricing", "client:component-export": "default" })} ${renderComponent($$result2, "LinkStrip", $$LinkStrip, { "id": "platforms", "eyebrow": "Platforms", "heading": "Works on Mac, Windows, Linux and Chromebook", "intro": "One extension for Chrome, Edge and Brave, so a team on mixed machines records into one shared library.", "links": platformStrip, "all": { label: "All platforms", href: "/for/" }, "variant": "purple" })} ${renderComponent($$result2, "FAQ", FAQ, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FAQ", "client:component-export": "default" })} ${renderComponent($$result2, "FinalCTA", FinalCTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FinalCTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/index.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
