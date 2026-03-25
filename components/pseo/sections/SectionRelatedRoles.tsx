import { createClient } from "@supabase/supabase-js";
import type { PseoPageData } from "@/lib/pseo-types";
import { RelatedRolesSwiper } from "./RelatedRolesSwiper";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

type RelatedRoleRow = {
    slug: string;
    Name_h1: string | null;
    hero_description: string | null;
};

export async function SectionRelatedRoles(_props: {
    data?: PseoPageData & { related_pages?: string[] | null };
}) {
    const relatedSlugs = Array.isArray(_props.data?.related_pages)
        ? _props.data.related_pages.filter(Boolean)
        : [];

    if (!relatedSlugs.length) {
        return null;
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        return null;
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { data: relatedRolesRaw, error } = await supabase
        .from("pseo_data")
        .select("slug, Name_h1, hero_description")
        .in("slug", relatedSlugs);

    if (error || !relatedRolesRaw?.length) {
        console.error("Error fetching related roles:", error);
        return null;
    }

    const relatedRolesMap = new Map(
        (relatedRolesRaw as RelatedRoleRow[]).map((item) => [item.slug, item])
    );

    const relatedRoles = relatedSlugs
        .map((slug) => relatedRolesMap.get(slug))
        .filter((item): item is RelatedRoleRow => Boolean(item));

    if (!relatedRoles.length) {
        return null;
    }

    return (
        <section className="background-gray-100 section-radius">
            <div className="spacer-80 tablet_spacer-64"></div>
            <div className="padding-global">
                <div className="container-1344">
                    <h2 className="heading-style-h3 text-align-center">
                        Related roles you may need
                    </h2>
                    <div className="spacer-20"></div>
                    <div className="max-width-534 align-center">
                        <div className="text-16 weight-regular lh-150 text-align-center">
                            If your scope goes beyond product design, explore adjacent roles teams often add for full
                            delivery across design and build.
                        </div>
                    </div>
                    <div className="spacer-40"></div>

                    {/* 🔥 IMPORTANT: add "swiper" class */}
                    <div className="webflow-cards swiper">
                        <div className="swiper-wrapper">
                            {relatedRoles.map((role) => (
                                <div key={role.slug} className="role-card swiper-slide">
                                    <div className="why-webflow-icon_outer smaller">
                                        <div className="whe-webflow-icon_inner smaller">
                                            <img
                                                alt=""
                                                height="20"
                                                loading="lazy"
                                                src={asset("/images-static/layers-icon-black-20.svg")}
                                                width="20"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-20 weight-semibold lh-156">
                                            {role.Name_h1}
                                        </div>
                                        <div className="spacer-8"></div>
                                        <div className="text-14 weight-book lh-168">
                                            {role.hero_description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 👇 initialize swiper */}
                    <RelatedRolesSwiper />
                </div>
            </div>
            <div className="spacer-144 tablet_spacer-128"></div>
        </section>
    );
}