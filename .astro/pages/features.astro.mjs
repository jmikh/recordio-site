import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BMmOTL_5.mjs';
import { H as Header, F as Footer } from '../chunks/Footer_CETPJvN_.mjs';
import { F as FinalCTA } from '../chunks/FinalCTA_Djpz3v4A.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_DNl1Z9iS.mjs';
import { f as featurePages, I as InstallCTA } from '../chunks/features_CbJNs_cj.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { label: "Compare", href: "/compare/" },
    { label: "Platforms", href: "/for/" },
    { label: "Pricing", href: "/#pricing" }
  ];
  const alsoIncluded = [
    { name: "Auto spotlight", text: "Dims the page and lifts the element you interact with." },
    { name: "Smart AutoCut", text: "Removes silence but keeps the pauses while you type or click." },
    { name: "Simplified toolbar", text: "Hides bookmarks, tabs and extensions from the recording." },
    { name: "Webcam bubble", text: "Your camera in the corner, with layouts that adapt to the page." },
    { name: "Device frames", text: "MacBook Pro and Air frames around the recording." },
    { name: "Backgrounds and music", text: "A curated library, gradients or your own brand image." },
    { name: "Screenshots", text: "Capture the visible area, full page or a region, then annotate." },
    { name: "Exports up to 4K", text: "1080p on Free. 2K and 4K with cloud rendering on Pro." }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Screen Recording Features for Product Demos | Recordio", "description": "Auto zoom, AI captions, blur, share links with analytics and a team library. See what Recordio applies to every walkthrough and which plan includes it." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": navLinks, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> <section class="relative overflow-hidden" style="background-color: var(--color-section-purple);"> <div class="absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true"> <div class="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl"></div> <div class="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"></div> </div> <div class="relative z-10 max-w-4xl mx-auto px-6 pt-32 md:pt-36 pb-16 md:pb-20"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ name: "Features" }], "class": "mb-8 hero-entrance hero-entrance-delay-1" })} <span class="eyebrow hero-entrance hero-entrance-delay-1">Features</span> <h1 class="mt-4 text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-text-highlighted leading-tight hero-entrance hero-entrance-delay-1">
Screen recording features built for product walkthroughs
</h1> <p class="mt-6 text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed hero-entrance hero-entrance-delay-2">
Recordio is a cloud-based screen recorder for teams. You record in Chrome, Edge or Brave, and the polish is applied for you: the zoom finds the element you clicked, the spotlight lifts it, the silence is cut and the captions are timed to the word. Then you share a link instead of a file.
</p> <p class="mt-4 text-text-muted max-w-2xl leading-relaxed hero-entrance hero-entrance-delay-2">
The pages below explain how each feature works, what it is good for, which plan includes it and how other recorders handle the same job. Start with a free account, no card needed.
</p> <div class="mt-8 hero-entrance hero-entrance-delay-2"> ${renderComponent($$result2, "InstallCTA", InstallCTA, { "client:load": true, "source": "features-hub", "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/feature/InstallCTA", "client:component-export": "default" })} </div> </div> </section> <section class="section-panel-white py-20 md:py-24" aria-labelledby="feature-list-heading"> <div class="max-w-6xl mx-auto px-6"> <div class="section-head section-head--left mb-10"> <span class="eyebrow">Feature guides</span> <h2 id="feature-list-heading" class="section-title">Five features, one page each</h2> </div> <ul class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> ${featurePages.map((f) => renderTemplate`<li> <a${addAttribute(f.href, "href")} class="block h-full rounded-2xl border border-border bg-surface-overlay/40 hover:border-primary/40 transition-colors p-7"> <span class="inline-block text-xs font-bold uppercase tracking-[0.12em] text-primary mb-3">${f.plan === "Free" ? "Free plan" : "Pro"}</span> <span class="block text-xl font-bold text-text-highlighted">${f.name}</span> <span class="block mt-2 text-text-muted leading-relaxed">${f.blurb}</span> <span class="block mt-4 text-sm font-semibold text-primary">Read the guide</span> </a> </li>`)} <li> <a href="/#feature-videos" class="flex flex-col justify-center h-full rounded-2xl border border-dashed border-border hover:border-primary/40 transition-colors p-7"> <span class="block text-xl font-bold text-text-highlighted">See them in motion</span> <span class="block mt-2 text-text-muted leading-relaxed">Short clips of auto zoom, spotlight, captions and overlays on the homepage.</span> </a> </li> </ul> </div> </section> <section class="section-panel py-20 md:py-24" aria-labelledby="also-heading"> <div class="max-w-6xl mx-auto px-6"> <div class="section-head section-head--left mb-10"> <span class="eyebrow">Also included</span> <h2 id="also-heading" class="section-title">Applied to every recording</h2> <p class="section-subtitle mt-4">
These do not have a page of their own yet. They are on by default and you can switch any of them off per recording.
</p> </div> <dl class="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4"> ${alsoIncluded.map((f) => renderTemplate`<div> <dt class="font-semibold text-text-highlighted">${f.name}</dt> <dd class="mt-1 text-sm text-text-muted leading-relaxed">${f.text}</dd> </div>`)} </dl> </div> </section> <section class="section-panel-white py-20 md:py-24"> <div class="max-w-3xl mx-auto px-6 prose"> <h2>Which plan do you need?</h2> <p>
The Free plan is $0 with no card. It includes auto zoom, auto spotlight, Smart AutoCut, the simplified toolbar, blur and overlays, and 1080p downloads, with up to 5 active projects that expire after 7 days. Rendering happens in your browser tab.
</p> <p>
Pro is $12 per seat per month billed annually, or $15 monthly. It adds AI captions, share links with view analytics, the team library with roles and unlimited viewer seats, 2K and 4K exports, cloud rendering, unlimited projects with no expiry, and 30-day restore for deleted videos. <a href="/#pricing">See the full pricing table</a>.
</p> <h2>Where to go next</h2> <p>
If you are weighing Recordio against a tool you already use, the <a href="/compare/">comparisons</a> cover Loom, Screen Studio, Tella, Camtasia, OBS and six others, and each one says where the other tool wins. If you want setup notes for your operating system, the <a href="/for/">platform pages</a> cover Mac, Windows, Linux and Chrome. For a longer read on how the category is changing, see <a href="/blog/best-screen-recorders-2026/">the best screen recorders in 2026</a>.
</p> </div> </section> ${renderComponent($$result2, "FinalCTA", FinalCTA, { "client:visible": true, "source": "features-hub-cta", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FinalCTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/features/index.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/features/index.astro";
const $$url = "/features/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
