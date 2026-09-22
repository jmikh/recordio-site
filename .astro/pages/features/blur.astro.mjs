import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$FeatureLayout } from '../../chunks/FeatureLayout_BgI6VYOZ.mjs';
import { g as getFeature } from '../../chunks/features_CbJNs_cj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Blur = createComponent(($$result, $$props, $$slots) => {
  const me = getFeature("blur");
  const zoom = getFeature("auto-zoom");
  const team = getFeature("team-library");
  const steps = [
    {
      title: "Blur a region, keep the rest sharp",
      body: `<p>In the editor, draw a rectangle over the region you want hidden and choose blur. Move it, resize it and set when it starts and ends. Add as many regions as you need in one video. The rest of the frame stays sharp at 1080p, or 4K on Pro.</p><p>Record the real product with real data, then decide what leaves the team.</p>`,
      media: { video: "overlays.webm", alt: "A blur overlay covering a customer email in a Recordio recording" }
    },
    {
      title: "Add context next to the blur",
      body: `<p>Overlays include text, arrows and shapes as well as blur, so you can cover a value and label it "customer email" instead of leaving a mystery box. The viewer understands what was there without seeing it.</p><p>The simplified toolbar helps too. It hides your bookmarks, tabs and extensions from the recording, so nothing in the browser chrome leaks either.</p>`
    },
    {
      title: "Screenshots get a flattened blur",
      body: `<p>Recordio also captures screenshots from the extension: the visible area, the full page or a region. The same tools apply in the web app: blur or pixelate, crop, arrows, text and shapes.</p><p>When you share a screenshot link, Recordio serves a flattened image. The blur is baked into the pixels, not a layer someone can peel off.</p>`
    }
  ];
  const useCases = {
    heading: "When the real product has real data in it",
    items: [
      "<strong>Sales demos</strong> recorded in a live account, where the customer list, revenue numbers or API keys belong to someone else.",
      "<strong>Bug reports</strong> that show a real user's session to engineering or a vendor without exposing their name and email.",
      "<strong>Public tutorials and changelogs</strong> cut from internal walkthroughs, where one dashboard tile needs to go.",
      '<strong>Compliance walkthroughs</strong> for auditors and partners, kept in the <a href="' + team.href + '">team library</a> so the approved version is the one people find.'
    ]
  };
  const planNote = `Blur and the other overlays (text, arrows, shapes) are included in the Free plan alongside auto zoom, spotlight and 1080p downloads. Pro adds 4K exports, captions, share links and the team library.`;
  const comparedWith = `<p><a href="/compare/camtasia/">Camtasia</a> handles blur as an annotation on its timeline, and it is thorough: you can position, animate and stack them. That precision comes with a full desktop editor and a learning curve that most product teams do not want for a two-minute walkthrough. <a href="/compare/screencastify/">Screencastify</a> is a Chrome extension like Recordio and has a blur tool in its editor, which suits classrooms well. It does not add <a href="${zoom.href}">auto zoom</a> or spotlight, so the rest of the video stays a raw capture. Recordio puts blur in the same browser editor that already applied the zooms, so hiding a value is one more step, not a different tool.</p>`;
  const faq = [
    {
      question: "Can I blur part of the screen while recording?",
      answer: "Blur is added in the editor after you record. Record naturally, then cover the regions you need before you export or share. Because every recording opens in the web app, there is no extra tool to install."
    },
    {
      question: "Does blur lower the video quality?",
      answer: "No. Only the region you cover is blurred. The rest of the frame exports at the resolution you choose, up to 1080p on Free and 4K on Pro."
    },
    {
      question: "Can a viewer remove the blur?",
      answer: "No. The blur is rendered into the exported video and into the video behind a share link. Shared screenshots are served as a flattened image, so the blur is part of the pixels."
    },
    {
      question: "Is blur free?",
      answer: "Yes. Blur, text, arrows and shapes are part of the Free plan. You need a free Recordio account and the Chrome extension, which also runs in Edge and Brave."
    }
  ];
  const related = [
    { label: `${zoom.name} that frames the right element`, href: zoom.href, blurb: zoom.blurb },
    { label: `${team.name} for the approved version`, href: team.href, blurb: team.blurb },
    { label: "Recordio vs Screencastify", href: "/compare/screencastify/", blurb: "Two Chrome extensions, one adds zoom, spotlight and AutoCut." },
    { label: "Screen recorder for Windows", href: "/for/windows/", blurb: "Runs in Chrome, Edge or Brave on Windows with no desktop install." },
    { label: "Bug report screen recordings", href: "/use-cases/bug-report-screen-recording/", blurb: "Show engineering the real session without exposing the user's data." }
  ];
  return renderTemplate`${renderComponent($$result, "FeatureLayout", $$FeatureLayout, { "slug": me.slug, "name": me.name, "title": "Blur Sensitive Info in Screen Recordings | Recordio", "description": "Blur customer data, keys and dashboards in any region of a screen recording or screenshot before you share it. Included in Recordio's Free plan.", "eyebrow": "Blur", "h1": "Blur sensitive info in screen recordings before anyone else sees it", "intro": "Customer names, API keys, revenue dashboards. Recordio lets you blur any region of a recording or screenshot in the editor, so you can record the real product and still share the video with people outside the team.", "plan": me.plan, "planNote": planNote, "steps": steps, "useCases": useCases, "comparedWith": comparedWith, "faq": faq, "related": related })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/features/blur.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/features/blur.astro";
const $$url = "/features/blur/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blur,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
