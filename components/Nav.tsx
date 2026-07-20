"use client";

import { useEffect, useState } from "react";
import { BRAND } from "@/lib/market";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-brand">
        <a href="#top" className="nav-brand-name" aria-label={`${BRAND.name} — home`}>
          {BRAND.name}
        </a>
        <a
          href={BRAND.operatorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-brand-sub"
        >
          by {BRAND.operator}
        </a>
      </div>
      <nav className="nav-links" aria-label="Primary">
        <a href="#placements" className="nav-link">Placements</a>
        <a href="#pricing" className="nav-link">Pricing</a>
        <a href="#faq" className="nav-link">FAQ</a>
        <a href="#contact" className="nav-cta">Reserve a Slot</a>
      </nav>
    </header>
  );
}
