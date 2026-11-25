"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Icon } from "@/components/ui/icon";
import { SKETCHFAB_MODEL_ID, tourSteps } from "./tour-steps";
import type { TourHotspot } from "./tour-steps";

/**
 * Visite guidée (maquette Figma « D05 · Visite 360° »).
 * - Si SKETCHFAB_MODEL_ID est rempli (tour-steps.ts) : affiche la maquette 3D de l'IUT
 *   hébergée sur Sketchfab ; à chaque étape, la caméra va à l'annotation du même numéro.
 * - Sinon : aperçu avec les photos provisoires.
 */

/** API officielle de Sketchfab (seulement ce qui est utilisé ici) */
type SketchfabApi = {
  start: () => void;
  addEventListener: (event: "viewerready", callback: () => void) => void;
  getAnnotationList: (callback: (error: unknown, annotations: unknown[]) => void) => void;
  gotoAnnotation: (index: number, options?: { preventCameraAnimation?: boolean }) => void;
};
type SketchfabClient = {
  init: (
    uid: string,
    options: Record<string, unknown> & { success: (api: SketchfabApi) => void; error: () => void },
  ) => void;
};
declare global {
  interface Window {
    Sketchfab?: new (iframe: HTMLIFrameElement) => SketchfabClient;
  }
}

const SKETCHFAB_SCRIPT = "https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js";

/** Charge le script Sketchfab une seule fois */
function loadSketchfabScript() {
  if (window.Sketchfab) return Promise.resolve();
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SKETCHFAB_SCRIPT}"]`);
    const script = existing ?? document.createElement("script");
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () => reject(new Error("Sketchfab indisponible")));
    if (!existing) {
      script.src = SKETCHFAB_SCRIPT;
      script.async = true;
      document.head.appendChild(script);
    }
  });
}

const has3D = SKETCHFAB_MODEL_ID.trim() !== "";

export function VirtualVisit() {
  const [index, setIndex] = useState(0);
  const [openHotspot, setOpenHotspot] = useState<number | null>(null);
  const [viewerReady, setViewerReady] = useState(false);
  const [viewerError, setViewerError] = useState(false);
  const [annotationCount, setAnnotationCount] = useState(0);
  const viewerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const apiRef = useRef<SketchfabApi | null>(null);
  const indexRef = useRef(index);

  const step = tourSteps[index];
  const total = tourSteps.length;

  // Démarrage du lecteur Sketchfab
  useEffect(() => {
    if (!has3D || !iframeRef.current) return;
    let cancelled = false;
    const iframe = iframeRef.current;

    loadSketchfabScript()
      .then(() => {
        if (cancelled || !window.Sketchfab) return;
        new window.Sketchfab(iframe).init(SKETCHFAB_MODEL_ID, {
          autostart: 1,
          preload: 1,
          ui_theme: "dark",
          ui_infos: 0,
          ui_inspector: 0,
          ui_settings: 0,
          ui_help: 0,
          ui_controls: 0, // nos propres boutons (étapes, plein écran) remplacent ceux de Sketchfab
          ui_stop: 0,
          ui_annotations: 0, // la liste des étapes du site remplace celle de Sketchfab
          annotation_tooltip_visible: 1,
          success: (api) => {
            apiRef.current = api;
            api.start();
            api.addEventListener("viewerready", () => {
              if (cancelled) return;
              setViewerReady(true);
              api.getAnnotationList((error, annotations) => {
                if (error || cancelled) return;
                setAnnotationCount(annotations.length);
                if (indexRef.current < annotations.length) api.gotoAnnotation(indexRef.current);
              });
            });
          },
          error: () => !cancelled && setViewerError(true),
        });
      })
      .catch(() => !cancelled && setViewerError(true));

    return () => {
      cancelled = true;
      apiRef.current = null;
    };
  }, []);

  // À chaque étape, la caméra va à l'annotation correspondante
  useEffect(() => {
    indexRef.current = index;
    if (viewerReady && index < annotationCount) apiRef.current?.gotoAnnotation(index);
  }, [index, viewerReady, annotationCount]);

  const goTo = (next: number) => {
    setIndex(Math.min(Math.max(next, 0), total - 1));
    setOpenHotspot(null);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return; // ne pas gêner le lecteur 3D
    if (event.key === "ArrowRight") goTo(index + 1);
    if (event.key === "ArrowLeft") goTo(index - 1);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else viewerRef.current?.requestFullscreen?.();
  };

  const renderHotspot = (hotspot: TourHotspot, i: number) => (
    <div
      className={`tour-hotspot${openHotspot === i ? " is-open" : ""}${hotspot.next ? " tour-hotspot--next" : ""}`}
      key={`${step.id}-${hotspot.label}`}
      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
    >
      <button
        type="button"
        onClick={() => (hotspot.next ? goTo(index + 1) : setOpenHotspot(openHotspot === i ? null : i))}
        aria-expanded={hotspot.next ? undefined : openHotspot === i}
      >
        <span className="tour-hotspot__icon">
          <Icon name={hotspot.next ? "chevron" : "info"} size={16} />
        </span>
        <span className="tour-hotspot__label">{hotspot.label}</span>
      </button>
      {hotspot.text && (
        <p className="tour-hotspot__text" role="status">
          {hotspot.text}
        </p>
      )}
    </div>
  );

  return (
    <div className="tour">
      {/* Liste des étapes */}
      <aside className="tour-steps" aria-labelledby="tour-steps-title">
        <h2 id="tour-steps-title">Visite guidée</h2>
        <p>
          {total} étapes · ≈ {total * 2} min
        </p>
        <ol>
          {tourSteps.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                className={i === index ? "is-active" : i < index ? "is-done" : undefined}
                aria-current={i === index ? "step" : undefined}
                onClick={() => goTo(i)}
              >
                <span className="tour-steps__number">{i + 1}</span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.place}</small>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </aside>

      <div className="tour-main">
        {/* Visualiseur : maquette 3D Sketchfab ou aperçu photo */}
        <div
          className={`tour-viewer${has3D ? " is-3d" : ""}`}
          ref={viewerRef}
          tabIndex={0}
          role="region"
          aria-roledescription="visite virtuelle"
          aria-label={`${step.name}, étape ${index + 1} sur ${total}. Flèches gauche et droite pour changer d’étape.`}
          onKeyDown={handleKeyDown}
        >
          {has3D ? (
            <iframe
              ref={iframeRef}
              className={`tour-sketchfab${viewerReady ? " is-ready" : ""}`}
              title="Maquette 3D de l’IUT de Meaux"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
            />
          ) : (
            <div className="tour-preview" key={step.id}>
              {step.image ? <img src={step.image} alt="" /> : <span className="tour-preview__glow" />}
              {step.hotspots.map((hotspot, i) => renderHotspot(hotspot, i))}
            </div>
          )}

          <div className="tour-badge">
            <strong>{step.name}</strong>
            <span>{step.location}</span>
          </div>

          <div className="tour-tools">
            <Link className="tour-tool" href="/itineraire" aria-label="Voir le plan et mon itinéraire" title="Plan">
              <Icon name="map" size={18} />
            </Link>
            <button className="tour-tool" type="button" onClick={toggleFullscreen} aria-label="Plein écran" title="Plein écran">
              <Icon name="expand" size={18} />
            </button>
          </div>

          {has3D && !viewerReady && (
            <p className="tour-loading" role="status">
              {viewerError ? "La maquette 3D n’a pas pu se charger." : "Chargement de la maquette 3D…"}
            </p>
          )}

          {!has3D && (
            <p className="tour-notice">
              <Icon name="cube" size={14} />
              Aperçu photo · la maquette 3D de l’IUT s’affichera ici
            </p>
          )}

          <nav className="tour-nav" aria-label="Étapes de la visite">
            <button
              className="button button--outline"
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
            >
              <Icon name="arrowLeft" size={16} />
              Précédent
            </button>
            <span className="tour-nav__count" aria-live="polite">
              Étape {index + 1} / {total}
            </span>
            <button
              className="button button--primary"
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={index === total - 1}
            >
              <Icon name="chevron" size={16} />
              Suivant
            </button>
          </nav>
        </div>

        {/* Fiche de l'espace + appel à l'action */}
        <div className="tour-details">
          <article className="card tour-info" key={step.id}>
            <div className="tour-info__tags">
              <span className="tour-tag tour-tag--mint">Visite 360°</span>
              {step.live && (
                <span className="tour-tag tour-tag--live">
                  <span />
                  {step.live}
                </span>
              )}
            </div>
            <h2>{step.name}</h2>
            <p>{step.description}</p>
          </article>

          <aside className="card tour-cta">
            <h2>Envie de la voir en vrai ?</h2>
            <Link className="button button--mint" href="/itineraire">
              <Icon name="plus" size={16} />
              Ajouter à mon itinéraire
            </Link>
            <Link className="button button--outline" href="/programme">
              <Icon name="calendar" size={16} />
              Activités dans cette salle
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
