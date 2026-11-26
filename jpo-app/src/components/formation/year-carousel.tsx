"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import { Icon } from "@/components/ui/icon";

export type YearSlide = {
  year: string;
  tag: string;
  title: string;
  text: string;
  subjects: string[];
  extras: string[];
};

export function YearCarousel({ years }: { years: YearSlide[] }) {
  const [index, setIndex] = useState(0);
  const dragStart = useRef<number | null>(null);
  const last = years.length - 1;

  const goTo = (next: number) => setIndex(Math.min(Math.max(next, 0), last));

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") goTo(index + 1);
    if (event.key === "ArrowLeft") goTo(index - 1);
  };

  // Glisser au doigt / à la souris : plus de 50 px = année suivante ou précédente
  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragStart.current = event.clientX;
  };
  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const delta = event.clientX - dragStart.current;
    dragStart.current = null;
    if (delta < -50) goTo(index + 1);
    if (delta > 50) goTo(index - 1);
  };

  return (
    <div className="year-carousel" onKeyDown={handleKeyDown}>
      {/* Frise des années */}
      <div className="year-steps" role="tablist" aria-label="Choisir une année">
        <span className="year-steps__line" aria-hidden="true">
          <span style={{ width: `${(index / Math.max(last, 1)) * 100}%` }} />
        </span>
        {years.map((item, i) => (
          <button
            key={item.year}
            type="button"
            role="tab"
            id={`year-tab-${i}`}
            aria-selected={i === index}
            aria-controls={`year-panel-${i}`}
            className={`year-step${i === index ? " is-active" : ""}${i < index ? " is-done" : ""}`}
            onClick={() => goTo(i)}
          >
            <span className="year-step__dot">{i + 1}</span>
            <span className="year-step__label">{item.year}</span>
          </button>
        ))}
      </div>

      {/* Diapositives */}
      <div
        className="year-viewport"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => (dragStart.current = null)}
      >
        <div className="year-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {years.map((item, i) => (
            <article
              key={item.year}
              id={`year-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`year-tab-${i}`}
              aria-hidden={i !== index}
              inert={i !== index}
              className={`year-slide${i === index ? " is-active" : ""}`}
            >
              <div className="year-slide__intro">
                <span className="year-slide__big" aria-hidden="true">
                  {i + 1}
                  <small>{i === 0 ? "re" : "e"}</small>
                </span>
                <span className="year-card__tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.extras.length > 0 && (
                  <ul className="year-card__extras">
                    {item.extras.map((extra) => (
                      <li key={extra}>
                        <Icon name="calendar" size={14} />
                        {extra}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="year-slide__program">
                <h4>Au programme</h4>
                <ul className="chip-list">
                  {item.subjects.map((subject, s) => (
                    <li key={subject} style={{ animationDelay: `${s * 50}ms` }}>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="year-controls">
        <button
          type="button"
          className="year-arrow"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Année précédente"
        >
          <Icon name="arrowLeft" size={18} />
        </button>
        <span className="year-controls__count" aria-live="polite">
          {years[index].year} · {index + 1} / {years.length}
        </span>
        <button
          type="button"
          className="year-arrow"
          onClick={() => goTo(index + 1)}
          disabled={index === last}
          aria-label="Année suivante"
        >
          <Icon name="arrow" size={18} />
        </button>
      </div>
    </div>
  );
}
