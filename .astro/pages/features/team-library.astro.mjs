import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$FeatureLayout } from '../../chunks/FeatureLayout_BgI6VYOZ.mjs';
import { g as getFeature } from '../../chunks/features_CbJNs_cj.mjs';
export { renderers } from '../../renderers.mjs';

const $$TeamLibrary = createComponent(($$result, $$props, $$slots) => {
  const me = getFeature("team-library");
  const share = getFeature("share-links");
  const blur = getFeature("blur");
  const steps = [
    {
      title: "One library for the whole product org",
      body: `<p>Every recording a member makes lands in the workspace library, not in a personal folder on their laptop. Sales can find the latest pricing-page walkthrough. Support can find the fix for the export bug. Product can see what customers are being shown.</p><p>Search by title, open the video and copy its share link from the same place.</p>`
    },
    {
      title: "Roles and collaboration",
      body: `<p>Invite teammates to the workspace with a role. Roles decide who can create and edit recordings and who can only watch, so a contractor can review a demo without being able to change or delete it.</p><p>Recordings can be worked on together, which means the person who recorded a walkthrough is not the only one who can fix a caption or blur a value in it.</p>`
    },
    {
      title: "Unlimited viewer seats",
      body: `<p>You pay per creator seat. People who only watch never need a paid seat and never need an account. A team of five people recording for a company of two hundred watchers costs five seats: $60 per month billed annually.</p><p>That is the difference between a tool the demo team uses and a library the whole company uses.</p>`
    }
  ];
  const useCases = {
    heading: "Teams that record more than one video a week",
    items: [
      "<strong>Sales and customer success</strong> sharing one set of approved demos instead of five slightly different recordings of the same flow.",
      "<strong>Support</strong> building a library of two-minute fixes that agents can link from tickets, with view counts showing which ones get used.",
      "<strong>Product and engineering</strong> posting release walkthroughs where the team can find them next quarter, not scroll back through Slack.",
      '<strong>Agencies and consultancies</strong> keeping client walkthroughs separate, with sensitive values <a href="' + blur.href + '">blurred</a> before a link leaves the building.'
    ]
  };
  const planNote = `The team library, workspace roles and unlimited viewer seats are Pro features, at $12 per seat per month billed annually or $15 monthly, with unlimited projects and no expiry. The Free plan is for one person: up to 5 active projects that expire after 7 days.`;
  const comparedWith = `<p><a href="/compare/loom/">Loom</a> has the most mature workspace in this category, with folders, spaces and admin controls that large companies rely on. It charges $15 to $20 per creator per month, and the videos inside are raw recordings unless someone edits them. <a href="/compare/screen-studio/">Screen Studio</a> is a single-user Mac app. Each person keeps their own project files and there is no shared library, so a team ends up organising exports in a Drive folder. Recordio Pro gives you a shared library and roles at $12 per seat, and every video in it already has auto zoom and spotlight applied. Because it runs in Chrome, Edge and Brave, the Windows, Linux and <a href="/for/chrome/">Chromebook</a> members of the team use the same library as the Mac users.</p>`;
  const faq = [
    {
      question: "Does everyone on the team need a Pro seat?",
      answer: "No. Only people who record and edit need a seat. Viewers are unlimited and free, and they do not need a Recordio account to watch a shared link."
    },
    {
      question: "How much does the team library cost?",
      answer: "The team library is part of Pro: $12 per seat per month billed annually, or $15 per seat per month billed monthly. Five creators on the annual plan come to $60 per month."
    },
    {
      question: "Can my team use it on different operating systems?",
      answer: "Yes. Recordio is a Chrome extension that also runs in Edge and Brave, so members on macOS, Windows, Linux and ChromeOS record into the same workspace library."
    },
    {
      question: "What happens if someone deletes a recording?",
      answer: "On Pro, deleted videos can be restored for 30 days. Pro recordings also do not expire, unlike Free plan videos, which expire after 7 days."
    }
  ];
  const related = [
    { label: `${share.name}`, href: share.href, blurb: share.blurb },
    { label: `${blur.name} before a link goes out`, href: blur.href, blurb: blur.blurb },
    { label: "Recordio vs Loom", href: "/compare/loom/", blurb: "Loom's workspace versus Recordio's team library and unlimited viewer seats." },
    { label: "Screen recorder for Linux", href: "/for/linux/", blurb: "The Linux members of your team use the same extension and library." },
    { label: "Release walkthrough videos", href: "/use-cases/release-walkthrough-video/", blurb: "Feature update videos your team can find next quarter." }
  ];
  return renderTemplate`${renderComponent($$result, "FeatureLayout", $$FeatureLayout, { "slug": me.slug, "name": me.name, "title": "Team Library for Screen Recordings | Recordio", "description": "A shared workspace for your team's screen recordings: one searchable library, roles and unlimited free viewer seats. Recordio Pro, $12 per seat.", "eyebrow": "Team library", "h1": "A team library for screen recordings, so nobody records the same walkthrough twice", "intro": "Recordio Pro gives your team one workspace. Every walkthrough, demo and bug report lands in a shared library with roles, so sales, support and product can find the right video without asking around. Viewer seats are unlimited.", "plan": me.plan, "planNote": planNote, "steps": steps, "useCases": useCases, "comparedWith": comparedWith, "faq": faq, "related": related })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/features/team-library.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/features/team-library.astro";
const $$url = "/features/team-library/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$TeamLibrary,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
