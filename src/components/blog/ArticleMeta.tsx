/**
 * Shared byline, date line and author card for blog posts.
 * Keep the visible dates in sync with datePublished / dateModified in the page's Article JSON-LD.
 */

interface ArticleHeaderProps {
    eyebrow: string;
    title: string;
    /** Human-readable, e.g. "September 22, 2026". */
    updated: string;
    /** Same date as ISO YYYY-MM-DD; must match dateModified in the page's Article JSON-LD. */
    updatedIso: string;
    readTime: string;
}

export const ArticleHeader = ({ eyebrow, title, updated, updatedIso, readTime }: ArticleHeaderProps) => (
    <header className="mb-12 text-center">
        <p className="text-primary-highlighted text-sm font-semibold uppercase tracking-wider mb-4">{eyebrow}</p>
        <h1 className="text-3xl md:text-5xl font-bold text-text-highlighted leading-tight mb-4">{title}</h1>
        <p className="text-text-muted text-base">
            By <a href="https://www.linkedin.com/in/john-mikhail/" rel="author noopener noreferrer" target="_blank" className="text-text-main hover:text-primary transition-colors">John Mikhail</a>
            {' · '}Updated <time dateTime={updatedIso}>{updated}</time>
            {' · '}{readTime}
        </p>
    </header>
);

export const AuthorCard = () => (
    <div className="not-prose flex items-center justify-between gap-4 py-6 mt-10 border-t border-border">
        <div className="flex items-center gap-4">
            <img
                src="/assets/john.webp"
                alt="John Mikhail"
                className="w-24 h-24 rounded-full object-cover border-2 border-border flex-shrink-0"
                loading="lazy"
            />
            <div className="flex flex-col">
                <span className="text-text-highlighted font-semibold text-base leading-snug">John Mikhail</span>
                <span className="text-primary-highlighted text-sm leading-snug mt-0.5">Founder of Recordio</span>
                <span className="text-text-muted text-sm leading-snug mt-2">
                    MIT grad · Previously at Google and Mixpanel · Tech and AI enthusiast
                </span>
            </div>
        </div>
        <a
            href="https://www.linkedin.com/in/john-mikhail/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-text-muted hover:text-primary transition-colors"
            aria-label="John Mikhail on LinkedIn"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        </a>
    </div>
);

/** Numbered step list used by the how-to posts. Matches the HowTo JSON-LD steps in the page. */
export interface Step {
    title: string;
    body: React.ReactNode;
}

export const StepList = ({ steps }: { steps: Step[] }) => (
    <ol className="not-prose my-6 space-y-5">
        {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
                <span
                    aria-hidden="true"
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/15 text-primary-highlighted font-bold flex items-center justify-center"
                >
                    {i + 1}
                </span>
                <div>
                    <h3 className="text-lg font-bold text-text-highlighted leading-snug mb-1">{s.title}</h3>
                    <div className="text-text-main leading-relaxed">{s.body}</div>
                </div>
            </li>
        ))}
    </ol>
);

/** Figure with a caption; images live under /public/assets. */
export const Figure = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
    <figure className="not-prose my-8">
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto rounded-xl border border-border" />
        {caption && <figcaption className="mt-2 text-sm text-text-muted text-center">{caption}</figcaption>}
    </figure>
);
