import type { AlternativesPost, ToolEntry } from '../../data/blog/alternatives-types';
import { ArticleHeader, AuthorCard } from './ArticleMeta';

/**
 * Renders a "Best X alternatives" post from a data file in src/data/blog/.
 * The page (src/pages/blog/*.astro) owns the Article and ItemList JSON-LD,
 * the breadcrumbs, the FAQ section and the related-links block; this
 * component only renders the article body.
 */

const formatChecked = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

const ToolSection = ({ tool, index }: { tool: ToolEntry; index: number }) => {
    const isInternal = tool.url.startsWith('/');
    return (
        <section id={tool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
            <h3>
                {index + 1}. {tool.name}
            </h3>
            {tool.summary}
            {tool.notForYouIf && (
                <p>
                    <strong>Not for you if:</strong> {tool.notForYouIf}
                </p>
            )}
            <p>
                <strong>Best for:</strong> {tool.bestFor}
                <br />
                <strong>Pricing:</strong> {tool.pricing}{' '}
                <span className="text-text-muted text-sm">(checked {formatChecked(tool.pricingChecked)})</span>
            </p>
            <div className="not-prose grid gap-4 sm:grid-cols-2 my-5">
                <div className="rounded-xl border border-border bg-surface-overlay/40 p-4">
                    <p className="text-sm font-semibold text-text-highlighted mb-2">Pros</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                        {tool.pros.map((p) => (
                            <li key={p}>{p}</li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-xl border border-border bg-surface-overlay/40 p-4">
                    <p className="text-sm font-semibold text-text-highlighted mb-2">Cons</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                        {tool.cons.map((c) => (
                            <li key={c}>{c}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <p>
                {isInternal ? (
                    <a href={tool.url}>See Recordio</a>
                ) : (
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                        Visit {tool.name}
                    </a>
                )}
                {tool.compareHref && (
                    <>
                        {' · '}
                        <a href={tool.compareHref}>{tool.compareLabel ?? 'See the full comparison'}</a>
                    </>
                )}
            </p>
        </section>
    );
};

const AlternativesArticle = ({ post }: { post: AlternativesPost }) => (
    <article className="prose max-w-3xl mx-auto px-6 py-12 md:py-20">
        <a
            href="/blog/"
            className="not-prose inline-flex items-center gap-1 text-sm text-text-muted hover:text-primary transition-colors mb-8"
        >
            ← Back to Blog
        </a>

        <ArticleHeader eyebrow="Alternatives" title={post.headline} updated={post.updatedLabel} readTime={post.readTime} />

        {post.intro}

        <h2>How we picked</h2>
        <ul>
            {post.criteria.map((c) => (
                <li key={c}>{c}</li>
            ))}
        </ul>
        <p>
            We build Recordio, so we list it first and say plainly who it is not for. Prices were read from each
            vendor's own pricing page on the date shown next to each entry.
        </p>

        <hr />

        <h2>The {post.tools.length} best {post.crumb.replace(/ alternatives$/i, '')} alternatives</h2>
        {post.tools.map((tool, i) => (
            <ToolSection key={tool.name} tool={tool} index={i} />
        ))}

        <hr />

        <h2>All {post.tools.length} tools compared</h2>
        <div className="overflow-x-auto">
            <table>
                <thead>
                    <tr>
                        <th>Tool</th>
                        <th>Platform</th>
                        <th>Free plan</th>
                        <th>Auto zoom</th>
                        <th>Captions</th>
                        <th>Share links</th>
                        <th>Team library</th>
                        <th>Starting price</th>
                    </tr>
                </thead>
                <tbody>
                    {post.tools.map((t) => (
                        <tr key={t.name}>
                            <td>{t.name}</td>
                            <td>{t.row.platform}</td>
                            <td>{t.row.freePlan}</td>
                            <td>{t.row.autoZoom}</td>
                            <td>{t.row.captions}</td>
                            <td>{t.row.shareLinks}</td>
                            <td>{t.row.teamLibrary}</td>
                            <td>{t.row.startingPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <h2>Which one should you pick</h2>
        <ul>
            {post.picks.map((p) => (
                <li key={p.reader}>
                    <strong>{p.reader}:</strong> {p.tool}. {p.why}
                </li>
            ))}
        </ul>

        {post.closing}

        <AuthorCard />
    </article>
);

export default AlternativesArticle;
