import { getLandingPage } from "@/lib/airtable";
import { notFound } from "next/navigation";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ category: string; slug: string }>;
}) {
    const { category, slug } = await params;

    const page = await getLandingPage(category, slug);
    if (!page) notFound();

    return (
        <main style={{ padding: 24, fontFamily: "system-ui" }}>
            <h1>{page.title}</h1>
            <p>
                category: <b>{page.category}</b>
            </p>
            <p>
                slug: <b>{page.slug}</b>
            </p>
            <hr />
            <div>{page.content}</div>
        </main>
    );
}