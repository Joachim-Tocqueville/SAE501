import { Icon } from "@/components/ui/icon";
import { PageIntro } from "@/components/ui/page-intro";

const schedule = [
  { time: "09:30", duration: "30 min", title: "Accueil des visiteurs", detail: "Hall principal · Bâtiment A", type: "Accueil" },
  { time: "10:00", duration: "30 min", title: "Présentation du BUT MMI", detail: "Amphithéâtre B · Bâtiment A", type: "Présentation" },
  { time: "10:45", duration: "45 min", title: "Atelier motion design", detail: "Salle 204 · 2e étage", type: "Atelier" },
  { time: "11:45", duration: "30 min", title: "Visite du studio audiovisuel", detail: "Studio · 2e étage", type: "Visite" },
  { time: "14:00", duration: "30 min", title: "Démonstration réalité virtuelle", detail: "Salle 110 · 1er étage", type: "Démo" },
  { time: "15:00", duration: "45 min", title: "Rencontre avec les étudiants", detail: "Espace projets · Bâtiment B", type: "Rencontre" },
];

export default function ProgrammePage() {
  return (
    <>
      <PageIntro
        eyebrow="Samedi · IUT de Meaux"
        title="Le programme de la journée"
        description="Composez votre visite parmi les présentations, ateliers et rencontres proposés tout au long de la journée."
        action={{ label: "Créer mon itinéraire", href: "/itineraire" }}
      />
      <section className="container page-section">
        <header className="section-heading">
          <div>
            <span className="eyebrow">Les temps forts</span>
            <h2>Activités et horaires</h2>
          </div>
          <span className="schedule-note"><Icon name="clock" size={15} /> Horaires indicatifs</span>
        </header>
        <div className="schedule-list">
          {schedule.map((item) => (
            <article className="card schedule-item" key={item.time}>
              <div className="schedule-time">
                <strong>{item.time}</strong>
                <span>{item.duration}</span>
              </div>
              <div className="schedule-copy">
                <span className="schedule-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p><Icon name="pin" size={13} /> {item.detail}</p>
              </div>
              <a className="button button--outline button--small" href="/itineraire">Composer</a>
            </article>
          ))}
        </div>
      </section>
      <section className="container page-section page-section--last">
        <div className="closing-card">
          <div>
            <span className="eyebrow">Préparez votre visite</span>
            <h2>Choisissez les activités qui vous intéressent</h2>
            <p>Créez un parcours personnalisé en quelques clics.</p>
          </div>
          <a className="button button--primary" href="/itineraire">Créer mon itinéraire</a>
        </div>
      </section>
    </>
  );
}
