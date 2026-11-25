import { Icon } from "@/components/ui/icon";

const visitCards = [
  {
    icon: "calendar",
    title: "Programme de la journée",
    description:
      "Présentations, ateliers, échanges : suivez ce qui se passe en direct, salle par salle.",
    link: "Voir le programme",
    href: "/programme",
    tone: "purple",
  },
  {
    icon: "globe",
    title: "Visite virtuelle 360°",
    description:
      "Parcourez les salles, le studio et le labo VR, même si vous ne pouvez pas venir sur place.",
    link: "Lancer la visite",
    href: "/visite-360",
    tone: "mint",
  },
  {
    icon: "map",
    title: "Mon itinéraire",
    description:
      "Choisissez les activités qui vous intéressent et calculez votre parcours.",
    link: "Créer mon itinéraire",
    href: "#infos-pratiques",
    tone: "purple",
  },
] as const;

export function VisitOptions() {
  return (
    <section className="container section visit-section" id="programme">
      <header className="section-heading">
        <div>
          <span className="eyebrow">Votre visite</span>
          <h2>Tout pour profiter de la JPO</h2>
        </div>
      </header>
      <div className="visit-grid">
        {visitCards.map((card) => (
          <article className="card visit-card" key={card.title}>
            <span className={`icon-badge icon-badge--${card.tone}`}>
              <Icon name={card.icon} size={17} />
            </span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a className="text-link" href={card.href}>
              {card.link}
              <Icon name="arrow" size={13} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
