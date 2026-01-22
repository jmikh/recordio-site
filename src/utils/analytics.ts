// Declare gtag function for TypeScript
declare global {
    interface Window {
        gtag?: (
            command: string,
            targetId: string,
            config?: Record<string, any>
        ) => void;
    }
}

/**
 * Track a custom Google Analytics event
 */
export const trackEvent = (
    eventName: string,
    eventParams?: Record<string, any>
) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
};

/**
 * Track install extension button click
 */
export const trackInstallExtension = (location: string) => {
    trackEvent('install_extension_click', {
        event_category: 'engagement',
        event_label: location,
        value: 1,
    });
};
