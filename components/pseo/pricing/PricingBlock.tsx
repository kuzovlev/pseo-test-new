'use client';

// The pricing block from awesomic.com/pricing, ported from awesomic-migrate
// (src/components/hero-desktop-3/PricingDesktop3V2.tsx) as it was on 30 Oct
// 2026. Only asset paths and the "Compare expert plans" target differ; keep
// the rest in step with the source. Styles: public/webflow-static/css/hire-pricing.css.
// Notes from the source file:
//
// Pricing on the homepage (and, later, /pricing): the 20 Oct 2026 model,
// with Victor's evening feedback. Every person on the team gets an Awesomic
// plan (Light / Basic / Pro / Studio, billed monthly, budget = price); a
// talent plan can go on top and includes one Light seat for free (no Pro
// seat required any more). Layout as before: step 01 (Awesomic plan, team
// size and a plan per extra person), step 02 (optional talent, Monthly /
// Quarterly on talent only), a sticky summary with one CTA. On phones the
// summary also rides along as a bottom bar (see pricing-desktop-3-v2.css).
//
// layout="track" is the alternative version (21 Oct, option D), shown on the
// page switcher's second tab: the plans sit on one budget track with a single
// detail card for the picked plan, and talent is a segmented choice with one
// detail card. Same plans, prices, copy, maths and summary as the cards.
//
// Copy from the 21 Oct wording pass: "Agentic plan" for the per-person AI
// plans, "Expert plan" for what was called a talent plan, "app" rather than
// "workspace".
//
// Values that may still change live in one place each: the plan list
// (names, prices, copy), the talent prices (pricing-experts.ts, shared with
// the /pricing comparison table), the "Included" list and the talent CTA
// target.
//
// Each expert card in step 02 has its own "− 0 +" counter in place of the
// radio (29 Oct, option 1), with no cap on the total, so a demo call can
// show "+1 designer" and its cost. Dedicated stays a single pick with a
// radio (29 Oct) and is quoted on a call ("+ custom" in the total). With
// the free Light offer on, each expert plan includes one Light seat.
//
// Any link on the page with data-pick-expert="graphic" | "all" picks that
// expert plan here and scrolls to step 02 (the table's "Choose …" buttons).

import { useEffect, useId, useRef, useState } from 'react';
import { EXPERT_INCLUDES_LIGHT, asset, money, plans, talents, type PlanId, type Talent, type TalentId } from './pricing-experts';

const img = asset('/images-static/pricing');
const models = [`${img}/claude.svg`, `${img}/openai.svg`, `${img}/kimi.png`, `${img}/gemini.png`];
const smile = `${img}/awesomic-smile.svg`;

const SIGN_UP = 'https://app.awesomic.com/';

const planOf = (id: PlanId) => plans.find((p) => p.id === id)!;
// A talent plan includes one Light seat at no cost — while
// EXPERT_INCLUDES_LIGHT is on (pricing-experts.ts; off for now).
const FREE_WITH_TALENT: PlanId = 'light';

const talentOf = (id: TalentId) => talents.find((x) => x.id === id)!;
const QUARTERLY_SAVE = 'Save up to 19%';

const included: { label: string; icon: string }[] = [
  { label: 'Dev environment', icon: 'M2.5 4.5h11v7h-11zM5 7l1.5 1.5L5 10M8 10h3' },
  { label: 'Website publishing', icon: 'M8 2a6 6 0 100 12A6 6 0 008 2zM2 8h12M8 2c1.7 1.8 2.5 3.8 2.5 6S9.7 12.2 8 14C6.3 12.2 5.5 10.2 5.5 8S6.3 3.8 8 2z' },
  { label: 'Cloud agents', icon: 'M5 12.5h6.5a2.5 2.5 0 00.4-5A3.5 3.5 0 005.2 6 3.25 3.25 0 005 12.5z' },
  { label: 'Brand memory', icon: 'M8 2.5l1.6 3.3 3.6.5-2.6 2.5.6 3.6L8 10.7l-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z' },
  { label: 'Shared team space', icon: 'M6 7a2 2 0 100-4 2 2 0 000 4zM2.5 12.5c.5-2 1.8-3 3.5-3s3 1 3.5 3M11 7a1.75 1.75 0 100-3.5M11.5 9.5c1 .3 1.8 1.2 2 3' },
  { label: '1,400+ app automations', icon: 'M9 2L4 9h4l-1 5 5-7H8z' },
  { label: '200+ templates', icon: 'M3 3h4v4H3zM9 3h4v4H9zM3 9h4v4H3zM9 9h4v4H9z' },
  { label: 'Web, iOS and Android', icon: 'M5 2.5h6a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1v-9a1 1 0 011-1zM7 11.5h2' },
  { label: '1 TB storage', icon: 'M3 4.5c0-1.1 2.2-2 5-2s5 .9 5 2-2.2 2-5 2-5-.9-5-2zM3 4.5v7c0 1.1 2.2 2 5 2s5-.9 5-2v-7M3 8c0 1.1 2.2 2 5 2s5-.9 5-2' },
];

const MAX_PEOPLE = 20;
const maxBudget = Math.max(...plans.map((p) => p.price));
const anyBadge = plans.some((p) => p.badge);

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Radio({ on }: { on: boolean }) {
  return <span className={`hd3n-radio${on ? ' is-on' : ''}`} aria-hidden="true" />;
}

// "− 0 +" on an expert card. Clicks stay on the counter, not the card.
function Stepper({ value, label, onChange }: { value: number; label: string; onChange: (n: number) => void }) {
  return (
    <span className="hd3n-stepper hd3n-row-stepper" role="group" aria-label={label} onClick={(e) => e.stopPropagation()}>
      <button type="button" aria-label={`Remove ${label}`} disabled={value <= 0} onClick={() => onChange(value - 1)}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3.5 8h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
      <output aria-live="polite">{value}</output>
      <button type="button" aria-label={`Add ${label}`} onClick={() => onChange(value + 1)}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </span>
  );
}

// "Awesomic Light included" on a talent row: a quiet chip with the Light rock.
function LightIncluded({ on }: { on: boolean }) {
  if (!on) return null;
  return (
    <span className="hd3n-row-split hd3n-light-chip">
      <img src={planOf(FREE_WITH_TALENT).object} alt="" width={18} height={18} />
      Awesomic Light included
    </span>
  );
}

// Billing notes: the Agentic plan is billed monthly whatever the expert
// billing switch says. Shown next to the switch and next to "Billed monthly"
// in the summary.
// One approved line for both (21 Oct); do not reword without sign-off.
const BILLING_TIP = 'Your Agentic plan is always billed monthly.';

// An "i" that explains a line: opens on hover or keyboard focus, and on tap
// (phones); a tap elsewhere or Escape closes it.
function InfoTip({ text, label }: { text: string; label: string }) {
  const id = useId();
  const ref = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <span ref={ref} className={`hd3n-tip${open ? ' is-open' : ''}`}>
      <button type="button" className="hd3n-tip-btn" aria-label={label} aria-describedby={id} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        i
      </button>
      <span role="tooltip" id={id} className="hd3n-tip-text">
        {text}
      </span>
    </span>
  );
}

function Icon({ d }: { d: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingDesktop3V2({
  layout = 'cards',
  compareHref = 'https://www.awesomic.com/pricing',
  includesLight = EXPERT_INCLUDES_LIGHT,
}: {
  layout?: 'cards' | 'track';
  // Where "Compare expert plans" goes: the pricing page, or its table when
  // the block sits on that page.
  compareHref?: string;
  // Free Light seat with an expert plan. Follows EXPERT_INCLUDES_LIGHT; the
  // /pricing-light-test page turns it on to preview that offer.
  includesLight?: boolean;
}) {
  // seats[0] is the plan picked on the cards; the rest are extra people.
  const [seats, setSeats] = useState<PlanId[]>(['pro']);
  // One entry per expert, e.g. ['all', 'all', 'graphic']. Empty means no
  // expert.
  const [experts, setExperts] = useState<TalentId[]>([]);
  const talent = experts[0] ?? null;
  const [quarterly, setQuarterly] = useState(false);
  const [barOpen, setBarOpen] = useState(false);
  const [barShown, setBarShown] = useState(false);
  // "Included in every plan" starts folded on both tabs; + opens, − closes.
  const [includedOpen, setIncludedOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  function pickPlan(id: PlanId) {
    setSeats([id, ...seats.slice(1)]);
  }

  function pickExtra(i: number, id: PlanId) {
    setSeats(seats.map((p, j) => (j === i ? id : p)));
  }

  function setPeople(n: number) {
    const count = Math.min(MAX_PEOPLE, Math.max(1, n));
    setSeats(count > seats.length ? [...seats, ...Array<PlanId>(count - seats.length).fill('light')] : seats.slice(0, count));
  }

  // One expert of this plan only (the track tab and "No expert").
  function pickTalent(id: TalentId | null) {
    setExperts(id == null ? [] : [id]);
  }

  const countOf = (id: TalentId) => experts.filter((x) => x === id).length;

  // The card counters: n experts on this plan, next to the other plans
  // already added.
  function setCount(id: TalentId, n: number) {
    const others = experts.filter((x) => x !== id);
    const count = Math.max(0, n);
    setExperts([...others, ...Array<TalentId>(count).fill(id)]);
  }

  // "Choose …" links elsewhere on the page pick an expert plan here.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLElement>('[data-pick-expert]');
      const id = link?.dataset.pickExpert as TalentId | undefined;
      if (!id || !talents.some((x) => x.id === id)) return;
      event.preventDefault();
      setExperts((cur) => (cur.includes(id) ? cur : [...cur, id]));
      document.getElementById('pricing-experts')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Phones: show the bottom bar while the pricing section is on screen and
  // the summary card itself is not.
  useEffect(() => {
    const section = sectionRef.current;
    const summary = summaryRef.current;
    if (!section || !summary) return;
    let inSection = false;
    let summaryVisible = false;
    const update = () => setBarShown(inSection && !summaryVisible);
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === section) inSection = e.isIntersecting;
        if (e.target === summary) summaryVisible = e.isIntersecting;
      }
      update();
    });
    io.observe(section);
    io.observe(summary);
    return () => io.disconnect();
  }, []);

  const t = talent ? talentOf(talent) : null;
  // Any Dedicated expert makes the total "+ custom" and the CTA a demo call.
  const custom = experts.some((id) => talentOf(id).monthly == null);
  const priced = experts.filter((id) => talentOf(id).monthly != null);
  const priceOf = (x: Talent) => (quarterly ? x.quarterly! : x.monthly!);
  const talentPrice = priced.reduce((sum, id) => sum + priceOf(talentOf(id)), 0);
  // The track tab shows one expert plan's own price.
  const tPrice = t && t.monthly != null ? priceOf(t) : null;
  // Each expert plan includes one Light seat: as many free seats as there
  // are expert plans, up to the number of Light seats on the team.
  const freeSeats = includesLight ? Math.min(experts.length, seats.filter((s) => s === FREE_WITH_TALENT).length) : 0;
  const seatsTotal = seats.reduce((sum, id) => sum + planOf(id).price, 0) - freeSeats * planOf(FREE_WITH_TALENT).price;
  const total = seatsTotal + talentPrice;

  // "Pro × 1", "Light × 2": grouped by plan, first person's plan first.
  const groups = [...new Set(seats)].map((id) => ({ plan: planOf(id), count: seats.filter((s) => s === id).length }));
  // "All-in-One × 2", "Graphic Pack × 1": the same for expert plans.
  const expertGroups = [...new Set(experts)].map((id) => ({ talent: talentOf(id), count: experts.filter((x) => x === id).length }));

  const cta = custom ? (
    <a className="hd3n-cta" href="#" calendly-link="link" ev-click="book_pricing-dedicated">
      <span>Book demo</span>
      <Arrow />
      <span className="button-background" />
    </a>
  ) : (
    <a className="hd3n-cta" href={SIGN_UP}>
      <span>Continue</span>
      <Arrow />
      <span className="button-background" />
    </a>
  );

  const totalValue = custom ? (
    <strong key="custom" className="is-custom">
      {total > 0 ? (
        <>
          {money(total)}
          <small>+ custom</small>
        </>
      ) : (
        'Custom'
      )}
    </strong>
  ) : (
    <strong key={total}>
      {money(total)}
      <small>/ month</small>
    </strong>
  );

  const lines = (
    <dl className="hd3n-lines">
      <div>
        <dt>
          Agentic plan
          <small className="hd3n-billed">
            Billed monthly
            <InfoTip text={BILLING_TIP} label="Why the Agentic plan is billed monthly" />
          </small>
        </dt>
        <dd>
          {groups.flatMap((g) => {
            // Free Light seats get their own "Included" line.
            const free = g.plan.id === FREE_WITH_TALENT ? freeSeats : 0;
            const paid = g.count - free;
            return [
              free > 0 ? (
                <span key={`${g.plan.id}-free`} className="hd3n-line">
                  {g.plan.name} × {free}
                  <b className="hd3n-free">Included</b>
                </span>
              ) : null,
              paid > 0 ? (
                <span key={g.plan.id} className="hd3n-line">
                  {g.plan.name} × {paid}
                  <b>{money(g.plan.price * paid)}</b>
                </span>
              ) : null,
            ];
          })}
        </dd>
      </div>
      <div>
        <dt>
          Expert plan
          <small>{t ? (priced.length === 0 ? 'Quoted on a call' : quarterly ? 'Quarterly' : 'Monthly') : 'Optional'}</small>
        </dt>
        <dd>
          {t ? (
            expertGroups.map((g) => (
              <span key={g.talent.id} className="hd3n-line">
                {g.talent.monthly == null && g.count === 1 ? g.talent.name : `${g.talent.name} × ${g.count}`}
                <b>{g.talent.monthly == null ? 'Custom' : money(priceOf(g.talent) * g.count)}</b>
              </span>
            ))
          ) : (
            '—'
          )}
        </dd>
      </div>
    </dl>
  );

  return (
    <section ref={sectionRef} id="pricing" className={`hd3k-section hd3n-section${layout === 'cards' ? ' hd3n-section--calm' : ''}`} aria-labelledby="hd3n-title">
      <div className="hd3k-heading">
        <div>
          <span className="hd3k-eyebrow">Pricing</span>
          <h2 id="hd3n-title">
            Choose what you need.{' '}
            <br />
            See what it costs.
          </h2>
        </div>
        <div className="hd3k-intro">
          <p>
            AI plans are priced per person. Expert plans are priced separately{includesLight ? ' and include one Light subscription' : ''}. Combine them on one
            invoice, with no setup fees.
          </p>
        </div>
      </div>

      <div className="hd3n-stage">
        <div className="hd3n-steps">
          {/* Step 1 — Agentic plan */}
          <div id="pricing-agents" className="hd3n-step">
            <div className="hd3n-step-head">
              <span className="hd3n-num">01</span>
              <div className="hd3n-step-copy">
                <h3>Choose your Agentic plan</h3>
                <p>All plans include the same agents and models. Choose how much each person can spend on AI each month.</p>
              </div>
              <span className="hd3n-logos" aria-hidden="true">
                {models.map((src) => (
                  <img key={src} src={src} alt="" />
                ))}
              </span>
            </div>

            {layout === 'track' ? (
              <>
                {/* Budget track: the fill runs from Light to the picked plan. */}
                <div className="hd3n-track" role="radiogroup" aria-label="Agentic plan">
                  <span className="hd3n-track-line" aria-hidden="true">
                    <i style={{ width: `${(plans.findIndex((p) => p.id === seats[0]) / (plans.length - 1)) * 100}%` }} />
                  </span>
                  {plans.map((x) => (
                    <button
                      key={x.id}
                      type="button"
                      role="radio"
                      aria-checked={seats[0] === x.id}
                      className={`hd3n-stop${seats[0] === x.id ? ' is-on' : ''}`}
                      onClick={() => pickPlan(x.id)}
                    >
                      <img className="hd3n-object" src={x.object} alt="" width={32} height={32} />
                      <span className="hd3n-stop-dot" aria-hidden="true" />
                      <span className="hd3n-stop-name">{x.name}</span>
                      <span className="hd3n-stop-price">{money(x.price)}</span>
                    </button>
                  ))}
                </div>
                <div className="hd3n-detail" key={seats[0]}>
                  <img className="hd3n-detail-object" src={planOf(seats[0]).object} alt="" width={56} height={56} />
                  <p>
                    <strong>{planOf(seats[0]).name}</strong>
                    {planOf(seats[0]).text}
                  </p>
                  <span className="hd3n-detail-price">
                    <strong>{money(planOf(seats[0]).price)}</strong>
                    <span>/ person / month</span>
                  </span>
                </div>
              </>
            ) : (
              <div className="hd3n-tiles" role="radiogroup" aria-label="Agentic plan">
                {plans.map((x) => (
                  <button
                    key={x.id}
                    type="button"
                    role="radio"
                    aria-checked={seats[0] === x.id}
                    className={`hd3n-tile${seats[0] === x.id ? ' is-on' : ''}`}
                    onClick={() => pickPlan(x.id)}
                  >
                    <span className="hd3n-tile-top">
                      <img className="hd3n-object" src={x.object} alt="" width={32} height={32} />
                      <span className="hd3n-tile-name">{x.name}</span>
                      <Radio on={seats[0] === x.id} />
                    </span>
                    {/* Badge row only when some plan has a badge, so the cards stay aligned. */}
                    {x.badge ? <span className="hd3n-badge">{x.badge}</span> : anyBadge ? <span className="hd3n-badge is-empty" aria-hidden="true" /> : null}
                    <span className="hd3n-tile-price">
                      <strong>{money(x.price)}</strong>
                      <span>/ person / month</span>
                    </span>
                    <span className="hd3n-budget-row">
                      <span>Monthly AI budget</span>
                      <b>{money(x.price)}</b>
                    </span>
                    <span className="hd3n-meter" aria-hidden="true">
                      <i style={{ width: `${Math.max(6, (x.price / maxBudget) * 100)}%` }} />
                    </span>
                  </button>
                ))}
              </div>
            )}

            <div className={`hd3n-included hd3n-included--fold${includedOpen ? ' is-open' : ''}`}>
              <button
                type="button"
                className="hd3n-included-head"
                aria-expanded={includedOpen}
                aria-controls="hd3n-included-list"
                onClick={() => setIncludedOpen((o) => !o)}
              >
                <span>
                  Included in every plan
                  <small>{included.length} features</small>
                </span>
                <span className="hd3n-included-toggle" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    {includedOpen ? null : <path d="M8 3.5v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />}
                    <path d="M3.5 8h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <ul id="hd3n-included-list" hidden={!includedOpen}>
                {included.map((x) => (
                  <li key={x.label}>
                    <Icon d={x.icon} />
                    {x.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hd3n-team">
              <div className="hd3n-team-head">
                <div>
                  <strong id="hd3n-people">People on your team</strong>
                  <span>Pick a plan for each person. You can change it anytime.</span>
                </div>
                <div className="hd3n-stepper" role="group" aria-labelledby="hd3n-people">
                  <button type="button" aria-label="Remove a person" disabled={seats.length <= 1} onClick={() => setPeople(seats.length - 1)}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3.5 8h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </button>
                  <output aria-live="polite">{seats.length}</output>
                  <button type="button" aria-label="Add a person" disabled={seats.length >= MAX_PEOPLE} onClick={() => setPeople(seats.length + 1)}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {seats.length > 1 && (
                <ol className="hd3n-people">
                  <li>
                    <span className="hd3n-person">Person 1</span>
                    <span className="hd3n-person-note">{planOf(seats[0]).name}, picked above</span>
                  </li>
                  {seats.slice(1).map((id, k) => {
                    const i = k + 1;
                    return (
                      <li key={i}>
                        <span className="hd3n-person">Person {i + 1}</span>
                        <span className="hd3n-mini" role="radiogroup" aria-label={`Plan for person ${i + 1}`}>
                          {plans.map((p) => (
                            <button key={p.id} type="button" role="radio" aria-checked={id === p.id} className={id === p.id ? 'is-on' : ''} onClick={() => pickExtra(i, p.id)}>
                              {p.name}
                            </button>
                          ))}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>
          </div>

          {/* Step 2 — Expert plan */}
          <div id="pricing-experts" className="hd3n-step">
            <div className="hd3n-step-head">
              <span className="hd3n-num">02</span>
              <div className="hd3n-step-copy">
                <h3>
                  Add an expert to your team <span className="hd3n-optional">Optional</span>
                </h3>
                <p>
                  Choose ongoing support from vetted designers, developers, and marketers.
                  {includesLight ? ' Every expert plan includes one bonus Light subscription at no extra cost.' : ''}
                </p>
              </div>
              <div className="hd3n-billing">
                <div className="hd3k-switch" role="radiogroup" aria-label="Expert billing period">
                  <button type="button" role="radio" aria-checked={!quarterly} className={!quarterly ? 'is-on' : ''} onClick={() => setQuarterly(false)}>
                    Monthly
                  </button>
                  <button type="button" role="radio" aria-checked={quarterly} className={quarterly ? 'is-on' : ''} onClick={() => setQuarterly(true)}>
                    Quarterly <span className="hd3k-save">{QUARTERLY_SAVE}</span>
                  </button>
                </div>
                <InfoTip text={BILLING_TIP} label="How billing works" />
              </div>
            </div>

            {layout === 'track' ? (
              <>
                <div className="hd3n-seg" role="radiogroup" aria-label="Expert plan">
                  {talents.map((x) => {
                    const price = x.monthly != null ? (quarterly ? x.quarterly! : x.monthly) : null;
                    return (
                      <button
                        key={x.id}
                        type="button"
                        role="radio"
                        aria-checked={talent === x.id}
                        className={talent === x.id ? 'is-on' : ''}
                        onClick={() => pickTalent(x.id)}
                      >
                        {x.name}
                        <small>{price != null ? `${money(price)} / mo` : 'Custom'}</small>
                      </button>
                    );
                  })}
                  <button type="button" role="radio" aria-checked={talent === null} className={talent === null ? 'is-on' : ''} onClick={() => pickTalent(null)}>
                    No expert
                    <small>for now</small>
                  </button>
                </div>
                {t ? (
                  <div className="hd3n-tdetail" key={`${t.id}-${quarterly}`}>
                    <span className="hd3n-row-pics" aria-hidden="true">
                      {t.avatars.map((src) => (
                        <img key={src} src={src} alt="" />
                      ))}
                    </span>
                    <p>
                      <strong>{t.name}</strong>
                      {t.text.replace('\n', ' ')}
                    </p>
                    <span className="hd3n-tdetail-price">
                      {tPrice != null ? (
                        <>
                          <span className="hd3n-row-amount">
                            {quarterly ? <s>{money(t.monthly!)}</s> : null}
                            <strong>{money(tPrice)}</strong>
                            <span>/ month</span>
                          </span>
                          {includesLight ? <span className="hd3n-row-split">Awesomic Light included</span> : null}
                        </>
                      ) : (
                        <>
                          <span className="hd3n-row-amount">
                            <strong>Custom</strong>
                          </span>
                          <span className="hd3n-row-split">Quoted on a call{includesLight ? ' · Awesomic Light included' : ''}</span>
                        </>
                      )}
                    </span>
                  </div>
                ) : (
                  <div className="hd3n-tdetail is-none" key="none">
                    <p>
                      <strong>No expert for now</strong>
                      Work with AI for now. Add an expert plan later.
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="hd3n-rows" role="group" aria-label="Expert plans">
                  {talents.map((x) => {
                    const price = x.monthly != null ? (quarterly ? x.quarterly! : x.monthly) : null;
                    const count = countOf(x.id);
                    const on = count > 0;
                    const pics = (
                      <span className="hd3n-row-pics" aria-hidden="true">
                        {x.avatars.map((src) => (
                          <img key={src} src={src} alt="" />
                        ))}
                      </span>
                    );
                    const copy = (
                      <span className="hd3n-row-copy">
                        <strong>{x.name}</strong>
                        {/* "\n" marks a chosen line break on wider screens. */}
                        <span>
                          {x.text.split('\n').map((part, k) => (
                            <span key={k}>
                              {k > 0 ? <br className="hd3n-br" /> : null}
                              {k > 0 ? ' ' : null}
                              {part}
                            </span>
                          ))}
                        </span>
                      </span>
                    );
                    // The counter sits where the radio was: 0 = not picked. A tap
                    // on the card adds the first expert. Dedicated (no fixed
                    // price) keeps a radio: one, quoted on a call; a tap toggles it.
                    const single = x.monthly == null;
                    return (
                      <div
                        key={x.id}
                        className={`hd3n-row hd3n-row--count${single ? ' hd3n-row--single' : ''}${on ? ' is-on' : ''}`}
                        role={single ? 'checkbox' : undefined}
                        aria-checked={single ? on : undefined}
                        onClick={() => (single ? setCount(x.id, on ? 0 : 1) : on ? null : setCount(x.id, 1))}
                      >
                        {single ? (
                          <span className="hd3n-row-pick">
                            <Radio on={on} />
                          </span>
                        ) : (
                          <Stepper value={count} label={/expert$/i.test(x.name) ? x.name : `${x.name} expert`} onChange={(n) => setCount(x.id, n)} />
                        )}
                        {pics}
                        {copy}
                        <span className="hd3n-row-price">
                          {price != null ? (
                            <span className="hd3n-row-amount">
                              {quarterly ? <s>{money(x.monthly!)}</s> : null}
                              <strong key={price}>{money(price)}</strong>
                              <span>/ month</span>
                            </span>
                          ) : (
                            <>
                              <span className="hd3n-row-amount">
                                <strong>Custom</strong>
                              </span>
                              <span className="hd3n-row-quoted">Quoted on a call</span>
                            </>
                          )}
                          <LightIncluded on={includesLight} />
                        </span>
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  role="radio"
                  aria-checked={talent === null}
                  className={`hd3n-none${talent === null ? ' is-on' : ''}`}
                  onClick={() => pickTalent(null)}
                >
                  <Radio on={talent === null} />
                  <strong>No expert for now</strong>
                  <span>Work with AI for now. Add an expert plan later.</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="hd3n-side">
          <aside className="hd3n-summary" aria-label="Your Awesomic" aria-live="polite">
            <div className="hd3n-sum-card" ref={summaryRef}>
              <span className="hd3n-sum-eyebrow">Your Awesomic</span>
              <p className="hd3n-sum-sub">Everything you picked, on one invoice.</p>

              {lines}

              <div className="hd3n-total">
                <span>Total</span>
                {totalValue}
              </div>
              <p className="hd3n-note">
                {custom ? 'We’ll scope your dedicated expert on a short call. ' : ''}
                No setup fees. Cancel anytime; your plan runs to the end of the month you paid for. Agentic plans aren’t refundable, and unused budget resets each month.
                {quarterly && priced.length > 0 ? <span className="hd3n-note-q">Quarterly expert plans can be cancelled after three months.</span> : null}
              </p>

              {cta}
            </div>

            <div className="hd3n-proof">
              <img src={smile} alt="" width={20} height={20} />
              <p>
                <strong>Rated 4.9 by 4,000+ companies.</strong>
              </p>
            </div>
          </aside>

          <a className="hd3n-compare" href={compareHref}>
            Compare expert plans
            <Arrow />
          </a>
        </div>
      </div>

      {/* Phones: the summary as a bottom bar; tap the total to expand. */}
      <div className={`hd3n-bar${barShown ? ' is-shown' : ''}${barOpen ? ' is-open' : ''}`} aria-hidden={!barShown}>
        {barOpen ? (
          <div className="hd3n-bar-sheet">
            {lines}
          </div>
        ) : null}
        <div className="hd3n-bar-row">
          <button type="button" className="hd3n-bar-total" aria-expanded={barOpen} onClick={() => setBarOpen((o) => !o)} tabIndex={barShown ? 0 : -1}>
            <span>Total</span>
            {totalValue}
            <svg className="hd3n-bar-chev" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {cta}
        </div>
      </div>
    </section>
  );
}
