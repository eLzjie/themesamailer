/**
 * MARKET — single source of truth for everything market-specific.
 *
 * To launch a new city later (e.g. /scottsdale), copy this object, change the
 * values, and point a new route at it. No component hard-codes a ZIP or city.
 */
export const MARKET = {
  city: "Mesa",
  state: "AZ",
  zip: "85207",
  region: "the East Valley",
  neighborhoods: "Las Sendas, Red Mountain Ranch, and the surrounding area",
  homes: "5,000",
  homesShort: "5,000",
  routes: "6",
  avgIncome: "$125,000",
  avgIncomeShort: "$125k",
  cardNumber: "001",
  permit: "PERMIT #PENDING",
  // Placeholder — replace with the real number before launch.
  phone: "(480) 555-0100",
  phoneTel: "+14805550100",
} as const;

/** BRAND — the wordmark and its operator signature. */
export const BRAND = {
  name: "The Mesa Mailer",
  operator: "JacklynSellz",
  operatorUrl: "https://jacklynsellz.com",
  tagline: "Real service. Real local.",
  // GoHighLevel inline form id (from the embed code).
  formId: "IXuoK42RfFXZIewFy6yg",
} as const;

/** Pricing tiers. */
export const TIERS = {
  special: { label: "Special Slot", price: "$500", count: 2 },
  standard: { label: "Standard Slot", price: "$300" },
} as const;

/** Convenience string used in a few places. */
export const cityStateZip = `${MARKET.city} · ${MARKET.zip} · ${MARKET.state}`;
