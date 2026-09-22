/**
 * Data for the linkable asset "What N product walkthroughs taught us about watch time"
 * (Plan 12, item 4). Rendered by components/blog/WatchTimeReport.tsx and
 * pages/blog/_walkthrough-watch-time.astro (the underscore keeps the page out of the
 * build until the numbers are real).
 *
 * EVERY NUMBER BELOW IS A PLACEHOLDER that only shows the shape of the data.
 * Replace them from Mux Data following docs/offsite/data-asset-brief.md, set
 * `status` to "final", then rename the page file to publish. While `status` is
 * "draft" the article renders a warning banner.
 */

export type ReportStatus = 'draft' | 'final';

export interface RetentionPoint {
    /** Percent of the video's length, 0 to 100 in steps of 10. */
    percentOfVideo: number;
    /** Percent of viewers still watching at that point. */
    viewersRemaining: number;
}

export interface LengthBucket {
    label: string;
    walkthroughs: number;
    /** Percent of views that reached the last 10% of the video. */
    completionRate: number;
    /** Median seconds watched per view. */
    medianWatchSeconds: number;
}

export interface CaptionsSplit {
    label: 'With captions' | 'Without captions';
    walkthroughs: number;
    completionRate: number;
    /** Average share of the video watched per view, percent. */
    avgWatchPercent: number;
}

export interface WatchTimeReport {
    status: ReportStatus;
    /** Number of walkthroughs in the sample after filters. */
    sampleSize: number;
    /** Number of views behind those walkthroughs. */
    viewCount: number;
    periodStart: string;
    periodEnd: string;
    datePublished: string;
    dateModified: string;
    /** Views per video required to be included. */
    minimumViewsPerVideo: number;
    medianLengthSeconds: number;
    medianWatchPercent: number;
    /** Percent of all views that reached the last 10%. */
    completionRate: number;
    retention: RetentionPoint[];
    byLength: LengthBucket[];
    captions: CaptionsSplit[];
    /** Three to five one-paragraph findings written after looking at the real data. */
    findings: { heading: string; body: string }[];
}

export const report: WatchTimeReport = {
    status: 'draft',
    sampleSize: 0,
    viewCount: 0,
    periodStart: '2026-06-01',
    periodEnd: '2026-08-31',
    datePublished: '2026-10-15',
    dateModified: '2026-10-15',
    minimumViewsPerVideo: 5,
    medianLengthSeconds: 94,
    medianWatchPercent: 61,
    completionRate: 38,
    retention: [
        { percentOfVideo: 0, viewersRemaining: 100 },
        { percentOfVideo: 10, viewersRemaining: 88 },
        { percentOfVideo: 20, viewersRemaining: 79 },
        { percentOfVideo: 30, viewersRemaining: 71 },
        { percentOfVideo: 40, viewersRemaining: 64 },
        { percentOfVideo: 50, viewersRemaining: 58 },
        { percentOfVideo: 60, viewersRemaining: 53 },
        { percentOfVideo: 70, viewersRemaining: 48 },
        { percentOfVideo: 80, viewersRemaining: 44 },
        { percentOfVideo: 90, viewersRemaining: 40 },
        { percentOfVideo: 100, viewersRemaining: 34 },
    ],
    byLength: [
        { label: 'Under 1 min', walkthroughs: 0, completionRate: 55, medianWatchSeconds: 38 },
        { label: '1 to 2 min', walkthroughs: 0, completionRate: 42, medianWatchSeconds: 66 },
        { label: '2 to 4 min', walkthroughs: 0, completionRate: 31, medianWatchSeconds: 101 },
        { label: '4 to 8 min', walkthroughs: 0, completionRate: 22, medianWatchSeconds: 142 },
        { label: 'Over 8 min', walkthroughs: 0, completionRate: 14, medianWatchSeconds: 170 },
    ],
    captions: [
        { label: 'With captions', walkthroughs: 0, completionRate: 44, avgWatchPercent: 66 },
        { label: 'Without captions', walkthroughs: 0, completionRate: 33, avgWatchPercent: 55 },
    ],
    findings: [
        {
            heading: 'The first ten percent decides most of it',
            body: 'PLACEHOLDER. Describe the drop between 0% and 10% and what the walkthroughs that kept viewers did in their opening seconds (showed the result first, skipped the intro).',
        },
        {
            heading: 'Two minutes is the practical ceiling',
            body: 'PLACEHOLDER. Compare completion in the under-2-minute buckets with the over-4-minute buckets. Suggest splitting long walkthroughs into a series.',
        },
        {
            heading: 'Captions keep people watching',
            body: 'PLACEHOLDER. State the completion gap between captioned and uncaptioned walkthroughs and note that many views happen with sound off.',
        },
    ],
};

export const formatSeconds = (s: number): string => {
    const m = Math.floor(s / 60);
    const r = Math.round(s % 60);
    return m > 0 ? `${m} min ${r} s` : `${r} s`;
};
