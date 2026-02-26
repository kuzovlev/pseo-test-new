import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { PSEO_TAGS } from "@/lib/supabase";

// POST /api/revalidate
// Body examples:
//  { "secret": "...", "slug": "hire-a-graphic-designer" }
//  { "secret": "...", "slug": "design/ux" }
//  { "secret": "...", "sitemap": true }
//  { "secret": "...", "all": true }
//
// Env:
//   REVALIDATE_SECRET=some-long-random-string

export async function POST(req: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "Missing REVALIDATE_SECRET env var." },
      { status: 500 }
    );
  }

  let body: any = null;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (body?.secret !== secret) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const did: string[] = [];

  // Revalidate a single hire page by slug (supports nested slugs).
  if (typeof body?.slug === "string" && body.slug.trim()) {
    const slug = body.slug.trim().replace(/^\/+|\/+$/g, "");
    // Next.js 16 requires the cache profile as the 2nd argument.
    // "max" = stale-while-revalidate (recommended).
    revalidateTag(PSEO_TAGS.pageBySlug(slug), "max");
    revalidatePath(`/hire/${slug}`);
    did.push(`page:${slug}`);
  }

  // Revalidate sitemap only.
  if (body?.sitemap === true) {
    revalidateTag(PSEO_TAGS.sitemap, "max");
    revalidatePath("/sitemap.xml");
    did.push("sitemap");
  }

  // Revalidate everything pSEO-related.
  if (body?.all === true) {
    revalidateTag(PSEO_TAGS.page, "max");
    revalidateTag(PSEO_TAGS.slugs, "max");
    revalidateTag(PSEO_TAGS.sitemap, "max");
    revalidatePath("/sitemap.xml");
    did.push("all");
  }

  return NextResponse.json({ ok: true, did });
}
