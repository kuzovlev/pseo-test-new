import { getLandingPageBySlug } from "@/lib/supabase";
import { PseoTemplate } from "@/components/pseo/Template";

export const dynamic = "force-dynamic";

function getSlug(params: { slug?: string[] }) {
  if (!params?.slug || !Array.isArray(params.slug)) return "";
  return params.slug.join("/");
}

export default async function HirePage({
                                         params,
                                       }: {
  params: Promise<{ slug?: string[] }>; // 👈 key change
}) {
  const resolvedParams = await params;   // 👈 key change
  const slugPath = getSlug(resolvedParams);

  if (!slugPath) {
    return (
        <div style={{ padding: 40 }}>
          <h1>NO SLUG PARAMS</h1>
          <pre>{JSON.stringify({ resolvedParams }, null, 2)}</pre>
        </div>
    );
  }

  const page = await getLandingPageBySlug(slugPath);

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