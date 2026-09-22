import { c as createComponent, a as renderTemplate, u as unescapeHTML, r as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { S as SITE_URL, L as LINKEDIN_URL, a as SUPPORT_EMAIL, $ as $$BaseLayout, g as getCWSLink, C as CWS_LISTING_URL } from '../chunks/BaseLayout_BMmOTL_5.mjs';
import { H as Header, F as Footer } from '../chunks/Footer_CETPJvN_.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_DNl1Z9iS.mjs';
import { R as RelatedLinks } from '../chunks/RelatedLinks_DlwSg6Vn.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$About = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { label: "Why Recordio", href: "#why" },
    { label: "Founder", href: "#founder" },
    { label: "Contact", href: "#contact" }
  ];
  const aboutJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/about/#john-mikhail`,
        "name": "John Mikhail",
        "jobTitle": "Founder",
        "description": "Founder of Recordio. MIT graduate, previously at Google and Mixpanel.",
        "image": `${SITE_URL}/assets/john.webp`,
        "url": `${SITE_URL}/about/`,
        "email": SUPPORT_EMAIL,
        "sameAs": [LINKEDIN_URL],
        "alumniOf": { "@type": "CollegeOrUniversity", "name": "Massachusetts Institute of Technology" },
        "worksFor": { "@id": `${SITE_URL}/#organization` }
      },
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about/`,
        "url": `${SITE_URL}/about/`,
        "name": "About Recordio",
        "about": { "@id": `${SITE_URL}/#organization` },
        "mainEntity": { "@id": `${SITE_URL}/#organization` }
      }
    ]
  });
  const related = [
    { label: "Compare Recordio with other recorders", href: "/compare/", blurb: "Loom, Screen Studio, Tella, OBS, Camtasia and more, side by side." },
    { label: "Recordio on Mac, Windows, Linux and Chrome", href: "/for/", blurb: "How the extension and web app work on each platform." },
    { label: "Read the blog", href: "/blog/", blurb: "Comparisons, guides and notes on making better product walkthroughs." }
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script type="application/ld+json">', "<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Recordio and Founder John Mikhail | Recordio", "description": "Recordio is a cloud-based screen recorder for teams making product walkthroughs and demos. Meet the founder, learn why it exists and how to get in touch." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": navLinks, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-28 md:pt-36 pb-20"> <div class="max-w-3xl mx-auto px-6"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ name: "About" }], "class": "mb-8" })} <span class="eyebrow">About</span> <h1 class="section-title">A screen recorder built for teams that ship</h1> <p class="mt-6 text-lg text-text-main leading-relaxed">
Recordio is a cloud-based screen recorder for product teams. Record a walkthrough from
                Chrome, Edge or Brave, and the video comes out with auto zoom, spotlight and captions
                already applied. Share it with a link, or keep it in a team library where everyone can
                find it.
</p> <section id="why" class="prose mt-14"> <h2>Why Recordio exists</h2> <p>
Most screen recordings are made for one purpose: showing a teammate, a customer or a
                    prospect how something works. Product managers record feature walkthroughs. Support
                    teams record fixes. Founders record demos. Almost nobody wants to spend an hour in a
                    video editor afterwards.
</p> <p>
The tools available fell into two groups. Fast recorders like Loom made sharing easy
                    but the videos looked raw. Polished editors like Screen Studio produced beautiful
                    videos but tied you to one Mac and left the sharing and team side to you.
</p> <p>
Recordio closes that gap. Because it runs in the browser, it can read the page you
                    are recording and zoom to the exact input, card or menu you interact with. Because it
                    is cloud-based, every recording lands in a workspace your team can search, comment on
                    and share, on any operating system. The result is a video that looks edited, made in
                    the time it takes to record it.
</p> <p>
You can see how it compares with the tools you already know on the
<a href="/compare/">comparison pages</a>, or check the
<a href="/for/">platform pages</a> for Mac, Windows, Linux and Chrome.
</p> </section> <section id="founder" class="mt-14"> <h2 class="text-3xl font-bold text-text-highlighted mb-6">The founder</h2> <div class="flex flex-col sm:flex-row gap-6 items-start rounded-2xl border border-border bg-surface p-6"> <img src="/assets/john.webp" alt="John Mikhail, founder of Recordio" width="112" height="112" class="w-28 h-28 rounded-full object-cover border-2 border-border shrink-0"> <div class="prose"> <p class="!mt-0"> <strong>John Mikhail</strong> is the founder of Recordio. He studied at MIT and
                            worked on product and engineering at Google and Mixpanel before starting Recordio.
</p> <p>
He built the first version after recording the same product walkthrough for the
                            fourth time and still not liking how it looked. He writes the
<a href="/blog/">Recordio blog</a> and answers support email personally.
</p> <p class="!mb-0"> <a${addAttribute(LINKEDIN_URL, "href")} target="_blank" rel="noopener noreferrer">John on LinkedIn</a> </p> </div> </div> </section> <section id="contact" class="prose mt-14"> <h2>Contact</h2> <p>
Questions, feedback or a bug report: email
<a${addAttribute(`mailto:${SUPPORT_EMAIL}`, "href")}>${SUPPORT_EMAIL}</a>. Replies usually arrive within a
                    business day.
</p> <p>
Recordio is available on the
<a${addAttribute(getCWSLink("about"), "href")} target="_blank" rel="noopener noreferrer">Chrome Web Store</a>
and works on Chrome, Edge and Brave. A free account is all you need to start; see the
<a href="/#pricing">pricing section</a> for what Free and Pro include.
</p> <p class="text-sm">
Reviews and ratings are on the
<a${addAttribute(`${CWS_LISTING_URL}/reviews`, "href")} target="_blank" rel="noopener noreferrer">Chrome Web Store listing</a>.
</p> </section> </div> <div class="max-w-5xl mx-auto px-6 mt-20"> ${renderComponent($$result2, "RelatedLinks", RelatedLinks, { "client:visible": true, "heading": "Keep exploring", "links": related, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/RelatedLinks", "client:component-export": "default" })} </div> </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` }), unescapeHTML(aboutJsonLd));
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/about.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/about.astro";
const $$url = "/about/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
