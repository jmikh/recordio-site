import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BMmOTL_5.mjs';
import { H as Header, F as Footer } from '../../chunks/Footer_CETPJvN_.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_DNl1Z9iS.mjs';
import { P as PlatformHero } from '../../chunks/PlatformHero_aSIttFzv.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { P as PlatformSteps } from '../../chunks/PlatformSteps_B3b7AAn7.mjs';
import { P as Pricing } from '../../chunks/Pricing_FQzwYBKa.mjs';
import { F as FAQ } from '../../chunks/FAQ_DdSn-1-7.mjs';
import { R as RelatedLinks } from '../../chunks/RelatedLinks_DlwSg6Vn.mjs';
export { renderers } from '../../renderers.mjs';

const PlatformSupportGrid = ({
  eyebrow = "Compatibility",
  heading,
  intro,
  items,
  notes = [],
  variant = "white",
  id = "compatibility"
}) => {
  const sectionClass = variant === "white" ? "section-panel-white" : "section-panel";
  return /* @__PURE__ */ jsx("section", { id, className: `${sectionClass} py-20 px-6`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: heading }),
      intro && /* @__PURE__ */ jsx("p", { className: "section-subtitle mt-4", children: intro })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4", children: items.map((item) => /* @__PURE__ */ jsxs(
      "li",
      {
        className: "rounded-2xl border border-border bg-surface-overlay/40 p-5",
        children: [
          /* @__PURE__ */ jsx("span", { className: "block font-semibold text-text-highlighted", children: item.name }),
          item.note && /* @__PURE__ */ jsx("span", { className: "block mt-1 text-sm text-text-muted", children: item.note })
        ]
      },
      item.name
    )) }),
    notes.length > 0 && /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 mt-10", children: notes.map((n) => /* @__PURE__ */ jsxs("div", { className: "card-premium", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-text-highlighted mb-3", children: n.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-text-muted leading-relaxed", children: n.body })
    ] }, n.heading)) })
  ] }) });
};

const CheckIcon = ({ highlighted }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className: `w-5 h-5 ${highlighted ? "text-secondary" : "text-text-muted"}`,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    "aria-label": "Yes",
    role: "img",
    children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" })
  }
);
const DashIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    className: "w-5 h-5 text-text-muted opacity-40",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    "aria-label": "No",
    role: "img",
    children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 12h14" })
  }
);
const renderCell = (value, isRecordio) => {
  if (typeof value === "boolean") {
    return value ? /* @__PURE__ */ jsx(CheckIcon, { highlighted: isRecordio }) : /* @__PURE__ */ jsx(DashIcon, {});
  }
  return /* @__PURE__ */ jsx("span", { className: `text-sm font-medium ${isRecordio ? "text-text-highlighted" : "text-text-muted"}`, children: value });
};
const PlatformToolTable = ({
  eyebrow = "Compare",
  heading,
  intro,
  tools,
  rows,
  variant = "white",
  id = "comparison"
}) => {
  const sectionClass = variant === "white" ? "section-panel-white" : "section-panel";
  const featureWidth = 22;
  const toolWidth = (100 - featureWidth) / tools.length;
  return /* @__PURE__ */ jsx("section", { id, className: `${sectionClass} py-20 px-6`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: heading }),
      intro && /* @__PURE__ */ jsx("p", { className: "section-subtitle mt-4", children: intro })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "compare-table-wrapper", children: /* @__PURE__ */ jsxs("table", { className: "compare-table", style: { minWidth: 820 }, children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "compare-th compare-th--feature", style: { width: `${featureWidth}%` }, children: "Feature" }),
        tools.map((tool, i) => /* @__PURE__ */ jsxs(
          "th",
          {
            className: `compare-th ${i === 0 ? "compare-th--recordio" : "compare-th--competitor"}`,
            style: { width: `${toolWidth}%` },
            children: [
              i === 0 && /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/favicon-32x32.png",
                  alt: "",
                  className: "w-5 h-5 rounded inline-block mr-2 -mt-0.5"
                }
              ),
              tool
            ]
          },
          tool
        ))
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: rows.map((row) => /* @__PURE__ */ jsxs("tr", { className: "compare-row", children: [
        /* @__PURE__ */ jsxs("td", { className: "compare-td compare-td--feature", children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium text-text-highlighted text-sm", children: row.feature }),
          row.description && /* @__PURE__ */ jsx("div", { className: "text-xs text-text-muted mt-0.5", children: row.description })
        ] }),
        row.values.map((value, i) => /* @__PURE__ */ jsx(
          "td",
          {
            className: `compare-td ${i === 0 ? "compare-td--recordio" : "compare-td--competitor"}`,
            children: renderCell(value, i === 0)
          },
          i
        ))
      ] }, row.feature)) })
    ] }) })
  ] }) });
};

const $$Linux = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { label: "Distros", href: "#compatibility" },
    { label: "Compare", href: "#comparison" },
    { label: "How to record", href: "#how-to-record" },
    { label: "Pricing", href: "#pricing" }
  ];
  const distros = [
    { name: "Ubuntu", note: "22.04 LTS, 24.04 LTS and newer" },
    { name: "Fedora", note: "Workstation, GNOME on Wayland" },
    { name: "Debian", note: "12 Bookworm and newer" },
    { name: "Arch Linux", note: "Plus Manjaro and EndeavourOS" },
    { name: "Pop!_OS", note: "GNOME or COSMIC" },
    { name: "Linux Mint", note: "Cinnamon, MATE or Xfce" },
    { name: "openSUSE", note: "Tumbleweed and Leap" },
    { name: "Anything else", note: "If it runs a Chromium browser, it runs Recordio" }
  ];
  const distroNotes = [
    {
      heading: "Requirements",
      body: "Google Chrome, Chromium, Microsoft Edge or Brave. Install the browser the way your distro prefers, then add Recordio from the Chrome Web Store. There is nothing else to install with apt, dnf, pacman, snap or flatpak. No PPA, no kernel module, no sudo."
    },
    {
      heading: "One recorder for a mixed team",
      body: "A Linux engineer and a Mac product manager record into the same team library, with the same auto zoom, the same captions and the same share links. Nobody converts files or picks a different tool per operating system."
    }
  ];
  const tools = ["Recordio", "OBS Studio", "SimpleScreenRecorder", "Kazam"];
  const toolRows = [
    {
      feature: "Capture target",
      values: [
        "Browser tab, window or screen",
        "Any screen, window or source, arranged in scenes",
        "Screen, region or OpenGL app",
        "Screen, window or area"
      ]
    },
    {
      feature: "Setup",
      values: [
        "Install the extension, sign in",
        "Install, build scenes and sources, pick an encoder",
        "Install from your repo, pick input and codec",
        "Install from your repo, pick a mode"
      ]
    },
    {
      feature: "Wayland",
      values: ["Yes, through the browser", "Yes, PipeWire", "X11 only", "Yes, desktop portal"]
    },
    {
      feature: "Auto zoom",
      description: "Frames the field, card or menu you use",
      values: ["DOM-aware, every zoom editable", false, false, false]
    },
    {
      feature: "Captions",
      values: ["AI captions, word-level, editable (Pro)", false, false, false]
    },
    {
      feature: "Share link",
      values: ["Link with view analytics (Pro)", "Saves a file", "Saves a file", "Saves a file"]
    },
    {
      feature: "Team library",
      values: ["Shared workspace with roles (Pro)", false, false, false]
    },
    {
      feature: "Output",
      values: ["1080p free, up to 4K on Pro", "Raw MKV or MP4", "Raw MKV, MP4 or WebM", "MP4 or WebM"]
    },
    {
      feature: "Best for",
      values: ["Product walkthroughs and demos", "Streaming and gaming", "Lightweight raw capture", "Quick clips"]
    },
    {
      feature: "Price",
      values: ["Free, or Pro at $12 per seat per month billed annually", "Free, open source", "Free, open source", "Free, open source"]
    }
  ];
  const steps = [
    {
      title: "Install the extension",
      body: "Open the Chrome Web Store in Chrome, Chromium, Edge or Brave on Ubuntu and add Recordio. It installs under your user account. No package manager, no sudo, no restart."
    },
    {
      title: "Sign in with a free account",
      body: "Click the Recordio icon in the toolbar and sign in. The free account gives you up to 5 active projects, 1080p downloads and browser rendering. No card is needed."
    },
    {
      title: "Choose the tab and record",
      body: "Pick the tab with the product you want to walk through and hit record. Tab capture is what lets Recordio read the page and frame each input, card or menu with auto zoom and spotlight as you click."
    },
    {
      title: "Review, then share the link",
      body: "Stop recording and the project opens in the web app. Silence is already cut, zooms are already placed and each one is an editable keyframe. Download the file, or on Pro share a link and see who watched."
    }
  ];
  const linuxFaq = [
    {
      question: "Does Recordio work on Wayland?",
      answer: "Yes. Recordio records through the browser's own capture, so it works in a Wayland session on GNOME or KDE as well as on X11. Tab recording, which auto zoom and spotlight rely on, never touches the compositor. Window and full-screen capture go through the desktop portal, so your desktop shows a picker when you start."
    },
    {
      question: "Can I record my microphone and system audio on Linux?",
      answer: "Microphone, yes: Recordio uses whichever input your browser sees through PipeWire or PulseAudio. System audio, yes when you record a tab, because the browser captures that tab's sound. Full-screen recordings on Linux capture the microphone but not desktop audio."
    },
    {
      question: "Do I need root or sudo to install Recordio?",
      answer: "No. Recordio is a browser extension, so it installs in your browser profile under your own user. There is no package, PPA, kernel module or system service, and nothing needs sudo. That also makes it usable on a managed work laptop where you cannot install packages."
    },
    {
      question: "Which Linux distributions are supported?",
      answer: "Any distro that runs Chrome, Chromium, Edge or Brave. That covers Ubuntu, Fedora, Debian, Arch, Pop!_OS, Linux Mint, openSUSE and their derivatives. Recordio does not depend on your desktop environment, display server or package manager."
    },
    {
      question: "Does Recordio work offline?",
      answer: "No. Recordio is cloud-based and needs an internet connection and a free account. You sign in, record in the browser, and the project saves to your workspace where you edit and share it. For an air-gapped machine, use OBS or SimpleScreenRecorder and accept that you get a raw file."
    }
  ];
  const relatedLinks = [
    { label: "All platforms", href: "/for/", blurb: "Mac, Windows, Linux and Chrome setup notes." },
    { label: "Screen recorder for Chrome", href: "/for/chrome/", blurb: "How the extension works in any Chromium browser." },
    { label: "Screen recorder for Windows", href: "/for/windows/", blurb: "Same recorder for the Windows half of your team." },
    { label: "Screen recorder for Mac", href: "/for/mac/", blurb: "Same recorder for the Mac half of your team." },
    { label: "Recordio vs OBS", href: "/compare/obs/", blurb: "A fuller comparison for product demos." },
    { label: "Best screen recorders in 2026", href: "/blog/best-screen-recorders-2026/", blurb: "Every option we tested, on every OS." }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Best Screen Recorder for Linux and Ubuntu | Recordio", "description": "Record your screen on Ubuntu, Fedora or any distro from Chrome, Edge or Brave. Auto zoom, captions and share links for product walkthroughs. Free plan.", "faqSchema": true, "faqItems": linuxFaq }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "navLinks": navLinks, "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "PlatformHero", PlatformHero, { "client:load": true, "platformName": "Linux", "tagLabel": "Best for Linux & Ubuntu", "headline": "The best screen recorder for <span class='underline decoration-primary decoration-4 underline-offset-4'>Linux.</span>", "subheadline": "Recordio runs in Chrome, Chromium, Edge or Brave on Ubuntu, Fedora, Debian, Arch, Pop!_OS and Linux Mint. Record a tab, get auto zoom, spotlight and captions applied for you, and share a link with your team.", "client:component-hydration": "load", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/platform/PlatformHero", "client:component-export": "default" })} <div class="max-w-6xl mx-auto px-6 pt-8"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ name: "Platforms", href: "/for/" }, { name: "Linux" }] })} </div> ${renderComponent($$result2, "PlatformSupportGrid", PlatformSupportGrid, { "heading": "Works on any distro", "intro": "Recordio is a browser extension, so the distro underneath does not matter. If your machine runs a Chromium-based browser, it runs Recordio, whatever the desktop, display server or package manager.", "items": distros, "notes": distroNotes, "variant": "white" })} <!-- VERIFY with John before publishing: exact window and full-screen capture behaviour on Wayland, and whether the extension offers those modes on Linux at all. Claims are kept to what Chromium itself does. --> <section id="wayland" class="section-panel py-20 px-6"> <div class="max-w-3xl mx-auto"> <div class="section-head section-head--left mb-8"> <span class="eyebrow">Display server</span> <h2 class="section-title">Wayland and X11</h2> </div> <div class="flex flex-col gap-5 text-lg text-text-muted leading-relaxed"> <p>
Most Linux screen recorders broke, or half broke, when distros moved to Wayland. Ubuntu, Fedora and Pop!_OS now run GNOME on Wayland by default, and tools that read the X11 framebuffer either capture a black screen or need XWayland workarounds. Recordio sidesteps the problem because it never talks to the display server itself. It asks the browser for the pixels, and the browser already knows how to get them on both Wayland and X11.
</p> <p> <strong class="text-text-highlighted">Tab capture</strong> is the mode to use for product walkthroughs. The browser hands Recordio the rendered contents of one tab, which is identical on Wayland and X11. It is also the only mode where auto zoom and auto spotlight work, because they read the page DOM to know which input, card or menu you are interacting with. Your recording stays clean even if a notification pops up or you switch to another window.
</p> <p> <strong class="text-text-highlighted">Window and full-screen capture</strong> are handled by Chromium. On a Wayland session that goes through xdg-desktop-portal with PipeWire, so GNOME or KDE shows its own picker and you choose the window or screen. On X11 the browser captures directly. Either way you lose the DOM-aware features, so keep these modes for the rare walkthrough that has to show a terminal or a native app.
</p> </div> </div> </section> ${renderComponent($$result2, "PlatformToolTable", PlatformToolTable, { "heading": "Recordio vs OBS vs SimpleScreenRecorder vs Kazam", "intro": "The usual Linux recorders capture raw video to a file. That is fine for a stream or a bug clip. For a product walkthrough you then need an editor, a captions tool and somewhere to host the result. Recordio does those three steps for you.", "tools": tools, "rows": toolRows, "variant": "white" })} <section class="section-panel-white pb-20 px-6 -mt-8"> <div class="max-w-3xl mx-auto"> <h3 class="text-2xl font-bold text-text-highlighted mb-4">What OBS, SimpleScreenRecorder and Kazam do better</h3> <div class="flex flex-col gap-4 text-text-muted leading-relaxed"> <p>
All three are free forever, work with no account and no internet, and are in your distro's repositories. They capture anything on screen, not just a browser: a terminal session, a Qt or GTK app, a game. OBS also streams live, mixes several sources and has a plugin ecosystem nobody else matches. SimpleScreenRecorder is the lightest option for raw capture at high frame rates and can hook OpenGL apps directly. Kazam is a two-click tool when you just want a quick clip.
</p> <p>
If that is your job, use one of them. Recordio is the better choice when the thing you are recording lives in a browser tab and the result has to look finished for a customer, a teammate or a changelog. Read the fuller
<a href="/compare/obs/" class="text-primary font-semibold hover:underline underline-offset-4">Recordio vs OBS comparison</a>
for product demos.
</p> </div> </div> </section> <!-- ASSET NEEDED: screenshot of the Recordio extension popup on GNOME (Ubuntu 24.04, light theme), 1600x1000 or similar, at /assets/platform/linux-gnome-popup.webp. Ask John. --> ${renderComponent($$result2, "PlatformSteps", PlatformSteps, { "client:visible": true, "heading": "Record a product walkthrough on Ubuntu in four steps", "intro": "The same steps apply on Fedora, Debian, Arch or any other distro. The only Linux-specific part is which browser you already have installed.", "steps": steps, "image": {
    src: "/assets/platform/linux-gnome-popup.webp",
    alt: "The Recordio extension popup open in Chrome on Ubuntu with the GNOME desktop behind it",
    caption: "The Recordio popup in Chrome on Ubuntu 24.04."
  }, "ctaLabel": "Install the free extension", "ctaSection": "for-linux-steps", "variant": "purple", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/platform/PlatformSteps", "client:component-export": "default" })} <!-- VERIFY with John: confirm full-screen recordings on Linux do not capture desktop audio (a Chromium limit, not a Recordio one) before publishing. --> <section id="audio" class="section-panel-white py-20 px-6"> <div class="max-w-3xl mx-auto"> <div class="section-head section-head--left mb-8"> <span class="eyebrow">Sound</span> <h2 class="section-title">Audio on Linux</h2> </div> <div class="flex flex-col gap-5 text-lg text-text-muted leading-relaxed"> <p>
Your microphone comes in through whatever input the browser sees. On a current distro that is PipeWire; on older releases it is PulseAudio. Pick the device once in the Recordio popup, or leave it on the system default and change it in GNOME Settings or pavucontrol when you plug in a headset. There is no separate audio setup inside Recordio, and Smart AutoCut trims the silence afterwards while keeping the pauses where you were typing or clicking.
</p> <p>
System audio is captured when you record a tab, because the browser can hand over that tab's sound along with its video. That covers the case people usually mean, such as a video or a sound effect playing inside the product you are demoing. Window and full-screen recordings on Linux carry your microphone only, so if the walkthrough depends on desktop audio, record the tab.
</p> </div> </div> </section> ${renderComponent($$result2, "FAQ", FAQ, { "client:visible": true, "items": linuxFaq, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/FAQ", "client:component-export": "default" })} ${renderComponent($$result2, "Pricing", Pricing, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Pricing", "client:component-export": "default" })} ${renderComponent($$result2, "RelatedLinks", RelatedLinks, { "client:visible": true, "heading": "Related", "links": relatedLinks, "variant": "white", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/RelatedLinks", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "source": "for-linux", "client:component-hydration": "visible", "client:component-path": "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/for/linux.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/for/linux.astro";
const $$url = "/for/linux/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Linux,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
