/**
 * Block of related internal links, used at the bottom of compare, platform,
 * feature, use-case and blog pages. Keep to 3 to 6 links; anchor text should
 * describe the destination ("Recordio vs OBS", not "click here").
 */
export interface RelatedLink {
    label: string;
    href: string;
    /** One short line under the label. */
    blurb?: string;
}

interface RelatedLinksProps {
    heading?: string;
    links: RelatedLink[];
    variant?: 'purple' | 'white';
}

const RelatedLinks = ({ heading = 'Related', links, variant = 'white' }: RelatedLinksProps) => {
    const sectionClass = variant === 'white' ? 'section-panel-white' : 'section-panel';
    return (
        <section aria-label={heading} className={`${sectionClass} py-16 px-6`}>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-text-highlighted mb-8">{heading}</h2>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="block h-full rounded-2xl border border-border bg-surface-overlay/40 hover:border-primary/40 transition-colors p-5"
                            >
                                <span className="block font-semibold text-text-highlighted">{l.label}</span>
                                {l.blurb && <span className="block mt-1 text-sm text-text-muted">{l.blurb}</span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default RelatedLinks;
