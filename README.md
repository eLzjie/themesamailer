# The Mesa Mailer — by JacklynSellz

Landing page for **The Mesa Mailer**, a local shared-mail (USPS EDDM) postcard
advertising service. Twelve non-competing local businesses share one oversized
postcard mailed to every home on a set of routes.

Built with **Next.js 15 (App Router) + TypeScript**. No CSS framework — the
design system is hand-written CSS with tokens in `app/globals.css`. Fonts are
self-hosted via `next/font`. Deployed on **Vercel**.

---

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Node 18.18+ (tested on Node 22).

---

## Where everything lives

```
app/
  layout.tsx        Fonts, <html>, SEO metadata (built from MARKET)
  page.tsx          Composes the sections in order
  globals.css       ALL design tokens + component styles
components/
  Nav, Hero, CardMock, ValueProps, Pricing, SlotGrid,
  HowItWorks, CtaBanner, Faq, LeadForm, Footer, Reveal
lib/
  market.ts         Single source of truth: city / zip / homes / brand / phone / form id
  slots.ts          The 12 categories + tier + status
reference/          Archived original single-file HTML (pre-Next.js)
```

### Client vs server components
Almost everything is a static **server component**. Only three are `"use client"`:
`Nav` (scroll state), `SlotGrid` (entrance animation + click-to-scroll), and
`Reveal` (scroll fade helper). The FAQ works with no JS (`<details>`).

---

## Editing content

**Everything market-specific is in `lib/market.ts`.** Change the `MARKET` object
and every headline, stat, meta tag, and footer line updates:

```ts
export const MARKET = {
  city: "Mesa", state: "AZ", zip: "85207",
  homes: "5,000", routes: "6", avgIncome: "$125,000",
  phone: "(480) 555-0100", phoneTel: "+14805550100",
  // ...
};
```

> **Before launch:** replace the placeholder phone number (`(480) 555-0100`).

**Brand + operator** live in the same file (`BRAND`): wordmark is
`The Mesa Mailer`, subtitle `by JacklynSellz` links to `jacklynsellz.com`.

### Launching a new city later (`/scottsdale`, `/gilbert`)
The whole page reads from one `MARKET` object, so scaling is: create
`app/scottsdale/page.tsx` that renders the same components with a Scottsdale
market config (lift `MARKET` into a per-city map keyed by slug). No component
hard-codes a ZIP or city — copy is deliberately general.

### The 12 slots
Edit `lib/slots.ts`. To mark one sold:

```ts
{ category: "HVAC", tier: "special", price: "$500",
  status: "claimed", businessName: "Sunset HVAC", description: "…" },
```

A claimed slot greys out, is not clickable, shows `Claimed · <business>`, and
the "X of 12 open" counter drops automatically. Two Special Slots ($500,
double-wide) — currently HVAC + Roofing; the rest are Standard ($300).

### The lead form (GoHighLevel)
`components/LeadForm.tsx` embeds GHL form `IXuoK42RfFXZIewFy6yg` as an iframe and
loads GHL's `form_embed.js` via `next/script`. To swap forms, change
`BRAND.formId` in `lib/market.ts`. To add a Standard/Special dropdown, edit the
form in **GHL → Sites → Forms → "Mailer Form"** — no code change needed.

---

## Deploy (Vercel + GitHub)

Repo: `https://github.com/eLzjie/themesamailer.git`

- **`main`** → production
- **`staging`** → preview / QA

Push to a branch and Vercel auto-builds. First-time setup: import the GitHub
repo in the Vercel dashboard (Vercel auto-detects Next.js — no config needed),
set the production branch to `main`.

---

## Design notes

- **Palette:** warm espresso ground (`#17100B`), terracotta `--clay` (#C45638)
  for CTAs, amber `--gold` (#CBA152) for numbers/prices and the "open" status.
  Intentionally **no green** (reserved for another JacklynSellz brand).
- **Type:** Source Serif 4 (italic display), Inter (body), JetBrains Mono
  (numbers/labels) — self-hosted via `next/font`.
- **Motion:** slot cards stagger-fade in on scroll; the two Special Slots pulse a
  soft clay glow. All motion respects `prefers-reduced-motion`.
