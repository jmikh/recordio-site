# Plan 11: Dashboard actions (John, not an agent)

These cannot be done from the repo. From `docs/seo-audit-2026-09-22.md` section 5, plus the domain cleanup on 22 Sep 2026.

1. **Search Console: request indexing** for `https://recordio.io/for/linux/`, `https://recordio.io/compare/screen-studio/`, `https://recordio.io/compare/camtasia/`. Google's stored copies still declare canonicals on recordio.cc; the Camtasia page is not indexed under recordio.io at all.
2. **Cloudflare redirect: www to apex.** Rules > Redirect Rules: when `http.host eq "www.recordio.io"`, dynamic redirect to `concat("https://recordio.io", http.request.uri.path)`, 301, preserve query string.
3. **Cloudflare redirect: app.recordio.cc to app.recordio.io** (same pattern). app.recordio.cc still serves the app with a 200. The extension manifest no longer allows app.recordio.cc, so old bookmarks must redirect or the extension handoff breaks for them.
4. **Cloudflare: confirm recordio.cc and any other old hosts** (cdn.recordio.cc if it was ever public) 301 to the .io equivalents.
5. **Google Ads**: pause the paid search campaign (55 sessions, 0 conversions in 90 days) or retarget a small budget at the use-case pages from Plan 06 once live.
6. **GA4**: Admin > Data Streams > Configure tag settings > Define internal traffic; add localhost and your own IP; activate the filter. Also add `install_extension_click` and `open_app_click` as key events if not already.
7. **Bing Webmaster Tools**: import the site from Search Console; Bing sends about 23 organic sessions a quarter.
8. **Cloudflare Scrape Shield**: optionally disable Email Address Obfuscation so mailto links are plain.
9. **After deploying the audit pass**: re-run PageSpeed Insights mobile on the homepage; target LCP under 2.5 s.
10. **Directory listings** (see Plan 12): create or claim AlternativeTo, G2, Capterra, SaaSHub, Product Hunt profiles with the current positioning and pricing.

## Status check, 22 Sep 2026 (agent, read-only verification)

Verified with the Search Console API, the GA4 Data API, curl, dig and a local Lighthouse run. No dashboard changes were made; none of these tools can request indexing, edit Cloudflare rules, pause Ads or change GA4 settings. Cloudflare CLI (`wrangler`) is not logged in on this machine.

| # | Item | Current state | Still needed from John |
|---|------|---------------|------------------------|
| 1 | Request indexing | `/for/linux/`, `/compare/screen-studio/`, `/compare/screenity/`, `/compare/tella/`: indexed but Google's copy still declares a recordio.cc canonical (last crawls 1 to 14 Aug). `/compare/camtasia/`: "Alternate page with proper canonical tag" pointing at recordio.cc, last crawl 23 Jul, not indexed under .io. `/compare/focusee/`: discovered, not indexed. `/compare/screencastify/`: unknown to Google. All 20 sitemap URLs serve 200 with .io canonicals today. | Request indexing for those 7 URLs in URL Inspection. Also resubmit `https://recordio.io/sitemap-0.xml` (GSC shows 20 submitted, 0 indexed, last downloaded 14 Sep). |
| 2 | www to apex | `https://www.recordio.io/` returns 200 and serves the full site (canonical tag points at apex, so no duplicate indexing yet). | Add the redirect rule as written above. |
| 3 | app.recordio.cc to app.recordio.io | `https://app.recordio.cc/` still returns 200 and serves the app. | Add the redirect rule (dynamic: `concat("https://app.recordio.io", http.request.uri.path)`, 301, preserve query string). |
| 4 | Other old hosts | `recordio.cc` 301 to .io: correct. `www.recordio.cc`: 523 (proxied, origin unreachable). `cdn.recordio.cc`: 404 (proxied, no origin). Both still resolve to Cloudflare. | Either extend the .cc redirect rule to `http.host ends_with "recordio.cc"` or delete the two DNS records. |
| 5 | Google Ads | Ads account 4247235137 is linked to the Recordio Landing GA4 property. Last 90 days: Paid Search 55 sessions, Cross-network 13 sessions, 0 key events, 15% engagement rate. | Pause the campaign in Google Ads. |
| 6 | GA4 | `install_extension_click` is already a key event (42 in 30 days). `open_app_click` is NOT a key event (15 in 30 days). No data filter is in testing state; Direct is 50% of sessions (136 of 270 in 30 days), consistent with unfiltered internal traffic. | Mark `open_app_click` as a key event (Admin > Events). Define internal traffic and activate the filter. |
| 7 | Bing | Not verifiable from here. | Import from Search Console at bing.com/webmasters. |
| 8 | Email obfuscation | Active: homepage HTML contains two `cdn-cgi/l/email-protection` links and Lighthouse shows `email-decode.min.js` in the critical request chain. All mailto links use the single support address from constants. | Disable in Cloudflare > Scrape Shield. |
| 9 | PageSpeed | Public PSI API quota was exhausted; ran Lighthouse 13 mobile locally against the live homepage instead: performance 95, LCP 2.6 s, FCP 2.0 s, TBT 10 ms, CLS 0. LCP element is the nav logo `/assets/fulllogo-light.webp` inside the Header island; 1.0 s of the LCP is element render delay, and the render-blocking resource is the page CSS bundle. | Re-run PSI after the audit pass deploys. Repo follow-up (not this plan): add `fetchpriority="high"` to the header logo in `src/components/Header.tsx` and preload it in the layout. |
| 10 | Directories | See Plan 12. | |

Also noticed: `src/pages/for/chromebook.astro` exists locally but `https://recordio.io/for/chromebook/` is 404 and it is not in the deployed sitemap, so the current deploy predates it. Request indexing for it after the next deploy.
