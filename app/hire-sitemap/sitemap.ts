// app/hire-sitemap/sitemap.ts
import type { MetadataRoute } from "next";
import { listLandingPageSlugsCached } from "@/lib/supabase";

export const revalidate = 3600;

// function getSiteUrl() {
//   const explicit = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
//   if (explicit) return explicit.replace(/\/$/, "");
//
//   const vercel = process.env.VERCEL_URL;
//   if (vercel) return `https://${vercel}`;
//
//   return "http://localhost:3000";
// }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const baseUrl = getSiteUrl();
  const pages = await listLandingPageSlugsCached();
  const now = new Date();
  return pages.map((page) => ({
    url: `https://www.awesomic.com/hire/${page.slug}`,
    lastModified: page.updated_at ?? now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}