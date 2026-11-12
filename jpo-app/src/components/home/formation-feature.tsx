import { Icon } from "@/components/ui/icon";

export function FormationFeature() {
  return (
    <section className="formation-feature" id="formation">
      <a
        className="feature-video"
        href="/visite-360"
        id="visite"
        aria-label="Lancer la présentation vidéo"
      >
        <span className="play-button">
          <Icon name="play" size={20} />
        </span>
        <span className="video-caption">Le BUT MMI en 2 minutes</span>
      </a>
      <div className="feature-copy">
        <span className="eyebrow">BUT MMI · Métiers du multimédia et de l’internet</span>
        <h2>Une formation entre code, design et communication</h2>
        <p>
          Développement web, design, audiovisuel 360° et communication : en 3
          ans, les étudiants réalisent des projets concrets pour de vrais clients.
        </p>
        <div className="feature-actions">
          <a className="button button--primary button--small" href="/formation">
            Consulter la formation
          </a>
          <a className="button button--outline button--small" href="/programme">
            Voir le programme
          </a>
        </div>
      </div>
    </section>
  );
}
