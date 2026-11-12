import { PageIntro } from "@/components/ui/page-intro";

const skills = [
  {
    number: "01",
    title: "Développer",
    description: "Créer des sites, applications et expériences numériques accessibles.",
  },
  {
    number: "02",
    title: "Concevoir",
    description: "Imaginer des interfaces, des identités visuelles et des contenus multimédias.",
  },
  {
    number: "03",
    title: "Communiquer",
    description: "Construire une stratégie de communication et raconter une histoire.",
  },
];

const semesters = [
  ["1re année", "Découvrir les métiers et acquérir les fondamentaux"],
  ["2e année", "Choisir un parcours et approfondir ses compétences"],
  ["3e année", "Réaliser des projets professionnels et se spécialiser"],
];

export default function FormationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Le BUT MMI à Meaux"
        title="Une formation qui relie créativité et numérique"
        description="Le BUT Métiers du Multimédia et de l’Internet forme en trois ans des profils capables de concevoir et réaliser des projets multimédias."
        action={{ label: "Découvrir le programme", href: "/programme" }}
      />
      <section className="container page-section">
        <header className="section-heading">
          <div>
            <span className="eyebrow">Les compétences</span>
            <h2>Trois domaines, un même projet</h2>
          </div>
        </header>
        <div className="info-card-grid">
          {skills.map((skill) => (
            <article className="card info-card" key={skill.number}>
              <span className="info-card__number">{skill.number}</span>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="page-band">
        <div className="container">
          <span className="eyebrow">Votre parcours</span>
          <h2>Trois années pour passer de l’idée au projet</h2>
          <div className="year-list">
            {semesters.map(([year, description]) => (
              <article className="year-item" key={year}>
                <span>{year}</span>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container page-section page-section--last">
        <div className="closing-card">
          <div>
            <span className="eyebrow">Envie d’en savoir plus ?</span>
            <h2>Venez rencontrer l’équipe et les étudiants</h2>
            <p>Consultez les horaires de la journée ou réservez votre venue.</p>
          </div>
          <div className="button-row">
            <a className="button button--primary" href="/programme">Voir le programme</a>
            <a className="button button--outline" href="/inscription">S’inscrire à la JPO</a>
          </div>
        </div>
      </section>
    </>
  );
}
