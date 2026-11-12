import { Icon } from "@/components/ui/icon";

const activities = [
  {
    time: "10:00",
    duration: "30 min",
    tag: "En direct",
    title: "Présentation du BUT MMI & parcours",
    room: "Amphi B · Bâtiment A",
    status: "live",
  },
  {
    time: "10:45",
    duration: "45 min",
    tag: "En direct",
    title: "Atelier motion design",
    room: "Salle 204 · 2e étage",
    status: "live",
  },
  {
    time: "11:30",
    duration: "30 min",
    tag: "À venir",
    title: "Démo réalité virtuelle",
    room: "Salle 110 · 1er étage",
    status: "upcoming",
  },
] as const;

export function Activities() {
  return (
    <section className="container section activities-section">
      <header className="section-heading section-heading--action">
        <div>
          <span className="eyebrow">En ce moment</span>
          <h2>Prochaines activités</h2>
        </div>
        <a className="button button--outline button--small" href="/programme">
          <Icon name="calendar" size={13} />
          Tout le programme
        </a>
      </header>
      <div className="activity-grid">
        {activities.map((activity) => (
          <article className="card activity-card" key={activity.title}>
            <div className="activity-time">
              <strong>{activity.time}</strong>
              <span>{activity.duration}</span>
            </div>
            <div className="activity-info">
              <span className={`activity-tag activity-tag--${activity.status}`}>
                <span />
                {activity.tag}
              </span>
              <h3>{activity.title}</h3>
              <p>
                <Icon name="pin" size={12} />
                {activity.room}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
