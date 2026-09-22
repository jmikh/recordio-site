import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$UseCaseLayout } from '../../chunks/UseCaseLayout_Y1pI9CXM.mjs';
import { u as useCaseLink } from '../../chunks/use-cases_Hrx8MxSF.mjs';
export { renderers } from '../../renderers.mjs';

const $$BugReportScreenRecording = createComponent(($$result, $$props, $$slots) => {
  const traits = [
    {
      title: "Under ninety seconds, from a known starting point",
      body: "Start on a page the engineer can open too, do the steps that trigger the bug, stop. A long recording hides the reproduction inside the retries."
    },
    {
      title: "The click is visible",
      body: "Engineers ask 'where exactly did you click?' because most recordings do not show it. Zoom to the control that misbehaved so the answer is on screen."
    },
    {
      title: "Nothing sensitive in frame",
      body: "Customer emails, tokens, invoice amounts and URLs with account IDs get blurred before the link leaves the support tool."
    },
    {
      title: "Expected versus actual, said out loud",
      body: "'I clicked save and expected the toast; instead the page reloaded.' One sentence of narration or captions turns a clip into a bug report."
    },
    {
      title: "Filed where the ticket lives",
      body: "A link in Jira, Linear or GitHub, plus an annotated screenshot for the thumbnail. Attachments get lost; links get clicked."
    }
  ];
  const steps = [
    {
      feature: "Auto zoom and spotlight",
      title: "Record the reproduction",
      body: "Open the page where the bug happens and start recording from the extension. As you click the button or fill the field that misbehaves, Recordio zooms to it and spotlights it, so the engineer sees the exact control without you pointing at it. The clean toolbar keeps your other tabs out of the video."
    },
    {
      feature: "Smart AutoCut",
      title: "Cut the retries, keep the clicks",
      body: "AutoCut removes the pauses where you were reading the console or deciding what to try next, and keeps the stretches where you were typing or clicking. A three-minute recording with two failed attempts becomes a sixty-second reproduction."
    },
    {
      feature: "Blur",
      title: "Blur what the engineer does not need",
      body: "Draw a blur over the customer's name, the account ID in the URL or the payment table. The blurred region stays blurred in the export and on the watch page."
    },
    {
      feature: "Share link and screenshots",
      title: "Link it in the ticket, add a screenshot",
      body: "On Pro, paste the share link into the ticket; anyone with the link can watch. On Free, download the 1080p file. For a visual bug that does not need motion, use Recordio's screenshot capture instead: grab the visible area, the full page or a region, add an arrow or a rectangle, blur what you must, then copy it to the clipboard or share a link."
    }
  ];
  const example = {
    video: "overlays",
    caption: "Blur over the sensitive region and a callout on the control that failed, added in the editor before sharing."
  };
  const template = {
    heading: "Bug report template",
    intro: "Paste this into the ticket and fill it in. The recording answers most of it; the template makes sure the rest is there.",
    lines: [
      "Title: [Feature]: [what breaks] when [action]",
      "",
      "Environment: browser and version, OS, workspace or account, plan",
      "Steps to reproduce:",
      "  1. Go to ...",
      "  2. Click ...",
      "  3. Enter ...",
      "Expected: ...",
      "Actual: ...",
      "Frequency: always / sometimes / once",
      "",
      "Recording: [Recordio link]",
      "Screenshot: [annotated screenshot, if the bug is visual]",
      "Console errors: [paste, if any]"
    ]
  };
  const roles = [
    {
      role: "Support agents",
      body: "Turn a customer's description into a reproduction the engineer can act on the same day."
    },
    {
      role: "QA engineers",
      body: "Attach a sixty-second clip to every failed test case instead of writing the steps twice."
    },
    {
      role: "Product managers",
      body: "Triage faster when every ticket in the queue shows the bug instead of describing it."
    }
  ];
  const faq = [
    {
      question: "What should a bug report screen recording include?",
      answer: "The page you started on, the exact steps that trigger the bug, what you expected and what happened instead. Keep it under ninety seconds and zoom to the control that failed. Add the browser, OS and account in the ticket text, since the video will not show them."
    },
    {
      question: "Can I blur customer data before sending the recording?",
      answer: "Yes. In the Recordio editor you can blur any region of the video, and the blur is baked into the export and the watch page. The simplified toolbar also keeps URLs and other tabs out of the recording while you capture."
    },
    {
      question: "Should I send a screenshot or a video?",
      answer: "A video when the bug involves behaviour: a click that does nothing, a form that resets, a slow response. A screenshot when it is visual: a misaligned layout, a typo, a wrong number. Recordio does both from the same extension, and screenshots can be annotated with arrows, rectangles and blur before you share them."
    },
    {
      question: "Do engineers need Recordio to watch the recording?",
      answer: "No. The person recording needs a Recordio account, but on Pro the share link opens a public watch page that anyone can view without installing anything. On the free plan, download the 1080p file and attach it to the ticket."
    }
  ];
  const related = [
    useCaseLink("software-demo-recording"),
    useCaseLink("product-walkthrough-video"),
    // TODO(Plan 05): link /screenshots/ here once the screenshots page lands.
    // TODO(Plan 07): point at /features/blur/ once the feature pages land.
    { label: "Blur and every other feature", href: "/#feature-videos", blurb: "See each feature on a short clip." },
    { label: "Recordio vs Screenity", href: "/compare/screenity/", blurb: "Two Chrome extensions for quick recordings compared." },
    { label: "Screen recorder for Chrome", href: "/for/chrome/", blurb: "How the extension records any tab or window." },
    { label: "Recordio home", href: "/", blurb: "The screen recorder for product walkthroughs." }
  ];
  return renderTemplate`${renderComponent($$result, "UseCaseLayout", $$UseCaseLayout, { "slug": "bug-report-screen-recording", "title": "Bug Report Screen Recording for Support and QA | Recordio", "description": "Record a bug reproduction in under 90 seconds, blur customer data and drop a link or annotated screenshot into the ticket. Template included.", "name": "Bug report screen recordings", "h1": "Bug report screen recording for support and QA", "intro": [
    "'It doesn't work' is not a bug report. Neither is three paragraphs describing a button. A sixty-second screen recording shows the engineer what was clicked, what the page did and what should have happened instead, and it does that faster than either side can type.",
    "Recordio makes the recording clear enough that nobody has to reply 'where did you click?'."
  ], "traitsHeading": "What a good bug report recording looks like", "traits": traits, "steps": steps, "example": example, "template": template, "roles": roles, "faq": faq, "related": related }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
Bug reports are the one recording where framing matters more than polish. Recordio's auto zoom reads the
        page structure instead of chasing the cursor, so the frame lands on the whole button, input or menu that
        failed. Lightweight Chrome recorders such as Screenity capture the tab well but leave you to crop and
        annotate afterwards; the <a href="/compare/screenity/">Screenity comparison</a> goes through the
        differences. The same extension records on <a href="/for/mac/">Mac</a>, <a href="/for/windows/">Windows</a>
and <a href="/for/linux/">Linux</a>, so support and engineering are looking at the same kind of clip.
</p> ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/use-cases/bug-report-screen-recording.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/use-cases/bug-report-screen-recording.astro";
const $$url = "/use-cases/bug-report-screen-recording/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$BugReportScreenRecording,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
