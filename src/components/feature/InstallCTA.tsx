import { getCWSLink } from '../../utils/constants';
import { trackInstallExtension } from '../../utils/analytics';

interface InstallCTAProps {
    /** utm_content and analytics label, e.g. "feature-auto-zoom". */
    source: string;
    label?: string;
    className?: string;
}

/** Chrome Web Store button with UTM tagging and the install_extension_click event. */
const InstallCTA = ({ source, label = "Add to Chrome, it's free", className = 'btn-primary text-lg px-8 py-4' }: InstallCTAProps) => (
    <a
        href={getCWSLink(source)}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={() => trackInstallExtension(source)}
    >
        <img src="/assets/chrome-store.svg" alt="" className="w-5 h-5" />
        {label}
    </a>
);

export default InstallCTA;
