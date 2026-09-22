import { d as createAstro, c as createComponent, a as renderTemplate, e as renderScript, u as unescapeHTML, b as addAttribute, m as maybeRenderHead, r as renderComponent } from '../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { S as SITE_URL, $ as $$BaseLayout } from '../chunks/BaseLayout_BMmOTL_5.mjs';
import 'clsx';
/* empty css                                          */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://recordio.io");
const $$VideoEmbed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VideoEmbed;
  const {
    title,
    description,
    uploadDate,
    durationSeconds,
    src,
    youtubeId,
    poster: posterProp,
    caption,
    transcript,
    class: className = ""
  } = Astro2.props;
  if (!src && !youtubeId) {
    throw new Error(`VideoEmbed "${title}": pass either src or youtubeId.`);
  }
  if (src && !posterProp) {
    throw new Error(`VideoEmbed "${title}": self-hosted video needs a poster (VideoObject requires thumbnailUrl).`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(uploadDate)) {
    throw new Error(`VideoEmbed "${title}": uploadDate must be YYYY-MM-DD.`);
  }
  const absolute = (p) => p.startsWith("http") ? p : `${SITE_URL}${p}`;
  const poster = posterProp ? absolute(posterProp) : `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
  const seconds = Math.max(1, Math.round(durationSeconds));
  const isoDuration = `PT${Math.floor(seconds / 60)}M${seconds % 60}S`;
  const sources = src ? src.endsWith(".webm") ? [
    { url: src, type: "video/webm" },
    { url: src.replace(/\.webm$/, ".mp4"), type: "video/mp4" }
  ] : [
    { url: src, type: "video/mp4" },
    { url: src.replace(/\.mp4$/, ".webm"), type: "video/webm" }
  ] : [];
  const mp4 = sources.find((s) => s.type === "video/mp4")?.url;
  const embedUrl = youtubeId ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0` : void 0;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": [poster],
    "uploadDate": `${uploadDate}T00:00:00+00:00`,
    "duration": isoDuration,
    ...mp4 ? { "contentUrl": absolute(mp4) } : {},
    ...youtubeId ? { "embedUrl": `https://www.youtube-nocookie.com/embed/${youtubeId}` } : {},
    ...transcript ? { "transcript": transcript } : {},
    "publisher": {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "Recordio",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/assets/fulllogo-light.png`
      }
    }
  });
  return renderTemplate(_a || (_a = __template(["", "<figure", " data-astro-cid-mrk3q7f7> ", " ", ' </figure> <script type="application/ld+json">', "<\/script>  ", ""])), maybeRenderHead(), addAttribute(`video-embed ${className}`, "class"), src ? renderTemplate`<video class="video-embed-player" controls playsinline preload="metadata"${addAttribute(poster, "poster")}${addAttribute(title, "aria-label")} data-astro-cid-mrk3q7f7> ${sources.map((s) => renderTemplate`<source${addAttribute(s.url, "src")}${addAttribute(s.type, "type")} data-astro-cid-mrk3q7f7>`)}
Your browser does not support embedded video.
</video>` : renderTemplate`<button type="button" class="video-embed-facade" data-video-facade${addAttribute(embedUrl, "data-embed-url")}${addAttribute(title, "data-title")}${addAttribute(`Play video: ${title}`, "aria-label")} data-astro-cid-mrk3q7f7> <img${addAttribute(poster, "src")} alt="" width="1280" height="720" loading="lazy" decoding="async" data-astro-cid-mrk3q7f7> <span class="video-embed-play" aria-hidden="true" data-astro-cid-mrk3q7f7> <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" data-astro-cid-mrk3q7f7> <path d="M8 5v14l11-7z" data-astro-cid-mrk3q7f7></path> </svg> </span> </button>`, caption && renderTemplate`<figcaption class="video-embed-caption" data-astro-cid-mrk3q7f7>${caption}</figcaption>`, unescapeHTML(jsonLd), renderScript($$result, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/VideoEmbed.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/components/VideoEmbed.astro", void 0);

const $$TmpVideoTest = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "tmp", "description": "tmp", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>tmp</h1> ${renderComponent($$result2, "VideoEmbed", $$VideoEmbed, { "title": "Auto zoom", "description": "DOM-aware zoom.", "src": "/videos/zoom.webm", "poster": "/videos/posters/zoom.jpg", "uploadDate": "2026-03-25", "durationSeconds": 7.577, "caption": "Auto zoom" })} ${renderComponent($$result2, "VideoEmbed", $$VideoEmbed, { "title": "YT test", "description": "Tutorial.", "youtubeId": "dQw4w9WgXcQ", "uploadDate": "2026-10-01", "durationSeconds": 125 })} </main> ` })}`;
}, "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/tmp-video-test.astro", void 0);

const $$file = "/Users/johnmikhail/Projects/recordio-all/recordio-landing/src/pages/tmp-video-test.astro";
const $$url = "/tmp-video-test/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$TmpVideoTest,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
