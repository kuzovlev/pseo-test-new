import { listLandingPages } from "@/lib/supabase";

export const dynamic = "force-dynamic"; // disable caching for debug

export default async function HireIndexPage() {
    const pages = await listLandingPages({ limit: 100 });

    return (
        <div style={{ padding: 40 }}>
            <h1>All pSEO rows from Supabase</h1>

            <pre style={{ background: "#111", color: "#0f0", padding: 20 }}>
        {JSON.stringify(pages, null, 2)}
      </pre>
        </div>
    );
}