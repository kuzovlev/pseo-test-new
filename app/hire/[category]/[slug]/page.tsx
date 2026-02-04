export default async function Page({ params }: { params: { category: string; slug: string } }) {
    return (
        <main style={{ padding: 24, fontFamily: "system-ui" }}>
            <h1>/hire базовая страница</h1>
            <p>category: <b>{params.category}</b></p>
            <p>slug: <b>{params.slug}</b></p>
        </main>
    );
}