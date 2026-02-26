/**
 * Chrome Web Store listing URL for Recordio.
 * All CWS links on the site should use getCWSLink() to include UTM tracking.
 */
const CWS_BASE_URL =
    'https://chromewebstore.google.com/detail/recordio/nihlpdaihoacconboieolmmnpnnhedan';

/**
 * Returns the CWS listing URL with UTM parameters for source attribution.
 *
 * @param section - The page section the link appears in (e.g. 'features', 'how-it-works', 'pricing').
 *                  Used as `utm_content` so you can compare which CTA drives more installs.
 */
export const getCWSLink = (section: string): string => {
    const params = new URLSearchParams({
        utm_source: 'website',
        utm_medium: 'cta',
        utm_content: section,
    });
    return `${CWS_BASE_URL}?${params.toString()}`;
};
