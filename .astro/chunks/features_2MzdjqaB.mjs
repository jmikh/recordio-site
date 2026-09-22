import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, e as renderScript, a as renderTemplate, r as renderComponent } from './astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { g as getCWSLink, $ as $$BaseLayout } from './BaseLayout_42pqqQrf.mjs';
import { t as trackInstallExtension, H as Header } from './Header_4On9n2CP.mjs';
import { F as Footer } from './Footer_CJe6VyHt.mjs';
import { F as FAQ } from './FAQ_B0mmyfuW.mjs';
import { F as FinalCTA } from './FinalCTA_Djwhch1-.mjs';
import { $ as $$Breadcrumbs, R as RelatedLinks } from './RelatedLinks_XL6mu4E6.mjs';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';

const $$Astro$1 = createAstro("https://recordio.io");
const $$FeatureStep = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeatureStep;
  const { index, title, body, media } = Astro2.props;
  const flipped = index % 2 === 1;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`step-section ${flipped ? "lg:flex-row-reverse" : ""}`, "class")}> <div class="step-text"> <span class="step-number" aria-hidden="true">${index + 1}</span> <h3 class="step-title">${title}</h3> <div class="text-text-muted leading-relaxed space-y-3">${unescapeHTML(body)}</div> </div> ${media && renderTemplate`<div class="step-visual"> <div class="rounded-2xl overflow-hidden border border-border bg-surface-raised shadow-xl aspect-video"> ${media.video ? renderTemplate`<video data-feature-video muted loop playsinline preload="metadata"${addAttribute(media.alt, "aria-label")} class="block w-full h-full object-cover"> <source${addAttribute(`/videos/${media.video}`, "src")} type="video/webm"> <source${addAttribute(`/videos/${media.video.replace(".webm", ".mp4")}`, "src")} type="video/mp4"> </video>` : renderTemplate`<img${addAttribute(media.image, "src")}${addAttribute(media.alt, "alt")} loading="lazy" class="block w-full h-full object-cover">`} </div> </div>`} </article> ${renderScript($$result, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/feature/FeatureStep.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/feature/FeatureStep.astro", void 0);

const InstallCTA = ({ source, label = "Add to Chrome, it's free", className = "btn-primary text-lg px-8 py-4" }) => /* @__PURE__ */ jsxs(
  "a",
  {
    href: getCWSLink(source),
    target: "_blank",
    rel: "noopener noreferrer",
    className,
    onClick: () => trackInstallExtension(source),
    children: [
      /* @__PURE__ */ jsx("img", { src: "/assets/chrome-store.svg", alt: "", className: "w-5 h-5" }),
      label
    ]
  }
);

const $$Astro = createAstro("https://recordio.io");
const $$FeatureLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureLayout;
  const {
    slug,
    name,
    title,
    description,
    eyebrow,
    h1,
    intro,
    plan,
    planNote,
    steps,
    useCases,
    comparedWith,
    faq,
    related
  } = Astro2.props;
  const source = `feature-${slug}`;
  const hasMedia = steps.some((s) => s.media);
  const navLinks = [
    { label: "All features", href: "/features/" },
    { label: "How it works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "faqSchema": true, "faqItems": faq }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": navLinks, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> <section class="relative overflow-hidden" style="background-color: var(--color-section-purple);"> <div class="absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true"> <div class="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl"></div> <div class="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"></div> </div> <div class="relative z-10 max-w-4xl mx-auto px-6 pt-32 md:pt-36 pb-16 md:pb-20"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ name: "Features", href: "/features/" }, { name }], "class": "mb-8 hero-entrance hero-entrance-delay-1" })} <span class="eyebrow hero-entrance hero-entrance-delay-1">${eyebrow}</span> <h1 class="mt-4 text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-text-highlighted leading-tight hero-entrance hero-entrance-delay-1"> ${h1} </h1> <p class="mt-6 text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed hero-entrance hero-entrance-delay-2"> ${intro} </p> <div class="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 hero-entrance hero-entrance-delay-2"> ${renderComponent($$result2, "InstallCTA", InstallCTA, { "client:load": true, "source": source, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/feature/InstallCTA", "client:component-export": "default" })} <span class="text-sm text-text-muted"> ${plan === "Free" ? "Included in the Free plan." : "Pro feature. Free plan to start."} ${" "}<a href="/#pricing" class="text-primary font-semibold hover:underline underline-offset-4">See pricing</a> </span> </div> </div> </section> <section id="how-it-works" class="section-panel-white py-20 md:py-24"> <div class="section-head"> <span class="eyebrow">How it works</span> <h2 class="section-title">What Recordio does for you</h2> </div> ${hasMedia ? renderTemplate`<div class="flex flex-col gap-4"> ${steps.map((s, i) => renderTemplate`${renderComponent($$result2, "FeatureStep", $$FeatureStep, { "index": i, "title": s.title, "body": s.body, "media": s.media })}`)} </div>` : renderTemplate`<div class="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-3"> ${steps.map((s, i) => renderTemplate`<article class="rounded-2xl border border-border bg-surface-overlay/40 p-7"> <span class="step-number" aria-hidden="true">${i + 1}</span> <h3 class="text-xl font-bold text-text-highlighted mb-3">${s.title}</h3> <div class="text-text-muted leading-relaxed space-y-3">${unescapeHTML(s.body)}</div> </article>`)} </div>`} </section> <section class="section-panel py-20 md:py-24"> <div class="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-[1.4fr_1fr]"> <div> <span class="eyebrow">Where it helps</span> <h2 class="text-3xl font-bold text-text-highlighted mt-3 mb-6">${useCases.heading}</h2> <ul class="space-y-4"> ${useCases.items.map((item) => renderTemplate`<li class="flex gap-3 text-text-main leading-relaxed"> <span class="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" aria-hidden="true"></span> <span>${unescapeHTML(item)}</span> </li>`)} </ul> </div> <aside class="rounded-2xl border border-border bg-surface-overlay/40 p-7 self-start"> <span class="eyebrow">Which plan</span> <p class="mt-3 text-2xl font-bold text-text-highlighted">${plan}</p> <div class="mt-3 text-text-muted leading-relaxed">${unescapeHTML(planNote)}</div> <a href="/#pricing" class="inline-block mt-5 text-primary font-semibold hover:underline underline-offset-4">Compare Free and Pro</a> </aside> </div> </section> <section class="section-panel-white py-20 md:py-24"> <div class="max-w-3xl mx-auto px-6"> <span class="eyebrow">Compared with</span> <h2 class="text-3xl font-bold text-text-highlighted mt-3 mb-6">How other recorders handle this</h2> <div class="prose">${unescapeHTML(comparedWith)}</div> <p class="mt-2 text-sm text-text-muted">
Every comparison on this site says where the other tool wins. <a href="/compare/" class="text-primary font-semibold hover:underline underline-offset-4">See all comparisons</a>.
</p> </div> </section> ${renderComponent($$result2, "FAQ", FAQ, { "client:visible": true, "items": faq, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FAQ", "client:component-export": "default" })} ${renderComponent($$result2, "RelatedLinks", RelatedLinks, { "client:visible": true, "heading": "Related", "links": related, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/RelatedLinks", "client:component-export": "default" })} ${renderComponent($$result2, "FinalCTA", FinalCTA, { "client:visible": true, "source": `${source}-cta`, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FinalCTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/layouts/FeatureLayout.astro", void 0);

const featurePages = [
  {
    slug: "auto-zoom",
    name: "Auto zoom",
    href: "/features/auto-zoom/",
    blurb: "Zooms to the input, card or menu you interact with. Every zoom is an editable keyframe.",
    plan: "Free"
  },
  {
    slug: "ai-captions",
    name: "AI captions",
    href: "/features/ai-captions/",
    blurb: "Word-level captions from your voiceover. Fix a word in place or delete a line to cut the clip.",
    plan: "Pro"
  },
  {
    slug: "blur",
    name: "Blur sensitive info",
    href: "/features/blur/",
    blurb: "Blur any region of a recording or screenshot before you share it outside the team.",
    plan: "Free"
  },
  {
    slug: "share-links",
    name: "Share links with analytics",
    href: "/features/share-links/",
    blurb: "Send a link instead of a file and see view counts and watch time for every video.",
    plan: "Pro"
  },
  {
    slug: "team-library",
    name: "Team library",
    href: "/features/team-library/",
    blurb: "One workspace for every walkthrough, with roles and unlimited viewer seats.",
    plan: "Pro"
  }
];
const getFeature = (slug) => {
  const f = featurePages.find((p) => p.slug === slug);
  if (!f) throw new Error(`Unknown feature slug: ${slug}`);
  return f;
};

export { $$FeatureLayout as $, getFeature as g };
