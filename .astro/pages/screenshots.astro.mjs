import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { g as getCWSLink, $ as $$BaseLayout } from '../chunks/BaseLayout_BMmOTL_5.mjs';
import { H as Header, F as Footer } from '../chunks/Footer_CETPJvN_.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_DNl1Z9iS.mjs';
import { F as FAQ } from '../chunks/FAQ_DdSn-1-7.mjs';
import { R as RelatedLinks } from '../chunks/RelatedLinks_DlwSg6Vn.mjs';
export { renderers } from '../renderers.mjs';

const $$Screenshots = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { label: "Capture", href: "#capture" },
    { label: "Annotate", href: "#annotate" },
    { label: "Compare", href: "#comparison" },
    { label: "FAQ", href: "#faq" }
  ];
  const cwsHero = getCWSLink("screenshots");
  const cwsBottom = getCWSLink("screenshots-cta");
  const captureModes = [
    {
      title: "Visible area",
      body: "Grab exactly what is on screen right now. One click from the extension popup, no drag, no crop step. Good for a quick reply in Slack or a support ticket.",
      asset: "/assets/screenshots/capture-visible.webp",
      alt: "Recordio popup with the Visible area option selected above a dashboard"
    },
    {
      title: "Full page",
      body: "Recordio scrolls the page for you, captures it in strips and stitches them into one tall image. Sticky headers and fixed footers are hidden while it scrolls, so they appear once instead of repeating down the page. Lazy-loaded images are forced to load first.",
      asset: "/assets/screenshots/capture-full-page.webp",
      alt: "A long settings page captured top to bottom as one image"
    },
    {
      title: "Region",
      body: "Drag a rectangle over the part that matters. The selection snaps to the pixel, so a single form field or one row of a table comes out clean.",
      asset: "/assets/screenshots/capture-region.webp",
      alt: "A drag selection over one card on a web page"
    }
  ];
  const tools = [
    { name: "Text", body: "Label a step or call out a value." },
    { name: "Arrow", body: "Point at the thing you want someone to click." },
    { name: "Line", body: "Underline or connect two elements." },
    { name: "Rectangle", body: "Box a button, a field or a whole panel." },
    { name: "Ellipse", body: "Circle an icon or a status badge." },
    { name: "Blur or pixelate", body: "Hide names, emails, keys and totals." },
    { name: "Crop", body: "Trim the capture to the part that matters." }
  ];
  const outputs = [
    {
      title: "Copy to clipboard",
      body: "One click puts the annotated image on your clipboard. Paste it into Linear, Jira, Notion, Slack or an email."
    },
    {
      title: "Download PNG",
      body: "A full-resolution PNG with your annotations baked in. Retina captures keep their pixel density."
    },
    {
      title: "Download PDF",
      body: "A single-page PDF sized to the image, useful for long captures you need to attach to a ticket or send to a client."
    },
    {
      title: "Share a link",
      body: "Publish a public link. Viewers see the image on a clean watch page with no account needed. Turn the link off later and it stops working."
    }
  ];
  const comparisonRows = [
    {
      feature: "Full-page capture",
      recordio: "Yes, scrolls and stitches, hides sticky headers",
      gofullpage: "Yes, its core feature",
      awesome: "Yes",
      nimbus: "Yes"
    },
    {
      feature: "Visible area and region capture",
      recordio: "Yes",
      gofullpage: "Full page only, crop after capture on Premium",
      awesome: "Yes",
      nimbus: "Yes"
    },
    {
      feature: "Annotation (text, arrows, shapes)",
      recordio: "Yes, free",
      gofullpage: "Premium",
      awesome: "Yes, free",
      nimbus: "Yes, free"
    },
    {
      feature: "Blur or pixelate",
      recordio: "Yes, free, shared image is flattened",
      gofullpage: "Premium",
      awesome: "Yes",
      nimbus: "Yes"
    },
    {
      feature: "Share link with a view page",
      recordio: "Yes",
      gofullpage: "No, download only",
      awesome: "Yes",
      nimbus: "Yes"
    },
    {
      feature: "Screen recording in the same tool",
      recordio: "Yes, with auto zoom, spotlight and captions",
      gofullpage: "No",
      awesome: "Yes, 20 cloud recordings on Free",
      nimbus: "Yes, 5 minutes per video on Free"
    },
    {
      feature: "Price",
      recordio: "Free. Pro $12 per seat per month billed annually",
      gofullpage: "Free. Premium $12 per year",
      awesome: "Free. Basic $5 per month billed annually",
      nimbus: "Free. Paid from about $5 per user per month"
    }
  ];
  const faq = [
    {
      question: "Are Recordio screenshots free?",
      answer: "Yes. Create a free Recordio account, install the Chrome extension and you can capture, annotate, copy, download and share screenshots at no cost. The free plan keeps up to 20 live screenshots per workspace. Pro removes the cap."
    },
    {
      question: "How many screenshots can I keep on the free plan?",
      answer: "A free workspace can hold 20 live screenshots at a time. Delete old ones to make room, or upgrade to Pro for unlimited screenshots. Deleted screenshots go to the trash first, so a mistake is easy to undo."
    },
    {
      question: "Does full-page capture work on any site?",
      answer: "It works on any normal web page, including pages behind a login, because the capture runs inside your own browser tab. Pages with infinite scroll are captured to the point they have loaded. Browser-internal pages such as the Chrome Web Store and chrome:// settings pages block every extension from capturing them."
    },
    {
      question: "Can I export a screenshot as a PDF?",
      answer: "Yes. The editor exports a single-page PDF sized to the image, with your annotations included. Very tall full-page captures are split across pages only when they exceed the PDF page-size limit. PNG and copy to clipboard are also available."
    },
    {
      question: "Who can see a shared screenshot link?",
      answer: "Only people who have the link, and only while sharing is turned on. The shared page serves a flattened image rendered from your annotations, never the original capture, so anything you blurred or cropped out is not in the file. Set the screenshot back to private and the link stops working."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Full Page Screenshot and Annotation Tool | Recordio", "description": "Capture the full page, the visible area or a region from Chrome, annotate with arrows, text and blur, then copy, download or share a link. Free to start.", "faqSchema": true, "faqItems": faq }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": navLinks, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> <!-- Hero --> <section class="relative overflow-hidden" style="background-color: var(--color-section-purple);"> <div class="absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true"> <div class="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl"></div> <div class="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"></div> </div> <div class="relative z-10 max-w-5xl mx-auto px-6 pt-32 lg:pt-36 pb-20"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ name: "Screenshots" }], "class": "mb-10" })} <div class="flex flex-col items-center text-center"> <span class="eyebrow hero-entrance hero-entrance-delay-1">Screenshots</span> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-text-highlighted leading-tight mt-4 mb-6 hero-entrance hero-entrance-delay-1">
Full-page screenshots, annotated and shared in seconds.
</h1> <p class="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed hero-entrance hero-entrance-delay-2">
Capture the whole page, the visible area or a region from the Recordio Chrome extension. Add arrows, text and blur in the web app, then copy it, download a PNG or PDF, or send a link. Same extension, same library as your recordings.
</p> <div class="flex flex-col sm:flex-row items-center gap-3 mb-6 hero-entrance hero-entrance-delay-2"> <a${addAttribute(cwsHero, "href")} target="_blank" rel="noopener noreferrer" class="btn-primary btn-lg" data-cws-cta="screenshots"> <img src="/assets/chrome-store.svg" alt="" class="w-5 h-5">
Add to Chrome, it's free
</a> <a href="#capture" class="btn-secondary btn-lg">See how it works</a> </div> <ul class="hero-facts hero-entrance hero-entrance-delay-3"> <li>Free account, no card</li> <li>Chrome, Edge and Brave</li> <li>Mac, Windows, Linux and ChromeOS</li> </ul> </div> <!-- ASSET NEEDED: /assets/screenshots/hero-editor.webp (the screenshot editor with an arrow, a text label and a blurred region on a full-page capture, about 2400x1300) --> <figure class="mt-14 max-w-4xl mx-auto hero-entrance hero-entrance-delay-4"> <div class="feature-video-placeholder rounded-2xl" style="aspect-ratio: 16/9;" role="img" aria-label="Placeholder for the Recordio screenshot editor"></div> </figure> </div> </section> <!-- Three ways to capture --> <section id="capture" class="section-panel-white py-24 px-6"> <div class="max-w-6xl mx-auto"> <div class="section-head"> <span class="eyebrow">Capture</span> <h2 class="section-title">Three ways to capture a page.</h2> <p class="section-subtitle">
Open the Recordio popup, switch to Screenshot and pick the mode. The capture opens in the editor in a new tab, already saved to your library.
</p> </div> <div class="grid gap-8 md:grid-cols-3"> ${captureModes.map((m) => renderTemplate`<article class="card-premium"> <!-- ASSET NEEDED: {m.asset} --> <figure class="mb-6"> <div class="feature-video-placeholder rounded-xl" style="aspect-ratio: 4/3;" role="img"${addAttribute(m.alt, "aria-label")}></div> </figure> <h3 class="text-xl font-bold text-text-highlighted mb-3">${m.title}</h3> <p class="text-text-muted leading-relaxed">${m.body}</p> </article>`)} </div> <p class="mt-10 text-text-muted max-w-3xl mx-auto text-center leading-relaxed">
Every mode captures at your display's real pixel density, so text stays sharp on a Retina screen. Captures work on pages behind a login because nothing leaves your browser until you choose to save.
</p> </div> </section> <!-- Annotate --> <section id="annotate" class="section-panel py-24 px-6"> <div class="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20 items-start"> <div class="section-head section-head--left"> <span class="eyebrow">Annotate</span> <h2 class="section-title">Mark it up in the editor.</h2> <p class="section-subtitle">
Seven tools, each with one job. Every item stays editable until you export, so you can move an arrow or tighten a blur without starting over. Undo and redo cover everything.
</p> <p class="mt-6 text-text-muted leading-relaxed">
Blur is real, not cosmetic. When you share a link or download a file, Recordio renders a flattened image from your annotations. The original capture is never served to viewers, so a blurred customer name cannot be recovered by removing a layer.
</p> <!-- ASSET NEEDED: /assets/screenshots/annotate-tools.webp (toolbar with the seven tools and a blurred email on the canvas) --> <figure class="mt-8"> <div class="feature-video-placeholder rounded-xl" style="aspect-ratio: 4/3;" role="img" aria-label="Placeholder for the annotation toolbar"></div> </figure> </div> <ul class="grid gap-4 sm:grid-cols-2"> ${tools.map((t) => renderTemplate`<li class="rounded-2xl border border-border bg-surface-overlay/40 p-5"> <span class="block font-semibold text-text-highlighted">${t.name}</span> <span class="block mt-1 text-sm text-text-muted">${t.body}</span> </li>`)} <li class="rounded-2xl border border-dashed border-border p-5 text-sm text-text-muted">
Keyboard shortcuts select each tool, and the canvas zooms and pans like a design tool so you can place a small arrow precisely on a tall page.
</li> </ul> </div> </section> <!-- Copy, download or share --> <section id="share" class="section-panel-white py-24 px-6"> <div class="max-w-6xl mx-auto"> <div class="section-head"> <span class="eyebrow">Output</span> <h2 class="section-title">Copy, download or share.</h2> <p class="section-subtitle">
Pick whatever the other person needs. The export always includes your annotations.
</p> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"> ${outputs.map((o) => renderTemplate`<div class="card-premium"> <h3 class="text-lg font-bold text-text-highlighted mb-2">${o.title}</h3> <p class="text-text-muted text-sm leading-relaxed">${o.body}</p> </div>`)} </div> <!-- ASSET NEEDED: /assets/screenshots/share-page.webp (public watch page for a shared screenshot) --> <figure class="mt-12 max-w-4xl mx-auto"> <div class="feature-video-placeholder rounded-2xl" style="aspect-ratio: 16/9;" role="img" aria-label="Placeholder for the public screenshot page"></div> <figcaption class="mt-3 text-center text-sm text-text-muted">
The public page shows the flattened image and nothing else. No login, no comments, no upsell.
</figcaption> </figure> </div> </section> <!-- One library --> <section id="library" class="section-panel py-24 px-6"> <div class="max-w-4xl mx-auto"> <div class="section-head"> <span class="eyebrow">Teams</span> <h2 class="section-title">Screenshots and recordings in one library.</h2> </div> <div class="space-y-5 text-lg text-text-muted leading-relaxed"> <p>
Most teams keep screenshots in one tool and screen recordings in another. Recordio keeps both in the same workspace. A support engineer captures the broken checkout page, blurs the customer's email and drops the link in the ticket. A product manager records the fix as a walkthrough with <a href="/" class="text-primary font-semibold hover:underline underline-offset-4">auto zoom and spotlight</a>. Both land in the same team library, next to each other, searchable by name.
</p> <p>
Screenshots have their own section in the dashboard, with the same sharing controls as videos: private, workspace or public. Deleted screenshots sit in the trash alongside deleted videos, so one place covers cleanup for both. On Pro, the <a href="/features/team-library/" class="text-primary font-semibold hover:underline underline-offset-4">team library</a> gives every member of the workspace access to every screenshot and recording, and viewer seats are unlimited.
</p> <p>
If you already use Recordio to <a href="/for/chrome/" class="text-primary font-semibold hover:underline underline-offset-4">record your screen in Chrome</a>, there is nothing new to install. Screenshot mode is a tab in the same popup.
</p> </div> </div> </section> <!-- Comparison --> <section id="comparison" class="section-panel-white py-24 px-6"> <div class="max-w-6xl mx-auto"> <div class="section-head"> <span class="eyebrow">Compared</span> <h2 class="section-title">Recordio vs GoFullPage, Awesome Screenshot and Nimbus.</h2> <p class="section-subtitle">
The three screenshot extensions people most often search for, checked on 22 September 2026.
</p> </div> <div class="compare-table-wrapper"> <table class="compare-table" style="min-width: 760px;"> <thead> <tr> <th class="compare-th compare-th--feature" style="width: 24%;">Feature</th> <th class="compare-th compare-th--recordio" style="width: 22%;"> <img src="/favicon-32x32.png" alt="" class="w-5 h-5 rounded inline-block mr-2 -mt-0.5">
Recordio
</th> <th class="compare-th compare-th--competitor" style="width: 18%;">GoFullPage</th> <th class="compare-th compare-th--competitor" style="width: 18%;">Awesome Screenshot</th> <th class="compare-th compare-th--competitor" style="width: 18%;">Nimbus</th> </tr> </thead> <tbody> ${comparisonRows.map((r) => renderTemplate`<tr class="compare-row"> <td class="compare-td compare-td--feature text-sm font-medium">${r.feature}</td> <td class="compare-td compare-td--recordio text-sm font-medium text-text-highlighted">${r.recordio}</td> <td class="compare-td compare-td--competitor text-sm">${r.gofullpage}</td> <td class="compare-td compare-td--competitor text-sm">${r.awesome}</td> <td class="compare-td compare-td--competitor text-sm">${r.nimbus}</td> </tr>`)} </tbody> </table> </div> <div class="mt-12 grid gap-8 md:grid-cols-2"> <div> <h3 class="text-xl font-bold text-text-highlighted mb-3">What these tools do well</h3> <p class="text-text-muted leading-relaxed">
GoFullPage is the most reliable one-click full-page capture on the store and needs no account for the basic capture. Awesome Screenshot has the broadest free tier, with unlimited local screenshots and a mature editor. Nimbus adds a pencil tool, numbered markers and GIF export, none of which Recordio has today. If you only ever need a full-page PNG and never share it, GoFullPage is hard to beat.
</p> </div> <div> <h3 class="text-xl font-bold text-text-highlighted mb-3">Where Recordio is different</h3> <p class="text-text-muted leading-relaxed">
Annotation and blur are free rather than paid add-ons, shared links serve a flattened image so blur is safe, and the same extension records walkthroughs with <a href="/compare/" class="text-primary font-semibold hover:underline underline-offset-4">auto zoom that other recorders do not have</a>. Teams get one library for screenshots and video instead of two tools. Pricing is per seat, with unlimited free viewer seats on Pro. See <a href="/#pricing" class="text-primary font-semibold hover:underline underline-offset-4">Recordio pricing</a> for the full plan comparison.
</p> </div> </div> </div> </section> ${renderComponent($$result2, "FAQ", FAQ, { "client:visible": true, "items": faq, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FAQ", "client:component-export": "default" })} <!-- CTA --> <section class="section-panel-white py-24 px-6 relative overflow-hidden"> <div class="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true"> <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div> <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div> </div> <div class="relative z-10 max-w-3xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-text-highlighted mb-6">Capture your first page in under a minute.</h2> <p class="text-lg text-text-muted mb-10 leading-relaxed">
Install the extension, sign in with a free account, and take a full-page screenshot of whatever tab you have open. Annotate it, share the link, and it is in your team library.
</p> <a${addAttribute(cwsBottom, "href")} target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-10 py-4" data-cws-cta="screenshots-cta">
Get Recordio for Chrome
</a> </div> </section> ${renderComponent($$result2, "RelatedLinks", RelatedLinks, { "client:visible": true, "heading": "Keep exploring", "variant": "purple", "links": [
    { label: "Screen recorder for Chrome", href: "/for/chrome/", blurb: "The recording side of the same extension." },
    { label: "Recordio home", href: "/", blurb: "Auto zoom, spotlight and captions for product walkthroughs." },
    { label: "Bug report screen recordings", href: "/use-cases/bug-report-screen-recording/", blurb: "When a screenshot is not enough, record the repro." },
    { label: "Team library", href: "/features/team-library/", blurb: "One shared place for screenshots and recordings." },
    { label: "Compare screen recorders", href: "/compare/", blurb: "Recordio against Loom, Screen Studio, Tella and more." },
    { label: "Blog", href: "/blog/", blurb: "Guides on recording and sharing product videos." }
  ], "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/RelatedLinks", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "source": "screenshots", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })} ${renderScript($$result, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/screenshots.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/screenshots.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/screenshots.astro";
const $$url = "/screenshots/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Screenshots,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
