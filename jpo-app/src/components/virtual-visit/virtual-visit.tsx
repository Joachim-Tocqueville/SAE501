"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";

const spaces = [
  {
    id: "studio",
    label: "Studio audiovisuel",
    detail: "Éclairage, prise de son et tournage vidéo.",
  },
  {
    id: "classroom",
    label: "Salle de cours",
    detail: "Un espace pour apprendre, créer et travailler en équipe.",
  },
  {
    id: "vr",
    label: "Labo réalité virtuelle",
    detail: "Découvrez les expériences immersives imaginées par les étudiants.",
  },
];
type Space = (typeof spaces)[number];

export function VirtualVisit() {
  const [activeSpace, setActiveSpace] = useState<Space>(spaces[0]);

  return (
    <section className="virtual-visit">
      <div className={`panorama panorama--${activeSpace.id}`}>
        <span className="panorama-label">
          <Icon name="globe" size={15} />
          Aperçu de la visite virtuelle
        </span>
        <span className="panorama-hotspot panorama-hotspot--one">+</span>
        <span className="panorama-hotspot panorama-hotspot--two">+</span>
        <div className="panorama-caption">
          <span>ESPACE VISITÉ</span>
          <strong>{activeSpace.label}</strong>
          <p>{activeSpace.detail}</p>
        </div>
      </div>
      <div className="panorama-controls" aria-label="Choisir un espace">
        {spaces.map((space) => (
          <button
            className={
              space.id === activeSpace.id
                ? "panorama-choice is-selected"
                : "panorama-choice"
            }
            key={space.id}
            onClick={() => setActiveSpace(space)}
            type="button"
          >
            <span className={`panorama-thumb panorama-thumb--${space.id}`} />
            <span>{space.label}</span>
            <Icon name="arrow" size={14} />
          </button>
        ))}
      </div>
    </section>
  );
}
