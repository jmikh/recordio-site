import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { g as getCWSLink } from './BaseLayout_42pqqQrf.mjs';
import { t as trackInstallExtension } from './Header_4On9n2CP.mjs';

const PlatformHero = ({ platformName, headline, subheadline, tagLabel }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const slug = platformName.toLowerCase().replace(/[\s\/&]+/g, "-");
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    const el = containerRef.current;
    if (!video || !el) return;
    if (video.readyState >= 2) setIsLoaded(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setIsLoaded(true)).catch(() => {
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative overflow-hidden",
      style: { backgroundColor: "var(--color-section-purple)" },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-40 pointer-events-none", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-32 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-20 flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "mb-8 inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary uppercase tracking-widest text-xs font-bold rounded-full border border-primary/20 hero-entrance hero-entrance-delay-1", children: tagLabel || `Best for ${platformName}` }),
          /* @__PURE__ */ jsx(
            "h1",
            {
              className: "text-4xl md:text-5xl lg:text-6xl font-bold text-text-highlighted leading-tight mb-6 hero-entrance hero-entrance-delay-1",
              dangerouslySetInnerHTML: { __html: headline }
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed hero-entrance hero-entrance-delay-2", children: subheadline }),
          /* @__PURE__ */ jsx("div", { className: "mb-6 hero-entrance hero-entrance-delay-2", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: getCWSLink(`for-${slug}`),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "btn-primary text-lg px-10 py-4",
              onClick: () => trackInstallExtension(`for-${slug}`),
              children: "Install Extension — It's Free"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-sm mb-14 hero-entrance hero-entrance-delay-2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-secondary", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) }, i)) }),
            /* @__PURE__ */ jsx("span", { className: "text-text-highlighted font-semibold", children: "5.0" }),
            /* @__PURE__ */ jsx("span", { className: "text-text-muted", children: "·" }),
            /* @__PURE__ */ jsx("span", { className: "text-text-muted", children: "Loved on Chrome Web Store" })
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              ref: containerRef,
              className: "w-full max-w-4xl hero-entrance hero-entrance-delay-3",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "before-after-video before-after-video--after", children: [
                  !isLoaded && /* @__PURE__ */ jsx("div", { className: "feature-video-placeholder", style: { aspectRatio: "16/9" } }),
                  shouldLoad && /* @__PURE__ */ jsxs(
                    "video",
                    {
                      ref: videoRef,
                      muted: true,
                      loop: true,
                      playsInline: true,
                      preload: "metadata",
                      onLoadedData: () => setIsLoaded(true),
                      onCanPlay: () => setIsLoaded(true),
                      className: "w-full h-auto block",
                      style: {
                        opacity: isLoaded ? 1 : 0,
                        transition: "opacity 0.5s ease"
                      },
                      children: [
                        /* @__PURE__ */ jsx("source", { src: "/videos/after.webm", type: "video/webm" }),
                        /* @__PURE__ */ jsx("source", { src: "/videos/after.mp4", type: "video/mp4" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("span", { className: "before-after-label before-after-label--after", children: "RECORDIO" })
              ]
            }
          )
        ] })
      ]
    }
  );
};

export { PlatformHero as P };
