/**
 * Multi-column comparison of Recordio against several platform-native tools
 * (e.g. OBS, SimpleScreenRecorder, Kazam on Linux). Reuses the compare-table
 * styles. Column 0 of `tools` is always Recordio. Render statically.
 */
export interface ToolRow {
    feature: string;
    description?: string;
    /** One value per entry in `tools`, in the same order. */
    values: (string | boolean)[];
}

interface PlatformToolTableProps {
    eyebrow?: string;
    heading: string;
    intro?: string;
    /** Column headings after "Feature". The first must be "Recordio". */
    tools: string[];
    rows: ToolRow[];
    variant?: 'purple' | 'white';
    id?: string;
}

const CheckIcon = ({ highlighted }: { highlighted: boolean }) => (
    <svg
        className={`w-5 h-5 ${highlighted ? 'text-secondary' : 'text-text-muted'}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-label="Yes"
        role="img"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const DashIcon = () => (
    <svg
        className="w-5 h-5 text-text-muted opacity-40"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-label="No"
        role="img"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
    </svg>
);

const renderCell = (value: string | boolean, isRecordio: boolean) => {
    if (typeof value === 'boolean') {
        return value ? <CheckIcon highlighted={isRecordio} /> : <DashIcon />;
    }
    return (
        <span className={`text-sm font-medium ${isRecordio ? 'text-text-highlighted' : 'text-text-muted'}`}>
            {value}
        </span>
    );
};

const PlatformToolTable = ({
    eyebrow = 'Compare',
    heading,
    intro,
    tools,
    rows,
    variant = 'white',
    id = 'comparison',
}: PlatformToolTableProps) => {
    const sectionClass = variant === 'white' ? 'section-panel-white' : 'section-panel';
    const featureWidth = 22;
    const toolWidth = (100 - featureWidth) / tools.length;

    return (
        <section id={id} className={`${sectionClass} py-20 px-6`}>
            <div className="max-w-6xl mx-auto">
                <div className="section-head">
                    <span className="eyebrow">{eyebrow}</span>
                    <h2 className="section-title">{heading}</h2>
                    {intro && <p className="section-subtitle mt-4">{intro}</p>}
                </div>

                <div className="compare-table-wrapper">
                    <table className="compare-table" style={{ minWidth: 820 }}>
                        <thead>
                            <tr>
                                <th className="compare-th compare-th--feature" style={{ width: `${featureWidth}%` }}>
                                    Feature
                                </th>
                                {tools.map((tool, i) => (
                                    <th
                                        key={tool}
                                        className={`compare-th ${i === 0 ? 'compare-th--recordio' : 'compare-th--competitor'}`}
                                        style={{ width: `${toolWidth}%` }}
                                    >
                                        {i === 0 && (
                                            <img
                                                src="/favicon-32x32.png"
                                                alt=""
                                                className="w-5 h-5 rounded inline-block mr-2 -mt-0.5"
                                            />
                                        )}
                                        {tool}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.feature} className="compare-row">
                                    <td className="compare-td compare-td--feature">
                                        <div className="font-medium text-text-highlighted text-sm">{row.feature}</div>
                                        {row.description && (
                                            <div className="text-xs text-text-muted mt-0.5">{row.description}</div>
                                        )}
                                    </td>
                                    {row.values.map((value, i) => (
                                        <td
                                            key={i}
                                            className={`compare-td ${i === 0 ? 'compare-td--recordio' : 'compare-td--competitor'}`}
                                        >
                                            {renderCell(value, i === 0)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default PlatformToolTable;
