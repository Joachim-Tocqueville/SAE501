import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { PageIntro } from "@/components/ui/page-intro";

const skills = [
  {
    number: "01",
    title: "Développer",
    description: "Créer des sites, applications et expériences numériques accessibles.",
    image: "/images/developper-code.jpg",
  },
  {
    number: "02",
    title: "Concevoir",
    description: "Imaginer des interfaces, des identités visuelles et des contenus multimédias.",
    image: "/images/concevoir-maquette.jpg",
  },
  {
    number: "03",
    title: "Communiquer",
    description: "Construire une stratégie de communication et raconter une histoire.",
    image: "/images/communiquer-montage.jpg",
  },
];

/**
 * Vue 360° Google Maps intégrée (lecteur officiel : le crédit de l'auteur reste affiché).
 * heading = direction de départ en degrés (valeur « ya » du lien Google),
 * pitch = inclinaison (0 = horizon, négatif = vers le bas, positif = vers le haut).
 */
const sphere = (photoId: string, heading: number, pitch = 0) =>
  `https://www.google.com/maps/embed?pb=!4v1764000000000!6m8!1m7!1s${photoId}!2m2!1d48.9546!2d2.8776!3f${heading}!4f${pitch}!5f0.78`;

// Galerie sans photos d'étudiants : vues 360° de l'IUT (Google Maps) + des cases d'information (brochure BUT MMI)
type GalleryItem =
  | { kind: "photo"; src: string; caption: string; detail: string; credit?: string; wide?: boolean }
  | { kind: "sphere"; src: string; caption: string; wide?: boolean }
  | { kind: "info"; icon: "globe" | "cube"; title: string; text: string; tone: "mint" | "purple"; href?: string; cta?: string };

const gallery: GalleryItem[] = [
  { kind: "sphere", src: sphere("CAoSF0NJSE0wb2dLRUlDQWdJQ3h6TXZ6OVFF", 200), caption: "Le hall d’accueil", wide: true },
  { kind: "info", icon: "globe", tone: "mint", title: "Salle de réalité virtuelle et augmentée", text: "Un équipement propre au site de Meaux, pour tester et créer des expériences immersives." },
  { kind: "sphere", src: sphere("CAoSFkNJSE0wb2dLRUlDQWdJRFJtOFRxQ2c", 180), caption: "Le studio de tournage" },
  { kind: "sphere", src: sphere("CAoSF0NJSE0wb2dLRUlDQWdJQ3h6S3V3bWdF", 160), caption: "La salle gaming" },
  { kind: "info", icon: "cube", tone: "purple", title: "Visitez l’IUT en 3D", text: "Le hall, les amphis et la salle 311 dans notre maquette.", href: "/visite-360", cta: "Lancer la visite" },
];

const semesters = [
  ["1re année", "Découvrir les métiers et acquérir les fondamentaux"],
  ["2e année", "Choisir un parcours et approfondir ses compétences"],
  ["3e année", "En alternance ou en formation initiale, parcours Développement web et dispositifs interactifs"],
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
              <div className="info-card__media">
                <img src={skill.image} alt="" loading="lazy" />
              </div>
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
      <section className="container page-section">
        <header className="section-heading">
          <div>
            <span className="eyebrow">En images</span>
            <h2>Le campus en images</h2>
          </div>
        </header>
        <div className="gallery">
          {gallery.map((item) =>
            item.kind === "sphere" ? (
              <figure className={`gallery-item gallery-item--sphere${item.wide ? " gallery-item--wide" : ""}`} key={item.src}>
                <iframe
                  src={item.src}
                  title={`Vue 360° : ${item.caption}`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <figcaption>
                  <span className="gallery-sphere__badge">360°</span>
                  <strong>{item.caption}</strong>
                </figcaption>
              </figure>
            ) : item.kind === "photo" ? (
              <figure className={`gallery-item${item.wide ? " gallery-item--wide" : ""}`} key={item.src}>
                <img src={item.src} alt={item.caption} loading="lazy" />
                <figcaption>
                  <strong>{item.caption}</strong>
                  <span>{item.detail}</span>
                  {item.credit && <small>{item.credit}</small>}
                </figcaption>
              </figure>
            ) : (
              <div className={`gallery-item gallery-tile gallery-tile--${item.tone}`} key={item.title}>
                <span className="gallery-tile__icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
                {item.href && (
                  <Link className="gallery-tile__link" href={item.href}>
                    {item.cta}
                    <Icon name="arrow" size={14} />
                  </Link>
                )}
              </div>
            ),
          )}
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
