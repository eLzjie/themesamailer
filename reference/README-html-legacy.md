# The Mesa Mailer — Landing Page

A single-file, no-build landing page for The Mesa Mailer. Everything is inlined into `index.html`: CSS in `<style>`, JS in `<script>`, fonts loaded from Google Fonts. No frameworks, no build step.

---

## Deploying to GoHighLevel (WordPress hosting)

1. Log in to GoHighLevel.
2. Go to **Sites → WordPress → Manage Website**.
3. Open the **Files / Media** section of the WordPress dashboard.
4. Upload `index.html` to the site root (overwriting any existing one).
5. Visit `https://themesamailer.com/` to verify.

The page is self-contained — no other assets to upload. Total weight is well under 50 KB before fonts.

---

## Editing the page

**Everything market-specific lives in one place.** Open `index.html`, scroll to the `<script>` block near the bottom, and look for `const MARKET = { … }`.

### Launching a new market (new ZIP, new city)

Edit the `MARKET` object — only the `MARKET` object — and republish:

```js
const MARKET = {
  city:          "Scottsdale",
  state:         "AZ",
  zip:           "85255",
  neighborhoods: "Troon, DC Ranch, and the rest of 85255",
  homes:         "5,210",
  routes:        "7",
  avgIncome:     "$148,000",
  cardNumber:    "001",
  permit:        "PERMIT #PENDING",
  costPerHome:   "$0.048",
  slotPrice:     "$250",
  slotPriceReg:  "$295",
};
```

Every visible reference to city / state / ZIP / homes / routes / income / price across the hero, the card mock, all 8 sections, and the footer updates from this single object. The page `<title>`, meta description, and OG tags also update at runtime.

> The brand wordmark "The Mesa Mailer" is intentionally **not** in `MARKET` — it's the company name. If the company rebrands per-city, change the brand text manually in `index.html` (search for "The Mesa Mailer").

### The lead form (GoHighLevel native embed)

Section 6 is a **native GHL form** embedded as an iframe — GHL handles validation, submission, contact creation, and workflow triggers. There is no webhook, no JS validation, no payload to maintain in this file.

To **edit fields, labels, or the submit button**: GHL → **Sites → Forms → "Mesa Mailer"**. Changes go live without touching `index.html`.

To **swap in a different form** (e.g. a new GHL form): in `index.html`, find the `.form-embed` block in Section 6 and replace the form ID `IXuoK42RfFXZIewFy6yg` everywhere it appears in the `<iframe>` (the `src` URL, `id`, `data-layout-iframe-id`, and `data-form-id`). Copy the fresh embed code from GHL's form **Integrate** panel if unsure.

> Clicking a slot in Section 2 scrolls to the form but no longer pre-fills the category — the GHL iframe is cross-origin and can't be filled from the page. UTM attribution is captured by GHL automatically from the page URL.

### Marking a slot as claimed

In `index.html`, find the `SLOTS` array (right below `WEBHOOK_URL`). Change the status of any slot from `"open"` to `"claimed"` and fill in `businessName`:

```js
const SLOTS = [
  { category: "HVAC",     description: "…",  status: "claimed", businessName: "Sunset HVAC" },
  { category: "Plumbing", description: "…",  status: "open",    businessName: "" },
  // …
];
```

When a slot is `claimed`:

- Border switches to lock-grey.
- Category and description text grey out.
- Pill displays `CLAIMED · [businessName]`.
- Hover and click are disabled.

### Swapping Chase's phone number

In `index.html`, find:

```js
const CHASE_PHONE     = "(480) 555-0100";
const CHASE_PHONE_TEL = "+14805550100";
```

Replace both — `CHASE_PHONE` is the display string, `CHASE_PHONE_TEL` is the `tel:` link target (no parens, no dashes, leading `+1`).

This phone number appears in the footer's Contact column.

### Updating the "Last updated · X of 8 open" caption

This caption — beneath the slot grid in Section 2 — updates **automatically**:

- The date is **today's date** as seen by the visitor's browser.
- The "X of 8" count is derived from the `SLOTS` array (count of `status === "open"`).

There's nothing to edit manually. Mark a slot claimed → the count drops.

---

## Design notes

- **Clay was darkened.** Spec called for `#C45E3F`, which fails AA contrast both as text on paper (3.92:1) and white-on-clay (4.18:1). Shipped value is `#B85436`: 4.53:1 clay-on-paper and 4.84:1 white-on-clay. Both pass WCAG AA for normal body text.
- **Light mode only.** No dark-mode styles.
- **No build step.** Edit `index.html` directly and re-upload.
- **CDN assets:** Google Fonts only (Fraunces, Inter, JetBrains Mono).

---

## Browser support

Tested approach targets:

- Latest Chrome / Edge / Firefox / Safari
- iOS Safari and Chrome on Android
- IntersectionObserver is required for the entrance and sticky-nav animations (every modern browser has it; if absent, the page still works — content just appears immediately).

---

## File budget

- `index.html` — under 50 KB (well below the 500 KB budget).
- Google Fonts — loaded over CDN, not counted against the file.

---

## Sections reference

1. Hero — eyebrow / headline / sub / dual CTA / trust line, with a tilted card mock to the right.
2. The Card — 4×2 (desktop) / 2×4 (mobile) interactive slot grid.
3. How It Works — three numbered rows, no icons.
4. The Math — monospace postal "receipt" with gold rules.
5. Who This Is For — 8-row vertical category list.
6. Lead Form — native GoHighLevel form embedded as an iframe.
7. FAQ — 8 `<details>` items; works fully without JS.
8. Footer — brand, contact, current routes, fine print.

A thin sticky nav slides in once the hero scrolls out of view.
