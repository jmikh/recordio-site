import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BMmOTL_5.mjs';
import { c as compareLink, P as PLATFORM_PAGES, H as Header, p as platformHref, F as Footer } from '../chunks/Footer_CETPJvN_.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_DNl1Z9iS.mjs';
import { R as RelatedLinks } from '../chunks/RelatedLinks_DlwSg6Vn.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const related = [
    compareLink("screen-studio"),
    compareLink("obs"),
    compareLink("screencastify"),
    { label: "All comparisons", href: "/compare/", blurb: "Recordio compared with ten other screen recorders, grouped by type." }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Screen Recorder for Mac, Windows, Linux, Chrome | Recordio", "description": "Recordio runs in Chrome, Edge and Brave, so one team screen recorder works on Mac, Windows, Linux and ChromeOS. Pick your platform for setup notes." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": [], "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> <section class="relative overflow-hidden" style="background-color: var(--color-section-purple);"> <div class="absolute inset-0 opacity-40 pointer-events-none"> <div class="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl"></div> <div class="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"></div> </div> <div class="relative z-10 max-w-4xl mx-auto px-6 pt-32 md:pt-36 pb-16"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ name: "Platforms" }], "class": "mb-8 hero-entrance hero-entrance-delay-1" })} <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-text-highlighted leading-tight mb-6 hero-entrance hero-entrance-delay-1">
Screen recorder for Mac, Windows, Linux and Chromebook
</h1> <div class="flex flex-col gap-4 text-lg text-text-muted leading-relaxed max-w-3xl hero-entrance hero-entrance-delay-2"> <p>
Recordio is one recorder and one team library across every operating system, because it runs as an extension in Chrome, Edge and Brave rather than as a native app. Install it once from the Chrome Web Store, sign in, and the same auto zoom, spotlight, captions and share links work on a MacBook, a Windows PC, an Ubuntu laptop or a school Chromebook.
</p> <p>
Recordings from every platform land in the same workspace. A product manager on a Mac, an engineer on Linux and a support agent on a Chromebook share one library and send links that look identical. Pick your platform below for setup notes, what to expect from browser capture on that system, and the questions we get asked most.
</p> </div> </div> </section> <section aria-labelledby="platform-list" class="section-panel-white py-16 px-6"> <div class="max-w-5xl mx-auto"> <h2 id="platform-list" class="text-2xl md:text-3xl font-bold text-text-highlighted">Pick your platform</h2> <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${PLATFORM_PAGES.map((p) => renderTemplate`<li> <a${addAttribute(platformHref(p.slug), "href")} class="block h-full rounded-2xl border border-border bg-surface-overlay/40 hover:border-primary/40 transition-colors p-6"> <span class="block text-lg font-semibold text-text-highlighted">${p.title}</span> <span class="block mt-2 text-sm text-text-muted leading-relaxed">${p.summary}</span> </a> </li>`)} </ul> </div> </section> <section class="section-panel py-16 px-6"> <div class="max-w-4xl mx-auto grid gap-10 md:grid-cols-2"> <div> <h2 class="text-2xl font-bold text-text-highlighted">The same everywhere</h2> <ul class="mt-4 space-y-2 text-text-muted leading-relaxed list-disc pl-5"> <li>Tab capture with auto zoom that reads the page, and every zoom an editable keyframe.</li> <li>Auto spotlight, Smart AutoCut, blur, webcam bubble, device frames and the simplified toolbar.</li> <li>The editor at app.recordio.io, 1080p downloads on Free, 4K and cloud rendering on Pro.</li> <li>Share links with view analytics and a shared team library on Pro, with unlimited viewer seats.</li> </ul> </div> <div> <h2 class="text-2xl font-bold text-text-highlighted">What differs by platform</h2> <ul class="mt-4 space-y-2 text-text-muted leading-relaxed list-disc pl-5"> <li><strong class="text-text-highlighted">Mac</strong> has polished native recorders too, so the Mac page is where the <a href="/compare/screen-studio/" class="text-primary font-semibold hover:underline underline-offset-4">Screen Studio comparison</a> matters most.</li> <li><strong class="text-text-highlighted">Windows</strong> is where most desktop capture tools live. Recordio skips the install and the export step.</li> <li><strong class="text-text-highlighted">Linux</strong> has few recorders with auto zoom at all, and Wayland breaks many of the ones that exist. The browser handles capture on both Wayland and X11.</li> <li><strong class="text-text-highlighted">Chromebook</strong> devices are often managed. The Chromebook page covers the admin allow-list and why cloud rendering helps on small machines.</li> </ul> </div> </div> </section> ${renderComponent($$result2, "RelatedLinks", RelatedLinks, { "heading": "Related comparisons", "links": related, "variant": "white" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "source": "for", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/for/index.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/for/index.astro";
const $$url = "/for/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
