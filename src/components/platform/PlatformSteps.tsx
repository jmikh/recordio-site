import { getCWSLink } from '../../utils/constants';
import { trackInstallExtension } from '../../utils/analytics';

/**
 * Numbered "record in N steps" section for platform pages, with an optional
 * screenshot beside the list. Reused by the Linux and Chromebook pages with
 * different props. Hydrate with client:visible so the CTA click is tracked.
 */
export interface PlatformStep {
    title: string;
    body: string;
}

interface PlatformStepsProps {
    eyebrow?: string;
    heading: string;
    intro?: string;
    steps: PlatformStep[];
    image?: {
        src: string;
        alt: string;
        caption?: string;
    };
    ctaLabel?: string;
    /** utm_content for the CTA, e.g. "for-linux-steps". */
    ctaSection: string;
    variant?: 'purple' | 'white';
    id?: string;
}

const PlatformSteps = ({
    eyebrow = 'How it works',
    heading,
    intro,
    steps,
    image,
    ctaLabel = 'Install the free extension',
    ctaSection,
    variant = 'purple',
    id = 'how-to-record',
}: PlatformStepsProps) => {
    const sectionClass = variant === 'white' ? 'section-panel-white' : 'section-panel';
    return (
        <section id={id} className={`${sectionClass} py-20 px-6`}>
            <div className="max-w-6xl mx-auto">
                <div className="section-head">
                    <span className="eyebrow">{eyebrow}</span>
                    <h2 className="section-title">{heading}</h2>
                    {intro && <p className="section-subtitle mt-4">{intro}</p>}
                </div>

                <div className={`grid gap-12 items-start ${image ? 'lg:grid-cols-2' : 'max-w-3xl mx-auto'}`}>
                    <ol className="flex flex-col gap-6">
                        {steps.map((step, i) => (
                            <li key={step.title} className="flex gap-5">
                                <span
                                    aria-hidden="true"
                                    className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center"
                                >
                                    {i + 1}
                                </span>
                                <div>
                                    <h3 className="text-lg font-bold text-text-highlighted mb-1">{step.title}</h3>
                                    <p className="text-text-muted leading-relaxed">{step.body}</p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    {image && (
                        <figure className="lg:sticky lg:top-28">
                            <div className="rounded-2xl border border-border overflow-hidden bg-surface-overlay/40">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-auto block"
                                />
                            </div>
                            {image.caption && (
                                <figcaption className="mt-3 text-sm text-text-muted text-center">{image.caption}</figcaption>
                            )}
                        </figure>
                    )}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href={getCWSLink(ctaSection)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-lg px-10 py-4"
                        onClick={() => trackInstallExtension(ctaSection)}
                    >
                        {ctaLabel}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PlatformSteps;
