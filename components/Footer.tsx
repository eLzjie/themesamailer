import { MARKET, BRAND } from "@/lib/market";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <p className="footer-brand-name">{BRAND.name}</p>
            <a
              href={BRAND.operatorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-brand-sub"
            >
              by {BRAND.operator}
            </a>
            <p className="footer-brand-tag">
              EDDM shared-mail postcards for {MARKET.city}, {MARKET.state}. Local
              reach, shared cost.
            </p>
          </div>

          <div className="footer-col">
            <h5>Placements</h5>
            <ul>
              <li><a href="#placements">Available Slots</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Reserve a Slot</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Information</h5>
            <ul>
              <li><a href="#why">Why Direct Mail</a></li>
              <li><a href="#how">How It Works</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href={`tel:${MARKET.phoneTel}`}>{MARKET.phone}</a></li>
              <li>
                <a href={BRAND.operatorUrl} target="_blank" rel="noopener noreferrer">
                  {BRAND.operator}
                </a>
              </li>
              <li><a href="#contact">Reserve a Slot</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} {BRAND.name} by {BRAND.operator} · {MARKET.city}, {MARKET.state} {MARKET.zip}
          </p>
          <p className="footer-permit">{MARKET.permit}</p>
        </div>
      </div>
    </footer>
  );
}
