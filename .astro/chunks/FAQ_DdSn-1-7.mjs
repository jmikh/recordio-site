import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { d as trackFaqExpanded } from './Footer_CETPJvN_.mjs';
import { a as SUPPORT_EMAIL, f as faqs } from './BaseLayout_BMmOTL_5.mjs';

const FAQ = ({ items }) => {
  const faqs$1 = items ?? faqs;
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (index) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackFaqExpanded(faqs$1[index].question);
    }
  };
  return /* @__PURE__ */ jsx("section", { id: "faq", "aria-label": "Frequently Asked Questions", className: "py-24 section-panel", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "section-head section-head--left", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "FAQ" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Questions, answered." }),
      /* @__PURE__ */ jsxs("p", { className: "section-subtitle", children: [
        "Can't find what you're looking for?",
        " ",
        /* @__PURE__ */ jsx("a", { href: `mailto:${SUPPORT_EMAIL}`, className: "text-primary font-semibold hover:underline underline-offset-4", children: "Email us" }),
        " ",
        "and a human will reply."
      ] })
    ] }),
    /* @__PURE__ */ jsx("dl", { className: "faq-list", children: faqs$1.map((faq, index) => {
      const isOpen = openIndex === index;
      return /* @__PURE__ */ jsxs("div", { className: `faq-item${isOpen ? " is-open" : ""}`, children: [
        /* @__PURE__ */ jsx("dt", { children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => toggle(index),
            className: "faq-trigger",
            "aria-expanded": isOpen,
            children: [
              /* @__PURE__ */ jsx("span", { children: faq.question }),
              /* @__PURE__ */ jsx("span", { className: "faq-plus", "aria-hidden": "true" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("dd", { className: "faq-body", style: { gridTemplateRows: isOpen ? "1fr" : "0fr" }, children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "faq-answer", children: faq.answer }) }) })
      ] }, index);
    }) })
  ] }) });
};

export { FAQ as F };
