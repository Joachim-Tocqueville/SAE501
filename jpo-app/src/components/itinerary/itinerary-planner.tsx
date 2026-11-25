"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";

const stops = [
  { id: "welcome", time: "10:00", title: "Accueil et présentation du BUT MMI", place: "Amphithéâtre B", duration: 30 },
  { id: "design", time: "10:45", title: "Atelier motion design", place: "Salle 204 · 2e étage", duration: 45 },
  { id: "studio", time: "11:45", title: "Découverte du studio audiovisuel", place: "Studio · 2e étage", duration: 30 },
  { id: "vr", time: "14:00", title: "Démonstration réalité virtuelle", place: "Salle 110 · 1er étage", duration: 30 },
];

export function ItineraryPlanner() {
  const [selectedStops, setSelectedStops] = useState<string[]>(["welcome", "design"]);
  const selected = stops.filter((stop) => selectedStops.includes(stop.id));
  const totalMinutes = selected.reduce((total, stop) => total + stop.duration, 0);

  function toggleStop(id: string) {
    setSelectedStops((current) =>
      current.includes(id) ? current.filter((stopId) => stopId !== id) : [...current, id],
    );
  }

  return (
    <div className="planner-layout">
      <section className="planner-list" aria-labelledby="planner-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">À vous de choisir</span>
            <h2 id="planner-title">Les activités</h2>
          </div>
          <span className="selection-count">{selected.length} sélectionnée(s)</span>
        </div>
        <div className="planner-stops">
          {stops.map((stop) => (
            <label className="planner-stop card" key={stop.id}>
              <input
                type="checkbox"
                checked={selectedStops.includes(stop.id)}
                onChange={() => toggleStop(stop.id)}
              />
              <span className="planner-stop__time">{stop.time}</span>
              <span className="planner-stop__details">
                <strong>{stop.title}</strong>
                <small>
                  <Icon name="pin" size={12} />
                  {stop.place} · {stop.duration} min
                </small>
              </span>
            </label>
          ))}
        </div>
        <div className="planner-summary">
          <strong>Mon parcours</strong>
          <span>
            {selected.length} activité(s) · {totalMinutes} minutes d’activité
          </span>
          {selected.length === 0 && <small>Ajoutez une activité pour composer votre visite.</small>}
        </div>
      </section>
      <aside className="campus-map" aria-label="Plan indicatif du campus">
        <h2>Plan du campus</h2>
        <p>Repérez les espaces à visiter</p>
        <div className="map-drawing">
          <div className="map-building map-building--a">Bâtiment A</div>
          <div className="map-building map-building--b">Bâtiment B</div>
          <div className="map-path" />
          <span className="map-marker map-marker--one">A</span>
          <span className="map-marker map-marker--two">B</span>
          <span className="map-marker map-marker--three">Entrée</span>
        </div>
        <p className="map-caption">Plan illustratif · suivez la signalétique sur place.</p>
      </aside>
    </div>
  );
}
