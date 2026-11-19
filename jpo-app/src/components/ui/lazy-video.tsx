"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";

type LazyVideoProps = {
  /** Identifiant de la vidéo YouTube (la partie après "embed/" ou "v=") */
  youtubeId: string;
  /** Image affichée avant la lecture (dans public/images) */
  poster: string;
  title: string;
  caption?: string;
  className?: string;
};

/**
 * Lecteur vidéo léger : affiche une image avec un bouton lecture,
 * et ne charge le lecteur YouTube qu'au clic (page plus rapide).
 */
export function LazyVideo({ youtubeId, poster, title, caption, className = "" }: LazyVideoProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={`lazy-video is-playing ${className}`}>
        <iframe
          className="lazy-video__frame"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      className={`lazy-video ${className}`}
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Lire la vidéo : ${title}`}
    >
      <img className="lazy-video__poster" src={poster} alt="" loading="lazy" />
      {/* Bouton + légende centrés ensemble, comme sur la maquette */}
      <span className="lazy-video__content">
        <span className="play-button">
          <Icon name="play" size={20} />
        </span>
        {caption && <span className="video-caption">{caption}</span>}
      </span>
    </button>
  );
}
