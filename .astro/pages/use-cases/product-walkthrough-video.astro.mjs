import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$UseCaseLayout } from '../../chunks/UseCaseLayout_Y1pI9CXM.mjs';
import { u as useCaseLink } from '../../chunks/use-cases_Hrx8MxSF.mjs';
export { renderers } from '../../renderers.mjs';

const $$ProductWalkthroughVideo = createComponent(($$result, $$props, $$slots) => {
  const traits = [
    {
      title: "Two to four minutes, one job per video",
      body: "A walkthrough covers one feature or one task. If it needs chapters, it should be two videos. Short videos get finished, and they are cheap to re-record when the UI changes."
    },
    {
      title: "The viewer can always see what you clicked",
      body: "A full-screen capture of a 1440p window turns every button into a speck. Good walkthroughs zoom to the field, menu or card in play, and pull back when you move on."
    },
    {
      title: "A clean frame",
      body: "No bookmark bar, no forty tabs, no notification popping in at 0:42. The viewer should see your product and nothing else."
    },
    {
      title: "Captions on",
      body: "Most walkthroughs get watched muted, in a Slack thread or a docs page. Captions carry the explanation when the audio is off."
    },
    {
      title: "Shared as a link, not a file",
      body: "A link can be embedded, found again and measured. An MP4 dropped into a thread is gone within a week."
    }
  ];
  const steps = [
    {
      feature: "Auto zoom",
      title: "Press record and walk through the feature",
      body: "Install the extension, open the page and start recording. As you click into an input, open a menu or hover a card, Recordio reads the page structure and zooms to that element. Every zoom is an editable keyframe, so you can move or delete any that fired where you did not want it."
    },
    {
      feature: "Spotlight and clean toolbar",
      title: "Let the frame clean itself up",
      body: "The element you interact with lifts forward with a 3D spotlight while the rest of the page dims. The simplified toolbar hides bookmarks, tabs and extension icons. You get a tidy frame without setting up a separate Chrome profile."
    },
    {
      feature: "AutoCut and captions",
      title: "Tighten it without a timeline",
      body: "Smart AutoCut removes the pauses where you were thinking but keeps the ones where you were typing or clicking. On Pro, AI captions are generated with word-level timing. Fix a word in place, or delete a caption line to cut that segment from the video."
    },
    {
      feature: "Share link and team library",
      title: "Share a link and file it where the team can find it",
      body: "Download at 1080p on Free or up to 4K on Pro. On Pro, publish a share link with view counts and watch time, and the video lands in your team library where sales, support and product can find it. Viewer seats are unlimited, so nobody needs a paid seat to watch."
    }
  ];
  const example = {
    video: "zoom",
    caption: "Auto zoom framing the form field in play, recorded in one take with no editing."
  };
  const template = {
    heading: "Walkthrough script template",
    intro: "Fill in the brackets, read it once, then record. Two minutes of prep saves three retakes.",
    lines: [
      "Title: How to [do the job] in [product]",
      "",
      "0:00  One sentence: what this shows and who it is for",
      "0:10  Where to start (name the page or menu)",
      "0:20  Do the job, narrating each click as you make it",
      "1:30  The result: show what changed",
      "1:45  One common mistake and how to avoid it",
      "2:00  Where to go next (a doc, a related walkthrough, or who to ask)",
      "",
      "Before you record: close other tabs, mute notifications, open a demo account."
    ]
  };
  const roles = [
    {
      role: "Product managers",
      body: "Ship a walkthrough with every feature so sales and support stop asking you to demo it on a call."
    },
    {
      role: "Customer success",
      body: "Send the same walkthrough to ten customers instead of running ten screen-shares."
    },
    {
      role: "Founders",
      body: "Record how the product works once and reuse it for hiring, investors and early customers."
    }
  ];
  const faq = [
    {
      question: "How long should a product walkthrough video be?",
      answer: "Two to four minutes. Cover one feature or one task per video. If you need to show a longer process, split it into a short series; each part is easier to watch, easier to find later and cheaper to re-record when the product changes."
    },
    {
      question: "Do I need to edit the video after recording?",
      answer: "Usually not. Auto zoom, spotlight, the clean toolbar and AutoCut are applied while you record. Open the editor when you want to adjust a zoom keyframe, blur a region, fix a caption or add a background. Most walkthroughs are ready to share in a minute or two."
    },
    {
      question: "Can I record a walkthrough of a desktop app?",
      answer: "Recordio runs as a Chrome extension and is built for web apps. You can record a window or your whole screen, but auto zoom and spotlight rely on reading the web page, so for a desktop app you would add zooms manually in the editor."
    },
    {
      question: "Is Recordio free for product walkthroughs?",
      answer: "Yes. The free plan needs an account but no card, and includes auto zoom, spotlight, AutoCut and 1080p downloads for up to 5 active projects, with videos kept for 7 days. Pro adds share links with analytics, AI captions, 4K exports, cloud rendering, the team library and no expiry."
    }
  ];
  const related = [
    useCaseLink("software-demo-recording"),
    useCaseLink("customer-onboarding-videos"),
    // TODO(Plan 07): point at /features/auto-zoom/ once the feature pages land.
    { label: "Auto zoom and the other features", href: "/#feature-videos", blurb: "See every feature on a short clip." },
    { label: "Recordio vs Loom", href: "/compare/loom/", blurb: "How the two compare for walkthroughs and share links." },
    { label: "Recordio home", href: "/", blurb: "The screen recorder for product walkthroughs." }
  ];
  return renderTemplate`${renderComponent($$result, "UseCaseLayout", $$UseCaseLayout, { "slug": "product-walkthrough-video", "title": "Product Walkthrough Videos for SaaS Teams | Recordio", "description": "Record product walkthrough videos that get finished. Auto zoom, spotlight, captions and share links from a Chrome extension, plus a script template.", "name": "Product walkthrough videos", "h1": "Product walkthrough videos for SaaS teams", "intro": [
    "You need to show someone how a feature works. A written doc takes an hour and nobody reads it. A call takes thirty minutes of two people's time. A product walkthrough video takes five minutes to record and can be watched by everyone who needs it, whenever they need it.",
    "The hard part has always been making one that looks good without editing. That is what Recordio is for."
  ], "traitsHeading": "What a good product walkthrough looks like", "traits": traits, "steps": steps, "example": example, "template": template, "roles": roles, "faq": faq, "related": related }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
Recordio is a <a href="/">cloud screen recorder for teams</a> that runs as a Chrome extension, so the same
        walkthrough workflow works on <a href="/for/mac/">Mac</a>, <a href="/for/windows/">Windows</a> and
<a href="/for/linux/">Linux</a>. If your team records walkthroughs in Loom today, the
<a href="/compare/loom/">Recordio vs Loom comparison</a> covers what changes: zoom and spotlight are
        automatic, and people who only watch never need a paid seat.
</p> ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/use-cases/product-walkthrough-video.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/use-cases/product-walkthrough-video.astro";
const $$url = "/use-cases/product-walkthrough-video/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ProductWalkthroughVideo,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
