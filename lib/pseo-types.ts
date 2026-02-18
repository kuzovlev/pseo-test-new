export type PseoPageData = {
  category?: string;
  slug: string;
  filters?: string[];

  seo_title?: string;
  seo_description?: string;

  hero_h1?: string;
  hero_subtitle?: string;

  rich_html?: string; // store HTML in Airtable for rich text block

  [key: string]: any;
};
