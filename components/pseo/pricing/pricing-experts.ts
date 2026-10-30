// The Agentic and expert plans — names, prices, copy and faces. Ported from
// awesomic-migrate (src/components/hero-desktop-3/pricing-experts.ts, the
// /pricing page); keep prices and copy in sync with that file. Shared by
// every /hire/* page; nothing here comes from Supabase.

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? '';
export const asset = (src: string) => `${ASSET_BASE}${src}`;
const photo = (name: string) => asset(`/images-static/${name}-Slide-Photo_1${name} Slide Photo.avif`);

// Whole prices print without cents ($199); prices with cents keep both digits
// ($1,799.99). Rounded to the cent first, so sums like 199 + 1799.99 print clean.
// Expert plans are meant to include one Awesomic Light seat at no cost. That
// is not live yet, so it is switched off (21 Oct): no free seat in the
// totals, no "Awesomic Light included" chips, no copy that promises it — on
// the pricing block and the /pricing comparison table. Set to true to
// bring all of it back.
export const EXPERT_INCLUDES_LIGHT = false;

export const money = (n: number) => {
  const cents = Math.round(n * 100) / 100;
  const digits = Number.isInteger(cents) ? 0 : 2;
  return `$${cents.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })}`;
};

// The Agentic plans (per person, billed monthly). Here rather than in the
// component so /pricing can print their prices in its Google markup.
export type PlanId = 'light' | 'basic' | 'pro' | 'studio';
// text: the line in the alternative version's detail card. The cards show no
// copy under the budget meter (removed 21 Oct).
export type Plan = { id: PlanId; name: string; price: number; text: string; object: string; badge?: string };

// Each tier carries one of the 3D objects from the live pricing page, rising
// in finish from a plain rock to a crystal.
export const plans: Plan[] = [
  { id: 'light', name: 'Light', price: 19, text: '$19 AI budget. Build, publish and automate with every model.', object: asset('/images-static/rock-light_1rock-light.avif') },
  { id: 'basic', name: 'Basic', price: 99, text: '$99 AI budget for people who use Awesomic every week.', object: asset('/images-static/rock-pro_1rock-pro.avif') },
  { id: 'pro', name: 'Pro', price: 199, text: '$199 AI budget. We cover your talent’s AI tools, like Codex and Claude Code.', object: asset('/images-static/rock-1-1.avif') },
  { id: 'studio', name: 'Studio', price: 499, text: '$499 AI budget, your talent’s AI tools covered, and priority support.', object: asset('/images-static/rock-super_1rock-super.avif') },
];

export type TalentId = 'graphic' | 'all' | 'dedicated';
export type Talent = { id: TalentId; name: string; monthly: number | null; quarterly: number | null; text: string; avatars: string[] };

// Monthly and quarterly prices from Ira's message in #awesomic-v2 (16 Oct),
// confirmed for the site on 21 Oct. Shown without the .99 cents (21 Oct),
// so the page and its totals use whole dollars.
export const talents: Talent[] = [
  { id: 'graphic', name: 'Graphic Pack', monthly: 1799, quarterly: 1483, text: 'A part-time designer for ads, emails, packaging,\nprint, and everyday graphics.', avatars: [photo('Juana'), photo('Iuri')] },
  { id: 'all', name: 'All-in-One', monthly: 3219, quarterly: 2619, text: 'Design, copywriting, no-code development and quality checks in one subscription.', avatars: [photo('Joao'), photo('Juana'), photo('Iuri')] },
  { id: 'dedicated', name: 'Dedicated expert', monthly: null, quarterly: null, text: 'A full-time expert and a project manager to coordinate\nthe work and oversee quality.', avatars: [photo('Juanjo'), asset('/images-static/hamza-slide-photo_1hamza-slide-photo.avif')] },
];

