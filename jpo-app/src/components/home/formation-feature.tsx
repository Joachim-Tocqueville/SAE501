import { LazyVideo } from "@/components/ui/lazy-video";

export function FormationFeature() {
  return (
    <section className="formation-feature" id="formation">
      {/* Vidéo provisoire : remplacez youtubeId par la vraie vidéo de présentation */}
      <LazyVideo
        className="feature-video"
        youtubeId="OU2niH-FJI4"
        poster="/images/etudiants-groupe.jpg"
        title="Le BUT MMI en 2 minutes"
        caption="Le BUT MMI en 2 minutes"
      />
      <div className="feature-copy">
        <span className="eyebrow">BUT MMI · Métiers du multimédia et de l’internet</span>
        <h2>Une formation entre code, design et communication</h2>
        <p>
          Développement web, design, audiovisuel, 3D, communication : en 3 ans,
          les étudiants réalisent des projets concrets pour de vrais clients.
        </p>
        <div className="feature-actions">
          {/* Fichiers dans public/documents/ */}
          <a className="button button--primary" href="/documents/brochure-but-mmi.pdf" download>
            Télécharger la brochure (PDF)
          </a>
          <a className="button button--outline" href="/documents/affiche-jpo-2027.jpg" target="_blank" rel="noopener">
            Voir l’affiche JPO
          </a>
        </div>
      </div>
    </section>
  );
}
