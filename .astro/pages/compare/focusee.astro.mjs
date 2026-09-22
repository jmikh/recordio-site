import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BMmOTL_5.mjs';
import { H as Header, F as Footer } from '../../chunks/Footer_CETPJvN_.mjs';
import { C as CompareHero, a as CompareFeatureTable, b as CompareCTA } from '../../chunks/CompareCTA_DUmm5hb3.mjs';
import { C as CompareValueProps } from '../../chunks/CompareValueProps_CoChYI2m.mjs';
import { F as FeatureVideos } from '../../chunks/FeatureVideos_wQ57yTRE.mjs';
import { P as Pricing } from '../../chunks/Pricing_FQzwYBKa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Focusee = createComponent(($$result, $$props, $$slots) => {
  const compareNavLinks = [
    { label: "Comparison", href: "#comparison" },
    { label: "Features", href: "#feature-videos" },
    { label: "Pricing", href: "#pricing" }
  ];
  const valueProps = [
    {
      title: "No Desktop App Required",
      description: "FocuSee requires downloading a desktop app for Mac or Windows. Recordio runs in Chrome, Edge, or Brave on any OS, so the whole team can record without a desktop app."
    },
    {
      title: "Built for Teams, Not Just One Desktop",
      description: "FocuSee is a single-user desktop app. Recordio adds share links with view analytics, a team library, and unlimited free viewer seats."
    },
    {
      title: "Free Plan, Then $12 Per Seat",
      description: "FocuSee is $199.99 one-time per computer. Recordio has a free plan, and Pro is $12 per seat per month billed annually with 4K exports and cloud rendering."
    },
    {
      title: "DOM-Aware Zoom, Not Cursor Tracking",
      description: "FocuSee's auto zoom follows your cursor. Recordio's DOM-aware zoom understands what you're actually clicking on \u2014 buttons, inputs, menus \u2014 for precise, meaningful zooms every time."
    }
  ];
  const featureRows = [
    {
      feature: "Platform",
      recordio: "Chrome, Edge, Brave \u2014 any OS",
      competitor: "Mac & Windows desktop app"
    },
    {
      feature: "Auto Zoom",
      description: "Automatic zoom on interactions",
      recordio: "DOM-aware, automatic",
      competitor: "Cursor-tracking based"
    },
    {
      feature: "Auto Spotlight",
      description: "3D elevation on interacted elements",
      recordio: true,
      competitor: "Cursor highlight only"
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
      recordio: "Voice + interaction aware",
      competitor: "Basic silence removal"
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
      competitor: false
    },
    {
      feature: "AI Captions",
      recordio: "Word-level, editable (Pro)",
      competitor: "AI-generated, editable"
    },
    {
      feature: "Custom Backgrounds",
      recordio: true,
      competitor: "Padding & shadow only"
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
      feature: "Pricing",
      recordio: "Free, or Pro $12/seat/mo (annual)",
      competitor: "$199.99 one-time"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "FocuSee Alternative for Browser Recording | Recordio", "description": "FocuSee is a $199.99 desktop app. Recordio records in Chrome on any OS, with DOM-aware zoom, captions and share links. Free plan, Pro from $12 per seat." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": compareNavLinks, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "CompareHero", CompareHero, { "client:load": true, "competitorName": "FocuSee", "headline": "Recordio vs FocuSee", "subheadline": "FocuSee is a solid desktop recorder with auto zoom. Recordio does it in your browser on any OS: DOM-aware zoom, 3D spotlight, and share links for your team.", "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareHero", "client:component-export": "default" })} ${renderComponent($$result2, "CompareValueProps", CompareValueProps, { "client:visible": true, "competitorName": "FocuSee", "props": valueProps, "variant": "purple", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareValueProps", "client:component-export": "default" })} ${renderComponent($$result2, "CompareFeatureTable", CompareFeatureTable, { "client:visible": true, "competitorName": "FocuSee", "rows": featureRows, "variant": "white", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareFeatureTable", "client:component-export": "default" })} ${renderComponent($$result2, "FeatureVideos", FeatureVideos, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FeatureVideos", "client:component-export": "default" })} ${renderComponent($$result2, "Pricing", Pricing, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Pricing", "client:component-export": "default" })} ${renderComponent($$result2, "CompareCTA", CompareCTA, { "client:visible": true, "competitorName": "FocuSee", "variant": "purple", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareCTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "source": "compare-focusee", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/focusee.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/focusee.astro";
const $$url = "/compare/focusee/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Focusee,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
