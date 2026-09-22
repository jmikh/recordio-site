import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$FeatureLayout } from '../../chunks/FeatureLayout_BgI6VYOZ.mjs';
import { g as getFeature } from '../../chunks/features_CbJNs_cj.mjs';
export { renderers } from '../../renderers.mjs';

const $$AutoZoom = createComponent(($$result, $$props, $$slots) => {
  const me = getFeature("auto-zoom");
  const captions = getFeature("ai-captions");
  const blur = getFeature("blur");
  const steps = [
    {
      title: "It reads the page, not the cursor",
      body: `<p>Most screen recorders with auto zoom track your cursor and zoom to a box around it. That clips the edge of a form or cuts a dropdown in half. Recordio's extension reads the page structure while you record. When you click into an input, open a menu or hover a card, it knows the bounds of that element and frames the whole thing.</p><p>The zoom also holds still while you type instead of chasing the cursor, so a settings walkthrough stays calm to watch.</p>`,
      media: { video: "zoom.webm", alt: "Recordio zooming into a form field as the user clicks it" }
    },
    {
      title: "Every zoom is an editable keyframe",
      body: `<p>Auto zoom is a starting point, not a lock. Open the recording in the web app and each zoom appears as a keyframe on the timeline. Drag it to change the timing, resize it to change the frame, delete it to skip that moment, or add a new one where the recorder stayed wide.</p><p>You never need to re-record to fix a zoom.</p>`
    },
    {
      title: "Spotlight works alongside it",
      body: `<p>Auto spotlight dims the page and lifts the element you interact with, a subtle 3D elevation. Zoom decides where to look. Spotlight decides what stands out. Both are on by default and both can be switched off for any recording.</p><p>Together they make a plain web app look like a produced demo with no manual editing.</p>`,
      media: { video: "spotlight.webm", alt: "Recordio spotlighting a card while the rest of the page dims" }
    }
  ];
  const useCases = {
    heading: "Walkthroughs where the exact field matters",
    items: [
      "<strong>Product walkthroughs</strong> of dense settings pages, where a wide shot leaves the viewer hunting for the toggle you mean.",
      "<strong>Onboarding videos</strong> that customers watch on a laptop at half size or on a phone. The zoom keeps text readable.",
      "<strong>Bug reports</strong> for support and engineering, where the value in one input is the whole point.",
      '<strong>Async updates</strong> to your team, where you want to show the change instead of describing it. Add <a href="' + captions.href + '">captions</a> for people watching muted.'
    ]
  };
  const planNote = `Auto zoom and auto spotlight are included in the Free plan, with 1080p downloads and up to 5 active projects. Pro adds 4K exports, captions and share links.`;
  const comparedWith = `<p><a href="/compare/loom/">Loom</a> added an automatic zoom that follows cursor position. It is quick and needs no setup, and for a talking-head update it is fine. On a form or a menu it can frame the cursor rather than the element, and the zooms are not editable as keyframes. <a href="/compare/screen-studio/">Screen Studio</a> has the smoothest cursor-based zoom on the market and you adjust zooms by dragging on a timeline. It is a Mac-only desktop app, so a mixed team cannot standardise on it. Recordio's zoom targets the element you interact with and runs in Chrome, Edge or Brave on any operating system, including <a href="/for/chrome/">Chromebooks</a>.</p>`;
  const faq = [
    {
      question: "Does auto zoom work on any website?",
      answer: "Recordio reads the elements you interact with on the page, so standard web apps with forms, menus, tables and cards give the best results. You can adjust or add zooms in the editor on any recording."
    },
    {
      question: "Can I turn auto zoom off?",
      answer: "Yes. You can disable auto zoom for a recording, and you can delete any single zoom keyframe in the editor while keeping the rest."
    },
    {
      question: "Does the zoom follow my cursor?",
      answer: "No. The zoom frames the input, card or menu you interact with, so it stays steady while you type or move the mouse inside that element. Cursor effects are a separate, optional setting."
    },
    {
      question: "Is auto zoom free?",
      answer: "Yes. Auto zoom and auto spotlight are part of the Free plan. You need a free Recordio account and the Chrome extension."
    }
  ];
  const related = [
    { label: `${captions.name}: word-level captions`, href: captions.href, blurb: captions.blurb },
    { label: `${blur.name} before sharing`, href: blur.href, blurb: blur.blurb },
    { label: "Recordio vs Screen Studio", href: "/compare/screen-studio/", blurb: "Cursor-based zoom on Mac versus element-aware zoom in the browser." },
    { label: "Screen recorder for Chrome", href: "/for/chrome/", blurb: "Runs as an extension in Chrome, Edge and Brave on any OS." },
    { label: "Product walkthrough videos", href: "/use-cases/product-walkthrough-video/", blurb: "How teams record a walkthrough with auto zoom doing the framing." }
  ];
  return renderTemplate`${renderComponent($$result, "FeatureLayout", $$FeatureLayout, { "slug": me.slug, "name": me.name, "title": "Screen Recorder With Automatic Zoom | Recordio", "description": "Recordio zooms to the input, card or menu you interact with, not the cursor. Every zoom is an editable keyframe. Free plan, runs in Chrome, Edge and Brave.", "eyebrow": "Auto zoom", "h1": "A screen recorder with automatic zoom that knows what you clicked", "intro": "Recordio zooms in on the input, card or menu you interact with, not just the pixels under your cursor. Record a product walkthrough in Chrome, Edge or Brave and the zooms are applied for you. Each one is a keyframe you can move, resize or delete in the editor.", "plan": me.plan, "planNote": planNote, "steps": steps, "useCases": useCases, "comparedWith": comparedWith, "faq": faq, "related": related })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/features/auto-zoom.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/features/auto-zoom.astro";
const $$url = "/features/auto-zoom/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AutoZoom,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
