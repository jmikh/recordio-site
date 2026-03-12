# Recordio SEO Strategy: From Zero to Ranking

## Where You're At Right Now

Your technical SEO foundation is **solid** — canonical URLs, structured data (`SoftwareApplication` + `FAQPage`), OG/Twitter meta tags, sitemap submitted. The site is well-built. The challenge is purely about **getting Google to know you exist and trust you**.

### Current Traffic (Last 30 Days)
| Source | Users | Sessions |
|---|---|---|
| Direct | 228 | 397 |
| Google Organic | 12 | 44 |
| LinkedIn Referral | 11 | 37 |
| Chrome Web Store | 11 | 17 |
| Bing Organic | 4 | 4 |

**Reality check**: You won't rank for "screen recorder" head keywords anytime soon — those are dominated by Loom, OBS, and established tools with years of domain authority. But that's not the path to growth. Here's what actually works:

---

## Phase 1: Foundation (Weeks 1-2) — Get Indexed Properly

### 1. Google Search Console Hygiene
- [x] Sitemap submitted ✓
- [ ] **Request indexing** for each important page manually in Search Console (URL Inspection → Request Indexing)
- [ ] Verify all 6 content pages are indexed (check Coverage report)
- [ ] Set up **Performance** monitoring — track impressions even before clicks start coming

### 2. Fix Trailing Slash Duplication
Your analytics show duplicate pages (`/privacy` vs `/privacy/`, `/terms` vs `/terms/`, `/blog` vs `/blog/`). These split your PageRank. Pick one format and 301 redirect the other. Your canonical tags help, but explicit redirects are better.

### 3. Add a `robots.txt`
Make sure you have one at `recordio.cc/robots.txt` pointing to your sitemap:
```
User-agent: *
Allow: /
Sitemap: https://recordio.cc/sitemap.xml
```

---

## Phase 2: Long-Tail Content (Weeks 2-6) — Win Battles You Can Win

You **cannot** rank for "screen recorder" (100K+ monthly searches, massive competition). Instead, target **long-tail keywords** with lower competition but high purchase intent:

### Priority Keywords to Target

| Keyword | Difficulty | Why Recordio Wins |
|---|---|---|
| `chrome extension screen recorder` | Low-Medium | You literally ARE this |
| `screen recorder with auto zoom` | Low | Almost nobody does this |
| `screen recorder for product demos` | Medium | Your exact use case |
| `loom alternative free` | Medium | Blog post exists, needs optimization |
| `screen recorder no download` | Low-Medium | Chrome extension = no download |
| `screen recorder with spotlight effect` | Very Low | Unique differentiator |
| `best screen recorder for saas demos` | Low | Niche, high-intent |
| `screen recorder that works on chromebook` | Low | Chrome extension works everywhere |
| `browser based screen recorder` | Low-Medium | Natural fit |

### Content to Create (Priority Order)

**1. Dedicated Feature Pages (Highest Impact)**

These are the missing pieces. Each page targets a specific keyword cluster and gives Google pages to rank:

- **`/features/auto-zoom`** — Target: "screen recorder with auto zoom", "automatic zoom screen recorder"
- **`/features/spotlight`** — Target: "screen recorder spotlight effect", "highlight clicks screen recorder"
- **`/features/auto-captions`** — Target: "screen recorder with automatic captions", "add captions to screen recording"

Each page should be 800-1200 words with:
- H1 with the primary keyword
- A clear problem → solution narrative
- Embedded demo GIFs/videos
- Structured data (`HowTo` or `VideoObject`)
- Internal links back to homepage and to each other

**2. Comparison Pages (High-Intent Traffic)**

- **`/vs/loom`** — Target: "recordio vs loom", "loom alternative"
- **`/vs/screen-studio`** — Target: "screen studio alternative", "screen studio for windows"

These convert extremely well because users are already looking to switch.

**3. Use-Case Pages (Mid-Funnel)**

- **`/use-cases/product-demos`** — "how to make product demo videos"
- **`/use-cases/tutorials`** — "how to create tutorial videos"
- **`/use-cases/bug-reports`** — "screen recorder for bug reports"

---

## Phase 3: Off-Site Authority (Ongoing) — Make Google Trust You

This is the **most important** part and the one most people skip. Google ranks sites it *trusts*, and trust comes from other sites linking to you.

### Quick Wins (Do This Week)

1. **Tool Directories** — Submit to all of these (free backlinks):
   - [AlternativeTo](https://alternativeto.net) — list as alternative to Loom, Screen Studio, OBS
   - [Product Hunt](https://producthunt.com) — launch post (time this strategically)
   - [SaaSHub](https://saashub.com)
   - [G2](https://g2.com)
   - [Capterra](https://capterra.com)
   - [ToolFinder](https://toolfinder.co)
   - [There's An AI For That](https://theresanaiforthat.com) (if positioning auto-captions as AI-powered)

2. **Chrome Web Store Listing** — Optimize your CWS description with keywords. Your listing is already driving 11 users/month as a referral, and CWS listings rank in Google search results too.

3. **GitHub** — If any part is open source, or if you can open-source a component, GitHub repos rank well and provide a do-follow backlink.

### Medium-Term (Weeks 3-8)

4. **Technical Blog Posts on Dev.to / Hacker News**
   - "How We Built Auto-Zoom Using DOM Analysis (Not Mouse Tracking)"
   - "Running Whisper Locally in a Chrome Extension for Real-Time Captions"
   - These build authority, earn backlinks, and position you as technically credible
   - Cross-post with canonical tags pointing to `recordio.cc/blog`

5. **LinkedIn Content** — You're already getting 11 users from LinkedIn. Double down:
   - Short demo clips of Recordio's auto-zoom in action
   - Before/after comparisons (raw recording vs. Recordio-polished)
   - Tag them with relevant hashtags (#SaaS #ProductDemo #ScreenRecorder)

6. **Reddit** — Engage genuinely in r/SaaS, r/ProductManagement, r/webdev when people ask for screen recorder recommendations. Don't spam — add value and mention Recordio naturally.

---

## Phase 4: Technical SEO Improvements

### Things to Implement on the Site

1. **Internal Linking** — Every page should link to 2-3 other pages. Your blog posts should link to feature pages, and vice versa. This distributes PageRank and helps Google discover all your pages.

2. **Image Alt Text & Optimization** — Every image should have descriptive alt text with natural keyword inclusion. (e.g., `alt="Recordio auto-zoom feature automatically highlighting a dropdown menu"`)

3. **Page Speed** — Run Lighthouse and aim for 90+ on all metrics. Your Astro SSG setup should make this easy.

4. **Breadcrumb Structured Data** — Add `BreadcrumbList` schema for blog posts and subpages.

5. **`VideoObject` Structured Data** — If your landing page has any demo videos, add `VideoObject` schema. Google surfaces these as rich results.

---

## Measuring Progress

Track these weekly in Google Search Console:

| Metric | Current | 30-Day Goal | 90-Day Goal |
|---|---|---|---|
| **Total Impressions** | ~unknown | 500/week | 5,000/week |
| **Total Clicks** | ~12/month | 50/month | 300/month |
| **Indexed Pages** | 6 | 12+ | 20+ |
| **Avg Position** | unknown | Top 50 for long-tails | Top 20 for long-tails |
| **Backlinks** | ~0 | 10+ | 30+ |

---

## TL;DR — Your SEO Playbook

1. **Don't chase "screen recorder"** — go for long-tail keywords you can actually win
2. **Create feature pages** (`/features/auto-zoom`, `/spotlight`, `/auto-captions`) — these are your biggest SEO gap
3. **Create comparison pages** (`/vs/loom`, `/vs/screen-studio`) — these convert the best
4. **Get on directories** (AlternativeTo, Product Hunt, G2) — free high-quality backlinks
5. **Write technical content** on Dev.to/HN — builds authority and earns links
6. **Fix trailing slash duplication** — small but important technical fix
7. **Keep publishing** — Google rewards fresh, consistent content

> [!IMPORTANT]
> SEO is a **3-6 month game**. You won't see meaningful organic traffic for at least 6-8 weeks even after doing everything right. The key is consistent execution. Your site's technical foundation is great — now it's about giving Google enough **content** and **trust signals** to rank you.
