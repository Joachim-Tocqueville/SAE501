import { Icon } from "@/components/ui/icon";

export function HomeHero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-content">
        <span className="event-pill">
          <span className="event-dot" />
          JPO BUT MMI · Samedi 11 mars
        </span>
        <h1>Découvrez le BUT MMI à l’IUT de Meaux</h1>
        <p className="hero-description">
          Programme en code, design et audiovisuel, visite 360° des locaux,
          itinéraire personnalisé : préparez votre venue au département MMI.
        </p>
        <div className="hero-actions">
          <a className="button button--mint" href="/inscription">
            S’inscrire à la JPO
            <Icon name="arrow" size={14} />
          </a>
          <a className="button button--light" href="/visite-360">
            <Icon name="globe" size={14} />
            Visite virtuelle 360°
          </a>
        </div>
        <div className="hero-stats" aria-label="Chiffres clés de la formation">
          <div>
            <strong>3 ans</strong>
            <span>Bac+3 · BUT</span>
          </div>
          <div>
            <strong>12</strong>
            <span>métiers à visiter</span>
          </div>
          <div>
            <strong>14</strong>
            <span>activités aujourd’hui</span>
          </div>
        </div>
      </div>

      <a className="hero-visual" href="/visite-360" aria-label="Découvrir le studio audiovisuel">
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <div className="studio-label">
          <span className="studio-icon">
            <Icon name="play" size={14} />
          </span>
          <span>
            <strong>Studio audiovisuel</strong>
            <small>Étage 2 · visite 360° · salle 220</small>
          </span>
        </div>
      </a>
    </section>
  );
}
