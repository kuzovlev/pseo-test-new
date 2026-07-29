import type { Metadata, Viewport } from "next";
import { permanentRedirect } from "next/navigation";
import { getLandingPageBySlugCached } from "@/lib/supabase";
import { getRedirectDestination, NOT_FOUND_URL } from "@/lib/redirects";
import { PseoTemplate } from "@/components/pseo/Template";
import { ASSET_BASE } from "@/lib/pseo-assets";

export const revalidate = 3600;

const OG_IMAGE =
    "https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/OpenGraph%20image.jpg";

const FAVICON =
    "https://cdn.prod.website-files.com/6818a97ae905afeb08eff668/685c20ff61458aaeb7fac08c_favicon-upd.png";
const APPLE_TOUCH_ICON = ASSET_BASE
    ? `${ASSET_BASE}/images/webclip.png`
    : "/images-static/webclip.png";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

function getSlug(params: { slug?: string[] }) {
    if (!params?.slug || !Array.isArray(params.slug)) return "";
    return params.slug.join("/");
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const slugPath = getSlug(resolvedParams);

    if (!slugPath) return {};

    const page = await getLandingPageBySlugCached(slugPath);

    const canonical =
        "https://www.awesomic.com/hire" + (slugPath ? "/" + slugPath : "");
    const title = page?.seo_title ?? undefined;
    const description = page?.seo_description ?? undefined;

    return {
        title,
        description,

        alternates: {
            canonical,
        },

        formatDetection: {
            telephone: false,
        },

        verification: {
            google: "z790Eh7WsNc3VPeFLSLyBq1OjJBH2QXtrdaDzfvqxfM",
            other: {
                "facebook-domain-verification":
                    "kbqd4j0ykeixr7lahwx5mwtyh4bolk",
            },
        },

        icons: {
            icon: FAVICON,
            shortcut: FAVICON,
            apple: APPLE_TOUCH_ICON,
        },

        openGraph: {
            type: "website",
            url: canonical,
            title,
            description,
            siteName: "Awesomic",
            images: [
                {
                    url: OG_IMAGE,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [OG_IMAGE],
        },
    };
}

export default async function HirePage({
                                           params,
                                       }: {
    params: Promise<{ slug?: string[] }>;
}) {
    const resolvedParams = await params;
    const slugPath = getSlug(resolvedParams);

    if (!slugPath) {
        permanentRedirect(NOT_FOUND_URL);
    }

    const page = await getLandingPageBySlugCached(slugPath);

    if (!page) {
        const destination = getRedirectDestination(slugPath);
        permanentRedirect(destination ?? NOT_FOUND_URL);
    }

    return (
        <PseoTemplate
            data={{
                ...page,
                slug: slugPath,
                category: page.category ?? undefined,
                seo_title: page.seo_title ?? undefined,
                seo_description: page.seo_description ?? undefined,
            }}
        />
    );
}