export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ category: string; slug: string; filters: string[] }>;
}) {
    const { category, slug, filters } = await params;

    return (
        <main style={{ padding: 24, fontFamily: "system-ui" }}>
            <h1>/hire with filters</h1>
            <p>
                category: <b>{category}</b>
            </p>
            <p>
                slug: <b>{slug}</b>
            </p>
            <p>
                filters: <b>{filters.join(" / ")}</b>
            </p>
        </main>
    );
}