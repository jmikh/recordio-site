import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BMmOTL_5.mjs';
import { H as Header, F as Footer } from '../../chunks/Footer_CETPJvN_.mjs';
import { C as CompareHero, a as CompareFeatureTable, b as CompareCTA } from '../../chunks/CompareCTA_DUmm5hb3.mjs';
import { C as CompareValueProps } from '../../chunks/CompareValueProps_CoChYI2m.mjs';
import { F as FeatureVideos } from '../../chunks/FeatureVideos_wQ57yTRE.mjs';
import { P as Pricing } from '../../chunks/Pricing_FQzwYBKa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Screenity = createComponent(($$result, $$props, $$slots) => {
  const compareNavLinks = [
    { label: "Comparison", href: "#comparison" },
    { label: "Features", href: "#feature-videos" },
    { label: "Pricing", href: "#pricing" }
  ];
  const valueProps = [
    {
      title: "Auto-Polished, Not Just Captured",
      description: "Screenity captures your screen. Recordio captures it and auto-applies zoom, spotlight, clean toolbar, and device frames."
    },
    {
      title: "Share a Link With View Analytics",
      description: "Recordio Pro gives you shareable links with view counts and watch time, plus a team library your whole product org can search."
    },
    {
      title: "SmartCut Removes Dead Air",
      description: "Recordio's AutoCut detects silence and low-activity moments and trims them automatically. No manual editing."
    },
    {
      title: "AI Captions, Word by Word",
      description: "Recordio Pro adds OpenAI-powered captions with word-level timing you can edit before you share."
    }
  ];
  const featureRows = [
    {
      feature: "Platform",
      recordio: "Chrome, Edge, Brave",
      competitor: "Chrome, Chromium-based"
    },
    {
      feature: "Auto Zoom",
      description: "Automatic zoom on interactions",
      recordio: "DOM-aware, automatic",
      competitor: "Click-based (Pro only)"
    },
    {
      feature: "Auto Spotlight",
      description: "3D elevation on interacted elements",
      recordio: true,
      competitor: false
    },
    {
      feature: "Simplified Toolbar",
      description: "Hides bookmarks, tabs, and extensions",
      recordio: true,
      competitor: false
    },
    {
      feature: "Smart AutoCut",
      description: "Automatic silence removal",
      recordio: true,
      competitor: false
    },
    {
      feature: "Device Frames",
      description: "MacBook Pro / Air frames",
      recordio: true,
      competitor: false
    },
    {
      feature: "Shareable Links",
      recordio: "With viewership analytics (Pro)",
      competitor: "Pro only"
    },
    {
      feature: "AI Captions",
      recordio: "Word-level, editable (Pro)",
      competitor: "Pro only"
    },
    {
      feature: "Custom Backgrounds",
      recordio: true,
      competitor: "Pro only"
    },
    {
      feature: "Built-In Editor",
      description: "Edit without leaving the app",
      recordio: true,
      competitor: "Basic (Pro for advanced)"
    },
    {
      feature: "Video Library",
      description: "Organize and manage past recordings",
      recordio: true,
      competitor: false
    },
    {
      feature: "Pricing",
      recordio: "Free, or Pro $12/seat/mo (annual)",
      competitor: "Free / Pro (paid)"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Screenity Alternative for Polished Demos | Recordio", "description": "Screenity captures your screen. Recordio adds auto zoom, spotlight, silence cutting and share links with view analytics. Free plan, Pro from $12 per seat." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": compareNavLinks, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "CompareHero", CompareHero, { "client:load": true, "competitorName": "Screenity", "headline": "Recordio vs Screenity", "subheadline": "Both live in your browser. Recordio adds the polish \u2014 auto zoom, spotlight, and shareable links \u2014 so every recording looks professional.", "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareHero", "client:component-export": "default" })} ${renderComponent($$result2, "CompareValueProps", CompareValueProps, { "client:visible": true, "competitorName": "Screenity", "props": valueProps, "variant": "purple", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareValueProps", "client:component-export": "default" })} ${renderComponent($$result2, "CompareFeatureTable", CompareFeatureTable, { "client:visible": true, "competitorName": "Screenity", "rows": featureRows, "variant": "white", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareFeatureTable", "client:component-export": "default" })} ${renderComponent($$result2, "FeatureVideos", FeatureVideos, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FeatureVideos", "client:component-export": "default" })} ${renderComponent($$result2, "Pricing", Pricing, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Pricing", "client:component-export": "default" })} ${renderComponent($$result2, "CompareCTA", CompareCTA, { "client:visible": true, "competitorName": "Screenity", "variant": "purple", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareCTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "source": "compare-screenity", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/screenity.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/screenity.astro";
const $$url = "/compare/screenity/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Screenity,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
