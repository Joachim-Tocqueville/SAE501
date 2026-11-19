import { CountUp } from "@/components/ui/count-up";
import { Icon } from "@/components/ui/icon";

export function HomeHero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-content">
        <span className="event-pill">
          <span className="event-dot" />
          JPO BUT MMI · Samedi 30 janvier 2027
        </span>
        <h1>Découvrez le BUT MMI à l’IUT de Meaux</h1>
        <p className="hero-description">
          Programme en direct, visite virtuelle 360° des locaux, itinéraire
          personnalisé : préparez votre venue ou visitez le département depuis
          chez vous.
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
            <strong><CountUp value={3} suffix=" ans" duration={900} /></strong>
            <span>Bac+3 · BUT</span>
          </div>
          <div>
            <strong><CountUp value={12} /></strong>
            <span>salles à visiter</span>
          </div>
          <div>
            <strong><CountUp value={14} /></strong>
            <span>activités aujourd’hui</span>
          </div>
        </div>
      </div>

      {/* Vidéo provisoire, en attendant le contenu définitif */}
      <div className="hero-visual hero-visual--video">
        <iframe
          className="hero-video"
          src="https://www.youtube-nocookie.com/embed/OU2niH-FJI4?autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
