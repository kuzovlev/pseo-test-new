export default async function Page({
                                       params,
                                   }: {
    params: { category: string; slug: string; filters: string[] };
}) {
    return (
        <main style={{ padding: 24, fontFamily: "system-ui" }}>
            <h1>/hire со вложенными фильтрами</h1>
            <p>category: <b>{params.category}</b></p>
            <p>slug: <b>{params.slug}</b></p>
            <p>filters: <b>{params.filters.join(" / ")}</b></p>
        </main>
    );
}