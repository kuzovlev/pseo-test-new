export default function Page({
                                 params,
                             }: {
    params: { category?: string; slug?: string };
}) {
    return (
        <main style={{ padding: 24, fontFamily: "system-ui" }}>
            <h1>/hire base page</h1>

            <p>
                category: <b>{params?.category ?? "(missing)"}</b>
            </p>
            <p>
                slug: <b>{params?.slug ?? "(missing)"}</b>
            </p>

            <hr />

            <pre style={{ whiteSpace: "pre-wrap" }}>
        {JSON.stringify({ params }, null, 2)}
      </pre>
        </main>
    );
}