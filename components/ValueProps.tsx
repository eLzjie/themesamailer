import { MARKET } from "@/lib/market";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: "✉",
    title: "Physical mail that gets opened",
    body: "Most people check their mail every day. USPS EDDM delivers to every door on the route — no list to buy, no algorithm to fight.",
  },
  {
    icon: "$",
    title: "A premium area at a shared cost",
    body: `Reaching a neighborhood like this solo would cost thousands. Shared across twelve businesses, a slot starts at just $300.`,
  },
  {
    icon: "◆",
    title: "One business per category",
    body: "Your company is the only one in its category on the card. No bidding wars, no side-by-side comparisons — just your name.",
  },
  {
    icon: "✓",
    title: "We handle everything",
    body: "Design, printing, and USPS mailing are all included. You send your logo and offer — we do the rest.",
  },
];

export default function ValueProps() {
  return (
    <section className="section alt" id="why" aria-labelledby="value-hl">
      <div className="container">
        <div className="value-grid">
          <Reveal className="value-copy">
            <p className="eyebrow">Why direct mail</p>
            <h2 className="section-hl" id="value-hl">Built to be saved. Not scrolled past.</h2>
            <p className="section-sub">
              A postcard in the hand is worth a thousand impressions on a screen.
              People keep mail. They put it on the fridge. They call the number two
              weeks later.
            </p>
            <ul className="feature-list">
              {FEATURES.map((f) => (
                <li className="feature-item" key={f.title}>
                  <div className="feature-icon" aria-hidden="true">{f.icon}</div>
                  <div className="feature-body">
                    <h4>{f.title}</h4>
                    <p>{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="stat-grid" delay={0.1}>
            <div className="stat-box">
              <div className="stat-num">{MARKET.homes}</div>
              <div className="stat-lbl">Homes reached</div>
              <div className="stat-note">Every residential delivery point in ZIP {MARKET.zip}</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">12</div>
              <div className="stat-lbl">Slots total</div>
              <div className="stat-note">Two tiers — Special and Standard</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">{MARKET.avgIncomeShort}</div>
              <div className="stat-lbl">Avg household income</div>
              <div className="stat-note">{MARKET.neighborhoods}</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">{MARKET.routes}</div>
              <div className="stat-lbl">USPS routes</div>
              <div className="stat-note">Full-route EDDM — no cherry-picking, no gaps</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
