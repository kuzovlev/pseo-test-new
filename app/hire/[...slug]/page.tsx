import type { Metadata } from "next";
import { getLandingPageBySlugCached } from "@/lib/supabase";
import { PseoTemplate } from "@/components/pseo/Template";

export const dynamic = "force-dynamic";

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

    return {
        title: page?.seo_title ?? undefined,
        description: page?.seo_description ?? undefined,

        alternates: {
            canonical: 'https://www.awesomic.com/hire' + (slugPath ? '/' + slugPath : ''),
        },

        icons: {
            icon: "https://cdn.prod.website-files.com/6818a97ae905afeb08eff668/685c20ff61458aaeb7fac08c_favicon-upd.png",
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
        return (
            <div style={{ padding: 40 }}>
                <h1>NO SLUG PARAMS</h1>
                <pre>{JSON.stringify({ resolvedParams }, null, 2)}</pre>
            </div>
        );
    }

    const page = await getLandingPageBySlugCached(slugPath);

    if (!page) {
        return (
            <div style={{ padding: 40 }}>
                <h1>PAGE NOT FOUND</h1>
                <pre>{JSON.stringify({ slugPath }, null, 2)}</pre>
            </div>
        );
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