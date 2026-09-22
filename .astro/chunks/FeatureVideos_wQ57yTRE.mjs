import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useCallback, useEffect, useState } from 'react';
import { TbZoomIn, TbBackground, TbArticle } from 'react-icons/tb';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { CgToolbarTop } from 'react-icons/cg';
import { LuLayers3 } from 'react-icons/lu';

const FEATURES = [
  {
    label: "Auto Zoom",
    icon: /* @__PURE__ */ jsx(TbZoomIn, { size: 14, className: "mr-1" }),
    title: "Zooms to exactly what matters",
    description: "Recordio doesn't just follow the cursor, it understands the layout of all elements you are interacting with, so no input box or form is clipped out. A zoom that gets it right every single time.",
    video: "zoom.webm",
    hue: 290
  },
  {
    label: "Auto Spotlight",
    icon: /* @__PURE__ */ jsx(RiLightbulbFlashLine, { size: 14, className: "mr-1" }),
    title: "Elevate important elements",
    description: "The background dims and the element you interact with pops forward with a subtle glow. It makes the page comes alive.",
    video: "spotlight.webm",
    hue: 78
  },
  {
    label: "Backgrounds",
    icon: /* @__PURE__ */ jsx(TbBackground, { size: 14, className: "mr-1" }),
    title: "Beautiful, dynamic canvas",
    description: "Add depth and polish with vibrant backgrounds. Pick from a curated library, build your own using color gradients, or upload your own brand-matched image.",
    video: "backgrounds.webm",
    hue: 290
  },
  {
    label: "Captions",
    icon: /* @__PURE__ */ jsx(TbArticle, { size: 14, className: "mr-1" }),
    title: "AI-generated captions",
    description: "AI generates perfectly-timed captions from your audio that tracks to the word level. Easily edit any mistakes, or cut the video based on the captions.",
    video: "captions.webm",
    hue: 78
  },
  {
    label: "Clean Toolbar",
    icon: /* @__PURE__ */ jsx(CgToolbarTop, { size: 14, className: "mr-1" }),
    title: "No more messy browser tabs",
    description: "Your toolbar is replaced with a clean, minimal bar that shows just the page title. No messy bookmark bars, 47 open tabs, or embarrassing URLs.",
    video: "toolbar.webm",
    hue: 290
  },
  {
    label: "Overlays",
    icon: /* @__PURE__ */ jsx(LuLayers3, { size: 14, className: "mr-1" }),
    title: "Blur sensitive information",
    description: "Use overlays to blur out sensitive information, add explanatory text, arrows or overlays to highlight important information.",
    video: "overlays.webm",
    hue: 78
  }
];
const ADDITIONAL_FEATURES = [
  "Music",
  "Cursor effects",
  "Keyboard effects",
  "Aspect ratio formatting",
  "Cut and trim",
  "Speed up",
  "4K exports",
  "Shared links",
  "Intros and outros",
  "Intuitive editor",
  "Camera auto shrink",
  "Dynamic camera layouts",
  "Light and dark mode",
  "Viewership stats"
];
const useSinglePlayer = () => {
  const observer = useRef(null);
  const ratios = useRef(/* @__PURE__ */ new Map());
  const evaluate = useCallback(() => {
    const viewportCenter = window.innerHeight / 2;
    let best = null;
    let bestDistance = Infinity;
    ratios.current.forEach((ratio, el) => {
      if (ratio < 0.4) return;
      const rect = el.getBoundingClientRect();
      const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = el;
      }
    });
    ratios.current.forEach((_, el) => {
      const video = el.querySelector("video");
      if (!video) return;
      if (el === best) {
        if (video.paused) video.play().catch(() => {
        });
      } else if (!video.paused) {
        video.pause();
      }
    });
  }, []);
  const getObserver = useCallback(() => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => ratios.current.set(e.target, e.intersectionRatio));
          evaluate();
        },
        { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
      );
    }
    return observer.current;
  }, [evaluate]);
  const register = useCallback((el) => {
    if (el) getObserver().observe(el);
  }, [getObserver]);
  useEffect(() => () => observer.current?.disconnect(), []);
  return { register, evaluate };
};
const LazyVideo = ({ src, register, onMounted }) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    register(el);
    const loader = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          loader.unobserve(el);
        }
      },
      { rootMargin: "300px" }
      // start loading before it scrolls into view
    );
    loader.observe(el);
    return () => loader.disconnect();
  }, [register]);
  useEffect(() => {
    if (shouldLoad) onMounted();
  }, [shouldLoad, onMounted]);
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: "feature-video-container", children: [
    !isLoaded && /* @__PURE__ */ jsx("div", { className: "feature-video-placeholder" }),
    shouldLoad && /* @__PURE__ */ jsxs(
      "video",
      {
        muted: true,
        loop: true,
        playsInline: true,
        preload: "auto",
        onPlaying: () => setIsLoaded(true),
        onLoadedData: () => setIsLoaded(true),
        className: "feature-video",
        style: { opacity: isLoaded ? 1 : 0 },
        children: [
          /* @__PURE__ */ jsx("source", { src, type: "video/webm" }),
          /* @__PURE__ */ jsx("source", { src: src.replace(".webm", ".mp4"), type: "video/mp4" })
        ]
      }
    )
  ] });
};
const FeatureRow = ({ feature, index, register, onVideoMounted }) => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const isEven = index % 2 === 0;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `feature-panel${revealed ? " is-revealed" : ""}${isEven ? "" : " is-flipped"}`,
      style: { "--hue": feature.hue },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "feature-panel-text", children: [
          /* @__PURE__ */ jsxs("div", { className: "feature-pill", children: [
            feature.icon,
            feature.label
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "step-title", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "step-description", children: feature.description })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "feature-panel-visual", children: /* @__PURE__ */ jsx(LazyVideo, { src: `/videos/${feature.video}`, register, onMounted: onVideoMounted }) })
      ]
    }
  );
};
const FeatureVideos = () => {
  const { register, evaluate } = useSinglePlayer();
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "feature-videos",
      "aria-label": "Features",
      className: "step-showcase section-panel-white",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "step-showcase-header", children: [
          /* @__PURE__ */ jsx("h2", { className: "step-showcase-title", children: "Pro-level features. Zero effort." }),
          /* @__PURE__ */ jsx("p", { className: "step-showcase-subtitle", children: "A suite of intelligent tools that do the heavy lifting so you don't have to." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "feature-panels", children: FEATURES.map((feature, i) => /* @__PURE__ */ jsx(
          FeatureRow,
          {
            feature,
            index: i,
            register,
            onVideoMounted: evaluate
          },
          feature.video
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-20 pt-16 border-t border-border/50 max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "text-center mb-10 px-6", children: /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-text-highlighted", children: "And so much more..." }) }),
          /* @__PURE__ */ jsx("div", { className: "feature-marquee-wrapper", children: /* @__PURE__ */ jsx("div", { className: "feature-marquee-track", children: [...ADDITIONAL_FEATURES, ...ADDITIONAL_FEATURES].map((feat, i) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "inline-flex items-center px-5 py-2.5 rounded-full border border-border bg-surface-raised font-medium whitespace-nowrap text-text-main shadow-sm",
              children: feat
            },
            i
          )) }) })
        ] })
      ]
    }
  );
};

export { FeatureVideos as F };
