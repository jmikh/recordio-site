import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$UseCaseLayout } from '../../chunks/UseCaseLayout_Y1pI9CXM.mjs';
import { u as useCaseLink } from '../../chunks/use-cases_Hrx8MxSF.mjs';
export { renderers } from '../../renderers.mjs';

const $$ReleaseWalkthroughVideo = createComponent(($$result, $$props, $$slots) => {
  const traits = [
    {
      title: "Two minutes, what changed and why",
      body: "A release walkthrough is not a tour of every ticket. Pick the one or two changes users will notice and explain why they exist."
    },
    {
      title: "Before and after, when the old way still exists",
      body: "Ten seconds of the old workflow makes the new one land. If the old way is gone, say what it used to cost the user."
    },
    {
      title: "Zoomed on the new control",
      body: "People who know the product will spot a change only if the frame points at it. Zoom to the new button, panel or setting the moment you use it."
    },
    {
      title: "Captions and a clear title",
      body: "Release videos get embedded in changelog pages and product emails, where sound is off by default. Captions and a title that names the feature do the work."
    },
    {
      title: "One link for everyone",
      body: "The same video goes to customers, sales, support and the all-hands. One link means one place to update and one set of watch stats."
    }
  ];
  const steps = [
    {
      feature: "Auto zoom and spotlight",
      title: "Record the new feature in the product",
      body: "Open a staging or production account with the release enabled and start recording. As you use the new control, Recordio zooms to it and spotlights it, so viewers who use the product every day see what is different without a red circle drawn around it."
    },
    {
      feature: "AutoCut and captions",
      title: "Cut it down and caption it",
      body: "AutoCut removes the pauses and keeps the interactions. On Pro, AI captions with word-level timing are generated from your narration; fix the feature name if the model got it wrong, and delete a caption line to cut any sentence you regret."
    },
    {
      feature: "Backgrounds and device frames",
      title: "Dress it for where it is going",
      body: "For a public changelog or a launch email, add a background, a MacBook frame and a track from the music library. For the internal update, skip all of that and share the plain recording. Same recording either way."
    },
    {
      feature: "Share link and team library",
      title: "Post one link everywhere",
      body: "On Pro, publish a share link and use it in the changelog, the customer email and the sales channel. Watch time tells you whether customers made it to the part that explains the new setting. The video lands in the team library, so support can find it when the tickets arrive."
    }
  ];
  const example = {
    video: "spotlight",
    caption: "Auto spotlight lifting the new panel forward while the rest of the page dims, applied while recording."
  };
  const template = {
    heading: "Release walkthrough script",
    intro: "Two minutes, six beats. Write one line per beat before you record and you will not need a second take.",
    lines: [
      "Title: [Feature name] is now in [product]",
      "",
      "0:00  What shipped, in one sentence, and who it is for",
      "0:10  The problem it fixes (show the old way if it still exists)",
      "0:30  The new way, click by click",
      "1:20  One detail people will miss (a setting, a shortcut, a limit)",
      "1:40  What is not in this release, if people will ask",
      "1:50  Where to read more and how to send feedback"
    ]
  };
  const roles = [
    {
      role: "Product managers",
      body: "Close every release with a video so the rest of the company hears about it from you, not from a ticket."
    },
    {
      role: "Product marketing managers",
      body: "Get a changelog-ready video the day a feature ships instead of two weeks after."
    },
    {
      role: "Engineering leads",
      body: "Show the team what you built, in the product, without writing a deck."
    }
  ];
  const faq = [
    {
      question: "What is the difference between a release walkthrough and a changelog?",
      answer: "A changelog lists everything that changed. A release walkthrough shows the one or two changes that matter, in the product, in about two minutes. Publish both: the changelog for completeness, the video for the people who would otherwise skim past it."
    },
    {
      question: "How often should we record release videos?",
      answer: "Whenever a release changes something users can see. Teams that ship weekly often record a short video per notable feature and a monthly roundup that links to them. Because Recordio handles zoom, spotlight and cuts while you record, a two-minute video takes about ten minutes to make."
    },
    {
      question: "Can I reuse the same video for customers and internal teams?",
      answer: "Yes. On Pro, one share link works in the public changelog, the customer email and the internal channel, and the video sits in the team library where sales and support can find it. If the internal version needs more detail, record a second short clip rather than a longer one."
    },
    {
      question: "What if the feature changes after I record?",
      answer: "Re-record it. Release videos are short by design, so a new take is a ten-minute job. On the free plan videos expire after 7 days; on Pro they stay until you delete them, with a 30-day restore if you change your mind."
    }
  ];
  const related = [
    useCaseLink("product-walkthrough-video"),
    useCaseLink("customer-onboarding-videos"),
    // TODO(Plan 07): point at /features/ai-captions/ once the feature pages land.
    { label: "Captions and every other feature", href: "/#feature-videos", blurb: "See each feature on a short clip." },
    { label: "Recordio vs Screen Studio", href: "/compare/screen-studio/", blurb: "Polished release videos, with or without a Mac app." },
    { label: "Recordio home", href: "/", blurb: "The screen recorder for product walkthroughs." }
  ];
  return renderTemplate`${renderComponent($$result, "UseCaseLayout", $$UseCaseLayout, { "slug": "release-walkthrough-video", "title": "Release Walkthrough and Feature Update Videos | Recordio", "description": "Record a two-minute release walkthrough for every feature update. Auto zoom on what changed, captions and one share link for customers and internal teams.", "name": "Release walkthrough videos", "h1": "Release walkthrough and feature update videos", "intro": [
    "Every release has the same problem. Engineering shipped it, and nobody else knows what changed. The changelog entry gets skimmed. A release walkthrough video gets watched, because it shows the new thing inside the product in two minutes.",
    "Recordio is built so that video takes ten minutes to make, not an afternoon."
  ], "traitsHeading": "What a good release walkthrough looks like", "traits": traits, "steps": steps, "example": example, "template": template, "roles": roles, "faq": faq, "related": related }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
Teams often reach for Screen Studio when a launch video needs to look polished. It produces beautiful
        output, and it is a Mac app that exports a file; the <a href="/compare/screen-studio/">Screen Studio
        comparison</a> covers where each tool wins. Recordio records in <a href="/for/chrome/">Chrome, Edge or
        Brave</a> on any operating system and adds the zoom, spotlight and captions while you record, then gives
        you a link. If the release also changes a setup step, update the matching
<a href="/use-cases/customer-onboarding-videos/">onboarding video</a> at the same time.
</p> ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/use-cases/release-walkthrough-video.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/use-cases/release-walkthrough-video.astro";
const $$url = "/use-cases/release-walkthrough-video/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ReleaseWalkthroughVideo,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
