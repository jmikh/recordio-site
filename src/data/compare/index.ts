import type { Competitor } from './types';
import { bandicam } from './bandicam';
import { loom } from './loom';
import { screenStudio } from './screen-studio';
import { screencastify } from './screencastify';
import { camtasia } from './camtasia';
import { obs } from './obs';
import { tella } from './tella';
import { clueso } from './clueso';
import { focusee } from './focusee';
import { screenity } from './screenity';

/** Order matches the writing order in docs/plans/01-compare-template-rebuild.md. */
export const competitors: Competitor[] = [
    bandicam,
    loom,
    screenStudio,
    screencastify,
    camtasia,
    obs,
    tella,
    clueso,
    focusee,
    screenity,
];

export const competitorBySlug = (slug: string): Competitor => {
    const found = competitors.find((c) => c.slug === slug);
    if (!found) throw new Error(`Unknown competitor slug: ${slug}`);
    return found;
};

/** Labels for the non-compare pages a data file may point at in `related`. */
export const relatedPageLabels: Record<string, { label: string; blurb: string }> = {
    '/blog/best-loom-alternatives-2026/': {
        label: 'Best Loom alternatives in 2026',
        blurb: 'What Loom costs per seat and which tools replace it for teams.',
    },
    '/blog/best-screen-recorders-2026/': {
        label: 'Best screen recorders in 2026',
        blurb: 'Recordio, Screen Studio and FocuSee compared for product demos.',
    },
    '/blog/best-bandicam-alternatives-2026/': {
        label: 'Best Bandicam alternatives in 2026',
        blurb: 'Eight options for Mac, Linux and teams, with free tiers that do not watermark.',
    },
    '/blog/best-screen-studio-alternatives-2026/': {
        label: 'Best Screen Studio alternatives in 2026',
        blurb: 'The same polish on Windows and Linux, plus tools that share to a team.',
    },
    '/blog/best-screencastify-alternatives-2026/': {
        label: 'Best Screencastify alternatives in 2026',
        blurb: 'Free plans for teachers, students and Chromebooks, with watermark notes.',
    },
    '/blog/best-camtasia-alternatives-2026/': {
        label: 'Best Camtasia alternatives in 2026',
        blurb: 'Fast product demos without a timeline, with 2026 pricing.',
    },
    '/for/mac/': {
        label: 'Screen recorder for Mac',
        blurb: 'Record walkthroughs in Chrome on macOS, no native app to install.',
    },
    '/for/windows/': {
        label: 'Screen recorder for Windows',
        blurb: 'The same recorder and team library on Windows 10 and 11.',
    },
    '/for/linux/': {
        label: 'Screen recorder for Linux',
        blurb: 'Works on Ubuntu, Fedora and any distro that runs Chrome or Brave.',
    },
    '/for/chrome/': {
        label: 'Screen recorder Chrome extension',
        blurb: 'How the extension records tabs and what the web app adds.',
    },
};
