"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  /** Durée de l'animation en millisecondes */
  duration?: number;
};

/**
 * Nombre qui défile de 0 jusqu'à sa valeur quand il devient visible.
 * Sans JavaScript ou avec « réduire les animations », la valeur finale s'affiche directement.
 */
export function CountUp({ value, suffix = "", duration = 1200 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      setDisplay(0);
      frame = requestAnimationFrame(tick);
    });
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {/* espace insécable normale : l'espace fine par défaut est presque invisible en DM Sans */}
      {display.toLocaleString("fr-FR").replace(/\u202f/g, "\u00a0")}
      {suffix}
    </span>
  );
}
