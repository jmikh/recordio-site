import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$UseCaseLayout } from '../../chunks/UseCaseLayout_Y1pI9CXM.mjs';
import { u as useCaseLink } from '../../chunks/use-cases_Hrx8MxSF.mjs';
export { renderers } from '../../renderers.mjs';

const $$SoftwareDemoRecording = createComponent(($$result, $$props, $$slots) => {
  const traits = [
    {
      title: "Under five minutes, opening with the outcome",
      body: "Show the finished dashboard, report or workflow first, then how to get there. A prospect decides whether to keep watching in the first fifteen seconds."
    },
    {
      title: "Realistic data that is not real",
      body: "Use a seeded demo account with believable names and numbers. Anything you cannot seed, blur. A demo with 'Test Customer 3' in every row looks unfinished."
    },
    {
      title: "Framing that follows the story",
      body: "Every click is a chance to direct attention. The zoom should land on the control you are talking about, not the whole window."
    },
    {
      title: "A face for the first thirty seconds",
      body: "A webcam bubble at the start makes it a person talking, not a screensaver. Then let the product carry the rest."
    },
    {
      title: "One link per prospect or segment",
      body: "Send a link, not an attachment. You can see whether it was watched and how far people got before the follow-up call."
    }
  ];
  const steps = [
    {
      feature: "Clean toolbar and webcam",
      title: "Set up the demo account and press record",
      body: "Open the seeded account in a fresh tab and start recording from the extension. The simplified toolbar hides bookmarks, tabs and extension icons, and the webcam bubble adds your face where you want it. It shrinks out of the way when a zoom kicks in."
    },
    {
      feature: "Auto zoom and spotlight",
      title: "Run the demo the way you would live",
      body: "As you click through the flow, Recordio zooms to the field, menu or card you interact with and lifts it forward with a spotlight. You talk; the framing follows. Each zoom is a keyframe you can adjust afterwards if the pacing is off."
    },
    {
      feature: "AutoCut and blur",
      title: "Cut the dead air and hide what should not ship",
      body: "AutoCut trims the pauses where you were finding your next sentence and keeps the ones where you were typing. Blur any region with customer names, API keys or internal URLs. Add a background or a MacBook frame if the demo is going on a landing page."
    },
    {
      feature: "Share link and analytics",
      title: "Send a link and watch the numbers",
      body: "On Pro, publish a share link and drop it in the follow-up email. You get view counts and watch time per video, so you know whether the prospect made it past the pricing section. The team library keeps every rep on the current version of the demo."
    }
  ];
  const example = {
    video: "after",
    caption: "A demo recorded once with auto zoom and spotlight, ready to send without opening a video editor."
  };
  const template = {
    heading: "Demo recording checklist",
    intro: "Run through this before you hit record. Every item here is a retake you will not need.",
    lines: [
      "[ ] Demo account seeded with realistic, non-customer data",
      "[ ] Notifications off, recording in a clean tab",
      "[ ] Open with the outcome the prospect gets, in 15 seconds or less",
      "[ ] Three moments of value, in the order this prospect cares about",
      "[ ] Every click narrated, no silent scrolling",
      "[ ] Blur applied to anything you would not paste into an email",
      "[ ] Close with the next step and who to reply to",
      "[ ] Shared as a link, watch stats checked after 48 hours"
    ]
  };
  const roles = [
    {
      role: "Account executives",
      body: "Send a tailored demo before the call so the call is about their questions, not your screen-share."
    },
    {
      role: "Sales engineers",
      body: "Record the deep-dive once for each integration and stop repeating it for every deal."
    },
    {
      role: "Product marketers",
      body: "Produce launch and landing-page demos in-house without booking a video editor."
    }
  ];
  const faq = [
    {
      question: "What is the best way to record a software demo?",
      answer: "Record in the product itself, from a seeded demo account, in one take of five minutes or less. Open with the outcome, narrate every click, and use a recorder that zooms to what you are showing. Recordio does the zoom, spotlight and silence removal automatically while you record."
    },
    {
      question: "Can I see who watched my demo?",
      answer: "On the Pro plan, every share link reports how many times the video was viewed and how long people watched. That tells you whether a prospect opened it and how far they got, which is usually enough to decide what the follow-up should cover."
    },
    {
      question: "Can I hide customer data in a demo recording?",
      answer: "Yes. Blur any region of the video in the editor, and the simplified toolbar keeps URLs, bookmarks and other tabs out of the recording. Recording from a seeded demo account is still the safest starting point."
    },
    {
      question: "How is Recordio different from Loom for demos?",
      answer: "Loom records the screen and follows the cursor. Recordio reads the page you are recording, so zooms land on the whole input, menu or card, and elements get a spotlight automatically. Both give you a share link with view stats; Recordio Pro is $12 per seat per month billed annually, and people who only watch never need a seat."
    }
  ];
  const related = [
    useCaseLink("product-walkthrough-video"),
    useCaseLink("release-walkthrough-video"),
    // TODO(Plan 07): point at /features/share-links/ once the feature pages land.
    { label: "Share links and every other feature", href: "/#feature-videos", blurb: "See each feature on a short clip." },
    { label: "Recordio vs Loom", href: "/compare/loom/", blurb: "Share links, pricing and where Loom still wins." },
    { label: "Recordio vs Tella", href: "/compare/tella/", blurb: "Two async demo tools compared." },
    { label: "Recordio home", href: "/", blurb: "The screen recorder for product walkthroughs." }
  ];
  return renderTemplate`${renderComponent($$result, "UseCaseLayout", $$UseCaseLayout, { "slug": "software-demo-recording", "title": "Software Demo Recording Tool for Sales and PMs | Recordio", "description": "Record software demos that look as good as your product. Blur data, add captions and share a link with watch stats. Demo checklist for sales and PMs.", "name": "Software demo recording", "h1": "Software demo recording for sales and product teams", "intro": [
    "A live demo is the best way to sell software and the worst way to scale it. Prospects miss the call, reps improvise, and the same twenty minutes get repeated every day. A recorded software demo fixes that, as long as it looks as good as the product it is selling.",
    "Recordio records the demo in your browser and handles the zoom, spotlight and cuts while you talk."
  ], "traitsHeading": "What a good software demo looks like", "traits": traits, "steps": steps, "example": example, "template": template, "roles": roles, "faq": faq, "related": related }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
Most demo recorders fall into two camps. Async video tools like Loom and Tella make sharing easy but record
        a flat screen. Polished recorders like Screen Studio make the video look great but export a file you still
        have to host. Recordio sits between them: the <a href="/compare/loom/">Loom comparison</a> and the
<a href="/compare/screen-studio/">Screen Studio comparison</a> spell out the trade-offs. Because it runs
        in <a href="/for/chrome/">Chrome, Edge and Brave</a>, the whole sales team gets the same recorder whatever
        laptop they carry.
</p> ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/use-cases/software-demo-recording.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/use-cases/software-demo-recording.astro";
const $$url = "/use-cases/software-demo-recording/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$SoftwareDemoRecording,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
