import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BMmOTL_5.mjs';
import { H as Header, F as Footer } from '../../chunks/Footer_CETPJvN_.mjs';
import { C as CompareHero, a as CompareFeatureTable, b as CompareCTA } from '../../chunks/CompareCTA_DUmm5hb3.mjs';
import { C as CompareValueProps } from '../../chunks/CompareValueProps_CoChYI2m.mjs';
import { F as FeatureVideos } from '../../chunks/FeatureVideos_wQ57yTRE.mjs';
import { P as Pricing } from '../../chunks/Pricing_FQzwYBKa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Tella = createComponent(($$result, $$props, $$slots) => {
  const compareNavLinks = [
    { label: "Comparison", href: "#comparison" },
    { label: "Features", href: "#feature-videos" },
    { label: "Pricing", href: "#pricing" }
  ];
  const valueProps = [
    {
      title: "A Free Plan, Not a Trial Clock",
      description: "Tella starts at $19 per user per month with no free plan, just a 7-day trial. Recordio has a free plan with no card required, and Pro is $12 per seat per month billed annually."
    },
    {
      title: "Share a Link With View Analytics",
      description: "Every Pro recording gets a shareable link with view counts and watch time, plus a team library so the whole product org can find it."
    },
    {
      title: "Smarter Zoom, Not Manual Layouts",
      description: "Tella offers manual multi-layout switching. Recordio's DOM-aware Auto Zoom intelligently follows your clicks and interactions \u2014 no setup required."
    },
    {
      title: "Polish Without the Learning Curve",
      description: "Tella requires you to plan clips, switch layouts, and edit a transcript. Recordio gives you auto zoom, spotlight, AutoCut, and device frames with zero editing."
    }
  ];
  const featureRows = [
    {
      feature: "Platform",
      recordio: "Chrome, Edge, Brave",
      competitor: "Web app, Chrome, macOS, Windows"
    },
    {
      feature: "Auto Zoom",
      description: "Automatic zoom on interactions",
      recordio: "DOM-aware, automatic",
      competitor: "Manual zoom effects"
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
      competitor: "Filler word & silence removal"
    },
    {
      feature: "Device Frames",
      description: "MacBook Pro / Air frames",
      recordio: true,
      competitor: false
    },
    {
      feature: "Shareable Links",
      recordio: "With viewership analytics",
      competitor: "Yes (analytics on Premium only)"
    },
    {
      feature: "AI Captions",
      recordio: "Word-level, editable (Pro)",
      competitor: "AI-generated subtitles"
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
      competitor: "Transcript-based editor"
    },
    {
      feature: "Video Library",
      description: "Organize and manage past recordings",
      recordio: true,
      competitor: true
    },
    {
      feature: "Pricing",
      recordio: "Free, or Pro $12/seat/mo (annual)",
      competitor: "No free plan / $19 per user/mo"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tella Alternative With a Free Plan for Teams | Recordio", "description": "Tella has no free plan and starts at $19 per user. Recordio polishes every recording with auto zoom and captions. Free plan, Pro from $12 per seat." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": compareNavLinks, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "CompareHero", CompareHero, { "client:load": true, "competitorName": "Tella", "headline": "Recordio vs Tella", "subheadline": "Both make screen recordings look great. Recordio does it automatically, with a free plan to start and Pro from $12 per seat.", "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareHero", "client:component-export": "default" })} ${renderComponent($$result2, "CompareValueProps", CompareValueProps, { "client:visible": true, "competitorName": "Tella", "props": valueProps, "variant": "purple", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareValueProps", "client:component-export": "default" })} ${renderComponent($$result2, "CompareFeatureTable", CompareFeatureTable, { "client:visible": true, "competitorName": "Tella", "rows": featureRows, "variant": "white", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareFeatureTable", "client:component-export": "default" })} ${renderComponent($$result2, "FeatureVideos", FeatureVideos, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FeatureVideos", "client:component-export": "default" })} ${renderComponent($$result2, "Pricing", Pricing, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Pricing", "client:component-export": "default" })} ${renderComponent($$result2, "CompareCTA", CompareCTA, { "client:visible": true, "competitorName": "Tella", "variant": "purple", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareCTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "source": "compare-tella", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/tella.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/tella.astro";
const $$url = "/compare/tella/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Tella,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
