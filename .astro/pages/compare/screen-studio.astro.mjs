import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BMmOTL_5.mjs';
import { H as Header, F as Footer } from '../../chunks/Footer_CETPJvN_.mjs';
import { C as CompareHero, a as CompareFeatureTable, b as CompareCTA } from '../../chunks/CompareCTA_DUmm5hb3.mjs';
import { C as CompareValueProps } from '../../chunks/CompareValueProps_CoChYI2m.mjs';
import { F as FeatureVideos } from '../../chunks/FeatureVideos_wQ57yTRE.mjs';
import { P as Pricing } from '../../chunks/Pricing_FQzwYBKa.mjs';
export { renderers } from '../../renderers.mjs';

const $$ScreenStudio = createComponent(($$result, $$props, $$slots) => {
  const compareNavLinks = [
    { label: "Comparison", href: "#comparison" },
    { label: "Features", href: "#feature-videos" },
    { label: "Pricing", href: "#pricing" }
  ];
  const valueProps = [
    {
      title: "Works Everywhere, Not Just Mac",
      description: "Recordio runs on Chrome, Edge, and Brave \u2014 on Mac, Windows, Linux, and ChromeOS. Your whole team can use it."
    },
    {
      title: "Share Links, Track Views",
      description: "Share a link and see who watched. Total views and average watch time, built right into your video library."
    },
    {
      title: "Smarter Zoom",
      description: "Recordio reads the DOM and zooms into the actual UI element you're interacting with \u2014 no clipping, no jitter."
    },
    {
      title: "Built for Teams, Not Just One Mac",
      description: "Screen Studio is a single-user Mac app. Recordio adds a team library, collaboration, and unlimited free viewer seats, with a free plan to start."
    }
  ];
  const featureRows = [
    {
      feature: "Cross-Platform",
      recordio: "Chrome, Edge, Brave (all OS)",
      competitor: "macOS only"
    },
    {
      feature: "Auto Zoom",
      description: "How zoom targets are determined",
      recordio: "DOM-aware (reads page elements)",
      competitor: "Cursor-based"
    },
    {
      feature: "Auto Zoom Editing",
      recordio: "Keyframe system",
      competitor: "Timeline drag"
    },
    {
      feature: "Auto Spotlight",
      description: "3D elevation on interacted elements",
      recordio: true,
      competitor: false
    },
    {
      feature: "Shareable Links",
      recordio: "With viewership analytics",
      competitor: false
    },
    {
      feature: "Device Frames",
      recordio: true,
      competitor: true
    },
    {
      feature: "Smart AutoCut",
      description: "Voice + interaction-aware silence removal",
      recordio: true,
      competitor: false
    },
    {
      feature: "Simplified Toolbar",
      recordio: true,
      competitor: false
    },
    {
      feature: "AI Captions",
      recordio: "Word-level, editable (Pro)",
      competitor: false
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
      competitor: false
    },
    {
      feature: "Free Tier",
      recordio: true,
      competitor: false
    },
    {
      feature: "Pricing",
      recordio: "Free, or Pro $12/seat/mo (annual)",
      competitor: "About $9/mo billed annually"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Screen Studio Alternative for Windows and Teams | Recordio", "description": "Screen Studio is Mac-only. Recordio runs in Chrome on any OS and adds share links with view analytics and a team library. Free plan, Pro from $12 per seat." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": compareNavLinks, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "CompareHero", CompareHero, { "client:load": true, "competitorName": "Screen Studio", "headline": "Recordio vs Screen Studio", "subheadline": "Smarter auto zoom \u2014 on any platform. Plus a project and shared video library you can manage.", "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareHero", "client:component-export": "default" })} ${renderComponent($$result2, "CompareValueProps", CompareValueProps, { "client:visible": true, "competitorName": "Screen Studio", "props": valueProps, "variant": "purple", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareValueProps", "client:component-export": "default" })} ${renderComponent($$result2, "CompareFeatureTable", CompareFeatureTable, { "client:visible": true, "competitorName": "Screen Studio", "rows": featureRows, "variant": "white", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareFeatureTable", "client:component-export": "default" })} ${renderComponent($$result2, "FeatureVideos", FeatureVideos, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FeatureVideos", "client:component-export": "default" })} ${renderComponent($$result2, "Pricing", Pricing, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Pricing", "client:component-export": "default" })} ${renderComponent($$result2, "CompareCTA", CompareCTA, { "client:visible": true, "competitorName": "Screen Studio", "variant": "purple", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareCTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "source": "compare-screen-studio", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/screen-studio.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/screen-studio.astro";
const $$url = "/compare/screen-studio/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ScreenStudio,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
