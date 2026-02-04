export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ category: string; slug: string }>;
}) {
    const { category, slug } = await params;

    return (
        <main style={{ padding: 24, fontFamily: "system-ui" }}>
            <h1>/hire base page</h1>
            <p>
                category: <b>{category}</b>
            </p>
            <p>
                slug: <b>{slug}</b>
            </p>

            <hr />
            <pre style={{ whiteSpace: "pre-wrap" }}>
        {JSON.stringify({ category, slug }, null, 2)}
      </pre>
        </main>
    );
}