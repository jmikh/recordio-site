/**
 * JSON-LD builders for blog posts. Each page calls these in its frontmatter and
 * emits the result with <script type="application/ld+json" set:html={...} />.
 */
import { SITE_URL } from '../../utils/constants';

const author = {
    '@type': 'Person',
    name: 'John Mikhail',
    jobTitle: 'Founder of Recordio',
    url: 'https://www.linkedin.com/in/john-mikhail/',
    description: 'MIT grad, previously at Google and Mixpanel, tech and AI enthusiast',
};

const publisher = {
    '@type': 'Organization',
    name: 'Recordio',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/fulllogo-light.png` },
};

export interface ArticleMeta {
    headline: string;
    description: string;
    /** Site path with leading and trailing slash, e.g. "/blog/how-to-record-screen-on-ubuntu/". */
    path: string;
    /** ISO dates, YYYY-MM-DD. Keep in sync with the visible byline. */
    datePublished: string;
    dateModified: string;
}

export const articleJsonLd = (m: ArticleMeta): string =>
    JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: m.headline,
        description: m.description,
        datePublished: m.datePublished,
        dateModified: m.dateModified,
        author,
        image: `${SITE_URL}/og-image.png`,
        publisher,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${m.path}` },
    });

export interface HowToStep {
    name: string;
    text: string;
}

export const howToJsonLd = (opts: {
    name: string;
    description: string;
    path: string;
    /** Anchor of the section that holds the steps, e.g. "obs". */
    anchor: string;
    totalTime?: string;
    tools?: string[];
    steps: HowToStep[];
}): string =>
    JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: opts.name,
        description: opts.description,
        ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
        ...(opts.tools ? { tool: opts.tools.map((t) => ({ '@type': 'HowToTool', name: t })) } : {}),
        step: opts.steps.map((s, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: s.name,
            text: s.text,
            url: `${SITE_URL}${opts.path}#${opts.anchor}`,
        })),
    });

export interface ListedItem {
    name: string;
    url: string;
    description?: string;
}

export const itemListJsonLd = (opts: { name: string; description: string; items: ListedItem[] }): string =>
    JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: opts.name,
        description: opts.description,
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: opts.items.length,
        itemListElement: opts.items.map((it, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: it.name,
            url: it.url,
            ...(it.description ? { description: it.description } : {}),
        })),
    });
