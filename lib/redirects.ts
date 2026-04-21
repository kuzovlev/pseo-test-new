// 301 redirect map for /hire/* pSEO pages.
//
// Key   = old slug path. Either with or without a leading "hire/" — both work.
//         Example: "design/old-role"  or  "hire/design/old-role"
// Value = destination. Either:
//           - a slug path (e.g. "design/new-role") → redirects to /hire/<value>
//           - a value starting with "hire/"        → redirects to /<value>
//           - an absolute URL starting with "http(s)://"
//           - a root-relative path starting with "/"
//
// Lookups are case-insensitive and ignore leading/trailing slashes.

export const HIRE_REDIRECTS: Record<string, string> = {
    // "old/slug": "new/slug",
    'hire/hire-a-UI-designer' : 'hire/hire-a-ui-designer',
};

export const NOT_FOUND_URL = "https://www.awesomic.com/404";

function normalizeSlug(slug: string): string {
    return slug
        .trim()
        .replace(/^\/+|\/+$/g, "")
        .replace(/^hire\//i, "")
        .toLowerCase();
}

/** Resolve a redirect destination for a given old slug. Returns null if none. */
export function getRedirectDestination(slug: string): string | null {
    const key = normalizeSlug(slug);
    if (!key) return null;

    const normalizedMap: Record<string, string> = {};
    for (const [k, v] of Object.entries(HIRE_REDIRECTS)) {
        normalizedMap[normalizeSlug(k)] = v;
    }

    const target = normalizedMap[key];
    if (!target) return null;

    if (/^https?:\/\//i.test(target) || target.startsWith("/")) {
        return target;
    }
    return "/hire/" + normalizeSlug(target);
}
