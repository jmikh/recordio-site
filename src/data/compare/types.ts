import type { FeatureRow } from '../../components/compare/CompareFeatureTable';
import type { FaqItem } from '../faq';

export type { FeatureRow, FaqItem };

/** A video (filename under /public/videos/, .webm with an .mp4 sibling) or an image path. */
export interface CompareMedia {
    video?: string;
    image?: string;
    alt: string;
}

/** A heading plus one paragraph. Body text may use [label](/path/) links and **bold**. */
export interface CompareSection {
    heading: string;
    body: string;
    media?: CompareMedia;
}

export interface ComparePricing {
    /** Competitor's headline price billed monthly, e.g. "$18 per user per month". */
    competitorMonthly: string;
    /** Competitor's headline price billed annually. */
    competitorAnnual: string;
    /** What the competitor's free tier or trial gives, or "No free plan". */
    competitorFree: string;
    /** The competitor's cost for five people, with the arithmetic written out. */
    competitorTeamOfFive: string;
    /** What it costs for people who only watch: viewer seats, links, or "not applicable". */
    competitorViewers: string;
    /** One or two sentences of context: which tier the arithmetic uses, caps, licence terms. */
    notes: string;
    /** ISO date the competitor's pricing page was checked. */
    checkedOn: string;
}

export interface CompareRelated {
    /** Three sibling compare slugs. */
    compare: string[];
    /** Path of the related blog post, e.g. "/blog/best-loom-alternatives-2026/". */
    post?: string;
    /** Path of the related platform page, e.g. "/for/windows/". */
    platform?: string;
}

export interface Competitor {
    slug: string;
    name: string;
    /** 60 characters or fewer, keyword first, "| Recordio" last. */
    title: string;
    /** 155 characters or fewer. */
    description: string;
    /** Two sentences, shown above the fold under the H1. */
    verdict: string;
    /** Three bullets each. */
    chooseThem: string[];
    chooseRecordio: string[];
    /** Two or three honest items. */
    whatTheyDoWell: CompareSection[];
    /** Three or four items, each with media and a caption written for this competitor. */
    differences: CompareSection[];
    table: FeatureRow[];
    pricing: ComparePricing;
    /** Exactly five page-specific questions. Rendered on the page and as FAQPage JSON-LD. */
    faq: FaqItem[];
    related: CompareRelated;
    /** ISO date of the last copy revision. */
    updated: string;
    /** Optional per-page Open Graph image path (Plan 10 produces them). */
    ogImage?: string;
}
