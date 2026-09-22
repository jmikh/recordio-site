/**
 * "Works on any distro" style grid for platform pages. Reused by the Linux
 * page (distros) and the Chromebook page (device families / channels).
 * Render statically (no client directive); it has no interactivity.
 */
export interface SupportItem {
    name: string;
    /** One short line under the name, e.g. "22.04 LTS and 24.04 LTS". */
    note?: string;
}

export interface SupportNote {
    heading: string;
    body: string;
}

interface PlatformSupportGridProps {
    eyebrow?: string;
    heading: string;
    intro?: string;
    items: SupportItem[];
    /** Cards rendered under the grid, e.g. requirements and the team angle. */
    notes?: SupportNote[];
    variant?: 'purple' | 'white';
    id?: string;
}

const PlatformSupportGrid = ({
    eyebrow = 'Compatibility',
    heading,
    intro,
    items,
    notes = [],
    variant = 'white',
    id = 'compatibility',
}: PlatformSupportGridProps) => {
    const sectionClass = variant === 'white' ? 'section-panel-white' : 'section-panel';
    return (
        <section id={id} className={`${sectionClass} py-20 px-6`}>
            <div className="max-w-5xl mx-auto">
                <div className="section-head">
                    <span className="eyebrow">{eyebrow}</span>
                    <h2 className="section-title">{heading}</h2>
                    {intro && <p className="section-subtitle mt-4">{intro}</p>}
                </div>

                <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                    {items.map((item) => (
                        <li
                            key={item.name}
                            className="rounded-2xl border border-border bg-surface-overlay/40 p-5"
                        >
                            <span className="block font-semibold text-text-highlighted">{item.name}</span>
                            {item.note && <span className="block mt-1 text-sm text-text-muted">{item.note}</span>}
                        </li>
                    ))}
                </ul>

                {notes.length > 0 && (
                    <div className="grid gap-6 md:grid-cols-2 mt-10">
                        {notes.map((n) => (
                            <div key={n.heading} className="card-premium">
                                <h3 className="text-lg font-bold text-text-highlighted mb-3">{n.heading}</h3>
                                <p className="text-sm text-text-muted leading-relaxed">{n.body}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PlatformSupportGrid;
