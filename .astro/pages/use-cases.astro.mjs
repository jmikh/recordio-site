import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BMmOTL_5.mjs';
import { H as Header, F as Footer } from '../chunks/Footer_CETPJvN_.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_DNl1Z9iS.mjs';
import { R as RelatedLinks } from '../chunks/RelatedLinks_DlwSg6Vn.mjs';
import { F as FinalCTA } from '../chunks/FinalCTA_Djpz3v4A.mjs';
import { U as USE_CASES, a as useCaseHref } from '../chunks/use-cases_Hrx8MxSF.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { label: "Use cases", href: "#use-cases" },
    { label: "Features", href: "/#feature-videos" },
    { label: "Pricing", href: "/#pricing" }
  ];
  const related = [
    { label: "Compare Recordio with other recorders", href: "/compare/", blurb: "Loom, Screen Studio, OBS, Camtasia and more, with honest trade-offs." },
    { label: "Screen recorder for every platform", href: "/for/", blurb: "Mac, Windows, Linux and Chrome, one extension." },
    { label: "Best Loom alternatives in 2026", href: "/blog/best-loom-alternatives-2026/", blurb: "What Loom costs per seat and what teams switch to." }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Screen Recording Use Cases for Product Teams | Recordio", "description": "Guides for product walkthroughs, software demos, customer onboarding, bug reports and release updates, each with a template and the steps to record it." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": navLinks, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> <section class="relative overflow-hidden" style="background-color: var(--color-section-purple);"> <div class="absolute inset-0 opacity-40 pointer-events-none"> <div class="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl"></div> <div class="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"></div> </div> <div class="relative z-10 max-w-3xl mx-auto px-6 pt-36 pb-16"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "class": "mb-8 hero-entrance hero-entrance-delay-1", "items": [{ name: "Use cases" }] })} <span class="eyebrow hero-entrance hero-entrance-delay-1">Use cases</span> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-text-highlighted leading-tight mt-4 mb-6 hero-entrance hero-entrance-delay-1">
Screen recording use cases for product teams
</h1> <p class="text-lg md:text-xl text-text-muted leading-relaxed mb-4 hero-entrance hero-entrance-delay-2">
Most teams record the same five kinds of video over and over: a walkthrough of a feature, a demo
                    for a prospect, an onboarding step for a new customer, a bug for an engineer and an update for a
                    release. Each one has a different audience and a different definition of good.
</p> <p class="text-lg md:text-xl text-text-muted leading-relaxed hero-entrance hero-entrance-delay-2">
These guides cover what a good one looks like, how to record it in Recordio with auto zoom,
                    spotlight, AutoCut, captions and share links, and a script or checklist you can copy.
</p> </div> </section> <section id="use-cases" class="section-panel-white py-20 px-6 scroll-mt-28" aria-labelledby="use-cases-heading"> <div class="max-w-5xl mx-auto"> <div class="section-head section-head--left mb-10"> <span class="eyebrow">Pick your job</span> <h2 id="use-cases-heading" class="section-title">Five guides, one recorder</h2> </div> <ul class="grid gap-4 sm:grid-cols-2"> ${USE_CASES.map((u) => renderTemplate`<li> <a${addAttribute(useCaseHref(u.slug), "href")} class="block h-full rounded-2xl border border-border bg-surface p-6 hover:border-primary/40 transition-colors"> <span class="block text-xl font-bold text-text-highlighted">${u.label}</span> <span class="block mt-2 text-text-main leading-relaxed">${u.blurb}</span> <span class="block mt-4 text-sm font-semibold text-primary">Read the guide</span> </a> </li>`)} </ul> </div> </section> <section class="section-panel py-20 px-6" aria-labelledby="why-heading"> <div class="prose max-w-3xl mx-auto"> <h2 id="why-heading">Why the same recorder works for all five</h2> <p>
Every one of these videos is recorded inside a web app, and that is the case Recordio is built
                    for. The extension reads the structure of the page you are recording, so auto zoom frames the
                    whole input, menu or card you interact with instead of chasing the cursor, and auto spotlight
                    lifts that element forward while the rest dims. Smart AutoCut removes the pauses where you were
                    thinking and keeps the ones where you were typing. On Pro, AI captions arrive with word-level
                    timing, and every video gets a share link with view counts and watch time.
</p> <p>
Because it runs in <a href="/for/chrome/">Chrome, Edge and Brave</a>, the whole team uses one
                    recorder on <a href="/for/mac/">Mac</a>, <a href="/for/windows/">Windows</a> and
<a href="/for/linux/">Linux</a>, and every recording lands in one team library. The free plan
                    covers up to 5 active projects with 1080p downloads; Pro adds 4K, captions, share links and the
                    team library at $12 per seat per month billed annually. If you are weighing it against a tool you
                    already use, the <a href="/compare/">comparison pages</a> list where each one wins.
</p> </div> </section> ${renderComponent($$result2, "RelatedLinks", RelatedLinks, { "client:visible": true, "heading": "Keep exploring", "links": related, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/RelatedLinks", "client:component-export": "default" })} ${renderComponent($$result2, "FinalCTA", FinalCTA, { "client:visible": true, "source": "use-cases-hub", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FinalCTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/use-cases/index.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/use-cases/index.astro";
const $$url = "/use-cases/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
