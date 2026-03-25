import { useScrollReveal } from '../../hooks/useScrollReveal';

export interface ValueProp {
    title: string;
    description: string;
}

interface CompareValuePropsProps {
    competitorName: string;
    props: ValueProp[];
    variant?: 'purple' | 'white';
}

const CompareValueProps = ({ competitorName, props, variant = 'purple' }: CompareValuePropsProps) => {
    const headerRef = useScrollReveal();
    const gridRef = useScrollReveal();
    const sectionClass = variant === 'white' ? 'section-panel-white' : 'section-panel';

    return (
        <section className={`${sectionClass} py-20 px-6`}>
            <div className="max-w-5xl mx-auto">
                <div ref={headerRef} className="text-center mb-12 scroll-reveal">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-highlighted mb-4">
                        Why teams switch from {competitorName}
                    </h2>
                </div>

                <div ref={gridRef} className="grid md:grid-cols-2 gap-6 scroll-reveal scroll-reveal-delay-2">
                    {props.map((prop, i) => (
                        <div key={i} className="card-premium">
                            <h3 className="text-lg font-bold text-text-highlighted mb-3">
                                {prop.title}
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {prop.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompareValueProps;
