import { report, formatSeconds, type RetentionPoint } from '../../data/watch-time-report';
import { SUPPORT_EMAIL } from '../../utils/constants';

/**
 * Article body for the watch-time data asset. Charts are inline SVG built from
 * src/data/watch-time-report.ts so they update when the numbers do.
 * Chart colors: violet #6d28d9 (Recordio primary) and orange #eb6834 validated as
 * a two-slot categorical palette on the light surface (dataviz validator, Sept 2026).
 */

const SERIES = {
    primary: '#6d28d9',
    secondary: '#eb6834',
    grid: '#e4dff0',
    axis: '#7a7686',
};

const fmtDate = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

const fmtMonth = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

/* ── Figure 1: retention curve (single series, line + wash, end label) ── */
const RetentionChart = ({ points }: { points: RetentionPoint[] }) => {
    const w = 640, h = 300, padL = 44, padR = 56, padT = 16, padB = 36;
    const x = (p: number) => padL + (p / 100) * (w - padL - padR);
    const y = (v: number) => padT + (1 - v / 100) * (h - padT - padB);
    const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(p.percentOfVideo)},${y(p.viewersRemaining)}`).join(' ');
    const area = `${path} L${x(100)},${y(0)} L${x(0)},${y(0)} Z`;
    const last = points[points.length - 1];
    const half = points.find((p) => p.percentOfVideo === 50);
    return (
        <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-labelledby="fig1-title" className="w-full h-auto">
            <title id="fig1-title">Share of viewers still watching at each tenth of a walkthrough</title>
            {[0, 25, 50, 75, 100].map((v) => (
                <g key={v}>
                    <line x1={padL} x2={w - padR} y1={y(v)} y2={y(v)} stroke={SERIES.grid} strokeWidth="1" />
                    <text x={padL - 8} y={y(v) + 4} fontSize="12" textAnchor="end" fill={SERIES.axis}>{v}%</text>
                </g>
            ))}
            {[0, 20, 40, 60, 80, 100].map((p) => (
                <text key={p} x={x(p)} y={h - padB + 20} fontSize="12" textAnchor="middle" fill={SERIES.axis}>{p}%</text>
            ))}
            <path d={area} fill={SERIES.primary} opacity="0.1" />
            <path d={path} fill="none" stroke={SERIES.primary} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            {points.map((p) => (
                <circle key={p.percentOfVideo} cx={x(p.percentOfVideo)} cy={y(p.viewersRemaining)} r="4" fill={SERIES.primary} stroke="#fafafa" strokeWidth="2">
                    <title>{`${p.percentOfVideo}% of video: ${p.viewersRemaining}% of viewers still watching`}</title>
                </circle>
            ))}
            {half && (
                <text x={x(50)} y={y(half.viewersRemaining) - 12} fontSize="12" textAnchor="middle" fill="#30303a" fontWeight="600">{half.viewersRemaining}% at halfway</text>
            )}
            <text x={x(100) + 10} y={y(last.viewersRemaining) + 4} fontSize="12" fill="#30303a" fontWeight="600">{last.viewersRemaining}%</text>
            <text x={(padL + w - padR) / 2} y={h - 4} fontSize="12" textAnchor="middle" fill={SERIES.axis}>Position in the video</text>
        </svg>
    );
};

/* ── Figure 2: completion by length (single series columns, value on cap) ── */
const LengthChart = () => {
    const rows = report.byLength;
    const w = 640, h = 280, padL = 44, padR = 16, padT = 24, padB = 40;
    const band = (w - padL - padR) / rows.length;
    const bar = Math.min(24, band * 0.5);
    const y = (v: number) => padT + (1 - v / 100) * (h - padT - padB);
    return (
        <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-labelledby="fig2-title" className="w-full h-auto">
            <title id="fig2-title">Completion rate by walkthrough length</title>
            {[0, 25, 50, 75, 100].map((v) => (
                <g key={v}>
                    <line x1={padL} x2={w - padR} y1={y(v)} y2={y(v)} stroke={SERIES.grid} strokeWidth="1" />
                    <text x={padL - 8} y={y(v) + 4} fontSize="12" textAnchor="end" fill={SERIES.axis}>{v}%</text>
                </g>
            ))}
            {rows.map((r, i) => {
                const cx = padL + band * i + band / 2;
                const top = y(r.completionRate);
                const bottom = y(0);
                const height = bottom - top;
                return (
                    <g key={r.label}>
                        <rect x={cx - bar / 2} y={top} width={bar} height={height} rx="4" ry="4" fill={SERIES.primary}>
                            <title>{`${r.label}: ${r.completionRate}% completion, median watch ${formatSeconds(r.medianWatchSeconds)}`}</title>
                        </rect>
                        <rect x={cx - bar / 2} y={bottom - 4} width={bar} height={4} fill={SERIES.primary} />
                        <text x={cx} y={top - 8} fontSize="12" textAnchor="middle" fill="#30303a" fontWeight="600">{r.completionRate}%</text>
                        <text x={cx} y={h - padB + 20} fontSize="12" textAnchor="middle" fill={SERIES.axis}>{r.label}</text>
                    </g>
                );
            })}
        </svg>
    );
};

/* ── Figure 3: captions vs no captions (two series, legend + direct labels) ── */
const CaptionsChart = () => {
    const rows = report.captions;
    const metrics: { key: 'completionRate' | 'avgWatchPercent'; label: string }[] = [
        { key: 'completionRate', label: 'Completion rate' },
        { key: 'avgWatchPercent', label: 'Average share watched' },
    ];
    const w = 640, h = 260, padL = 44, padR = 16, padT = 24, padB = 40;
    const band = (w - padL - padR) / metrics.length;
    const bar = 24;
    const y = (v: number) => padT + (1 - v / 100) * (h - padT - padB);
    return (
        <>
            <ul className="flex gap-6 text-sm text-text-main mb-2 list-none p-0" aria-label="Legend">
                {rows.map((r, i) => (
                    <li key={r.label} className="flex items-center gap-2">
                        <span aria-hidden="true" className="inline-block w-3 h-3 rounded-sm" style={{ background: i === 0 ? SERIES.primary : SERIES.secondary }} />
                        {r.label}
                    </li>
                ))}
            </ul>
            <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-labelledby="fig3-title" className="w-full h-auto">
                <title id="fig3-title">Completion and share watched, with and without captions</title>
                {[0, 25, 50, 75, 100].map((v) => (
                    <g key={v}>
                        <line x1={padL} x2={w - padR} y1={y(v)} y2={y(v)} stroke={SERIES.grid} strokeWidth="1" />
                        <text x={padL - 8} y={y(v) + 4} fontSize="12" textAnchor="end" fill={SERIES.axis}>{v}%</text>
                    </g>
                ))}
                {metrics.map((m, mi) => {
                    const cx = padL + band * mi + band / 2;
                    return (
                        <g key={m.key}>
                            {rows.map((r, ri) => {
                                const v = r[m.key];
                                const x = cx + (ri === 0 ? -bar - 1 : 1);
                                const top = y(v);
                                const bottom = y(0);
                                return (
                                    <g key={r.label}>
                                        <rect x={x} y={top} width={bar} height={bottom - top} rx="4" ry="4" fill={ri === 0 ? SERIES.primary : SERIES.secondary}>
                                            <title>{`${r.label}, ${m.label.toLowerCase()}: ${v}%`}</title>
                                        </rect>
                                        <rect x={x} y={bottom - 4} width={bar} height={4} fill={ri === 0 ? SERIES.primary : SERIES.secondary} />
                                        <text x={x + bar / 2} y={top - 8} fontSize="12" textAnchor="middle" fill="#30303a" fontWeight="600">{v}%</text>
                                    </g>
                                );
                            })}
                            <text x={cx} y={h - padB + 20} fontSize="12" textAnchor="middle" fill={SERIES.axis}>{m.label}</text>
                        </g>
                    );
                })}
            </svg>
        </>
    );
};

const Figure = ({ n, title, children, table }: { n: number; title: string; children: React.ReactNode; table: React.ReactNode }) => (
    <figure className="my-10 rounded-2xl border border-border bg-surface-body p-5 md:p-6">
        <figcaption className="text-sm font-semibold text-text-highlighted mb-4">Figure {n}. {title}</figcaption>
        {children}
        <details className="mt-4 text-sm">
            <summary className="cursor-pointer text-text-muted">Show the numbers as a table</summary>
            <div className="mt-3 overflow-x-auto">{table}</div>
        </details>
    </figure>
);

const WatchTimeReport = () => {
    const r = report;
    const drop10 = 100 - (r.retention.find((p) => p.percentOfVideo === 10)?.viewersRemaining ?? 100);
    const captioned = r.captions.find((c) => c.label === 'With captions');
    const uncaptioned = r.captions.find((c) => c.label === 'Without captions');
    const captionGap = captioned && uncaptioned ? captioned.completionRate - uncaptioned.completionRate : 0;

    return (
        <article className="prose max-w-3xl mx-auto px-6 py-12 md:py-20">
            {r.status === 'draft' && (
                <div role="alert" className="not-prose mb-8 rounded-xl border-2 border-secondary bg-surface-raised p-4 text-sm text-text-highlighted">
                    <strong>Draft with placeholder numbers.</strong> Replace every value in src/data/watch-time-report.ts from Mux Data, set status to final, and rename the page before publishing.
                </div>
            )}

            <p className="eyebrow">Original research</p>
            <h1>What {r.sampleSize.toLocaleString()} product walkthroughs taught us about watch time</h1>
            <p className="text-text-muted text-sm">
                By John Mikhail, founder of Recordio. Published {fmtDate(r.datePublished)}
                {r.dateModified !== r.datePublished && `, updated ${fmtDate(r.dateModified)}`}.
            </p>

            <p>
                Teams record walkthroughs so that other people watch them. So we looked at how far viewers actually get.
                This report covers {r.sampleSize.toLocaleString()} product walkthroughs shared through Recordio share links
                between {fmtMonth(r.periodStart)} and {fmtMonth(r.periodEnd)}, with {r.viewCount.toLocaleString()} views between them.
                Numbers are aggregated and anonymised. No individual video, viewer or workspace is identifiable.
            </p>

            <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
                {[
                    { label: 'Median length', value: formatSeconds(r.medianLengthSeconds) },
                    { label: 'Median share watched', value: `${r.medianWatchPercent}%` },
                    { label: 'Reached the end', value: `${r.completionRate}%` },
                    { label: 'Left in the first 10%', value: `${drop10}%` },
                ].map((t) => (
                    <div key={t.label} className="rounded-xl border border-border bg-surface-body p-4">
                        <div className="text-2xl font-bold text-text-highlighted">{t.value}</div>
                        <div className="text-xs text-text-muted mt-1">{t.label}</div>
                    </div>
                ))}
            </div>

            <h2>Where viewers leave</h2>
            <p>
                The curve below shows the share of viewers still watching at each tenth of a walkthrough. The steepest
                loss happens before the first tenth is over, when the viewer decides whether the video answers their question.
            </p>
            <Figure
                n={1}
                title="Share of viewers still watching at each tenth of a walkthrough"
                table={
                    <table>
                        <thead><tr><th>Position in video</th><th>Viewers still watching</th></tr></thead>
                        <tbody>{r.retention.map((p) => <tr key={p.percentOfVideo}><td>{p.percentOfVideo}%</td><td>{p.viewersRemaining}%</td></tr>)}</tbody>
                    </table>
                }
            >
                <RetentionChart points={r.retention} />
            </Figure>

            <h2>Length and completion</h2>
            <p>
                Completion means the view reached the last tenth of the video. Shorter walkthroughs are finished far more
                often, and the median seconds watched grows much more slowly than the video length does.
            </p>
            <Figure
                n={2}
                title="Completion rate by walkthrough length"
                table={
                    <table>
                        <thead><tr><th>Length</th><th>Walkthroughs</th><th>Completion rate</th><th>Median watch time</th></tr></thead>
                        <tbody>{r.byLength.map((b) => <tr key={b.label}><td>{b.label}</td><td>{b.walkthroughs.toLocaleString()}</td><td>{b.completionRate}%</td><td>{formatSeconds(b.medianWatchSeconds)}</td></tr>)}</tbody>
                    </table>
                }
            >
                <LengthChart />
            </Figure>

            <h2>Captions</h2>
            <p>
                Walkthroughs with captions were completed {captionGap} percentage points more often than walkthroughs without them.
                Many views happen with the sound off, in a chat window or during a meeting, and captions let those viewers keep following.
            </p>
            <Figure
                n={3}
                title="Completion and share watched, with and without captions"
                table={
                    <table>
                        <thead><tr><th>Group</th><th>Walkthroughs</th><th>Completion rate</th><th>Average share watched</th></tr></thead>
                        <tbody>{r.captions.map((c) => <tr key={c.label}><td>{c.label}</td><td>{c.walkthroughs.toLocaleString()}</td><td>{c.completionRate}%</td><td>{c.avgWatchPercent}%</td></tr>)}</tbody>
                    </table>
                }
            >
                <CaptionsChart />
            </Figure>

            <h2>What this means for your next walkthrough</h2>
            {r.findings.map((f) => (
                <section key={f.heading}>
                    <h3>{f.heading}</h3>
                    <p>{f.body}</p>
                </section>
            ))}

            <h2>Method</h2>
            <ul>
                <li>Sample: walkthroughs shared via a Recordio share link with at least {r.minimumViewsPerVideo} views, recorded between {fmtMonth(r.periodStart)} and {fmtMonth(r.periodEnd)}.</li>
                <li>Watch position and watch time come from the video player, aggregated per video and then across the sample. Owner views are excluded.</li>
                <li>Completion means the viewer reached the last 10% of the video. Retention at a point means the share of views whose furthest position passed it.</li>
                <li>The captions split compares videos with an enabled caption track to videos without one. It is an observed difference, not a controlled experiment.</li>
                <li>Everything is aggregated. We do not publish or share per-video, per-viewer or per-workspace data.</li>
            </ul>
            <p>
                Cite freely with a link to this page. For the aggregate tables as CSV, or to ask about the method,
                email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
            </p>

            <h2>Record walkthroughs people finish</h2>
            <p>
                Recordio adds <a href="/features/auto-zoom/">automatic zoom</a> and <a href="/features/ai-captions/">captions</a> to every
                recording and gives you <a href="/features/share-links/">a share link with view analytics</a>, so you can see your own retention
                curve for every walkthrough. See <a href="/use-cases/product-walkthrough-video/">how teams use it for product walkthroughs</a>,
                or start with <a href="/compare/loom/">how it compares to Loom</a>.
            </p>

            <hr />
            <div className="not-prose flex items-center justify-between gap-6 flex-wrap">
                <div className="flex items-center gap-4">
                    <img src="/assets/john.webp" alt="John Mikhail" className="w-24 h-24 rounded-full object-cover border-2 border-border flex-shrink-0" loading="lazy" />
                    <div className="flex flex-col">
                        <span className="text-text-highlighted font-semibold text-base leading-snug">John Mikhail</span>
                        <span className="text-primary-highlighted text-sm leading-snug mt-0.5">Founder of Recordio</span>
                        <span className="text-text-muted text-sm leading-snug mt-2">MIT grad. Previously at Google and Mixpanel.</span>
                    </div>
                </div>
                <a href="https://www.linkedin.com/in/john-mikhail/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors text-sm">
                    LinkedIn
                </a>
            </div>
        </article>
    );
};

export default WatchTimeReport;
