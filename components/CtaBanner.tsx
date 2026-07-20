export default function CtaBanner() {
  return (
    <section className="section alt section-cta" aria-label="Call to action">
      <div className="container">
        <div className="cta-inner">
          <p className="eyebrow">Limited to 12 businesses</p>
          <h2 className="cta-hl">Reserve before your competitor does.</h2>
          <p className="cta-sub">
            Slots are exclusive per category. Once a category is claimed, no other
            business in that trade gets on the card.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a href="#contact" className="btn-primary">Reserve Your Category →</a>
            <a href="#pricing" className="btn-ghost">Review Pricing</a>
          </div>
        </div>
      </div>
    </section>
  );
}
