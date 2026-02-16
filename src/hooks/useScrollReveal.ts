import { useEffect, useRef } from 'react';

/**
 * Attaches an Intersection Observer to the returned ref.
 * When the element scrolls into view, the `.revealed` class is added (one-shot).
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
    threshold = 0.1,
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed');
                    observer.unobserve(el);
                }
            },
            { threshold },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}
