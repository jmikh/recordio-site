/**
 * Single source of truth for site navigation and cross-linking.
 * Header, Footer, the compare and platforms hubs, the homepage link strips
 * and the RelatedLinks blocks on platform and blog pages all read from here,
 * so adding a page to one of these lists surfaces it everywhere at once.
 *
 * Plan 01 (compare template) can point its `related.compare` slugs at
 * COMPARE_PAGES; Plans 05 to 07 should add their hubs to SITE_NAV_LINKS and
 * the footer Product column once the pages exist.
 */
import type { RelatedLink } from '../components/RelatedLinks';
import { USE_CASES } from './use-cases';

export interface SiteLink {
    label: string;
    href: string;
}

/** Links inside the header's "Product" dropdown and the footer's Product column. */
export const PRODUCT_LINKS: SiteLink[] = [
    { label: 'Features', href: '/features/' },
    { label: 'Use cases', href: '/use-cases/' },
    { label: 'Screenshots', href: '/screenshots/' },
];

/** Site-wide links shown in the header on every page, after the Product dropdown. */
export const SITE_NAV_LINKS: SiteLink[] = [
    { label: 'Compare', href: '/compare/' },
    { label: 'Platforms', href: '/for/' },
    { label: 'Blog', href: '/blog/' },
];

/** Use-case pages as plain links, for the footer column and the homepage strip. */
export const USE_CASE_LINKS: SiteLink[] = USE_CASES.map((u) => ({
    label: u.label,
    href: `/use-cases/${u.slug}/`,
}));

/* ----------------------------------------------------------------------- */
/* Compare pages                                                            */
/* ----------------------------------------------------------------------- */

export type CompareGroupKey = 'async' | 'polished' | 'desktop' | 'extension';

export interface CompareGroup {
    key: CompareGroupKey;
    title: string;
    /** One or two sentences under the group heading on the compare hub. */
    lead: string;
}

export const COMPARE_GROUPS: CompareGroup[] = [
    {
        key: 'async',
        title: 'Async video tools',
        lead: 'Record, share a link, skip the meeting. These tools compete with Recordio most directly on share links, view analytics and price per seat.',
    },
    {
        key: 'polished',
        title: 'Polished recorders',
        lead: 'Desktop apps that add cursor zoom and motion to a raw capture. The comparison comes down to platform support, editing depth and how the finished video reaches your team.',
    },
    {
        key: 'desktop',
        title: 'Desktop capture',
        lead: 'Traditional recorders that save a file to disk. They win on raw capture options and offline work. Recordio wins on time from recording to a finished, shareable walkthrough.',
    },
    {
        key: 'extension',
        title: 'Chrome extensions',
        lead: 'Recorders that live in the browser, like Recordio does. The differences are in what happens after capture: auto zoom, captions, rendering and analytics.',
    },
];

export interface CompareEntry {
    slug: string;
    name: string;
    group: CompareGroupKey;
    /** One descriptive line, used on the hub and in related-link blurbs. */
    blurb: string;
    /** Three sibling comparisons to show in the "Other comparisons" block. */
    related: string[];
    /** Blog post slug that covers the same competitor, if any. */
    post?: string;
}

export const COMPARE_PAGES: CompareEntry[] = [
    {
        slug: 'loom',
        name: 'Loom',
        group: 'async',
        blurb: 'The async video standard, compared on price per seat, auto zoom and free viewer seats.',
        related: ['tella', 'clueso', 'screencastify'],
        post: 'best-loom-alternatives-2026',
    },
    {
        slug: 'tella',
        name: 'Tella',
        group: 'async',
        blurb: 'Creator-friendly clips and templates, compared on team libraries and zoom quality.',
        related: ['loom', 'clueso', 'screen-studio'],
    },
    {
        slug: 'clueso',
        name: 'Clueso',
        group: 'async',
        blurb: 'AI voiceovers and docs from one recording, compared on editing and free plans.',
        related: ['loom', 'tella', 'focusee'],
    },
    {
        slug: 'screen-studio',
        name: 'Screen Studio',
        group: 'polished',
        blurb: 'The Mac-first cursor-effects benchmark, compared on Windows, Linux and sharing.',
        related: ['focusee', 'loom', 'camtasia'],
        post: 'best-screen-studio-alternatives-2026',
    },
    {
        slug: 'focusee',
        name: 'FocuSee',
        group: 'polished',
        blurb: 'Desktop auto zoom for Mac and Windows, compared on capture and team features.',
        related: ['screen-studio', 'clueso', 'screenity'],
        post: 'best-screen-recorders-2026',
    },
    {
        slug: 'obs',
        name: 'OBS',
        group: 'desktop',
        blurb: 'Free, open source and built for streaming, compared for product demos and tutorials.',
        related: ['bandicam', 'camtasia', 'screenity'],
    },
    {
        slug: 'camtasia',
        name: 'Camtasia',
        group: 'desktop',
        blurb: 'A full timeline editor with a perpetual licence, compared on time to a finished video.',
        related: ['obs', 'screen-studio', 'bandicam'],
        post: 'best-camtasia-alternatives-2026',
    },
    {
        slug: 'bandicam',
        name: 'Bandicam',
        group: 'desktop',
        blurb: 'Windows game and desktop capture, compared for walkthroughs on any operating system.',
        related: ['obs', 'camtasia', 'screencastify'],
        post: 'best-bandicam-alternatives-2026',
    },
    {
        slug: 'screencastify',
        name: 'Screencastify',
        group: 'extension',
        blurb: 'The classroom Chrome recorder, compared on auto zoom and view analytics for teams.',
        related: ['screenity', 'loom', 'bandicam'],
        post: 'best-screencastify-alternatives-2026',
    },
    {
        slug: 'screenity',
        name: 'Screenity',
        group: 'extension',
        blurb: 'A free, open source Chrome extension, compared on rendering, captions and share links.',
        related: ['screencastify', 'obs', 'focusee'],
    },
];

export const compareHref = (slug: string): string => `/compare/${slug}/`;

export const compareEntry = (slug: string): CompareEntry => {
    const entry = COMPARE_PAGES.find((c) => c.slug === slug);
    if (!entry) throw new Error(`Unknown compare slug: ${slug}`);
    return entry;
};

export const compareLink = (slug: string): RelatedLink => {
    const c = compareEntry(slug);
    return { label: `Recordio vs ${c.name}`, href: compareHref(c.slug), blurb: c.blurb };
};

/** Footer and nav labels for every comparison, in hub order. */
export const COMPARE_FOOTER_LINKS: SiteLink[] = COMPARE_PAGES.map((c) => ({
    label: `vs ${c.name}`,
    href: compareHref(c.slug),
}));

/**
 * Links for the "Other comparisons" block on a compare page: the three
 * related comparisons, the matching blog post when there is one, and the hub.
 */
export const otherComparisons = (slug: string): RelatedLink[] => {
    const c = compareEntry(slug);
    const links = c.related.map(compareLink);
    if (c.post) {
        const post = blogPost(c.post);
        links.push({ label: post.label, href: post.href, blurb: post.blurb });
    }
    links.push({ label: 'All comparisons', href: '/compare/', blurb: 'Every screen recorder we compare Recordio with, grouped by type.' });
    return links;
};

/* ----------------------------------------------------------------------- */
/* Platform pages                                                           */
/* ----------------------------------------------------------------------- */

export interface PlatformEntry {
    slug: string;
    /** Short label: footer, homepage strip. */
    label: string;
    /** Longer label for related-link blocks and hub cards. */
    title: string;
    /** Two lines for the hub card. */
    summary: string;
    /** One line for related-link blurbs. */
    blurb: string;
}

export const PLATFORM_PAGES: PlatformEntry[] = [
    {
        slug: 'mac',
        label: 'Mac',
        title: 'Screen recorder for Mac',
        summary: 'Chrome, Edge or Brave on macOS, with no desktop app to install. Auto zoom and spotlight are applied as you record, and every video lands in your team library.',
        blurb: 'The same walkthrough recorder for teammates on macOS.',
    },
    {
        slug: 'windows',
        label: 'Windows',
        title: 'Screen recorder for Windows',
        summary: 'Runs in the browser on any Windows PC, so there is nothing to install beyond the extension. Same recorder and same share links as the Mac half of your team.',
        blurb: 'Set-up notes for Windows laptops and PCs.',
    },
    {
        slug: 'linux',
        label: 'Linux',
        title: 'Screen recorder for Linux',
        summary: 'Works on Ubuntu, Fedora, Debian, Arch and any distro with a Chromium browser. Tab capture behaves the same on Wayland and X11, with no PPA or Snap to add.',
        blurb: 'Ubuntu, Fedora and any distro with a Chromium browser.',
    },
    {
        slug: 'chromebook',
        label: 'Chromebook',
        title: 'Screen recorder for Chromebook',
        summary: 'Runs on any Chromebook, including managed school and work devices, with an admin allow-list guide. Cloud rendering on Pro keeps the work off a small machine.',
        blurb: 'ChromeOS, including managed school and work devices.',
    },
    {
        slug: 'chrome',
        label: 'Chrome',
        title: 'Screen recorder for Chrome',
        summary: 'How the extension itself works: tab capture, the simplified toolbar, blur and the editor at app.recordio.io. The same notes apply to Edge and Brave.',
        blurb: 'How the extension records any tab in Chrome, Edge or Brave.',
    },
];

export const platformHref = (slug: string): string => `/for/${slug}/`;

export const platformLink = (slug: string): RelatedLink => {
    const p = PLATFORM_PAGES.find((x) => x.slug === slug);
    if (!p) throw new Error(`Unknown platform slug: ${slug}`);
    return { label: p.title, href: platformHref(p.slug), blurb: p.blurb };
};

/** Footer column: every platform plus the hub. */
export const PLATFORM_FOOTER_LINKS: SiteLink[] = [
    ...PLATFORM_PAGES.map((p) => ({ label: p.label, href: platformHref(p.slug) })),
    { label: 'All platforms', href: '/for/' },
];

/** Links for the "Also on" block on a platform page: every other platform plus the hub. */
export const otherPlatforms = (slug: string): RelatedLink[] => [
    ...PLATFORM_PAGES.filter((p) => p.slug !== slug).map((p) => platformLink(p.slug)),
    { label: 'All platforms', href: '/for/', blurb: 'One recorder and one team library on every operating system.' },
];

/* ----------------------------------------------------------------------- */
/* Blog posts                                                               */
/* ----------------------------------------------------------------------- */

export interface BlogPostEntry {
    slug: string;
    /** Short label for related-link blocks. */
    label: string;
    href: string;
    /** One line for related-link blurbs and blog index cards. */
    blurb: string;
    /** Full heading shown on the blog index card. */
    title: string;
    eyebrow: 'Comparison' | 'Alternatives' | 'Guide' | 'How-to';
    date: string;
    readTime: string;
}

const post = (
    slug: string,
    eyebrow: BlogPostEntry['eyebrow'],
    label: string,
    title: string,
    blurb: string,
    readTime: string,
    date = 'September 2026',
): BlogPostEntry => ({ slug, eyebrow, label, title, blurb, readTime, date, href: `/blog/${slug}/` });

/** Every published post, in the order the blog index shows them. */
export const BLOG_POSTS: BlogPostEntry[] = [
    post(
        'best-screen-recorders-2026',
        'Comparison',
        'Best screen recorders in 2026',
        'Best Screen Recorders in 2026: An Honest Comparison',
        'Recordio, Screen Studio and FocuSee compared for demos and tutorials: auto zoom, captions, share links, pricing and where each tool wins.',
        '10 min read',
    ),
    post(
        'best-loom-alternatives-2026',
        'Comparison',
        'Best Loom alternatives in 2026',
        'Best Loom Alternatives in 2026: Why Teams Are Switching',
        'What Loom costs per seat, where its videos fall short, and which tools teams switch to for better-looking walkthroughs.',
        '8 min read',
    ),
    post(
        'best-bandicam-alternatives-2026',
        'Alternatives',
        'Best Bandicam alternatives in 2026',
        'Best Bandicam Alternatives in 2026 for Mac, Linux and Teams',
        'Recorders for people who need Bandicam-style capture on Mac or Linux, or want to share with a team, with 2026 pricing.',
        '11 min read',
    ),
    post(
        'best-screen-studio-alternatives-2026',
        'Alternatives',
        'Best Screen Studio alternatives in 2026',
        'Best Screen Studio Alternatives in 2026 for Windows, Linux and Teams',
        'Screen Studio-style polish on Windows and Linux, and tools that share to a team library instead of exporting a file.',
        '11 min read',
    ),
    post(
        'best-screencastify-alternatives-2026',
        'Alternatives',
        'Best Screencastify alternatives in 2026',
        'Best Screencastify Alternatives in 2026 for Education and Chrome',
        'Recorders for classrooms and schools with free plans, compared on Chrome and Chromebook support and what each does after capture.',
        '11 min read',
    ),
    post(
        'best-camtasia-alternatives-2026',
        'Alternatives',
        'Best Camtasia alternatives in 2026',
        'Best Camtasia Alternatives in 2026 for Fast Product Demos',
        'Skip the timeline. Tools that turn a raw capture into a finished product demo in minutes, with pricing checked in 2026.',
        '11 min read',
    ),
    post(
        'best-tutorial-recording-software',
        'Guide',
        'Best tutorial recording software in 2026',
        'Best Tutorial Recording Software in 2026',
        'Seven tools for recording software tutorials, ranked by how much of the work they do for you.',
        '10 min read',
    ),
    post(
        'how-to-make-a-product-walkthrough-video',
        'Guide',
        'How to make a product walkthrough video',
        'How to Make a Product Walkthrough Video',
        'Plan, record, edit and share a product walkthrough video that people watch to the end.',
        '9 min read',
    ),
    post(
        'how-to-record-screen-on-mac-with-audio',
        'How-to',
        'How to record your screen on Mac with audio',
        'How to Record Your Screen on Mac With Audio',
        'Record your Mac screen with your microphone using the built-in Screenshot toolbar, and when to reach for more.',
        '8 min read',
    ),
    post(
        'how-to-record-screen-on-ubuntu',
        'How-to',
        'How to record your screen on Ubuntu with audio',
        'How to Record Your Screen on Ubuntu (With Audio)',
        'Record your Ubuntu desktop with microphone and desktop audio using the free OBS Studio.',
        '8 min read',
    ),
    post(
        'how-to-screen-record-on-chromebook',
        'How-to',
        'How to screen record on a Chromebook',
        'How to Screen Record on a Chromebook in 2026',
        'Record your Chromebook screen with your microphone using the ChromeOS Screen capture toolbar.',
        '8 min read',
    ),
];
// TODO (Plan 12): add walkthrough-watch-time once src/pages/blog/_walkthrough-watch-time.astro is published.

export const blogPost = (slug: string): BlogPostEntry => {
    const entry = BLOG_POSTS.find((p) => p.slug === slug);
    if (!entry) throw new Error(`Unknown blog post slug: ${slug}`);
    return entry;
};

export const blogPostLink = (slug: string): RelatedLink => {
    const entry = blogPost(slug);
    return { label: entry.label, href: entry.href, blurb: entry.blurb };
};
