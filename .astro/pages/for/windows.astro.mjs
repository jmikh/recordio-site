import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BMmOTL_5.mjs';
import { H as Header, o as otherPlatforms, F as Footer } from '../../chunks/Footer_CETPJvN_.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_DNl1Z9iS.mjs';
import { R as RelatedLinks } from '../../chunks/RelatedLinks_DlwSg6Vn.mjs';
import { P as PlatformHero } from '../../chunks/PlatformHero_aSIttFzv.mjs';
import { F as FeatureVideos } from '../../chunks/FeatureVideos_wQ57yTRE.mjs';
import { T as Testimonials } from '../../chunks/Testimonials_CojFjmC2.mjs';
import { P as Pricing } from '../../chunks/Pricing_FQzwYBKa.mjs';
import { F as FAQ } from '../../chunks/FAQ_DdSn-1-7.mjs';
export { renderers } from '../../renderers.mjs';

const $$Windows = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Best Screen Recorder for Windows and PC | Recordio", "description": "Record your screen on Windows from Chrome, Edge or Brave, no desktop app. Auto zoom, spotlight, captions and share links for walkthroughs. Free plan.", "faqSchema": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "PlatformHero", PlatformHero, { "client:load": true, "platformName": "Windows", "tagLabel": "Best for Windows & PC", "headline": "The best screen recorder for <span class='underline decoration-primary decoration-4 underline-offset-4'>Windows.</span>", "subheadline": "Skip bulky desktop software. Recordio runs right in Chrome, Edge, or Brave on your PC. Hit record, and every video comes out polished with auto-zoom, spotlight, and captions.", "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/platform/PlatformHero", "client:component-export": "default" })} <div class="max-w-6xl mx-auto px-6 pt-8"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ name: "Platforms", href: "/for/" }, { name: "Windows" }] })} </div> ${renderComponent($$result2, "FeatureVideos", FeatureVideos, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FeatureVideos", "client:component-export": "default" })} ${renderComponent($$result2, "Testimonials", Testimonials, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "Pricing", Pricing, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Pricing", "client:component-export": "default" })} ${renderComponent($$result2, "FAQ", FAQ, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FAQ", "client:component-export": "default" })} ${renderComponent($$result2, "RelatedLinks", RelatedLinks, { "heading": "Recordio on other platforms", "links": otherPlatforms("windows"), "variant": "white" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "source": "for-windows", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/for/windows.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/for/windows.astro";
const $$url = "/for/windows/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Windows,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
