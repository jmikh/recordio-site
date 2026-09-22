import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$FeatureLayout } from '../../chunks/FeatureLayout_BgI6VYOZ.mjs';
import { g as getFeature } from '../../chunks/features_CbJNs_cj.mjs';
export { renderers } from '../../renderers.mjs';

const $$AiCaptions = createComponent(($$result, $$props, $$slots) => {
  const me = getFeature("ai-captions");
  const zoom = getFeature("auto-zoom");
  const share = getFeature("share-links");
  const steps = [
    {
      title: "Word-level timing, not a subtitle block",
      body: `<p>Recordio transcribes the voiceover from your recording and times every word to the audio. Captions appear as you say the words, not in chunks that lag a second behind. That matters in a demo where you say "click Save" while clicking Save.</p><p>People watching muted in Slack, on a phone or in an open office can follow without turning the sound on.</p>`,
      media: { video: "captions.webm", alt: "Captions appearing word by word under a Recordio screen recording" }
    },
    {
      title: "Fix a word in place",
      body: `<p>Transcription is good but not perfect on product names, acronyms and customer jargon. Click the word in the caption track, type the correction and move on. The timing stays where it was.</p><p>You can also change the caption font, size, colour and position so the captions match your brand instead of looking like a default overlay.</p>`
    },
    {
      title: "Delete a line to cut the video",
      body: `<p>Captions double as the fastest editor you have. Remove a caption line and Recordio cuts that segment of video and audio. A false start, a tangent or a "hang on, wrong tab" disappears in two clicks with no timeline scrubbing.</p><p>Combined with Smart AutoCut, which removes silence but keeps the pauses while you type or click, most walkthroughs need no other editing.</p>`
    }
  ];
  const useCases = {
    heading: "Videos that get watched with the sound off",
    items: [
      "<strong>Feature announcements</strong> posted in Slack, Notion or a changelog, where most people never unmute.",
      "<strong>Customer onboarding videos</strong> watched by people whose first language is not the one you recorded in.",
      "<strong>Sales demos</strong> forwarded inside the prospect's company, where the second viewer is skimming in a meeting.",
      '<strong>Support replies</strong> that need to be searchable later. Pair captions with a <a href="' + share.href + '">share link</a> so the answer lives at one URL.'
    ]
  };
  const planNote = `AI captions with word-level timing and in-place editing are a Pro feature, at $12 per seat per month billed annually or $15 monthly. The Free plan includes a lightweight local transcription and 1080p downloads.`;
  const comparedWith = `<p><a href="/compare/loom/">Loom</a> generates captions in the cloud in more than 50 languages and shows a transcript on the shared page, which is genuinely useful for search. Captions are not the editing surface, though, so cutting a clip is a separate step in its trimmer. <a href="/compare/tella/">Tella</a> also lets you edit the transcript to cut the recording, which is the same idea Recordio uses, but Tella has no free plan and starts at $19 per user per month. Recordio adds captions on top of <a href="${zoom.href}">auto zoom</a> and spotlight, so the video looks produced before you touch the transcript.</p>`;
  const faq = [
    {
      question: "Are captions burned into the exported video?",
      answer: "Yes. Captions are rendered into the video, so they show wherever you post it, whether that is a Recordio share link, Slack, Notion or YouTube, with no separate subtitle file to attach."
    },
    {
      question: "Can I fix mistakes in the transcription?",
      answer: "Yes. Click any word in the caption track and type the correction. The word-level timing is kept, and you can restyle the captions to match your brand."
    },
    {
      question: "Do I need to record audio separately?",
      answer: "No. Recordio transcribes the microphone audio captured with the recording. Record your voiceover as you walk through the product and the captions are generated from it."
    },
    {
      question: "Are captions included in the Free plan?",
      answer: "Editable captions with word-level timing are a Pro feature. The Free plan includes a lightweight local transcription, auto zoom, spotlight, Smart AutoCut and 1080p downloads."
    }
  ];
  const related = [
    { label: `${zoom.name} on every recording`, href: zoom.href, blurb: zoom.blurb },
    { label: `${share.name}`, href: share.href, blurb: share.blurb },
    { label: "Recordio vs Loom", href: "/compare/loom/", blurb: "Cloud captions in 50+ languages versus editable word-level captions." },
    { label: "Screen recorder for Mac", href: "/for/mac/", blurb: "No desktop app to install. Runs in Chrome, Edge or Brave on macOS." },
    { label: "Customer onboarding videos", href: "/use-cases/customer-onboarding-videos/", blurb: "Onboarding videos that get watched, often with the sound off." }
  ];
  return renderTemplate`${renderComponent($$result, "FeatureLayout", $$FeatureLayout, { "slug": me.slug, "name": me.name, "title": "Screen Recorder With Automatic Captions | Recordio", "description": "Recordio adds AI captions with word-level timing to your screen recordings. Fix a word in place or delete a caption line to cut that segment. Pro feature.", "eyebrow": "AI captions", "h1": "A screen recorder with automatic captions you can edit word by word", "intro": "Recordio transcribes your voiceover and lays captions over the recording with word-level timing. Fix a word in place, restyle the captions, or delete a line to cut that part of the video. Captions are part of Pro.", "plan": me.plan, "planNote": planNote, "steps": steps, "useCases": useCases, "comparedWith": comparedWith, "faq": faq, "related": related })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/features/ai-captions.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/features/ai-captions.astro";
const $$url = "/features/ai-captions/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AiCaptions,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
