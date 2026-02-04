import Airtable from "airtable";

const baseId = process.env.AIRTABLE_BASE_ID;
const token = process.env.AIRTABLE_TOKEN;
const tableName = process.env.AIRTABLE_TABLE || "LandingPages";

if (!baseId) throw new Error("Missing AIRTABLE_BASE_ID");
if (!token) throw new Error("Missing AIRTABLE_TOKEN");

Airtable.configure({ apiKey: token });

const base = Airtable.base(baseId);

export type LandingPage = {
    id: string;
    title: string;
    category: string;
    slug: string;
    content?: string;
    indexable?: boolean;
};

export async function getLandingPage(category: string, slug: string): Promise<LandingPage | null> {
    const formula = `AND({category}="${category}", {slug}="${slug}")`;

    const records = await base(tableName)
        .select({
            maxRecords: 1,
            filterByFormula: formula,
        })
        .firstPage();

    const r = records[0];
    if (!r) return null;

    const f: any = r.fields;

    return {
        id: r.id,
        title: String(f.title ?? ""),
        category: String(f.category ?? ""),
        slug: String(f.slug ?? ""),
        content: f.content ? String(f.content) : "",
        indexable: Boolean(f.indexable),
    };
}