// lib/supabase.ts
// Minimal server-side Supabase helpers for pSEO pages in Next.js App Router.
//
// Usage (Server Components):
//   import { getLandingPageBySlug, listLandingPageSlugs } from "@/lib/supabase";
//
// Env vars:
//   NEXT_PUBLIC_SUPABASE_URL=
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=         (recommended for public pSEO pages)
//   SUPABASE_SERVICE_ROLE_KEY=             (optional; server-only override)
//   PSEO_SUPABASE_TABLE=landing_pages      (optional)
//
// Recommendation:
// - Use the anon key + RLS (SELECT policy) if these pages are public.
// - If you need to read protected tables without opening RLS, set
//   SUPABASE_SERVICE_ROLE_KEY and we'll use it automatically (server-only).

import "server-only";

import { createClient } from "@supabase/supabase-js";
import { unstable_cache } from "next/cache";

export type LandingPageRecord = {
  id?: string | number;
  slug: string;
  // optional common fields
  category?: string | null;
  seo_title?: string | null;
  seo_description?: string | null;
  // allow extra fields (your CSV columns)
  [key: string]: any;
};

const TABLE = process.env.PSEO_SUPABASE_TABLE ?? "pseo_data";

// Cache tags (used for on-demand revalidation via revalidateTag)
export const PSEO_TAGS = {
  slugs: "pseo:slugs",
  page: "pseo:page",
  sitemap: "pseo:sitemap",
  pageBySlug: (slug: string) => `pseo:page:${slug}`,
} as const;

// function getSupabaseServerClient() {
//   const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
//   const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
//   const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
//
//   if (!url) {
//     throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL in env.");
//   }
//
//   // Prefer service role key if present (server-only). Otherwise use anon key.
//   const keyToUse = serviceKey || anonKey;
//   if (!keyToUse) {
//     throw new Error(
//       "Missing Supabase key. Set NEXT_PUBLIC_SUPABASE_ANON_KEY (recommended) or SUPABASE_SERVICE_ROLE_KEY (server-only)."
//     );
//   }
//
//   return createClient(url, keyToUse, {
//     auth: {
//       persistSession: false,
//       autoRefreshToken: false,
//       detectSessionInUrl: false,
//     },
//   });
// }

/** Fetch a page by slug (slug can be nested like "hire/design/ux"). */
export async function getLandingPageBySlug(
    slug: string
): Promise<LandingPageRecord | null> {
  const supabase = getSupabaseServerClient();

  console.log("RAW SLUG PARAM:", JSON.stringify(slug));

  const { data: allRows } = await supabase
      .from(TABLE)
      .select("slug");

  console.log(
      "DB SLUGS:",
      allRows?.map((r: any) => JSON.stringify(r.slug))
  );

  console.log("LOOKING FOR:", JSON.stringify(slug));

  const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

  console.log("ERROR:", error);
  console.log("RESULT:", data);

  return data ?? null;
}

/**
 * Cached variant (recommended):
 * - Works great with Next.js ISR and our on-demand revalidation endpoint.
 */
export const getLandingPageBySlugCached = (slug: string) =>
  unstable_cache(
    async () => getLandingPageBySlug(slug),
    ["pseo", "page", TABLE, slug],
    {
      tags: [PSEO_TAGS.page, PSEO_TAGS.pageBySlug(slug)],
    }
  )();

/** Fetch all slugs (for sitemap, optional prebuilding, etc.). */
export async function listLandingPageSlugs(): Promise<string[]> {
  const supabase = getSupabaseServerClient();

  const { data, error } = await supabase.from(TABLE).select("slug");
  if (error || !data) return [];
  return data
    .map((r: any) => String(r.slug ?? "").trim())
    .filter(Boolean);
}

/** Cached slugs (recommended for sitemap + optional prebuilding). */
export const listLandingPageSlugsCached = () =>
  unstable_cache(async () => listLandingPageSlugs(), ["pseo", "slugs", TABLE], {
    tags: [PSEO_TAGS.slugs, PSEO_TAGS.sitemap],
  })();

/** Optional: use for sitemap / filtering / batch jobs. */
export async function listLandingPages(params?: {
  category?: string;
  limit?: number;
  offset?: number;
}): Promise<LandingPageRecord[]> {
  const supabase = getSupabaseServerClient();

  const limit = params?.limit ?? 5000;
  const offset = params?.offset ?? 0;

  let q = supabase.from(TABLE).select("*");
  if (params?.category) q = q.eq("category", params.category);

  const { data, error } = await q.range(offset, offset + limit - 1);
  if (error) {
    console.error("Supabase listLandingPages error", error);
    return [];
  }
  return (data ?? []).map((r) => normalizeRecord(r as LandingPageRecord));
}

function normalizeRecord(record: LandingPageRecord): LandingPageRecord {
  // Keep existing keys, but ensure slug is a string.
  return {
    ...record,
    slug: String(record.slug),
  };
}


function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  console.log("Using service role:", !!serviceKey);
  console.log("Using anon key:", !!anonKey);

  const keyToUse = serviceKey || anonKey;

  console.log(
      "Actually using:",
      serviceKey ? "SERVICE ROLE" : "ANON KEY"
  );

  return createClient(url!, keyToUse!, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}