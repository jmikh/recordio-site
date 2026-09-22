import { jsxs, jsx } from 'react/jsx-runtime';
import { g as getCWSLink } from './BaseLayout_B_QZKqTv.mjs';
import { t as trackInstallExtension } from './Header_BUQfr5uo.mjs';

const InstallCTA = ({ source, label = "Add to Chrome, it's free", className = "btn-primary text-lg px-8 py-4" }) => /* @__PURE__ */ jsxs(
  "a",
  {
    href: getCWSLink(source),
    target: "_blank",
    rel: "noopener noreferrer",
    className,
    onClick: () => trackInstallExtension(source),
    children: [
      /* @__PURE__ */ jsx("img", { src: "/assets/chrome-store.svg", alt: "", className: "w-5 h-5" }),
      label
    ]
  }
);

const featurePages = [
  {
    slug: "auto-zoom",
    name: "Auto zoom",
    href: "/features/auto-zoom/",
    blurb: "Zooms to the input, card or menu you interact with. Every zoom is an editable keyframe.",
    plan: "Free"
  },
  {
    slug: "ai-captions",
    name: "AI captions",
    href: "/features/ai-captions/",
    blurb: "Word-level captions from your voiceover. Fix a word in place or delete a line to cut the clip.",
    plan: "Pro"
  },
  {
    slug: "blur",
    name: "Blur sensitive info",
    href: "/features/blur/",
    blurb: "Blur any region of a recording or screenshot before you share it outside the team.",
    plan: "Free"
  },
  {
    slug: "share-links",
    name: "Share links with analytics",
    href: "/features/share-links/",
    blurb: "Send a link instead of a file and see view counts and watch time for every video.",
    plan: "Pro"
  },
  {
    slug: "team-library",
    name: "Team library",
    href: "/features/team-library/",
    blurb: "One workspace for every walkthrough, with roles and unlimited viewer seats.",
    plan: "Pro"
  }
];
const getFeature = (slug) => {
  const f = featurePages.find((p) => p.slug === slug);
  if (!f) throw new Error(`Unknown feature slug: ${slug}`);
  return f;
};

export { InstallCTA as I, featurePages as f, getFeature as g };
