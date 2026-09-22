import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BMmOTL_5.mjs';
import { H as Header, F as Footer } from '../../chunks/Footer_CETPJvN_.mjs';
import { C as CompareHero, a as CompareFeatureTable, b as CompareCTA } from '../../chunks/CompareCTA_DUmm5hb3.mjs';
import { C as CompareValueProps } from '../../chunks/CompareValueProps_CoChYI2m.mjs';
import { F as FeatureVideos } from '../../chunks/FeatureVideos_wQ57yTRE.mjs';
import { P as Pricing } from '../../chunks/Pricing_FQzwYBKa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Camtasia = createComponent(($$result, $$props, $$slots) => {
  const compareNavLinks = [
    { label: "Comparison", href: "#comparison" },
    { label: "Features", href: "#feature-videos" },
    { label: "Pricing", href: "#pricing" }
  ];
  const valueProps = [
    {
      title: "Auto-Polished, Not Manually Edited",
      description: "Camtasia requires you to manually edit every zoom, transition, and effect. Recordio applies auto zoom, spotlight, and clean toolbar automatically."
    },
    {
      title: "Nothing to Install",
      description: "Camtasia is a heavyweight desktop app. Recordio is a Chrome extension \u2014 install in seconds, record instantly."
    },
    {
      title: "Share a Link, Not a File",
      description: "Recordio gives you shareable links with viewership analytics. No exporting, uploading, or emailing large video files."
    },
    {
      title: "From $0, Not $300",
      description: "Camtasia starts at $180 per year or $300 perpetual. Recordio has a free plan, and Pro is $12 per seat per month billed annually."
    }
  ];
  const featureRows = [
    {
      feature: "Setup",
      recordio: "Chrome extension, instant",
      competitor: "Desktop app install"
    },
    {
      feature: "Auto Zoom",
      description: "Automatic zoom on interactions",
      recordio: "DOM-aware, automatic",
      competitor: false
    },
    {
      feature: "Auto Spotlight",
      description: "3D elevation on interacted elements",
      recordio: true,
      competitor: false
    },
    {
      feature: "Simplified Toolbar",
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
      feature: "Shareable Links",
      recordio: "With viewership analytics",
      competitor: false
    },
    {
      feature: "AI Captions",
      recordio: "Word-level, editable (Pro)",
      competitor: "AI-generated"
    },
    {
      feature: "Cursor Highlight",
      recordio: true,
      competitor: true
    },
    {
      feature: "Custom Backgrounds",
      recordio: true,
      competitor: true
    },
    {
      feature: "Video Library",
      description: "Organize and manage past recordings",
      recordio: true,
      competitor: false
    },
    {
      feature: "Cross-Platform",
      recordio: "Any OS via Chrome/Edge/Brave",
      competitor: "Mac + Windows"
    },
    {
      feature: "Pricing",
      recordio: "Free, or Pro $12/seat/mo (annual)",
      competitor: "$180/yr or $300 one-time"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Camtasia Alternative for Fast Product Demos | Recordio", "description": "Camtasia means a desktop app and a timeline. Recordio auto zooms, spotlights and captions every demo from Chrome. Free plan, Pro from $12 per seat." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": compareNavLinks, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "CompareHero", CompareHero, { "client:load": true, "competitorName": "Camtasia", "headline": "Recordio vs Camtasia", "subheadline": "Professional recordings in seconds \u2014 not hours of manual editing. Auto zoom, auto spotlight, and shareable links, all built in.", "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareHero", "client:component-export": "default" })} ${renderComponent($$result2, "CompareValueProps", CompareValueProps, { "client:visible": true, "competitorName": "Camtasia", "props": valueProps, "variant": "purple", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareValueProps", "client:component-export": "default" })} ${renderComponent($$result2, "CompareFeatureTable", CompareFeatureTable, { "client:visible": true, "competitorName": "Camtasia", "rows": featureRows, "variant": "white", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareFeatureTable", "client:component-export": "default" })} ${renderComponent($$result2, "FeatureVideos", FeatureVideos, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FeatureVideos", "client:component-export": "default" })} ${renderComponent($$result2, "Pricing", Pricing, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Pricing", "client:component-export": "default" })} ${renderComponent($$result2, "CompareCTA", CompareCTA, { "client:visible": true, "competitorName": "Camtasia", "variant": "purple", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareCTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "source": "compare-camtasia", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/camtasia.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/camtasia.astro";
const $$url = "/compare/camtasia/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Camtasia,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
