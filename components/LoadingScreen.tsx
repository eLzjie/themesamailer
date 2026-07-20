"use client";

import { useEffect, useState } from "react";
import { BRAND } from "@/lib/market";

/**
 * Envelope-opening loader. Plays on every page load / refresh, then fades to
 * reveal the site. Skipped only for prefers-reduced-motion. Not server-rendered
 * (mounted gate), so no-JS users never get a stuck overlay.
 */
export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    setMounted(true);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.documentElement.classList.add("loaded");
      return;
    }

    setShow(true);
    document.body.style.overflow = "hidden";

    const toReveal = window.setTimeout(() => {
      document.documentElement.classList.add("loaded");
      setLeaving(true);
    }, 1950);

    const toRemove = window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2700);

    return () => {
      window.clearTimeout(toReveal);
      window.clearTimeout(toRemove);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted || !show) return null;

  return (
    <div className={`loader${leaving ? " leaving" : ""}`} aria-hidden="true">
      <div className="loader-stage">
        <div className="envelope">
          <div className="env-letter">
            <span>{BRAND.name}</span>
            <small>by {BRAND.operator}</small>
          </div>
          <div className="env-front" />
          <div className="env-flap" />
        </div>
        <p className="loader-cap">Opening your mail…</p>
      </div>
    </div>
  );
}
