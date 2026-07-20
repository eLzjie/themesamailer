import { BRAND, cityStateZip } from "@/lib/market";

/** A stylized preview of one card face — 6 of the 12 slots. */
export default function CardMock() {
  return (
    <div className="hero-card-wrap">
      <div className="card-mock" role="img" aria-label="Postcard slot layout preview">
        <p className="card-mock-side-label">Advertising side · 6 of 12 slots</p>

        <div className="card-mock-grid">
          <div className="cms special-bg">
            <span className="cms-cat">HVAC</span>
            <span className="cms-tier special">Special</span>
          </div>
          <div className="cms">
            <span className="cms-cat">Plumbing</span>
            <span className="cms-tier standard">Standard</span>
          </div>
          <div className="cms">
            <span className="cms-cat">Pest Control</span>
            <span className="cms-tier standard">Standard</span>
          </div>
        </div>

        <div className="card-mock-strip">
          <span className="cms-brand">{BRAND.name}</span>
          <span className="cms-zip">{cityStateZip}</span>
        </div>

        <div className="card-mock-bottom">
          <div className="cms">
            <span className="cms-cat">Pool</span>
            <span className="cms-tier standard">Standard</span>
          </div>
          <div className="cms">
            <span className="cms-cat">Dental</span>
            <span className="cms-tier standard">Standard</span>
          </div>
          <div className="cms special-bg">
            <span className="cms-cat">Roofing</span>
            <span className="cms-tier special">Special</span>
          </div>
        </div>
      </div>

      <div className="card-legend">
        <div className="legend-item"><span className="legend-dot special" />Special — $500</div>
        <div className="legend-item"><span className="legend-dot standard" />Standard — $300</div>
      </div>
    </div>
  );
}
