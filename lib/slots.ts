export type Tier = "special" | "standard";
export type Status = "open" | "claimed";

export interface Slot {
  category: string;
  tier: Tier;
  price: string;
  status: Status;
  businessName: string;
  description: string;
}

/**
 * SLOTS — the 12 categories on the card.
 *
 * Two Special Slots (larger, corner panels): HVAC + Roofing.
 * Ten Standard Slots fill the rest.
 *
 * To mark a slot sold: set status: "claimed" and fill in businessName.
 * Copy is written to work in any market — no city-specific references.
 */
export const SLOTS: Slot[] = [
  // ── Row 1: Special + Standard + Standard ──
  {
    category: "HVAC",
    tier: "special",
    price: "$500",
    status: "open",
    businessName: "",
    description:
      "Heating and cooling isn't optional — it's the first call a homeowner makes when a system fails. Put your name on the fridge before the breakdown, not after.",
  },
  {
    category: "Plumbing",
    tier: "standard",
    price: "$300",
    status: "open",
    businessName: "",
    description:
      "Leaks and clogs don't wait. When homeowners need a plumber fast, they reach for the name they already recognize.",
  },
  {
    category: "Pest Control",
    tier: "standard",
    price: "$300",
    status: "open",
    businessName: "",
    description:
      "Recurring service, recurring revenue. A card on the counter keeps you top-of-mind for the next treatment and the next referral.",
  },
  // ── Row 2: Standard × 4 ──
  {
    category: "Pool Service",
    tier: "standard",
    price: "$300",
    status: "open",
    businessName: "",
    description:
      "Most pool owners would rather pay someone than skim it themselves. Reach the whole neighborhood, not just the ones already searching.",
  },
  {
    category: "Dental",
    tier: "standard",
    price: "$300",
    status: "open",
    businessName: "",
    description:
      "Families choose a dentist and stay for years. Being the trusted local name on the card is how that relationship starts.",
  },
  {
    category: "Chiropractic",
    tier: "standard",
    price: "$300",
    status: "open",
    businessName: "",
    description:
      "A card that lands on the fridge is a reminder that outlasts any ad. Steady demand, loyal patients, high lifetime value.",
  },
  {
    category: "Tax & Accounting",
    tier: "standard",
    price: "$300",
    status: "open",
    businessName: "",
    description:
      "Higher-income households need a local expert they can call — not a chain. Name recognition wins this category before tax season even starts.",
  },
  // ── Row 3: Standard + Standard + Special ──
  {
    category: "Landscaping",
    tier: "standard",
    price: "$300",
    status: "open",
    businessName: "",
    description:
      "Curb appeal is a standing contract. Homeowners who care about the yard renew season after season — reach the decision-maker at home.",
  },
  {
    category: "Real Estate",
    tier: "standard",
    price: "$300",
    status: "open",
    businessName: "",
    description:
      "Agents live and die by name recognition before the listing call. Stay in every household month after month, not just when they're ready to sell.",
  },
  {
    category: "Roofing",
    tier: "special",
    price: "$500",
    status: "open",
    businessName: "",
    description:
      "High-ticket jobs, seasonal urgency. A Special Slot puts your name first in front of thousands of homeowners — before the storm, not after.",
  },
  // ── Row 4: Standard + Standard ──
  {
    category: "Home Services",
    tier: "standard",
    price: "$300",
    status: "open",
    businessName: "",
    description:
      "Electrical, painting, flooring, handyman — homeowners upgrade, not just repair. High-ticket work and repeat customers in one category.",
  },
  {
    category: "Attorneys",
    tier: "standard",
    price: "$300",
    status: "open",
    businessName: "",
    description:
      "Estate planning, real estate, family law. The same households that own homes here need trusted legal counsel they can reach locally.",
  },
];

export const openCount = () => SLOTS.filter((s) => s.status === "open").length;
