import { MARKET } from "@/lib/market";

export default function Pricing() {
  return (
    <section className="section" id="pricing" aria-labelledby="pricing-hl">
      <div className="container">
        <div className="pricing-header">
          <p className="eyebrow">Placement tiers</p>
          <h2 className="section-hl" id="pricing-hl">Choose your placement.</h2>
          <p className="section-sub">
            Every slot includes professional ad design, printing, and USPS EDDM
            delivery to {MARKET.homes} homes.
          </p>
        </div>

        <div className="pricing-grid">
          <div className="tier-card">
            <span className="tier-badge standard">Standard Slot</span>
            <p className="tier-name">A regular panel on the card.</p>
            <div className="tier-price">
              <span className="tier-amount">$300</span>
              <span className="tier-price-label">per mailing</span>
            </div>
            <div className="tier-divider" />
            <ul className="tier-features">
              <li><span className="tf-check">✓</span>Your category, exclusively yours</li>
              <li><span className="tf-check">✓</span>Professional ad design included</li>
              <li><span className="tf-check">✓</span>QR code to any URL you choose</li>
              <li><span className="tf-check">✓</span>USPS EDDM delivery to {MARKET.homes} homes</li>
              <li><span className="tf-check">✓</span>Standard card position</li>
            </ul>
            <a href="#contact" className="tier-cta secondary">Reserve a Standard Slot →</a>
          </div>

          <div className="tier-card featured">
            <span className="tier-badge special">Special Slot</span>
            <p className="tier-name">A featured, larger panel in prime position.</p>
            <div className="tier-price">
              <span className="tier-amount">$500</span>
              <span className="tier-price-label">per mailing</span>
            </div>
            <div className="tier-divider" />
            <ul className="tier-features">
              <li><span className="tf-check">✓</span>Everything in Standard</li>
              <li><span className="tf-check">✓</span>Double-wide panel — more visual space</li>
              <li><span className="tf-check">✓</span>Corner placement, highest visibility</li>
              <li><span className="tf-check">✓</span>First impression on the card face</li>
              <li><span className="tf-check">✓</span>Only 2 Special Slots available (of 12)</li>
            </ul>
            <a href="#contact" className="tier-cta primary">Reserve a Special Slot →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
