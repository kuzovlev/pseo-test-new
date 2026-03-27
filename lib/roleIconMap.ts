/**
 * Maps role name keywords → Phosphor icon names (fill weight).
 * Evaluated in order — first match wins.
 * Icons sourced from https://phosphoricons.com/?weight=fill
 */

export type PhosphorIconName = string;

const ROLE_ICON_RULES: Array<{
    keywords: string[];
    icon: PhosphorIconName;
}> = [
    // Book
    { keywords: ["book", "ebook", "booklet"], icon: "book"},

    // Motion / Animation
    { keywords: ["motion", "animation", "animator"], icon: "magic-wand" },

    // 3D / Spatial
    { keywords: ["3d", "spatial", "ar", "vr", "xr"], icon: "cube" },

    // Illustration
    { keywords: ["illustration", "illustrator"], icon: "paint-brush" },

    // Brand / Identity
    { keywords: ["logo", "wordmark", "logotype"], icon: "signature" },
    { keywords: ["brand", "identity"], icon: "seal" },

    // UI / Interface
    { keywords: ["ui", "interface", "component"], icon: "squares-four" },

    // UX / Research
    { keywords: ["ux", "research", "user experience"], icon: "magnifying-glass" },

    // Web design
    { keywords: ["web", "webflow", "landing page", "website"], icon: "globe" },

    // Mobile / App
    { keywords: ["mobile", "app", "ios", "android"], icon: "device-mobile" },

    // Product design (broad — intentionally after ui/ux/web/mobile)
    { keywords: ["product"], icon: "layout" },

    // Presentation / Pitch
    { keywords: ["presentation", "pitch", "slide", "deck"], icon: "presentation-chart" },

    // Email / Marketing design
    { keywords: ["email", "newsletter"], icon: "envelope" },

    // Print / Editorial
    { keywords: ["print", "editorial", "publication"], icon: "newspaper" },

    // Packaging
    { keywords: ["packaging"], icon: "package" },

    // Icon design
    { keywords: ["icon"], icon: "star-four" },

    // Video / Film
    { keywords: ["video", "film", "reel"], icon: "film-strip" },

    // Social media
    { keywords: ["social", "instagram", "tiktok", "content"], icon: "share-network" },

    // Frontend / Code
    { keywords: ["frontend", "developer", "engineer", "react", "vue"], icon: "code" },

    // Graphic design (broad fallback for design roles)
    { keywords: ["graphic", "visual"], icon: "pen-nib" },

    // Generic designer fallback
    { keywords: ["design", "designer", "creative"], icon: "pen-nib" },
];

const DEFAULT_ICON: PhosphorIconName = "star";

/**
 * Returns the best-matching Phosphor icon name for a given role name string.
 * Normalizes to lowercase before matching.
 */
export function getIconForRole(roleName: string | null | undefined): PhosphorIconName {
    if (!roleName) return DEFAULT_ICON;

    const normalized = roleName.toLowerCase();

    for (const rule of ROLE_ICON_RULES) {
        if (rule.keywords.some((kw) => normalized.includes(kw))) {
            return rule.icon;
        }
    }

    return DEFAULT_ICON;
}