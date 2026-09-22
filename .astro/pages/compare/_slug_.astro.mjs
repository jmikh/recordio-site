import { d as createAstro, c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, b as addAttribute, e as renderScript, r as renderComponent } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BMmOTL_5.mjs';
import { H as Header, F as Footer } from '../../chunks/Footer_CETPJvN_.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_DNl1Z9iS.mjs';
import { R as RelatedLinks } from '../../chunks/RelatedLinks_DlwSg6Vn.mjs';
import { F as FAQ } from '../../chunks/FAQ_DdSn-1-7.mjs';
import { P as Pricing } from '../../chunks/Pricing_FQzwYBKa.mjs';
import { C as CompareHero, a as CompareFeatureTable, b as CompareCTA } from '../../chunks/CompareCTA_DUmm5hb3.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const inline = (text) => escapeHtml(text).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label, href) => {
  const external = /^https?:\/\//.test(href);
  const rel = external ? ' rel="noopener noreferrer" target="_blank"' : "";
  return `<a href="${href}"${rel}>${label}</a>`;
}).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

const $$Astro$5 = createAstro("https://recordio.io");
const $$CompareChoose = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CompareChoose;
  const { name, chooseThem, chooseRecordio } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section-panel py-20 px-6" aria-labelledby="choose-heading" data-astro-cid-unvaievn> <div class="max-w-5xl mx-auto" data-astro-cid-unvaievn> <div class="section-head" data-astro-cid-unvaievn> <span class="eyebrow" data-astro-cid-unvaievn>Which one is for you</span> <h2 id="choose-heading" class="section-title" data-astro-cid-unvaievn>Choose ${name} or Recordio</h2> </div> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-unvaievn> <div class="card-premium" data-astro-cid-unvaievn> <h3 class="text-lg font-bold text-text-highlighted mb-4" data-astro-cid-unvaievn>Choose ${name} if</h3> <ul class="compare-choose-list" data-astro-cid-unvaievn> ${chooseThem.map((item) => renderTemplate`<li data-astro-cid-unvaievn>${unescapeHTML(inline(item))}</li>`)} </ul> </div> <div class="card-premium compare-choose-card--recordio" data-astro-cid-unvaievn> <h3 class="text-lg font-bold text-text-highlighted mb-4" data-astro-cid-unvaievn>Choose Recordio if</h3> <ul class="compare-choose-list" data-astro-cid-unvaievn> ${chooseRecordio.map((item) => renderTemplate`<li data-astro-cid-unvaievn>${unescapeHTML(inline(item))}</li>`)} </ul> </div> </div> </div> </section> `;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareChoose.astro", void 0);

const $$Astro$4 = createAstro("https://recordio.io");
const $$CompareStrengths = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CompareStrengths;
  const { name, items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section-panel py-20 px-6" aria-labelledby="strengths-heading"> <div class="max-w-5xl mx-auto"> <div class="section-head"> <span class="eyebrow">Credit where it is due</span> <h2 id="strengths-heading" class="section-title">What ${name} does well</h2> </div> <div${addAttribute(`grid gap-6 ${items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`, "class")}> ${items.map((item) => renderTemplate`<div class="card-premium"> <h3 class="text-lg font-bold text-text-highlighted mb-3">${item.heading}</h3> <p class="text-sm text-text-muted leading-relaxed compare-copy">${unescapeHTML(inline(item.body))}</p> </div>`)} </div> </div> </section>`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareStrengths.astro", void 0);

const $$Astro$3 = createAstro("https://recordio.io");
const $$CompareDifferences = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CompareDifferences;
  const { name, items } = Astro2.props;
  const hues = [290, 78];
  return renderTemplate`${maybeRenderHead()}<section id="differences" class="section-panel-white py-20"${addAttribute(`Where Recordio is different from ${name}`, "aria-label")}> <div class="section-head px-6 mb-12"> <span class="eyebrow">Where Recordio is different</span> <p class="section-subtitle">What changes when a ${name} recording becomes a Recordio recording.</p> </div> <div class="feature-panels"> ${items.map((item, i) => renderTemplate`<article${addAttribute(`feature-panel is-revealed${i % 2 === 1 ? " is-flipped" : ""}`, "class")}${addAttribute(`--hue: ${hues[i % 2]}`, "style")}> <div class="feature-panel-text"> <h2 class="step-title">${item.heading}</h2> <p class="step-description compare-copy">${unescapeHTML(inline(item.body))}</p> </div> <div class="feature-panel-visual"> ${item.media?.video && renderTemplate`<div class="feature-video-container"> <video class="feature-video" muted loop playsinline preload="none" data-lazy-video${addAttribute(item.media.alt, "aria-label")}> <source${addAttribute(`/videos/${item.media.video}`, "data-src")} type="video/webm"> <source${addAttribute(`/videos/${item.media.video.replace(/\.webm$/, ".mp4")}`, "data-src")} type="video/mp4"> </video> </div>`} ${!item.media?.video && item.media?.image && renderTemplate`<div class="feature-video-container"> <img class="feature-video"${addAttribute(item.media.image, "src")}${addAttribute(item.media.alt, "alt")} loading="lazy"> </div>`} </div> </article>`)} </div> </section> ${renderScript($$result, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareDifferences.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareDifferences.astro", void 0);

const $$Astro$2 = createAstro("https://recordio.io");
const $$ComparePricingTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ComparePricingTable;
  const { name, pricing } = Astro2.props;
  const checked = (/* @__PURE__ */ new Date(`${pricing.checkedOn}T00:00:00Z`)).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });
  const rows = [
    {
      label: "Per seat, billed annually",
      recordio: "$12 per seat per month",
      competitor: pricing.competitorAnnual
    },
    {
      label: "Per seat, billed monthly",
      recordio: "$15 per seat per month",
      competitor: pricing.competitorMonthly
    },
    {
      label: "Free plan",
      recordio: "$0, no card. Up to 5 active projects, 1080p downloads, videos expire after 7 days.",
      competitor: pricing.competitorFree
    },
    {
      label: "Five people, one year",
      recordio: "5 seats x $12 = $60 per month, $720 per year on annual billing. Monthly billing is 5 x $15 = $75 per month.",
      competitor: pricing.competitorTeamOfFive
    },
    {
      label: "People who only watch",
      recordio: "Free and unlimited. Only people who record need a Pro seat.",
      competitor: pricing.competitorViewers
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="pricing-comparison" class="section-panel py-20 px-6" aria-labelledby="pricing-comparison-heading"> <div class="max-w-4xl mx-auto"> <div class="section-head"> <span class="eyebrow">Pricing</span> <h2 id="pricing-comparison-heading" class="section-title">Pricing for a five-person team</h2> <p class="section-subtitle">Recordio Pro against ${name}, using the plan a small product team would actually pick.</p> </div> <div class="compare-table-wrapper"> <table class="compare-table"> <thead> <tr> <th class="compare-th compare-th--feature">Cost</th> <th class="compare-th compare-th--recordio"> <img src="/favicon-32x32.png" alt="" class="w-5 h-5 rounded inline-block mr-2 -mt-0.5">
Recordio Pro
</th> <th class="compare-th compare-th--competitor">${name}</th> </tr> </thead> <tbody> ${rows.map((row) => renderTemplate`<tr class="compare-row"> <td class="compare-td compare-td--feature"> <div class="font-medium text-text-highlighted text-sm">${row.label}</div> </td> <td class="compare-td compare-td--recordio"> <span class="text-sm font-medium text-text-highlighted">${row.recordio}</span> </td> <td class="compare-td compare-td--competitor"> <span class="text-sm font-medium text-text-muted">${unescapeHTML(inline(row.competitor))}</span> </td> </tr>`)} </tbody> </table> </div> <p class="mt-6 text-sm text-text-muted leading-relaxed compare-copy">${unescapeHTML(inline(pricing.notes))}</p> <p class="mt-2 text-xs text-text-muted"> ${name} prices checked on ${checked} on ${name}'s own pricing page. Recordio prices are current.
</p> </div> </section>`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/ComparePricingTable.astro", void 0);

const $$Astro$1 = createAstro("https://recordio.io");
const $$CompareByline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CompareByline;
  const { updated } = Astro2.props;
  const formatted = (/* @__PURE__ */ new Date(`${updated}T00:00:00Z`)).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });
  return renderTemplate`${maybeRenderHead()}<div class="section-panel-white px-6 py-10"> <p class="max-w-4xl mx-auto text-sm text-text-muted flex flex-wrap items-center gap-x-2 gap-y-1"> <span>
Written by
<a href="https://www.linkedin.com/in/john-mikhail/" target="_blank" rel="noopener noreferrer" class="font-semibold text-text-highlighted hover:text-primary transition-colors">John Mikhail</a>, founder of Recordio.
</span> <span aria-hidden="true" class="opacity-50">/</span> <span>Updated <time${addAttribute(updated, "datetime")}>${formatted}</time>.</span> </p> </div>`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareByline.astro", void 0);

const bandicam = {
  slug: "bandicam",
  name: "Bandicam",
  title: "Bandicam Alternative for Mac, Linux and Teams | Recordio",
  description: "Bandicam records games and desktop apps to a file. Recordio records web app walkthroughs in Chrome on any OS, polishes them for you and shares a link.",
  verdict: "Bandicam is a desktop recorder for games and Windows or Mac software that saves a file to disk. Recordio runs in Chrome on any OS, polishes product walkthroughs automatically and shares them as a link with view analytics.",
  chooseThem: [
    "You record games or desktop software that does not run in a browser. Bandicam hooks into DirectX, OpenGL and Vulkan; Recordio does not.",
    "You want a raw MP4 or AVI on disk to edit elsewhere, or to keep as-is, and nobody needs a share link.",
    "You work alone on one PC and would rather pay once for a perpetual licence than pay per seat."
  ],
  chooseRecordio: [
    "Your recordings are product walkthroughs, demos or async updates of a web app, and they should look finished without a timeline.",
    "You want zoom, spotlight, a clean browser toolbar and captions applied for you, with every zoom still editable.",
    "Your team needs one shared library and links with view counts, not video files passed around in chat."
  ],
  whatTheyDoWell: [
    {
      heading: "Game and full-screen capture",
      body: "Bandicam started as a game recorder and it still shows. Game mode attaches to DirectX, OpenGL and Vulkan applications, records at high frame rates with hardware encoding and overlays an FPS counter. If you record gameplay, a 3D tool or any native desktop app, Bandicam is the right kind of software and Recordio is not."
    },
    {
      heading: "Device recording",
      body: "Bandicam captures external sources: webcams, capture cards, consoles over HDMI and other devices. A browser extension cannot see those inputs. If your walkthroughs involve hardware rather than software, this alone decides it."
    },
    {
      heading: "A one-time licence",
      body: "A Personal perpetual licence lists at $77 per PC and covers the current major version for good. For an individual who records occasionally on one machine and never needs to share online, that is cheap, and cheaper than any subscription over a few years."
    }
  ],
  differences: [
    {
      heading: "Finished output, not raw footage",
      body: "Bandicam gives you exactly the pixels on screen. Recordio reads the page DOM while you record, so it zooms into the input, card or menu you are using and never clips the edge of a form. Every zoom becomes a keyframe you can move or delete, and a 3D spotlight lifts the element you click. This is the difference between a screen capture and a [product walkthrough](/blog/best-screen-recorders-2026/) you would send to a customer.",
      media: { video: "zoom.webm", alt: "Recordio auto zoom framing a form field during a recording" }
    },
    {
      heading: "A link with analytics, not a file in a folder",
      body: "Bandicam writes an MP4 or AVI to disk; getting it to a colleague means uploading it somewhere. Recordio renders the video in the cloud on Pro and gives you a share link with view counts and watch time, plus a team library where sales, support and product can find every walkthrough. Downloads are still there at 1080p on Free and 4K on Pro.",
      media: { video: "after.webm", alt: "A finished Recordio walkthrough with device frame and background" }
    },
    {
      heading: "Silence cut and captions written for you",
      body: "Bandicam has no editor; its companion Bandicut is a separate purchase. Recordio's AutoCut removes the dead air between sentences while keeping the pauses where you are typing or clicking, and Pro adds AI captions with word-level timing. Delete a caption line and that segment of the video is cut too.",
      media: { video: "captions.webm", alt: "Editable AI captions on a Recordio recording" }
    },
    {
      heading: "Runs where your whole team already works",
      body: "Bandicam runs on Windows and, more recently, macOS. Recordio is a Chrome extension with a web app, so it works on [Windows](/for/windows/), [Mac](/for/mac/), [Linux](/for/linux/) and ChromeOS, and a designer on a MacBook and an engineer on Ubuntu share one library. The simplified toolbar hides your bookmarks, tabs and extensions from every recording.",
      media: { video: "toolbar.webm", alt: "Recordio replacing a cluttered browser toolbar with a clean one" }
    }
  ],
  table: [
    { feature: "Auto zoom", description: "Frames the element you interact with; each zoom is an editable keyframe", recordio: "DOM-aware, editable", competitor: false },
    { feature: "Auto spotlight", description: "3D elevation of the element you click", recordio: true, competitor: false },
    { feature: "Smart AutoCut", description: "Removes silence, keeps typing and clicking pauses", recordio: true, competitor: false },
    { feature: "Simplified toolbar", description: "Hides bookmarks, tabs and extensions", recordio: true, competitor: false },
    { feature: "Blur sensitive regions", recordio: true, competitor: false },
    { feature: "Webcam", recordio: "Webcam bubble", competitor: "Webcam overlay" },
    { feature: "Device frames", description: "MacBook Pro and Air frames", recordio: true, competitor: false },
    { feature: "AI captions", recordio: "Word-level, editable (Pro)", competitor: false },
    { feature: "Export resolutions", recordio: "1080p free, up to 4K on Pro", competitor: "Up to 4K, watermarked on free" },
    { feature: "Cloud rendering", recordio: "Pro (browser rendering on Free)", competitor: "Local only" },
    { feature: "Share links with view analytics", recordio: "Pro", competitor: false },
    { feature: "Team workspace and roles", recordio: "Pro", competitor: false },
    { feature: "Unlimited viewer seats", recordio: "Pro", competitor: "Not applicable" },
    { feature: "Screenshots", description: "Full page or region, with annotation", recordio: true, competitor: "Screen area only" },
    { feature: "Game and device capture", recordio: false, competitor: "DirectX, OpenGL, Vulkan, HDMI" },
    { feature: "Platforms", recordio: "Chrome, Edge, Brave on Mac, Windows, Linux, ChromeOS", competitor: "Windows and macOS apps" },
    { feature: "Free plan", recordio: "5 active projects, 1080p, no watermark", competitor: "Watermark, 10-minute cap" },
    { feature: "Price", recordio: "Free, or Pro $12 per seat per month billed annually", competitor: "From $36.95 per PC per year, or $77 perpetual" }
  ],
  pricing: {
    competitorMonthly: "No monthly plan",
    competitorAnnual: "$36.95 per PC per year (Personal, non-commercial)",
    competitorFree: "Free version with a watermark and a 10-minute cap on each recording",
    competitorTeamOfFive: "Commercial use needs the Business licence: 5 PCs x $65.95 = $329.75 per year, about $27 per month. Personal licences are non-commercial.",
    competitorViewers: "Not applicable. Bandicam makes files; sharing and hosting are up to you.",
    notes: "Bandicam licences are per PC, not per person, and Personal licences cannot be used for work. The Business annual price above is the list price; Bandicam runs frequent sales. Recordio charges per person who records, and everyone who only watches is free.",
    checkedOn: "2026-09-22"
  },
  faq: [
    {
      question: "Is Recordio a Bandicam alternative for Mac?",
      answer: "Yes. Bandicam added a macOS version, but Recordio runs in Chrome, Edge or Brave on macOS, Windows, Linux and ChromeOS from a single account, so a mixed team uses one tool and one library."
    },
    {
      question: "Can Recordio record games like Bandicam?",
      answer: "No. Recordio records what happens in the browser and is built for product walkthroughs of web apps. For gameplay, native desktop software or capture cards, keep Bandicam or use OBS."
    },
    {
      question: "Does Recordio put a watermark on free recordings?",
      answer: "No. The free plan downloads clean 1080p video, includes auto zoom, spotlight and AutoCut, and allows up to 5 active projects. Videos on the free plan expire after 7 days."
    },
    {
      question: "Do I still get a video file with Recordio?",
      answer: "Yes. Every recording can be downloaded as an MP4 at 1080p on Free or up to 4K on Pro. Pro also gives you a share link with view analytics so you do not have to send the file at all."
    },
    {
      question: "Do I need an account to use Recordio?",
      answer: "Yes. Recordio is cloud-based, so you install the extension and sign in with a free account. Your recordings, edits and team library live in the web app at app.recordio.io."
    }
  ],
  related: {
    compare: ["obs", "camtasia", "screen-studio"],
    post: "/blog/best-screen-recorders-2026/",
    platform: "/for/windows/"
  },
  updated: "2026-09-22"
};

const loom = {
  slug: "loom",
  name: "Loom",
  title: "Loom Alternative for Product Walkthroughs | Recordio",
  description: "Loom records your screen as-is. Recordio adds auto zoom, spotlight, AutoCut and captions to every walkthrough, with share links and a team library from $12 a seat.",
  verdict: "Loom is the default for quick async video, and it records your screen exactly as it is. Recordio is for product walkthroughs that should look finished: it zooms and spotlights what you interact with, cuts the silence, and shares a link with view analytics from $12 per seat.",
  chooseThem: [
    "You send short updates from a phone or a desktop app, not from a browser, and polish does not matter.",
    "Your company already runs on Atlassian and you want Loom videos turning into Jira work items and Confluence pages.",
    "You need comments, emoji reactions and calls to action on the video page itself, and you are happy paying $15 to $20 per creator."
  ],
  chooseRecordio: [
    "Your videos show a web app to customers, prospects or new hires, and a raw screen capture undersells it.",
    "You want auto zoom, spotlight, a clean toolbar, silence removal and captions applied for you, with every zoom still editable.",
    "You want a free plan that is not a 5-minute trial, and Pro at $12 per seat with free viewers and a shared team library."
  ],
  whatTheyDoWell: [
    {
      heading: "Async collaboration on the video page",
      body: "Loom built the workflow everyone copies: a link that opens instantly, timestamped comments, emoji reactions, calls to action and viewer insights. For a manager sending a two-minute update to twelve people, that page is the product, and it is very good."
    },
    {
      heading: "Apps for every device",
      body: "Loom has desktop apps for Mac and Windows, a Chrome extension and iOS and Android apps. You can record a native desktop tool, a phone screen or yourself on camera anywhere. Recordio records in the browser, which is the right scope for web app walkthroughs and the wrong one for everything else."
    },
    {
      heading: "Atlassian integrations and AI writing",
      body: "Since the Atlassian acquisition, Loom turns a bug report video into a Jira work item with device, browser and console details attached, and Loom AI writes titles, summaries and chapters. If your team lives in Jira and Confluence, that is real time saved."
    }
  ],
  differences: [
    {
      heading: "Zoom that reads the page, not the cursor",
      body: "A Loom recording is your full screen at full size, so a form field on a 27-inch monitor is a few pixels in the final video. Recordio reads the page DOM while you record and zooms into the input, card or menu you are using, without clipping it. Each zoom is a keyframe you can drag or delete, and the auto spotlight lifts the element you click so the viewer looks where you look.",
      media: { video: "zoom.webm", alt: "Recordio auto zoom framing a form field during a web app walkthrough" }
    },
    {
      heading: "Dead air gone, captions written",
      body: "Loom AI trims filler words on its AI plan. Recordio's AutoCut removes every silent gap on every plan while keeping the pauses where you are typing or scrolling, so the pacing still feels human. Pro adds captions with word-level timing; edit a word, or delete a caption line to cut that part of the video.",
      media: { video: "autocut.webm", alt: "Recordio AutoCut removing silence from a recording" }
    },
    {
      heading: "A demo that looks like a product video",
      body: "Recordio replaces your browser toolbar with a clean bar showing only the page title, so 40 open tabs and a bookmarks bar never appear. Add a background, a MacBook frame and a webcam bubble, and a walkthrough recorded in five minutes looks like something marketing made. Loom offers custom backgrounds; the rest is a screen recording.",
      media: { video: "backgrounds.webm", alt: "Recordio recording with a gradient background and device frame" }
    },
    {
      heading: "Priced for the people who record",
      body: "Loom Business is $15 per user per month billed annually, or $20 with AI features. Recordio Pro is $12 per seat, includes captions and cloud rendering, and only the people who record need a seat. Viewers are free and unlimited. Every walkthrough lands in a team library with roles, so [product, sales and support](/blog/best-loom-alternatives-2026/) share one source of truth instead of scattered links.",
      media: { video: "after.webm", alt: "A finished Recordio walkthrough ready to share" }
    }
  ],
  table: [
    { feature: "Auto zoom", description: "Frames the element you interact with; each zoom is an editable keyframe", recordio: "DOM-aware, editable", competitor: "Cursor-based, on the AI plan" },
    { feature: "Auto spotlight", description: "3D elevation of the element you click", recordio: true, competitor: false },
    { feature: "Smart AutoCut", description: "Removes silence, keeps typing and clicking pauses", recordio: "All plans", competitor: "Filler and silence removal on Business + AI" },
    { feature: "Simplified toolbar", description: "Hides bookmarks, tabs and extensions", recordio: true, competitor: false },
    { feature: "Blur sensitive regions", recordio: true, competitor: false },
    { feature: "Webcam", recordio: "Webcam bubble", competitor: "Webcam bubble" },
    { feature: "Device frames", description: "MacBook Pro and Air frames", recordio: true, competitor: false },
    { feature: "AI captions", recordio: "Word-level, editable (Pro)", competitor: "50+ languages" },
    { feature: "Export resolutions", recordio: "1080p free, up to 4K on Pro", competitor: "Up to 4K on paid plans" },
    { feature: "Cloud rendering", recordio: "Pro (browser rendering on Free)", competitor: true },
    { feature: "Share links with view analytics", recordio: "Pro", competitor: "All plans" },
    { feature: "Team workspace and roles", recordio: "Pro", competitor: "Business and up" },
    { feature: "Unlimited viewer seats", recordio: "Pro", competitor: "Viewing is free" },
    { feature: "Screenshots", description: "Full page or region, with annotation", recordio: true, competitor: false },
    { feature: "Platforms", recordio: "Chrome, Edge, Brave on Mac, Windows, Linux, ChromeOS", competitor: "Mac, Windows, Chrome, iOS, Android" },
    { feature: "Free plan", recordio: "5 active projects, 1080p, no watermark", competitor: "25 videos, 5 minutes each" },
    { feature: "Price", recordio: "Free, or Pro $12 per seat per month billed annually", competitor: "$15 to $20 per user per month billed annually" }
  ],
  pricing: {
    competitorMonthly: "$18 per user per month (Business), $24 with AI",
    competitorAnnual: "$15 per user per month (Business), $20 with AI",
    competitorFree: "Starter: 25 videos per person, 5 minutes each",
    competitorTeamOfFive: "5 x $15 = $75 per month, $900 per year on Business. With AI: 5 x $20 = $100 per month, $1,200 per year.",
    competitorViewers: "Free. Loom charges per creator; watching a link costs nothing.",
    notes: "Both tools charge for the people who record and let anyone watch for free. The gap is what a seat includes: Recordio Pro bundles captions, 4K, cloud rendering and the team library at $12, while Loom keeps AI editing and captions on the $20 tier. Loom's free plan caps each video at 5 minutes; Recordio's free plan caps active projects at 5 and expires videos after 7 days.",
    checkedOn: "2026-09-22"
  },
  faq: [
    {
      question: "Is Recordio a free Loom alternative?",
      answer: "Yes. Recordio's free plan has no card, no watermark and no 5-minute cap. It includes auto zoom, spotlight, AutoCut and 1080p downloads for up to 5 active projects, with videos expiring after 7 days. Pro is $12 per seat per month billed annually."
    },
    {
      question: "Does Recordio have share links like Loom?",
      answer: "Yes, on Pro. Every recording gets a public watch page and a link with view counts and watch time. On the free plan you download the video and share the file."
    },
    {
      question: "Can Recordio record my desktop and other apps like Loom does?",
      answer: "Recordio is a Chrome extension with a web app, so it records what you do in the browser. That is where product walkthroughs of web apps happen, and where its DOM-aware zoom works. For native desktop apps or phone screens, Loom is the better fit."
    },
    {
      question: "How do I move my team from Loom to Recordio?",
      answer: "Install the extension, create a workspace and invite the people who record; everyone else watches links for free. Recordio does not import your Loom library, so keep Loom on the free Starter plan for old videos while new walkthroughs go into the Recordio team library."
    },
    {
      question: "Does Recordio work on Windows and Linux?",
      answer: "Yes. Recordio runs in Chrome, Edge or Brave on Windows, macOS, Linux and ChromeOS. There is nothing to install beyond the extension, and every recording lands in the same web app."
    }
  ],
  related: {
    compare: ["tella", "clueso", "screencastify"],
    post: "/blog/best-loom-alternatives-2026/",
    platform: "/for/chrome/"
  },
  updated: "2026-09-22"
};

const competitors = [
  bandicam,
  loom
];
const competitorBySlug = (slug) => {
  const found = competitors.find((c) => c.slug === slug);
  if (!found) throw new Error(`Unknown competitor slug: ${slug}`);
  return found;
};
const relatedPageLabels = {
  "/blog/best-loom-alternatives-2026/": {
    label: "Best Loom alternatives in 2026",
    blurb: "What Loom costs per seat and which tools replace it for teams."
  },
  "/blog/best-screen-recorders-2026/": {
    label: "Best screen recorders in 2026",
    blurb: "Recordio, Screen Studio and FocuSee compared for product demos."
  },
  "/for/mac/": {
    label: "Screen recorder for Mac",
    blurb: "Record walkthroughs in Chrome on macOS, no native app to install."
  },
  "/for/windows/": {
    label: "Screen recorder for Windows",
    blurb: "The same recorder and team library on Windows 10 and 11."
  },
  "/for/linux/": {
    label: "Screen recorder for Linux",
    blurb: "Works on Ubuntu, Fedora and any distro that runs Chrome or Brave."
  },
  "/for/chrome/": {
    label: "Screen recorder Chrome extension",
    blurb: "How the extension records tabs and what the web app adds."
  }
};

const $$Astro = createAstro("https://recordio.io");
function getStaticPaths() {
  return competitors.map((competitor) => ({
    params: { slug: competitor.slug },
    props: { competitor }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { competitor: c } = Astro2.props;
  if (c.title.length > 60) throw new Error(`${c.slug}: title is ${c.title.length} chars (max 60)`);
  if (c.description.length > 155) throw new Error(`${c.slug}: description is ${c.description.length} chars (max 155)`);
  if (c.faq.length !== 5) throw new Error(`${c.slug}: FAQ must have exactly 5 questions, has ${c.faq.length}`);
  const navLinks = [
    { label: "Comparison", href: "#comparison" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" }
  ];
  const relatedLinks = c.related.compare.map((slug) => {
    const sibling = competitorBySlug(slug);
    return {
      label: `Recordio vs ${sibling.name}`,
      href: `/compare/${sibling.slug}/`,
      blurb: sibling.verdict.split(/(?<=\.)\s/)[0]
    };
  });
  for (const path of [c.related.post, c.related.platform]) {
    if (!path) continue;
    const meta = relatedPageLabels[path];
    if (!meta) throw new Error(`${c.slug}: no label registered for related page ${path}`);
    relatedLinks.push({ href: path, ...meta });
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": c.title, "description": c.description, "faqSchema": true, "faqItems": c.faq, "ogImage": c.ogImage }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": navLinks, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "CompareHero", CompareHero, { "client:load": true, "slug": c.slug, "name": c.name, "verdict": c.verdict, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareHero", "client:component-export": "default" })} <div class="section-panel-white px-6 py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "class": "max-w-5xl mx-auto", "items": [{ name: "Compare", href: "/compare/" }, { name: c.name }] })} </div> ${renderComponent($$result2, "CompareChoose", $$CompareChoose, { "name": c.name, "chooseThem": c.chooseThem, "chooseRecordio": c.chooseRecordio })} ${renderComponent($$result2, "CompareFeatureTable", CompareFeatureTable, { "client:visible": true, "competitorName": c.name, "rows": c.table, "variant": "white", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareFeatureTable", "client:component-export": "default" })} ${renderComponent($$result2, "CompareStrengths", $$CompareStrengths, { "name": c.name, "items": c.whatTheyDoWell })} ${renderComponent($$result2, "CompareDifferences", $$CompareDifferences, { "name": c.name, "items": c.differences })} ${renderComponent($$result2, "ComparePricingTable", $$ComparePricingTable, { "name": c.name, "pricing": c.pricing })} ${renderComponent($$result2, "FAQ", FAQ, { "client:visible": true, "items": c.faq, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FAQ", "client:component-export": "default" })} ${renderComponent($$result2, "RelatedLinks", RelatedLinks, { "client:visible": true, "heading": "Other comparisons", "links": relatedLinks, "variant": "white", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/RelatedLinks", "client:component-export": "default" })} ${renderComponent($$result2, "CompareByline", $$CompareByline, { "updated": c.updated })} ${renderComponent($$result2, "Pricing", Pricing, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Pricing", "client:component-export": "default" })} ${renderComponent($$result2, "CompareCTA", CompareCTA, { "client:visible": true, "competitorName": c.name, "variant": "purple", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/compare/CompareCTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "source": `compare-${c.slug}`, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })} `;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/[slug].astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/compare/[slug].astro";
const $$url = "/compare/[slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
