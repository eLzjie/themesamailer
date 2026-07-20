import { MARKET } from "@/lib/market";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero-bg" role="img" aria-label="A postcard of local businesses in a mailbox at golden hour" />
      <div className="hero-tint" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-hl">
            Local homes. One shared card. Your business in every mailbox.
          </h1>
          <p className="hero-sub">
            A shared postcard mailed to every home on the route — {MARKET.homes} doors
            across {MARKET.city}. Twelve local businesses, one per category. No
            competitors on your card.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Reserve Your Category →</a>
            <a href="#placements" className="btn-ghost">See Open Slots</a>
          </div>
        </div>
      </div>
    </section>
  );
}
