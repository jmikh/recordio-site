import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { c as getAppLink, g as getCWSLink } from './BaseLayout_B_QZKqTv.mjs';
import { S as SITE_NAV_LINKS } from './Footer_BaI97hcR.mjs';

const trackEvent = (eventName, eventParams) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};
const trackInstallExtension = (location) => {
  trackEvent("install_extension_click", {
    event_category: "engagement",
    event_label: location,
    value: 1
  });
};
const trackFaqExpanded = (question) => {
  trackEvent("faq_expanded", {
    event_category: "engagement",
    event_label: question,
    value: 1
  });
};
const trackOpenApp = (location) => {
  trackEvent("open_app_click", {
    event_category: "engagement",
    event_label: location,
    value: 1
  });
};

const DEFAULT_NAV_LINKS = [
  { label: "Features", href: "#feature-videos" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];
const linkClass = "text-text-main hover:text-text-highlighted transition-colors duration-200";
const mobileLinkClass = "block px-5 py-3 text-sm font-medium text-text-main hover:text-text-highlighted hover:bg-surface-overlay/40 transition-colors duration-150";
const Header = ({ navLinks }) => {
  const anchors = navLinks ?? DEFAULT_NAV_LINKS;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [menuOpen]);
  return /* @__PURE__ */ jsx("header", { className: "fixed top-4 left-0 right-0 z-50 px-4", children: /* @__PURE__ */ jsx("nav", { className: "max-w-5xl mx-auto px-6 py-4 rounded-2xl glass shadow-lg/20 backdrop-blur-xl", "aria-label": "Main", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center shrink-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/assets/fulllogo-light.webp",
        alt: "Recordio",
        className: "h-8 w-auto transition-opacity hover:opacity-80"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-5 lg:gap-6", children: [
      anchors.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        anchors.map(({ label, href }) => /* @__PURE__ */ jsx("a", { href, className: `hidden lg:inline ${linkClass}`, children: label }, href)),
        /* @__PURE__ */ jsx("span", { className: "hidden lg:block h-4 w-px bg-border", "aria-hidden": "true" })
      ] }),
      SITE_NAV_LINKS.map(({ label, href }) => /* @__PURE__ */ jsx("a", { href, className: linkClass, children: label }, href))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-2 lg:gap-3", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: getAppLink("header"),
          className: "btn-secondary !px-3.5 !py-2 text-sm",
          onClick: () => trackOpenApp("header"),
          children: "Open App"
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: getCWSLink("header"),
          target: "_blank",
          rel: "noopener noreferrer",
          className: "btn-primary",
          onClick: () => trackInstallExtension("header"),
          children: [
            /* @__PURE__ */ jsx("img", { src: "/assets/chrome-store.svg", alt: "", className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Add to Chrome" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:hidden relative", ref: menuRef, children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setMenuOpen((v) => !v),
          className: "flex items-center justify-center w-10 h-10 rounded-xl\n                                       text-text-main hover:text-text-highlighted\n                                       hover:bg-surface-overlay/60\n                                       transition-all duration-200",
          "aria-label": menuOpen ? "Close menu" : "Open menu",
          "aria-expanded": menuOpen,
          children: /* @__PURE__ */ jsxs("div", { className: "w-5 h-4 flex flex-col justify-between relative", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center
                                        ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `block h-0.5 w-full bg-current rounded-full transition-all duration-200
                                        ${menuOpen ? "opacity-0 scale-x-0" : ""}`
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center
                                        ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute right-0 top-full mt-4 w-56 rounded-xl bg-white/90 backdrop-blur-2xl border border-border shadow-xl/20 overflow-hidden
                                        transition-all duration-200 origin-top-right
                                        ${menuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`,
          children: /* @__PURE__ */ jsxs("div", { className: "py-2", children: [
            anchors.map(({ label, href }) => /* @__PURE__ */ jsx(
              "a",
              {
                href,
                onClick: () => setMenuOpen(false),
                className: mobileLinkClass,
                children: label
              },
              href
            )),
            anchors.length > 0 && /* @__PURE__ */ jsx("div", { className: "my-2 border-t border-border" }),
            SITE_NAV_LINKS.map(({ label, href }) => /* @__PURE__ */ jsx(
              "a",
              {
                href,
                onClick: () => setMenuOpen(false),
                className: mobileLinkClass,
                children: label
              },
              href
            )),
            /* @__PURE__ */ jsx("div", { className: "my-2 border-t border-border" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: getAppLink("header-mobile"),
                onClick: () => {
                  setMenuOpen(false);
                  trackOpenApp("header-mobile");
                },
                className: "block px-5 py-3 text-sm font-semibold text-text-highlighted\n                                               hover:bg-surface-overlay/40 transition-colors duration-150",
                children: "Open App"
              }
            )
          ] })
        }
      )
    ] })
  ] }) }) });
};

export { Header as H, trackFaqExpanded as a, trackInstallExtension as t };
