import type { MetadataRoute } from "next";
import { listLandingPageSlugsCached } from "@/lib/supabase";

// "On demand" (cached) sitemap: Next.js will generate it when requested.
// Change this value to control how often it refreshes.
export const revalidate = 3600; // 1 hour

function getSiteUrl() {
  // Prefer an explicit env var.
  const explicit = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  // Vercel provides VERCEL_URL without protocol.
  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  // Fallback for local/dev.
  return "http://localhost:3000";
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl();
  const slugs = await listLandingPageSlugsCached();

  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
    },
    ...slugs.map((slug) => ({
      url: `${baseUrl}/hire/${slug}`,
      lastModified: now,
    })),
  ];
}
