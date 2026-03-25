import { useScrollReveal } from '../../hooks/useScrollReveal';
import { getCWSLink } from '../../utils/constants';
import { trackInstallExtension } from '../../utils/analytics';

interface CompareCTAProps {
    competitorName: string;
    variant?: 'purple' | 'white';
}

const CompareCTA = ({ competitorName, variant = 'white' }: CompareCTAProps) => {
    const ref = useScrollReveal();
    const slug = competitorName.toLowerCase().replace(/\s+/g, '-');
    const sectionClass = variant === 'white' ? 'section-panel-white' : 'section-panel';

    return (
        <section className={`${sectionClass} py-24 px-6 relative overflow-hidden`}>
            {/* Ambient glow */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center scroll-reveal">
                <h2 className="text-3xl md:text-4xl font-bold text-text-highlighted mb-6">
                    Ready to make the switch?
                </h2>
                <p className="text-lg text-text-muted mb-10 leading-relaxed">
                    Install the Chrome extension and see the difference in your first recording. Free tier, no credit card required.
                </p>
                <a
                    href={getCWSLink(`compare-${slug}-cta`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg px-10 py-4"
                    onClick={() => trackInstallExtension(`compare-${slug}-cta`)}
                >
                    Get Started with Recordio
                </a>
            </div>
        </section>
    );
};

export default CompareCTA;
