"use client";

import { useEffect, useRef, useState } from "react";
import { SLOTS, openCount } from "@/lib/slots";

function scrollToForm() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function SlotGrid() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [today, setToday] = useState("");

  // Set the "updated" date on the client (avoids server/client mismatch).
  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    );
  }, []);

  // Staggered entrance via IntersectionObserver.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll<HTMLElement>(".slot-card"));

    if (!("IntersectionObserver" in window)) {
      cards.forEach((c) => c.classList.add("visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            // Drop the stagger delay once shown so hover feels instant.
            const el = e.target as HTMLElement;
            window.setTimeout(() => { el.style.transitionDelay = "0s"; }, 900);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const open = openCount();

  return (
    <section className="section alt" id="placements" aria-labelledby="slots-hl">
      <div className="container">
        <div className="slots-header">
          <div>
            <p className="eyebrow">Available placements</p>
            <h2 className="slots-hl" id="slots-hl">12 categories. One per business.</h2>
          </div>
          <div className="slots-meta">
            <em>{open}</em> of 12 open<br />
            Updated {today || "—"}
          </div>
        </div>

        <div className="slot-grid" ref={gridRef} role="list">
          {SLOTS.map((slot, idx) => {
            const tierLabel = slot.tier === "special" ? "Special Slot" : "Standard Slot";
            const tierClass = slot.tier === "special" ? "stp-special" : "stp-standard";
            const isOpen = slot.status === "open";
            const statusLabel = isOpen
              ? "Open"
              : `Claimed · ${slot.businessName || "Reserved"}`;
            const ariaLabel = `${slot.category} — ${tierLabel} — ${
              isOpen ? "Available at " + slot.price : "Claimed by " + slot.businessName
            }`;

            return (
              <div
                key={slot.category}
                className={`slot-card ${slot.status}`}
                data-tier={slot.tier}
                role="listitem"
                tabIndex={isOpen ? 0 : -1}
                aria-label={ariaLabel}
                style={{ transitionDelay: `${Math.min(idx * 0.07, 0.42)}s` }}
                onClick={isOpen ? scrollToForm : undefined}
                onKeyDown={
                  isOpen
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          scrollToForm();
                        }
                      }
                    : undefined
                }
              >
                <div className={`slot-tier-pill ${tierClass}`}>
                  <span className="slot-tier-pip" />
                  {tierLabel}
                </div>
                <div className="slot-category">{slot.category}</div>
                <p className="slot-description">{slot.description}</p>
                <div className="slot-foot">
                  <span className={`slot-status ${slot.status}`}>{statusLabel}</span>
                  <span className="slot-price">{isOpen ? slot.price : "—"}</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="slots-caption">
          Click any open slot to reserve it — one business per category, no exceptions.
        </p>
      </div>
    </section>
  );
}
