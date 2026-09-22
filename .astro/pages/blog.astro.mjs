import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BMmOTL_5.mjs';
import { H as Header, F as Footer } from '../chunks/Footer_CETPJvN_.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_DNl1Z9iS.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog | Recordio", "description": "Insights, comparisons, and tips on screen recording from the Recordio team." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": [], "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-28 md:pt-36 pb-20"> <div class="max-w-3xl mx-auto px-6"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ name: "Blog" }], "class": "mb-8" })} <header class="mb-12 text-center"> <h1 class="text-3xl md:text-5xl font-bold text-text-highlighted leading-tight mb-4">
Blog
</h1> <p class="text-text-muted text-base">
Insights, comparisons, and tips on screen recording.
</p> </header> <div class="grid gap-6"> <!-- Article 1 --> <a href="/blog/best-screen-recorders-2026/" class="group block rounded-2xl border border-border bg-surface-overlay/40 hover:border-primary/40 transition-all duration-300 overflow-hidden"> <div class="p-6 md:p-8"> <p class="text-primary-highlighted text-xs font-semibold uppercase tracking-wider mb-2">
Comparison
</p> <h2 class="text-xl md:text-2xl font-bold text-text-highlighted group-hover:text-primary transition-colors mb-3">
Best Screen Recorders in 2026: An Honest Comparison
</h2> <p class="text-text-muted text-sm leading-relaxed mb-4">
How Recordio's DOM-aware auto zoom, 3D spotlight, and
                            shareable links stack up against Screen Studio and
                            FocuSee. An honest look at features, pricing, and
                            where each tool shines.
</p> <span class="text-text-muted text-xs">September 2026 · 10 min read</span> </div> </a> <!-- Article 2 --> <a href="/blog/best-loom-alternatives-2026/" class="group block rounded-2xl border border-border bg-surface-overlay/40 hover:border-primary/40 transition-all duration-300 overflow-hidden"> <div class="p-6 md:p-8"> <p class="text-primary-highlighted text-xs font-semibold uppercase tracking-wider mb-2">
Comparison
</p> <h2 class="text-xl md:text-2xl font-bold text-text-highlighted group-hover:text-primary transition-colors mb-3">
Best Loom Alternatives in 2026: Why Teams Are
                            Switching
</h2> <p class="text-text-muted text-sm leading-relaxed mb-4">
Loom pioneered async video, but in 2026 your
                            recordings can look a lot better for less per seat.
                            Studio-quality output, shareable links with view
                            analytics, and a free plan with no credit card.
</p> <span class="text-text-muted text-xs">September 2026 · 8 min read</span> </div> </a> </div> </div> </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/blog/index.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/blog/index.astro";
const $$url = "/blog/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
