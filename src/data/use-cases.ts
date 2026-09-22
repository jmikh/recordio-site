/**
 * Index of the use-case pages under /use-cases/. The hub page and the
 * RelatedLinks blocks on each page read from this list, so adding a page here
 * is enough to surface it everywhere. Page copy lives in src/pages/use-cases/*.
 */
import type { RelatedLink } from '../components/RelatedLinks';

export interface UseCaseEntry {
    slug: string;
    /** Short label for cards, nav and related-link blocks. */
    label: string;
    /** One line for the hub card and related-link blurbs. */
    blurb: string;
}

export const USE_CASES: UseCaseEntry[] = [
    {
        slug: 'product-walkthrough-video',
        label: 'Product walkthrough videos',
        blurb: 'Show how a feature works in two to four minutes, with a script template.',
    },
    {
        slug: 'software-demo-recording',
        label: 'Software demo recording',
        blurb: 'Record a demo once and send it to every prospect, with watch stats.',
    },
    {
        slug: 'customer-onboarding-videos',
        label: 'Customer onboarding videos',
        blurb: 'One short video per setup step, kept current and easy to measure.',
    },
    {
        slug: 'bug-report-screen-recording',
        label: 'Bug report screen recordings',
        blurb: 'Reproduce the bug on video, blur customer data, link it in the ticket.',
    },
    {
        slug: 'release-walkthrough-video',
        label: 'Release walkthrough videos',
        blurb: 'A two-minute update for every release, for customers and internal teams.',
    },
];

export const useCaseHref = (slug: string): string => `/use-cases/${slug}/`;

/** Related-link entry for a sibling use case, by slug. */
export const useCaseLink = (slug: string): RelatedLink => {
    const entry = USE_CASES.find((u) => u.slug === slug);
    if (!entry) throw new Error(`Unknown use case: ${slug}`);
    return { label: entry.label, href: useCaseHref(slug), blurb: entry.blurb };
};

/* ---- Types shared with layouts/UseCaseLayout.astro ---- */

export interface UseCaseTrait {
    title: string;
    body: string;
}

export interface UseCaseStep {
    /** The Recordio feature this step relies on, shown as a pill. */
    feature: string;
    title: string;
    body: string;
}

export interface UseCaseExample {
    /** Basename in /public/videos/ (both .webm and .mp4 must exist). */
    video: string;
    caption: string;
}

export interface UseCaseTemplate {
    heading: string;
    intro: string;
    /** Rendered as preformatted lines with a copy button. */
    lines: string[];
}

export interface UseCaseRole {
    role: string;
    body: string;
}
