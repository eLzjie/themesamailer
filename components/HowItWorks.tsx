import { MARKET } from "@/lib/market";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "Step 1",
    title: "Reserve your category.",
    body: "Pick your niche from the 12 available slots. One business per category — once it's yours, no competitor can take it.",
  },
  {
    n: "Step 2",
    title: "Send your info.",
    body: "Your business name, logo, offer, and QR destination. That's it. We design the ad — no creative skills needed on your end.",
  },
  {
    n: "Step 3",
    title: "We print and mail.",
    body: `Professional printing, USPS EDDM postage, and full-route delivery to ${MARKET.homes} homes. Handled entirely by us.`,
  },
  {
    n: "Step 4",
    title: "Phones ring.",
    body: "Every home on the route holds your card. Month after month, your name is in the house before they need your service.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how" aria-labelledby="how-hl">
      <div className="container">
        <div className="how-intro">
          <p className="eyebrow">The process</p>
          <h2 className="section-hl" id="how-hl">
            From reservation to mailbox in four steps.
          </h2>
        </div>
        <div className="how-grid">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} className="how-step" delay={i * 0.07}>
              <p className="how-n">{s.n}</p>
              <h3 className="how-title">{s.title}</h3>
              <p className="how-body">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
