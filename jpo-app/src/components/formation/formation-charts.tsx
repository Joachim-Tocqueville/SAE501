"use client";

import { useState } from "react";
import type { MouseEvent } from "react";

/*
 * Petits graphiques de la page Formation (données de la brochure BUT MMI de l'IUT).
 * Couleurs validées (contraste et daltonisme) : bleu primaire/500 + turquoise de la charte.
 */
const BLUE = "#4a44b0";
const MINT = "#00a19a";

const hours = [
  { label: "Cours (CM, TD, TP)", value: 2000, color: BLUE },
  { label: "Projets en équipe (SAÉ)", value: 600, color: MINT },
];

const internships = [
  { label: "1re année", min: 4, max: 4 },
  { label: "2e année", min: 8, max: 12 },
  { label: "3e année (formation initiale)", min: 12, max: 16 },
];

type Tip = { x: number; y: number; text: string } | null;

/** « 4 semaines » ou « 8 à 12 semaines » */
const weeksText = (row: { min: number; max: number }) =>
  row.min === row.max ? `${row.min} semaines` : `${row.min} à ${row.max} semaines`;

// Espace insécable normale (l'espace fine par défaut est presque invisible en DM Sans)
const fr = (n: number) => n.toLocaleString("fr-FR").replace(/\u202f/g, "\u00a0");

export function FormationCharts() {
  const [tip, setTip] = useState<Tip>(null);
  const [activeSlice, setActiveSlice] = useState<number | null>(null);

  // L'infobulle suit la souris (coordonnées relatives à la grille des graphiques)
  const showTip = (event: MouseEvent<Element>, text: string) => {
    const grid = (event.currentTarget as Element).closest(".chart-grid") as HTMLElement | null;
    if (!grid) return;
    const box = grid.getBoundingClientRect();
    setTip({ x: event.clientX - box.left, y: event.clientY - box.top, text });
  };
  const hideTip = () => {
    setTip(null);
    setActiveSlice(null);
  };

  // --- Anneau : répartition des heures ---
  const total = hours.reduce((sum, h) => sum + h.value, 0);
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const gap = 4; // espace de 2 px de chaque côté entre les segments
  // Position de départ de chaque segment, calculée à l'avance
  const slices = hours.map((slice, i) => ({
    ...slice,
    length: (slice.value / total) * circumference,
    start: hours.slice(0, i).reduce((sum, h) => sum + (h.value / total) * circumference, 0),
  }));

  // --- Barres : semaines de stage (axe de 0 à 16) ---
  const axisMax = 16;
  const ticks = [0, 4, 8, 12, 16];

  return (
    <div className="chart-grid">
      {/* 1. Répartition des heures */}
      <figure className="chart-card" onMouseLeave={hideTip}>
        <figcaption>
          <strong>Où passe le temps ?</strong>
          <span>Heures encadrées sur les 3 ans</span>
        </figcaption>
        <div className="donut">
          <svg viewBox="0 0 180 180" role="img" aria-label="Répartition : 2 000 heures de cours, 600 heures de projets">
            <circle cx="90" cy="90" r={radius} fill="none" stroke="#eae9f5" strokeWidth="22" />
            {slices.map((slice, i) => (
                <circle
                  key={slice.label}
                  cx="90"
                  cy="90"
                  r={radius}
                  fill="none"
                  stroke={slice.color}
                  strokeWidth={activeSlice === i ? 28 : 22}
                  strokeDasharray={`${Math.max(slice.length - gap, 0)} ${circumference}`}
                  strokeDashoffset={-(slice.start + gap / 2)}
                  strokeLinecap="butt"
                  transform="rotate(-90 90 90)"
                  className="donut__slice"
                  opacity={activeSlice === null || activeSlice === i ? 1 : 0.35}
                  onMouseMove={(event) => {
                    setActiveSlice(i);
                    showTip(event, `${slice.label} : ${fr(slice.value)} h (${Math.round((slice.value / total) * 100)} %)`);
                  }}
                />
            ))}
            <text x="90" y="86" textAnchor="middle" className="donut__total">
              {fr(total)} h
            </text>
            <text x="90" y="106" textAnchor="middle" className="donut__caption">
              encadrées
            </text>
          </svg>
          <ul className="chart-legend">
            {hours.map((slice) => (
              <li key={slice.label}>
                <span className="chart-legend__swatch" style={{ background: slice.color }} />
                <span>{slice.label}</span>
                <strong>
                  {fr(slice.value)} h · {Math.round((slice.value / total) * 100)} %
                </strong>
              </li>
            ))}
          </ul>
        </div>
        <table className="visually-hidden">
          <caption>Répartition des heures encadrées</caption>
          <tbody>
            {hours.map((slice) => (
              <tr key={slice.label}>
                <th scope="row">{slice.label}</th>
                <td>{fr(slice.value)} heures</td>
              </tr>
            ))}
          </tbody>
        </table>
      </figure>

      {/* 2. Semaines de stage */}
      <figure className="chart-card" onMouseLeave={hideTip}>
        <figcaption>
          <strong>Combien de temps en stage ?</strong>
          <span>Durée en semaines</span>
        </figcaption>
        <div
          className="range-chart"
          role="img"
          aria-label={`Stages : ${internships.map((row) => `${row.label}, ${weeksText(row)}`).join(" ; ")}`}
        >
          {internships.map((row) => (
            <div className="range-chart__row" key={row.label}>
              <span className="range-chart__label">{row.label}</span>
              <div
                className="range-chart__track"
                onMouseMove={(event) => showTip(event, `${row.label} : ${weeksText(row)}`)}
              >
                {ticks.map((t) => (
                  <span key={t} className="range-chart__grid" style={{ left: `${(t / axisMax) * 100}%` }} />
                ))}
                {/* durée minimale (pleine) puis marge possible (plus claire) */}
                <span className="range-chart__bar" style={{ width: `${(row.min / axisMax) * 100}%` }} />
                {row.max > row.min && (
                  <span
                    className="range-chart__bar range-chart__bar--range"
                    style={{
                      left: `${(row.min / axisMax) * 100}%`,
                      width: `${((row.max - row.min) / axisMax) * 100}%`,
                    }}
                  />
                )}
                <span className="range-chart__value" style={{ left: `${(row.max / axisMax) * 100}%` }}>
                  {row.min === row.max ? row.min : `${row.min}–${row.max}`} sem.
                </span>
              </div>
            </div>
          ))}
          <div className="range-chart__axis" aria-hidden="true">
            {ticks.map((t) => (
              <span key={t} style={{ left: `${(t / axisMax) * 100}%` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <table className="visually-hidden">
          <caption>Durée des stages</caption>
          <tbody>
            {internships.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{weeksText(row)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </figure>

      {/* 3. Jauge : part de développement en stage de 2e année */}
      <figure className="chart-card chart-card--meter" onMouseLeave={hideTip}>
        <figcaption>
          <strong>Stage de 2e & 3e année</strong>
          <span>Part minimum de missions de développement</span>
        </figcaption>
        <div className="meter">
          <svg viewBox="0 0 200 120" role="img" aria-label="Au moins 50 % de missions de développement">
            <path d="M20 100 A80 80 0 0 1 180 100" stroke="#eae9f5" strokeWidth="20" strokeLinecap="round" fill="none" />
            <path
              d="M20 100 A80 80 0 0 1 100 20"
              stroke={MINT}
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
              className="meter__value"
              onMouseMove={(event) => showTip(event, "Au moins 50 % de développement (obligatoire)")}
            />
            <text x="100" y="92" textAnchor="middle" className="meter__number">
              50 %
            </text>
          </svg>
          <p>
            <strong>Minimum obligatoire</strong> : au moins la moitié des missions du stage portent sur le
            développement.
          </p>
        </div>
      </figure>

      {tip && (
        <div className="chart-tip" role="status" style={{ left: tip.x, top: tip.y }}>
          {tip.text}
        </div>
      )}
    </div>
  );
}
