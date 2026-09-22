/**
 * Feature pages under /features/. Used by the features hub, the related-links
 * blocks on each feature page, and (via Plan 08) the footer and FeatureVideos
 * carousel. Keep slugs in sync with src/pages/features/*.astro.
 */
export interface FeatureSummary {
    slug: string;
    /** Short name used in link text and breadcrumbs. */
    name: string;
    href: string;
    /** One line for cards and related-link blurbs. */
    blurb: string;
    plan: 'Free' | 'Pro';
}

export const featurePages: FeatureSummary[] = [
    {
        slug: 'auto-zoom',
        name: 'Auto zoom',
        href: '/features/auto-zoom/',
        blurb: 'Zooms to the input, card or menu you interact with. Every zoom is an editable keyframe.',
        plan: 'Free',
    },
    {
        slug: 'ai-captions',
        name: 'AI captions',
        href: '/features/ai-captions/',
        blurb: 'Word-level captions from your voiceover. Fix a word in place or delete a line to cut the clip.',
        plan: 'Pro',
    },
    {
        slug: 'blur',
        name: 'Blur sensitive info',
        href: '/features/blur/',
        blurb: 'Blur any region of a recording or screenshot before you share it outside the team.',
        plan: 'Free',
    },
    {
        slug: 'share-links',
        name: 'Share links with analytics',
        href: '/features/share-links/',
        blurb: 'Send a link instead of a file and see view counts and watch time for every video.',
        plan: 'Pro',
    },
    {
        slug: 'team-library',
        name: 'Team library',
        href: '/features/team-library/',
        blurb: 'One workspace for every walkthrough, with roles and unlimited viewer seats.',
        plan: 'Pro',
    },
];

export const getFeature = (slug: string): FeatureSummary => {
    const f = featurePages.find((p) => p.slug === slug);
    if (!f) throw new Error(`Unknown feature slug: ${slug}`);
    return f;
};
