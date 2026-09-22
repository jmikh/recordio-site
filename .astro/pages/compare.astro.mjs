import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BMmOTL_5.mjs';
import { B as BLOG_POSTS, C as COMPARE_GROUPS, H as Header, a as COMPARE_PAGES, b as compareHref, F as Footer } from '../chunks/Footer_CETPJvN_.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_DNl1Z9iS.mjs';
import { R as RelatedLinks } from '../chunks/RelatedLinks_DlwSg6Vn.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const furtherReading = [
    ...BLOG_POSTS.map((p) => ({ label: p.label, href: p.href, blurb: p.blurb })),
    // TODO (Plan 02): the four "Best X alternatives" listicles go here once published.
    { label: "Screen recorder for Mac, Windows, Linux and Chromebook", href: "/for/", blurb: "The same recorder and team library on every operating system." }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Screen Recorder Alternatives: Loom, Bandicam, OBS | Recordio", "description": "Side-by-side comparisons of Recordio with Loom, Bandicam, OBS, Camtasia, Screen Studio, Tella, Clueso and more. Features, pricing and who each tool suits." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": [], "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> <section class="relative overflow-hidden" style="background-color: var(--color-section-purple);"> <div class="absolute inset-0 opacity-40 pointer-events-none"> <div class="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl"></div> <div class="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"></div> </div> <div class="relative z-10 max-w-4xl mx-auto px-6 pt-32 md:pt-36 pb-16"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ name: "Compare" }], "class": "mb-8 hero-entrance hero-entrance-delay-1" })} <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-text-highlighted leading-tight mb-6 hero-entrance hero-entrance-delay-1">
Recordio compared with other screen recorders
</h1> <div class="flex flex-col gap-4 text-lg text-text-muted leading-relaxed max-w-3xl hero-entrance hero-entrance-delay-2"> <p>
These comparisons are written by the Recordio team, so read them knowing where we stand. Each page says plainly where the other tool wins, whether that is a timeline editor, game capture, offline work or a much bigger install base. Then it shows where Recordio is different: auto zoom that reads the page you are recording, automatic spotlight, Smart AutoCut, AI captions, share links with view analytics and a team library.
</p> <p>
Prices are checked against each vendor's own pricing page during 2026 and quoted per seat, with the cost of a five-person team written out, so you can compare like for like. Recordio has a free plan with 1080p downloads and up to five active projects. Pro is $12 per seat per month billed annually, or $15 monthly, and people who only watch never need a seat.
</p> </div> </div> </section> ${COMPARE_GROUPS.map((group, i) => {
    const pages = COMPARE_PAGES.filter((c) => c.group === group.key);
    const panel = i % 2 === 0 ? "section-panel-white" : "section-panel";
    return renderTemplate`<section${addAttribute(`group-${group.key}`, "aria-labelledby")}${addAttribute(`${panel} py-16 px-6`, "class")}> <div class="max-w-4xl mx-auto"> <h2${addAttribute(`group-${group.key}`, "id")} class="text-2xl md:text-3xl font-bold text-text-highlighted">${group.title}</h2> <p class="mt-3 text-text-muted leading-relaxed max-w-3xl">${group.lead}</p> <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${pages.map((c) => renderTemplate`<li> <a${addAttribute(compareHref(c.slug), "href")} class="block h-full rounded-2xl border border-border bg-surface-overlay/40 hover:border-primary/40 transition-colors p-5"> <span class="block font-semibold text-text-highlighted">Recordio vs ${c.name}</span> <span class="block mt-1 text-sm text-text-muted">${c.blurb}</span> </a> </li>`)} </ul> </div> </section>`;
  })} <section class="section-panel-white py-16 px-6"> <div class="max-w-4xl mx-auto"> <h2 class="text-2xl md:text-3xl font-bold text-text-highlighted">How to read these pages</h2> <div class="mt-4 flex flex-col gap-4 text-text-muted leading-relaxed max-w-3xl"> <p>
Every comparison follows the same shape. A short verdict up top, a "choose them if, choose Recordio if" box, a feature table, a section on what the other tool does well, and the pricing arithmetic for a small team. If you only have a minute, read the verdict and the pricing table.
</p> <p>
Recordio is a Chrome extension that also runs in Edge and Brave, so it works on <a href="/for/mac/" class="text-primary font-semibold hover:underline underline-offset-4">Mac</a>, <a href="/for/windows/" class="text-primary font-semibold hover:underline underline-offset-4">Windows</a>, <a href="/for/linux/" class="text-primary font-semibold hover:underline underline-offset-4">Linux</a> and <a href="/for/chromebook/" class="text-primary font-semibold hover:underline underline-offset-4">Chromebook</a>. Capture is of a browser tab, and an account is always required, free or Pro. If you need to record a native app, a game or a terminal, the desktop tools in the list above will suit you better, and the pages say so.
</p> </div> </div> </section> ${renderComponent($$result2, "RelatedLinks", RelatedLinks, { "heading": "Further reading", "links": furtherReading, "variant": "purple" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "source": "compare", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/index.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/index.astro";
const $$url = "/compare/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
