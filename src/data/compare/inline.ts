/**
 * Renders the tiny inline markup allowed in compare copy:
 * [label](/path/) becomes a link and **text** becomes <strong>.
 * Everything else is HTML-escaped first, so copy can never inject markup.
 */
const escapeHtml = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const inline = (text: string): string =>
    escapeHtml(text)
        .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label: string, href: string) => {
            const external = /^https?:\/\//.test(href);
            const rel = external ? ' rel="noopener noreferrer" target="_blank"' : '';
            return `<a href="${href}"${rel}>${label}</a>`;
        })
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

/** Rough word count of a competitor's page-unique copy, used by the build-time check. */
export const countWords = (text: string): number =>
    text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').split(/\s+/).filter(Boolean).length;
