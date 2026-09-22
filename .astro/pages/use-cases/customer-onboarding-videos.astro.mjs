import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$UseCaseLayout } from '../../chunks/UseCaseLayout_Y1pI9CXM.mjs';
import { u as useCaseLink } from '../../chunks/use-cases_Hrx8MxSF.mjs';
export { renderers } from '../../renderers.mjs';

const $$CustomerOnboardingVideos = createComponent(($$result, $$props, $$slots) => {
  const traits = [
    {
      title: "One video per setup step, each under three minutes",
      body: "Connect your data, invite your team, set up the first report. Each is its own video with its own link. Nobody wants a twenty-minute tour on day one."
    },
    {
      title: "Starts where the customer starts",
      body: "Record from the empty state, not from a fully configured account. The customer needs to recognise their own screen in the first five seconds."
    },
    {
      title: "Framed on the field being filled",
      body: "Setup means forms. The video should zoom to the field, dropdown or toggle in play so the customer can read the label and copy what you did."
    },
    {
      title: "Captions, because they will be embedded",
      body: "Onboarding videos live in welcome emails, help-centre articles and in-app panels. Captions make them work when the sound is off."
    },
    {
      title: "Kept in one library so they stay current",
      body: "When a setup screen changes, you should know exactly which video to re-record. A shared library with one video per step makes that a five-minute job instead of an audit."
    }
  ];
  const steps = [
    {
      feature: "Auto zoom and spotlight",
      title: "Record the step from a fresh account",
      body: "Open a new workspace, start recording from the extension and complete the step as a customer would. Recordio zooms to each field you fill and spotlights the control you interact with, so the customer can follow along without pausing."
    },
    {
      feature: "AutoCut and captions",
      title: "Trim it and caption it",
      body: "AutoCut removes the pauses while keeping the moments where you were typing. On Pro, generate AI captions with word-level timing, fix any product names the model got wrong, and delete a caption line to cut that segment."
    },
    {
      feature: "Blur and backgrounds",
      title: "Make it safe and make it fit",
      body: "Blur anything specific to the account you recorded from. Add a background that matches your help centre or email template so the video does not look like a stray screen capture."
    },
    {
      feature: "Share link and team library",
      title: "Put the link where the customer will see it",
      body: "On Pro, publish a share link and use it in the welcome email, the help article and the in-app checklist. Watch time shows you where customers stop, which is usually the step that needs a better video. The team library keeps customer success working from the same set."
    }
  ];
  const example = {
    video: "captions",
    caption: "Word-level captions on an onboarding step, editable in place before the link goes into the welcome email."
  };
  const template = {
    heading: "Onboarding video series plan",
    intro: "Five videos cover most products. Replace the brackets with your own setup steps and record them in order.",
    lines: [
      "1. Welcome (60s): what the product does and the first thing to do",
      "2. Setup step 1: [connect your data / import / install]",
      "3. Setup step 2: [invite your team / set permissions]",
      "4. First win: the first useful result they can get today",
      "5. Where to get help: docs, support hours, who replies",
      "",
      "For each video: one step, under 3 minutes, captions on, shared as a link.",
      "Review the set every release: re-record any step whose screen changed."
    ]
  };
  const roles = [
    {
      role: "Customer success managers",
      body: "Replace the standard kickoff call with a series the customer can watch before you meet."
    },
    {
      role: "Support leads",
      body: "Answer 'how do I set up X' with a link instead of a paragraph, and see whether it was watched."
    },
    {
      role: "Product-led growth teams",
      body: "Put a two-minute video on every empty state and measure which ones move activation."
    }
  ];
  const faq = [
    {
      question: "How long should customer onboarding videos be?",
      answer: "Under three minutes each, with one setup step per video. A series of five short videos gets watched; a single fifteen-minute tour gets bookmarked and forgotten. Short videos are also much cheaper to re-record when the product changes."
    },
    {
      question: "Where should I put onboarding videos?",
      answer: "In the welcome email, the matching help-centre article and the in-app empty state or checklist. On Recordio Pro, each video has a share link you can use in all three places. On the free plan you can download the video at 1080p and host it yourself."
    },
    {
      question: "How do I know whether customers watch them?",
      answer: "Pro share links report view counts and watch time for each video. If a step is opened often but watched for twenty seconds, the video is not answering the question and is worth re-recording."
    },
    {
      question: "Do I need to re-record when the product changes?",
      answer: "Only the video for the step that changed. Because each step is its own short recording and the team library shows them all in one place, updating onboarding after a release takes minutes rather than a full content audit."
    }
  ];
  const related = [
    useCaseLink("product-walkthrough-video"),
    useCaseLink("release-walkthrough-video"),
    // TODO(Plan 07): point at /features/ai-captions/ once the feature pages land.
    { label: "AI captions and every other feature", href: "/#feature-videos", blurb: "See each feature on a short clip." },
    { label: "Recordio vs Loom", href: "/compare/loom/", blurb: "How the two compare for onboarding videos." },
    { label: "Recordio home", href: "/", blurb: "The screen recorder for product walkthroughs." }
  ];
  return renderTemplate`${renderComponent($$result, "UseCaseLayout", $$UseCaseLayout, { "slug": "customer-onboarding-videos", "title": "Customer Onboarding Videos That Get Watched | Recordio", "description": "Short customer onboarding videos, one per setup step. Record from Chrome, get auto zoom and captions, share links you can measure. Series plan included.", "name": "Customer onboarding videos", "h1": "Customer onboarding videos that get watched", "intro": [
    "The first week decides whether a new customer stays. Most onboarding content is a forty-page help centre nobody opens and a kickoff call that covers too much. Short onboarding videos work because they show the one thing the customer needs right now, in the product they just signed up for.",
    "The trick is making them fast enough that you keep them current. That is where Recordio fits."
  ], "traitsHeading": "What a good onboarding video looks like", "traits": traits, "steps": steps, "example": example, "template": template, "roles": roles, "faq": faq, "related": related }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
Onboarding videos are <a href="/use-cases/product-walkthrough-video/">product walkthroughs</a> with a
        stricter brief: the viewer is new, in a hurry and probably on mute. Recordio's auto zoom reads the page
        rather than following the cursor, so each form field is framed whole, which is the difference between a
        customer copying your setup and squinting at it. The <a href="/compare/loom/">Loom comparison</a> covers
        why that matters, and the <a href="/for/chrome/">Chrome page</a> explains how the extension records from
        any browser tab.
</p> ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/use-cases/customer-onboarding-videos.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/use-cases/customer-onboarding-videos.astro";
const $$url = "/use-cases/customer-onboarding-videos/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CustomerOnboardingVideos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
