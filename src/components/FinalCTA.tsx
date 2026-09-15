import { getCWSLink } from '../utils/constants';
import { trackInstallExtension } from '../utils/analytics';

const FinalCTA = ({ source = 'final-cta' }: { source?: string }) => {
    return (
        <section aria-label="Get started" className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="final-cta">
                    <div className="final-cta-glow" aria-hidden="true" />
                    <div className="relative z-10 text-center max-w-2xl mx-auto">
                        <h2 className="final-cta-title">
                            Your next product video, done in minutes.
                        </h2>
                        <p className="mt-4 text-lg text-white/75">
                            Install the extension, hit record, and let Recordio handle the zooms, spotlights and captions.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a
                                href={getCWSLink(source)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-on-dark btn-lg"
                                onClick={() => trackInstallExtension(source)}
                            >
                                <img src="/assets/chrome-store.svg" alt="" className="w-5 h-5" />
                                Add to Chrome — it's free
                            </a>
                        </div>
                        <p className="mt-5 text-sm text-white/60">Free plan included. No credit card.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
