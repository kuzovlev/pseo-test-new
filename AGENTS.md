# AGENTS.md

## Page content comes from Supabase — keep every binding intact

All `/hire/*` pages render from one shared template:
`components/pseo/Template.tsx` + `components/pseo/sections/*`.

Page-specific text and SEO come from the Supabase table `pseo_data`
(override: `PSEO_SUPABASE_TABLE`), one row per `slug`
(e.g. `hire-a-product-designer`). The code holds only layout, styles,
images, and static text shared by every page.

### Rules for any change (design, layout, backgrounds, refactor, copy)

1. **Bindings survive every change.** Each element that shows a Supabase
   field must show the same field after the change. Never replace a binding
   (`data?.hero_description`) with hardcoded text — even if it matches the
   current value on one page.
2. **Don't rename, remove, or re-map fields.** Field names must match the
   Supabase columns exactly, including case (`Name_h1`, `FAQ_q1`).
3. **Move the binding with the element.** When an element is moved, wrapped,
   restyled, or rebuilt, its binding moves with it. Keep the existing
   empty-value handling (e.g. FAQ items hidden when the question or answer
   is empty).
4. **Rich content stays rich.** `content_html` keeps its current rendering
   (through `normalizeMarkdown`); don't turn it into plain text.
5. **The template is shared.** Any code change affects every `/hire/*` page.
   Text for a single role is changed in Supabase, not in code.
6. **Don't touch the data.** No writes to Supabase and no schema changes
   unless explicitly requested.
7. **New or removed field → stop and ask.** It requires a matching column
   change in Supabase.

### Current bindings (reference, 2026-10-30)

| Section | Fields |
|---|---|
| SEO (`app/hire/[...slug]/page.tsx`) | `seo_title`, `seo_description`, `category` |
| Hero | `Name_h1`, `hero_description`, `hero_button_text`, `bullet_1_number`, `bullet_1_text`, `bullet_2_number`, `bullet_2_text` |
| How it works | `how_title`, `how_description`, `how_step_1..4_name`, `how_step_1..4_text` |
| Testimonials | `testimonials_title`, `testimonials_description` |
| RTB | `rtb_title`, `rtb_description`, `rtb_step_1..4_number`, `rtb_step_1..4_title` |
| FAQ | `FAQ_q1..10`, `FAQ_a1..10` (built dynamically) |
| Related roles | `related_pages`; cards read `slug`, `Name_h1`, `card_description` from other rows |
| Post | `content_html` |

### Check before finishing

1. Compare bindings before and after — the list must be identical:
   `grep -rhoE "data\??\.[A-Za-z_0-9]+" components/pseo app/hire | sort -u`
   FAQ keys are built dynamically (`FAQ_q${n}` / `FAQ_a${n}`) — check
   `FaqSection.tsx` by hand.
2. Open at least two pages, e.g. `/hire/hire-a-product-designer` and
   `/hire/hire-a-ui-designer`, and confirm the headings, Hero, FAQ, and
   content differ per page (i.e. they come from the database).
3. If this table no longer matches the code, update it in the same change.
