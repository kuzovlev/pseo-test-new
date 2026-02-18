import { notFound } from "next/navigation";
import { PseoTemplate } from "@/components/pseo/Template";
import type { PseoPageData } from "@/lib/pseo-types";

// Adjust this import to match your project:
import { getLandingPageBySlug } from "../../../lib/airtable";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const record = await getLandingPageBySlug(slug);
  if (!record) notFound();

  const data: PseoPageData = {
    slug: record.slug,
    category: record.category,
    hero_h1: record.title,
    rich_html: record.content, // rename if you store HTML in a different field
  };

  return <PseoTemplate data={data} />;
}
