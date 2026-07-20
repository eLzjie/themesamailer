import { MARKET } from "@/lib/market";

const FAQS = [
  {
    q: "What is EDDM and how does it work?",
    a: `Every Door Direct Mail (EDDM) is a USPS program that delivers to every residential address on a mail route — no mailing list required. We select all ${MARKET.routes} routes in ZIP ${MARKET.zip} and USPS delivers the postcard to every household on those routes.`,
  },
  {
    q: "How many businesses share the card?",
    a: "Twelve total — six per card face. The card is double-sided: one side is all advertising slots, the other is the USPS mailing face with indicia and branding. Every business gets a real panel, not a footer listing.",
  },
  {
    q: 'What does "one business per category" mean exactly?',
    a: "If you reserve the HVAC slot, no other HVAC company can be on this card — ever, for any mailing. Your competition is locked out of the card as long as you renew your slot.",
  },
  {
    q: "What's included in the slot price?",
    a: `Professional ad design, print-ready file production, commercial printing, USPS EDDM postage, and full delivery to ${MARKET.homes} homes. The only thing not included is your logo, business info, and the offer you want to promote.`,
  },
  {
    q: "What's the difference between Special and Standard slots?",
    a: "Special Slots ($500) get a double-wide panel at the outer corners of the card face — the first thing the eye lands on. There are only 2 Special Slots total. Standard Slots ($300) are regular-size panels in the interior of the layout. Both include the same design and mailing service.",
  },
  {
    q: "How long before my ad is in mailboxes?",
    a: "Once all 12 slots are sold and design assets are submitted, allow 3–4 weeks for design, print production, and USPS processing. We send proofs for approval before anything goes to print.",
  },
  {
    q: "What if my category is already claimed?",
    a: "Join the waitlist for that category — if the current holder doesn't renew, you're first in line. Or ask about the next card; we may expand to adjacent areas or run additional mailings.",
  },
  {
    q: "Can I lock in my slot for multiple mailings?",
    a: "Yes, and it's the smart play. Businesses that appear consistently in a neighborhood build name recognition over time. Ask about multi-mailing pricing when you reserve.",
  },
];

export default function Faq() {
  return (
    <section className="section alt" id="faq" aria-labelledby="faq-hl">
      <div className="container">
        <div className="faq-grid">
          <aside className="faq-aside">
            <h3 id="faq-hl">Questions.</h3>
            <p>
              If something isn&apos;t answered here, reach out directly — this is a
              local operation, not a call center.
            </p>
          </aside>
          <div className="faq-list">
            {FAQS.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p className="faq-ans">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
