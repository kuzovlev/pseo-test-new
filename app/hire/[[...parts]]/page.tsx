import { notFound } from "next/navigation";
import { PseoTemplate } from "@/components/pseo/Template";
import type { PseoPageData } from "@/lib/pseo-types";

// Adjust this import if your project uses a different path:
import { getLandingPage, getLandingPageBySlug } from "../../../lib/airtable";

type RouteParams = { parts?: string[] };

export default async function Page({
                                       params,
                                   }: {
    params: Promise<RouteParams>;
}) {
    const { parts } = await params;

    // /hire (optional)
    if (!parts || parts.length === 0) {
        return (
            <main style={{ padding: 24, fontFamily: "system-ui" }}>
                <h1>/hire</h1>
                <p>Try:</p>
                <ul>
                    <li>/hire/hire-test-1</li>
                    <li>/hire/marketing/hire-test-1</li>
                    <li>/hire/marketing/hire-test-1/us/new-york</li>
                </ul>
            </main>
        );
    }

    // 1) /hire/slug-1
    if (parts.length === 1) {
        const slug = parts[0];

        const record = await getLandingPageBySlug(slug);
        if (!record) notFound();

        const data: PseoPageData = {
            slug: record.slug,
            category: record.category,
            hero_h1: record.title,
            rich_html: record.content, // your Airtable HTML field (currently using content)
            // Optional, only if your type supports it:
            // filters: [],
            // route: "flat",
        };

        return <PseoTemplate data={data} />;
    }

    // 2) /hire/category/slug-1 (+ optional filters)
    const category = parts[0];
    const slug = parts[1];
    const filters = parts.slice(2); // can be [] or ["us","new-york",...]

    const record = await getLandingPage(category, slug);
    if (!record) notFound();

    const data: PseoPageData = {
        slug: record.slug,
        category: record.category ?? category,
        hero_h1: record.title,
        rich_html: record.content,
        // Optional if you add to type:
        // filters,
        // route: "nested",
    };

    // If later you want filters to affect content (title/hero/etc),
    // you can incorporate `filters` here before passing data.

    return <PseoTemplate data={data} />;
}