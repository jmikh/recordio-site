export const SITE_URL = 'https://recordio.io';
export const SITE_DOMAIN = 'recordio.io';
export const SUPPORT_EMAIL = 'john@recordio.io';
export const VIDEOS_BASE = '/videos';

/**
 * Chrome Web Store listing URL for Recordio.
 * All CWS links on the site should use getCWSLink() to include UTM tracking.
 */
const CWS_BASE_URL =
    'https://chromewebstore.google.com/detail/recordio-beautiful-screen/bbcdpipjplklaneplfmlhhibnllhinii';

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

/** Public reviews page for the Chrome Web Store listing. */
export const CWS_REVIEWS_URL = `${CWS_BASE_URL}/reviews`;

/** Web app where users sign in and manage their recordings. */
export const APP_URL = 'https://app.recordio.io';

/**
 * Returns the web app URL with UTM parameters for source attribution.
 *
 * @param section - The page section the link appears in (e.g. 'header').
 */
export const getAppLink = (section: string): string => {
    const params = new URLSearchParams({
        utm_source: 'website',
        utm_medium: 'cta',
        utm_content: section,
    });
    return `${APP_URL}?${params.toString()}`;
};
