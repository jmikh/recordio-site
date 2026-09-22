import { d as createAstro, c as createComponent, a as renderTemplate, f as renderSlot, g as renderHead, u as unescapeHTML, b as addAttribute } from './astro/server_C5ewKNw0.mjs';
import 'piccolore';
import 'clsx';
/* empty css                               */
import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = "https://recordio.io";
const SITE_DOMAIN = "recordio.io";
const SUPPORT_EMAIL = "john@recordio.io";
const VIDEOS_BASE = "/videos";
const CWS_BASE_URL = "https://chromewebstore.google.com/detail/recordio-beautiful-screen/bbcdpipjplklaneplfmlhhibnllhinii";
const getCWSLink = (section) => {
  const params = new URLSearchParams({
    utm_source: "website",
    utm_medium: "cta",
    utm_content: section
  });
  return `${CWS_BASE_URL}?${params.toString()}`;
};
const CWS_LISTING_URL = CWS_BASE_URL;
const LINKEDIN_URL = "https://www.linkedin.com/in/john-mikhail/";
const CWS_REVIEWS_URL = `${CWS_BASE_URL}/reviews`;
const APP_URL = "https://app.recordio.io";
const getAppLink = (section) => {
  const params = new URLSearchParams({
    utm_source: "website",
    utm_medium: "cta",
    utm_content: section
  });
  return `${APP_URL}?${params.toString()}`;
};

const faqs = [
  {
    question: "Is Recordio free?",
    answer: "Yes! Recordio offers a generous free plan that includes auto-zoom, automatic silence cutting, and more — no credit card required. Free users get up to 5 active projects with videos available for 7 days. When you need more, Pro unlocks unlimited recordings, cloud rendering, longer video retention, and premium transcription."
  },
  {
    question: "What's the difference between Free and Pro?",
    answer: "The Free plan gives you up to 5 active projects with all the core smart-editing features. Videos expire after 7 days, transcription uses a lightweight local model, and rendering happens in your browser (the tab needs to stay in focus). Pro removes all those limits — you get unlimited recordings that never expire, cloud rendering so you can close your tab, transcription powered by a top-tier OpenAI model, and the ability to restore deleted videos for up to 30 days."
  },
  {
    question: 'What does "browser rendering" mean?',
    answer: "On the Free plan, your video is rendered right in your browser. It works great, but the tab needs to stay open and in focus while rendering. Pro users get cloud rendering — your video is processed on our servers so you can close the tab and come back when it's ready."
  },
  {
    question: "How is Recordio different from other screen recorders?",
    answer: "Other screen recorders just blindly follow your mouse, often leading to jittery or incoherent zooms. Recordio actually understands your web app. It detects when you're typing, scrolling, or hovering over a card, and uses advanced algorithms to perfectly frame the important elements. It's also the only recorder that automatically spotlights cards, popovers, and other elements you interact with, giving your videos a polished, studio-quality look."
  },
  {
    question: "Does Recordio work outside of Chrome?",
    answer: "Right now, Recordio is a Chrome extension (also works on Edge and Brave). Native desktop apps and support for more browsers are on the way."
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://recordio.io");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    ogImage: ogImageProp,
    faqSchema = false,
    faqItems,
    noindex = false,
    ogType = "website"
  } = Astro2.props;
  const siteUrl = SITE_URL;
  const canonicalUrl = `${siteUrl}${Astro2.url.pathname}`;
  const ogSlug = Astro2.url.pathname.replace(/^\/|\/$/g, "").replace(/\//g, "-") || "home";
  const ogCandidate = `/og/${ogSlug}.jpg`;
  const ogImage = ogImageProp ?? (fs.existsSync(path.join(process.cwd(), "public", ogCandidate)) ? `${SITE_URL}${ogCandidate}` : `${SITE_URL}/og-image.png`);
  const organizationJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": "Recordio",
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/assets/fulllogo-light.png`
    },
    "description": "Cloud-based screen recorder for teams making product walkthroughs and demos.",
    "founder": {
      "@type": "Person",
      "name": "John Mikhail",
      "url": `${SITE_URL}/about/`
    },
    "sameAs": [CWS_LISTING_URL, LINKEDIN_URL],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": SUPPORT_EMAIL,
      "url": `${SITE_URL}/about/`
    }
  });
  const softwareAppJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Recordio",
    "url": SITE_URL,
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web browser (Chrome, Edge, Brave) on macOS, Windows, Linux, ChromeOS",
    "description": "Cloud-based screen recorder for teams. Record product walkthroughs and demos, get auto-zoom, spotlight and captions applied automatically, and share a link with view analytics.",
    "offers": [
      {
        "@type": "Offer",
        "name": "Free",
        "price": "0",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Pro (billed annually)",
        "price": "12",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "12",
          "priceCurrency": "USD",
          "unitText": "per seat per month, billed annually",
          "billingDuration": "P1M"
        }
      },
      {
        "@type": "Offer",
        "name": "Pro (billed monthly)",
        "price": "15",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "15",
          "priceCurrency": "USD",
          "unitText": "per seat per month",
          "billingDuration": "P1M"
        }
      }
    ]
  });
  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (faqItems ?? faqs).map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  });
  return renderTemplate(_b || (_b = __template(['<html lang="en"> <head><meta charset="UTF-8"><link rel="preload" href="/fonts/satoshi-400.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/satoshi-700.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/satoshi-500.woff2" as="font" type="font/woff2" crossorigin><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots"', '><meta name="theme-color" content="#7c3aed"><title>', '</title><meta name="description"', '><link rel="canonical"', '><meta property="og:type"', '><meta property="og:url"', '><meta property="og:site_name" content="Recordio"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><script>\n            function initGA() {\n                var s = document.createElement("script");\n                s.src =\n                    "https://www.googletagmanager.com/gtag/js?id=G-KMQRSWNLV2";\n                s.async = true;\n                document.head.appendChild(s);\n                window.dataLayer = window.dataLayer || [];\n                window.gtag = function () {\n                    dataLayer.push(arguments);\n                };\n                window.gtag("js", new Date());\n                window.gtag("config", "G-KMQRSWNLV2");\n            }\n            if ("requestIdleCallback" in window) {\n                requestIdleCallback(initGA);\n            } else {\n                setTimeout(initGA, 2000);\n            }\n        <\/script><script type="application/ld+json">', '<\/script><script type="application/ld+json">', "<\/script>", "", '</head> <body> <div class="min-h-screen"> ', " </div> </body></html>"])), addAttribute(noindex ? "noindex, nofollow" : "index, follow", "content"), title, addAttribute(description, "content"), addAttribute(canonicalUrl, "href"), addAttribute(ogType, "content"), addAttribute(canonicalUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), unescapeHTML(organizationJsonLd), unescapeHTML(softwareAppJsonLd), faqSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(faqJsonLd)), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, CWS_LISTING_URL as C, LINKEDIN_URL as L, SITE_URL as S, VIDEOS_BASE as V, SUPPORT_EMAIL as a, SITE_DOMAIN as b, getAppLink as c, CWS_REVIEWS_URL as d, faqs as f, getCWSLink as g };
