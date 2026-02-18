import { notFound } from "next/navigation";
import { PseoTemplate } from "@/components/pseo/Template";
import type { PseoPageData } from "@/lib/pseo-types";

// Adjust this import to match your project:
import { getLandingPage } from "../../../../lib/airtable";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  const record = await getLandingPage(category, slug);
  if (!record) notFound();

  const data: PseoPageData = {
    slug: record.slug,
    category: record.category,
    hero_h1: record.title,
    rich_html: record.content,
  };

  return <PseoTemplate data={data} />;
}
