import type { ReactNode } from 'react';
import type { FaqItem } from '../faq';

export type { FaqItem };

/** One row of the summary table at the end of a listicle. */
export interface ToolTableRow {
    platform: string;
    freePlan: string;
    autoZoom: string;
    captions: string;
    shareLinks: string;
    teamLibrary: string;
    startingPrice: string;
}

export interface ToolEntry {
    name: string;
    /** External site, or "/" for Recordio. Used for the "Visit" link and ItemList JSON-LD. */
    url: string;
    /** Internal compare page for Recordio's entry. */
    compareHref?: string;
    compareLabel?: string;
    /** One paragraph. May contain internal links. */
    summary: ReactNode;
    bestFor: string;
    /** Price line, as read on the vendor's pricing page. */
    pricing: string;
    /** ISO date the pricing page was checked. */
    pricingChecked: string;
    pros: [string, string, string];
    cons: [string, string];
    /** Honest disqualifier, shown on Recordio's entry. */
    notForYouIf?: string;
    row: ToolTableRow;
}

export interface ReaderPick {
    reader: string;
    tool: string;
    why: string;
}

export interface AlternativesPost {
    slug: string;
    /** Title tag, 60 characters or fewer. */
    title: string;
    /** Meta description, 155 characters or fewer. */
    description: string;
    /** H1. */
    headline: string;
    /** Breadcrumb label. */
    crumb: string;
    datePublished: string;
    dateModified: string;
    /** Shown in the byline, e.g. "September 22, 2026". Keep in sync with dateModified. */
    updatedLabel: string;
    readTime: string;
    intro: ReactNode;
    /** Three one-sentence criteria. */
    criteria: [string, string, string];
    tools: ToolEntry[];
    picks: ReaderPick[];
    closing: ReactNode;
    faq: FaqItem[];
    related: { label: string; href: string; blurb: string }[];
}
