import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BMmOTL_5.mjs';
import { H as Header, F as Footer } from '../../chunks/Footer_CETPJvN_.mjs';
import { C as CompareHero, a as CompareFeatureTable, b as CompareCTA } from '../../chunks/CompareCTA_DUmm5hb3.mjs';
import { C as CompareValueProps } from '../../chunks/CompareValueProps_CoChYI2m.mjs';
import { F as FeatureVideos } from '../../chunks/FeatureVideos_wQ57yTRE.mjs';
import { P as Pricing } from '../../chunks/Pricing_FQzwYBKa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Clueso = createComponent(($$result, $$props, $$slots) => {
  const compareNavLinks = [
    { label: "Comparison", href: "#comparison" },
    { label: "Features", href: "#feature-videos" },
    { label: "Pricing", href: "#pricing" }
  ];
  const valueProps = [
    {
      title: "Auto Zoom and Spotlight on Every Recording",
      description: "Recordio reads the page DOM to zoom into the element you click and adds a 3D spotlight, so every walkthrough looks polished without editing."
    },
    {
      title: "No Export Caps on Pro",
      description: "Clueso caps exports at 6-12 hours a year depending on plan. Recordio Pro has unlimited projects and exports, and the free plan gives you 5 active projects to try it."
    },
    {
      title: "Priced for the Whole Team",
      description: "Clueso starts at $120 a month for two users. Recordio Pro is $12 per seat per month billed annually, with unlimited free viewer seats and a free plan to start."
    },
    {
      title: "Instant Setup, No Onboarding",
      description: "Install the Chrome extension, create a free account, and start recording. No demos, no sales calls, no enterprise onboarding process."
    }
  ];
  const featureRows = [
    {
      feature: "Setup",
      recordio: "Chrome extension plus a free account",
      competitor: "Web app, account required"
    },
    {
      feature: "Auto Zoom",
      description: "Automatic zoom on interactions",
      recordio: "DOM-aware, automatic",
      competitor: "AI cloud-based"
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
      competitor: true
    },
    {
      feature: "Device Frames",
      recordio: true,
      competitor: false
    },
    {
      feature: "Shareable Links",
      recordio: "With viewership analytics",
      competitor: "Yes"
    },
    {
      feature: "AI Captions",
      recordio: "Word-level, editable (Pro)",
      competitor: "AI-generated, multi-language"
    },
    {
      feature: "Custom Backgrounds",
      recordio: true,
      competitor: true
    },
    {
      feature: "Built-In Editor",
      description: "Edit without leaving the app",
      recordio: true,
      competitor: true
    },
    {
      feature: "Video Library",
      description: "Organize and manage past recordings",
      recordio: true,
      competitor: true
    },
    {
      feature: "Unlimited Exports",
      recordio: "Unlimited on Pro",
      competitor: "Capped per plan"
    },
    {
      feature: "Cross-Platform",
      recordio: "Chrome, Edge, Brave (all OS)",
      competitor: "Web app"
    },
    {
      feature: "Pricing",
      recordio: "Free, or Pro $12/seat/mo (annual)",
      competitor: "From $120/mo (2 users)"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Clueso Alternative for Product Walkthroughs | Recordio", "description": "Clueso starts at $120 a month for two users. Recordio gives teams auto zoom, captions and share links from Chrome. Free plan, Pro from $12 per seat." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": compareNavLinks, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "CompareHero", CompareHero, { "client:load": true, "competitorName": "Clueso", "headline": "Recordio vs Clueso", "subheadline": "Studio-quality product walkthroughs from a Chrome extension. Auto zoom, captions, and share links, with a free plan and Pro from $12 per seat.", "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareHero", "client:component-export": "default" })} ${renderComponent($$result2, "CompareValueProps", CompareValueProps, { "client:visible": true, "competitorName": "Clueso", "props": valueProps, "variant": "purple", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareValueProps", "client:component-export": "default" })} ${renderComponent($$result2, "CompareFeatureTable", CompareFeatureTable, { "client:visible": true, "competitorName": "Clueso", "rows": featureRows, "variant": "white", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareFeatureTable", "client:component-export": "default" })} ${renderComponent($$result2, "FeatureVideos", FeatureVideos, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FeatureVideos", "client:component-export": "default" })} ${renderComponent($$result2, "Pricing", Pricing, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Pricing", "client:component-export": "default" })} ${renderComponent($$result2, "CompareCTA", CompareCTA, { "client:visible": true, "competitorName": "Clueso", "variant": "purple", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareCTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "source": "compare-clueso", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/clueso.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/clueso.astro";
const $$url = "/compare/clueso/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Clueso,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
