import { d as createAstro, c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot } from './astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout, g as getCWSLink, c as getAppLink, V as VIDEOS_BASE } from './BaseLayout_B_QZKqTv.mjs';
import { H as Header } from './Header_BUQfr5uo.mjs';
import { F as Footer } from './Footer_BaI97hcR.mjs';
import { F as FAQ } from './FAQ_D9MPdPjd.mjs';
import { F as FinalCTA } from './FinalCTA_CF67vwJC.mjs';
import { R as RelatedLinks } from './RelatedLinks_DlwSg6Vn.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_D9D60H77.mjs';

const $$Astro = createAstro("https://recordio.io");
const $$UseCaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UseCaseLayout;
  const {
    slug,
    title,
    description,
    name,
    eyebrow = "Use case",
    h1,
    intro,
    traitsHeading,
    traits,
    steps,
    example,
    template,
    roles,
    faq,
    related
  } = Astro2.props;
  const source = `use-case-${slug}`;
  const hasProse = Astro2.slots.has("default");
  const navLinks = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Template", href: "#template" },
    { label: "FAQ", href: "#faq" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "faqSchema": true, "faqItems": faq }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": navLinks, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main>  <section class="relative overflow-hidden" style="background-color: var(--color-section-purple);"> <div class="absolute inset-0 opacity-40 pointer-events-none"> <div class="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl"></div> <div class="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"></div> </div> <div class="relative z-10 max-w-3xl mx-auto px-6 pt-36 pb-20"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "class": "mb-8 hero-entrance hero-entrance-delay-1", "items": [{ name: "Use cases", href: "/use-cases/" }, { name }] })} <span class="eyebrow hero-entrance hero-entrance-delay-1">${eyebrow}</span> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-text-highlighted leading-tight mt-4 mb-6 hero-entrance hero-entrance-delay-1"> ${h1} </h1> ${intro.map((p) => renderTemplate`<p class="text-lg md:text-xl text-text-muted leading-relaxed mb-4 hero-entrance hero-entrance-delay-2">${p}</p>`)} <div class="mt-8 flex flex-col sm:flex-row gap-3 hero-entrance hero-entrance-delay-3"> <a${addAttribute(getCWSLink(source), "href")} target="_blank" rel="noopener noreferrer" class="btn-primary btn-lg"${addAttribute(source, "data-install-source")}> <img src="/assets/chrome-store.svg" alt="" class="w-5 h-5">
Add to Chrome, it's free
</a> <a${addAttribute(getAppLink(source), "href")} class="btn-secondary btn-lg"${addAttribute(source, "data-open-app-source")}>
Open the web app
</a> </div> <p class="mt-4 text-sm text-text-muted hero-entrance hero-entrance-delay-3">
Free plan included. Works in Chrome, Edge and Brave on Mac, Windows, Linux and ChromeOS.
</p> </div> </section>  ${hasProse && renderTemplate`<section class="section-panel-white py-16 px-6"> <div class="prose max-w-3xl mx-auto"> ${renderSlot($$result2, $$slots["default"])} </div> </section>`}  <section class="section-panel py-20 px-6" aria-labelledby="traits-heading"> <div class="max-w-5xl mx-auto"> <div class="section-head section-head--left mb-10"> <span class="eyebrow">What good looks like</span> <h2 id="traits-heading" class="section-title">${traitsHeading}</h2> </div> <ol class="grid gap-4 sm:grid-cols-2"> ${traits.map((t, i) => renderTemplate`<li class="rounded-2xl border border-border bg-white/70 p-6"> <span class="text-xs font-bold uppercase tracking-[0.12em] text-primary">${String(i + 1).padStart(2, "0")}</span> <h3 class="mt-2 text-lg font-bold text-text-highlighted">${t.title}</h3> <p class="mt-2 text-text-main leading-relaxed">${t.body}</p> </li>`)} </ol> </div> </section>  <section id="how-it-works" class="section-panel-white py-20 px-6 scroll-mt-28" aria-labelledby="steps-heading"> <div class="max-w-5xl mx-auto"> <div class="section-head section-head--left mb-12"> <span class="eyebrow">How it works</span> <h2 id="steps-heading" class="section-title">How to record one in Recordio</h2> <p class="section-subtitle">
Four steps. Most of the work happens while you record, not after.
</p> </div> <ol class="grid gap-6 md:grid-cols-2"> ${steps.map((s, i) => renderTemplate`<li class="rounded-2xl border border-border bg-surface p-6 flex flex-col"> <div class="flex items-center gap-3"> <span class="step-number !mb-0">${i + 1}</span> <span class="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">${s.feature}</span> </div> <h3 class="mt-4 text-xl font-bold text-text-highlighted">${s.title}</h3> <p class="mt-2 text-text-main leading-relaxed">${s.body}</p> </li>`)} </ol> </div> </section>  <section class="section-panel py-20 px-6" aria-labelledby="example-heading"> <div class="max-w-4xl mx-auto"> <div class="section-head mb-10"> <span class="eyebrow">Example</span> <h2 id="example-heading" class="section-title">What it looks like</h2> </div> <figure> <div class="before-after-video before-after-video--after"> <video muted loop playsinline autoplay preload="metadata" class="w-full h-auto block"> <source${addAttribute(`${VIDEOS_BASE}/${example.video}.webm`, "src")} type="video/webm"> <source${addAttribute(`${VIDEOS_BASE}/${example.video}.mp4`, "src")} type="video/mp4"> </video> </div> <figcaption class="mt-4 text-center text-sm text-text-muted">${example.caption}</figcaption> </figure> </div> </section>  <section id="template" class="section-panel-white py-20 px-6 scroll-mt-28" aria-labelledby="template-heading"> <div class="max-w-3xl mx-auto"> <div class="section-head section-head--left mb-8"> <span class="eyebrow">Copy and reuse</span> <h2 id="template-heading" class="section-title">${template.heading}</h2> <p class="section-subtitle">${template.intro}</p> </div> <div class="relative rounded-2xl border border-border bg-surface-raised p-6 pr-24"> <button type="button" class="btn-secondary !px-3.5 !py-2 text-sm absolute top-4 right-4" data-copy-target="use-case-template">
Copy
</button> <pre id="use-case-template" class="font-mono text-sm leading-relaxed text-text-main whitespace-pre-wrap">${template.lines.join("\n")}</pre> </div> </div> </section>  <section class="section-panel py-20 px-6" aria-labelledby="roles-heading"> <div class="max-w-5xl mx-auto"> <div class="section-head section-head--left mb-10"> <span class="eyebrow">Who this is for</span> <h2 id="roles-heading" class="section-title">Teams that record these every week</h2> </div> <ul class="grid gap-4 md:grid-cols-3"> ${roles.map((r) => renderTemplate`<li class="rounded-2xl border border-border bg-white/70 p-6"> <h3 class="text-lg font-bold text-text-highlighted">${r.role}</h3> <p class="mt-2 text-text-main leading-relaxed">${r.body}</p> </li>`)} </ul> </div> </section> ${renderComponent($$result2, "FAQ", FAQ, { "client:visible": true, "items": faq, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FAQ", "client:component-export": "default" })} ${renderComponent($$result2, "RelatedLinks", RelatedLinks, { "client:visible": true, "heading": "Related", "links": related, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/RelatedLinks", "client:component-export": "default" })} ${renderComponent($$result2, "FinalCTA", FinalCTA, { "client:visible": true, "source": source, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FinalCTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })} ${renderScript($$result, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/layouts/UseCaseLayout.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/layouts/UseCaseLayout.astro", void 0);

export { $$UseCaseLayout as $ };
