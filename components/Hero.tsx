import { MARKET } from "@/lib/market";
import CardMock from "./CardMock";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="eyebrow">
            EDDM · ZIP {MARKET.zip} · {MARKET.city}, {MARKET.state}
          </p>
          <div className="hero-stat" aria-label={`${MARKET.homes} homes`}>
            <em>{MARKET.homes}</em>
          </div>
          <h1 className="hero-hl">
            Local homes. One shared card. Your business in every mailbox.
          </h1>
          <p className="hero-sub">
            A shared postcard mailed to every home on the route — {MARKET.homes} doors
            across {MARKET.city}. Twelve local businesses, one per category. No
            competitors on your card.
          </p>
          <div className="hero-pills">
            <span className="pill"><span className="pill-dot" />{MARKET.homes} homes reached</span>
            <span className="pill"><span className="pill-dot" />ZIP {MARKET.zip} exclusive</span>
            <span className="pill"><span className="pill-dot clay" />One business per category</span>
            <span className="pill"><span className="pill-dot" />Avg income {MARKET.avgIncome}</span>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Reserve Your Category →</a>
            <a href="#placements" className="btn-ghost">See Open Slots</a>
          </div>
        </div>

        <CardMock />
      </div>
    </section>
  );
}
