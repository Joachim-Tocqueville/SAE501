"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Blocs qui apparaissent en douceur quand on fait défiler la page */
const REVEAL_SELECTOR = [
  ".section-heading",
  ".card",
  ".feature-copy",
  ".formation-feature .lazy-video",
  ".feedback-banner",
  ".closing-card",
  ".year-item",
  ".gallery-item",
  ".tour-details > *",
  ".campus-map",
].join(",");

/**
 * Animation d'apparition au défilement, pour tout le site.
 * Les classes ne sont ajoutées que par JavaScript : sans JS, tout reste visible.
 * Elles sont retirées après l'animation pour ne pas gêner les effets de survol.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    const timers: number[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.classList.add("is-visible");
          const delay = parseInt(el.style.getPropertyValue("--reveal-delay") || "0", 10);
          timers.push(
            window.setTimeout(() => {
              el.classList.remove("reveal", "is-visible");
              el.style.removeProperty("--reveal-delay");
            }, 800 + delay),
          );
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    for (const el of elements) {
      // Petit décalage entre les éléments voisins (cartes d'une même grille)
      const siblings = el.parentElement
        ? Array.from(el.parentElement.children).filter((child) => child.matches(REVEAL_SELECTOR))
        : [];
      const index = Math.min(Math.max(siblings.indexOf(el), 0), 4);
      el.style.setProperty("--reveal-delay", `${index * 90}ms`);
      el.classList.add("reveal");
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
      for (const el of elements) {
        el.classList.remove("reveal", "is-visible");
        el.style.removeProperty("--reveal-delay");
      }
    };
  }, [pathname]);

  return null;
}
