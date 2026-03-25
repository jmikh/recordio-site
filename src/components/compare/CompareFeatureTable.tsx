import { useScrollReveal } from '../../hooks/useScrollReveal';

export interface FeatureRow {
    feature: string;
    description?: string;
    recordio: string | boolean;
    competitor: string | boolean;
}

interface CompareFeatureTableProps {
    competitorName: string;
    rows: FeatureRow[];
    variant?: 'purple' | 'white';
}

const CheckIcon = ({ variant = 'recordio' }: { variant?: 'recordio' | 'competitor' }) => (
    <svg
        className={`w-5 h-5 ${variant === 'recordio' ? 'text-secondary' : 'text-text-muted'}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const XIcon = () => (
    <svg className="w-5 h-5 text-text-muted opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
    </svg>
);

const renderCell = (value: string | boolean, variant: 'recordio' | 'competitor') => {
    if (typeof value === 'boolean') {
        return value ? <CheckIcon variant={variant} /> : <XIcon />;
    }
    return (
        <span className={`text-sm font-medium ${variant === 'recordio' ? 'text-text-highlighted' : 'text-text-muted'}`}>
            {value}
        </span>
    );
};

const CompareFeatureTable = ({ competitorName, rows, variant = 'white' }: CompareFeatureTableProps) => {
    const tableRef = useScrollReveal();
    const sectionClass = variant === 'white' ? 'section-panel-white' : 'section-panel';

    return (
        <section id="comparison" className={`${sectionClass} py-20 px-6`}>
            <div ref={tableRef} className="max-w-4xl mx-auto scroll-reveal">
                <h2 className="text-3xl md:text-4xl font-bold text-text-highlighted mb-12 text-center">
                    Feature Comparison
                </h2>

                <div className="compare-table-wrapper">
                    <table className="compare-table">
                        <thead>
                            <tr>
                                <th className="compare-th compare-th--feature">Feature</th>
                                <th className="compare-th compare-th--recordio">
                                    <img src="/favicon-32x32.png" alt="Recordio" className="w-5 h-5 rounded inline-block mr-2 -mt-0.5" />
                                    Recordio
                                </th>
                                <th className="compare-th compare-th--competitor">{competitorName}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={i} className="compare-row">
                                    <td className="compare-td compare-td--feature">
                                        <div className="font-medium text-text-highlighted text-sm">{row.feature}</div>
                                        {row.description && (
                                            <div className="text-xs text-text-muted mt-0.5">{row.description}</div>
                                        )}
                                    </td>
                                    <td className="compare-td compare-td--recordio">
                                        {renderCell(row.recordio, 'recordio')}
                                    </td>
                                    <td className="compare-td compare-td--competitor">
                                        {renderCell(row.competitor, 'competitor')}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default CompareFeatureTable;
