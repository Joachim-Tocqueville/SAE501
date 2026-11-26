import Link from "next/link";
import { FormationCharts } from "@/components/formation/formation-charts";
import { SkillCards, type Skill } from "@/components/formation/skill-cards";
import { CountUp } from "@/components/ui/count-up";
import { Mascot } from "@/components/ui/mascot";
import { YearCarousel } from "@/components/formation/year-carousel";
import { Icon } from "@/components/ui/icon";
import { PageIntro } from "@/components/ui/page-intro";

// Les 3 domaines : un clic sur une carte ouvre les projets réellement menés par les étudiants
const skills: Skill[] = [
  {
    number: "01",
    title: "Développer",
    description: "Créer des sites, applications et expériences numériques accessibles.",
    image: "/images/developper-code.jpg",
    projects: [
      {
        title: "Le site de la JPO",
        tag: "SAÉ 501",
        text: "Application web en Next.js : programme de la journée, inscription, itinéraire et visite 360°. Vous êtes dessus !",
      },
      {
        title: "L’API des inscriptions",
        tag: "SAÉ 501",
        text: "Back-end en Java Spring Boot relié à une base de données MariaDB, pour enregistrer les inscriptions et les réponses au questionnaire.",
      },
    ],
  },
  {
    number: "02",
    title: "Concevoir",
    description: "Imaginer des interfaces, des identités visuelles et des contenus multimédias.",
    image: "/images/concevoir-maquette.jpg",
    projects: [
      {
        title: "La charte graphique et le logo MMI",
        tag: "SAÉ 501",
        text: "Couleurs, typographie, composants et plusieurs pistes de logo pour le département, réalisés dans Figma.",
      },
      {
        title: "Les maquettes du site",
        tag: "SAÉ 501",
        text: "Écrans mobile et desktop pour les visiteurs, et un back-office pour les administrateurs, conçus avant le développement.",
      },
    ],
  },
  {
    number: "03",
    title: "3D",
    description: "Modéliser des espaces et créer des expériences immersives et interactives.",
    image: "/images/salle-311-3d.jpg",
    projects: [
      {
        title: "Le circuit des 24 Heures du Mans",
        tag: "SAÉ 401",
        text: "Un globe satellite interactif : on clique sur Le Mans pour plonger au cœur du circuit en 3D.",
        image: "/images/projet-24h-du-mans.jpg",
        links: [{ label: "Visiter le site", href: "https://sae401-circuit-24h-du-mans.vercel.app/", external: true }],
      },
      {
        title: "L’IUT en 3D",
        tag: "SAÉ 501",
        text: "Maquette de l’IUT modélisée dans Blender et publiée sur Sketchfab, au cœur de notre visite virtuelle.",
        image: "/images/salle-311-3d.jpg",
        links: [
          { label: "Lancer la visite", href: "/visite-360" },
          {
            label: "Voir sur Sketchfab",
            href: "https://sketchfab.com/3d-models/iut--meaux-sae501-805703bf7f944f7f8851a20f54d29eb6",
            external: true,
          },
        ],
      },
    ],
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

/*
 * Contenu tiré de sources officielles : brochure BUT MMI de l'IUT (heures, stages, Québec, salle VR),
 * fiche RNCP 35502 (5 compétences), fiche ONISEP du parcours (métiers) et programmes du parcours
 * DWeb-DI d'autres IUT. Les intitulés exacts des cours de l'IUT de Meaux sont à faire valider.
 */
// Chiffres clés affichés dans le bandeau bleu (les nombres défilent à l'arrivée sur la page)
// « hint » = explication affichée au survol du petit « ? »
const keyFigures: { value?: number; suffix?: string; text?: string; label: string; hint?: string }[] = [
  {
    value: 3,
    suffix: " ans",
    label: "Bac+3 · niveau 6 (RNCP)",
    hint: "Le RNCP est le répertoire officiel qui classe les diplômes français par niveau, de 3 (CAP) à 8 (doctorat). Le niveau 6 correspond à un bac+3, comme une licence.",
  },
  {
    value: 180,
    label: "crédits ECTS · 60 par année",
    hint: "Ce ne sont pas des notes : ce sont des points obtenus quand on valide une partie de la formation. 30 par semestre, 60 par an, 180 pour le diplôme. Ils sont reconnus dans toute l’Europe, pour continuer ses études ou partir à l’étranger.",
  },
  { value: 2000, suffix: " h", label: "de cours (CM, TD, TP)" },
  { value: 600, suffix: " h", label: "de projets en équipe (SAÉ)" },
  // 4 sem. (1re année) + 8 à 12 sem. (2e année) + 12 à 16 sem. (3e année)
  { text: "24 à 32", label: "semaines de stage en 3 ans" },
];

const years = [
  {
    year: "1re année",
    tag: "Parcours Développement web et dispositifs interactifs",
    title: "Découvrir les métiers et acquérir les bases",
    text: "À Meaux, on entre directement dans le parcours Développement web et dispositifs interactifs : on acquiert les bases du web, du graphisme et de l’audiovisuel, avec une large place pour le code.",
    subjects: [
      "Intégration web (HTML, CSS)",
      "Développement web (JavaScript)",
      "Production graphique",
      "Audio et vidéo",
      "Écriture multimédia et narration",
      "Ergonomie et accessibilité",
      "Culture numérique",
      "Stratégies de communication",
      "Gestion de projet",
      "Anglais",
    ],
    extras: ["Stage de 4 semaines"],
  },
  {
    year: "2e année",
    tag: "Parcours Développement web et dispositifs interactifs",
    title: "Se spécialiser dans le développement web",
    text: "On approfondit le code côté front et back, et on découvre les dispositifs interactifs : 3D, réalité virtuelle et objets connectés.",
    subjects: [
      "Développement front-end",
      "Développement back-end",
      "Bases de données",
      "Frameworks web",
      "Dispositifs interactifs (3D, réalité virtuelle)",
      "Objets connectés",
      "UX et accessibilité",
      "Gestion de projet",
      "Anglais",
    ],
    extras: [
      "Stage de 8 à 12 semaines, avec au moins 50 % de missions de développement (obligatoire)",
      "Semestre 4 possible au Québec (sur dossier)",
    ],
  },
  {
    year: "3e année",
    tag: "Alternance ou formation initiale",
    title: "Réaliser des projets professionnels",
    text: "La dernière année se fait au choix en alternance, en entreprise, ou en formation initiale avec un long stage.",
    subjects: [
      "Développement web avancé",
      "Dispositifs interactifs",
      "Hébergement et cybersécurité",
      "Projet : concevoir un dispositif interactif",
      "Portfolio",
      "Entrepreneuriat et veille",
    ],
    extras: ["Stage de 12 à 16 semaines en formation initiale"],
  },
];

// Les 5 compétences officielles du BUT MMI (fiche RNCP 35502)
const competences = [
  { name: "Comprendre", text: "les écosystèmes, les besoins des utilisateurs et les dispositifs de communication numérique." },
  { name: "Concevoir", text: "une réponse stratégique pertinente à une problématique complexe." },
  { name: "Exprimer", text: "un message avec les médias numériques pour informer et communiquer." },
  { name: "Développer", text: "pour le web et les médias numériques.", highlight: true },
  { name: "Entreprendre", text: "dans le secteur du numérique." },
];

const careers = [
  "Intégrateur ou intégratrice web",
  "Développeur front-end, back-end ou full stack",
  "Intégrateur de dispositifs de réalité virtuelle",
];

const studies = [
  "Écoles du multimédia",
  "Écoles d’ingénieurs en admission parallèle (ESIEE, IMAC…)",
  "Masters à l’université (bac+5)",
];

export default function FormationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Le BUT MMI à Meaux"
        title="Une formation qui relie créativité et numérique"
        description="Le BUT Métiers du Multimédia et de l’Internet forme en trois ans des profils capables de concevoir et réaliser des projets multimédias. À Meaux, la spécialisation porte sur le développement web et les dispositifs interactifs."
        action={{ label: "Découvrir le programme", href: "/programme" }}
        illustration={<Mascot variant="laptop" />}
      >
        <dl className="intro-figures" aria-label="Le BUT MMI en chiffres">
          {keyFigures.map((figure) => (
            <div className="intro-figure" key={figure.label}>
              <dt>
                {figure.label}
                {figure.hint && (
                  <span className="figure-hint">
                    <button type="button" className="figure-hint__button" aria-label="Qu’est-ce que c’est ?">
                      ?
                    </button>
                    <span className="figure-hint__text" role="tooltip">
                      {figure.hint}
                    </span>
                  </span>
                )}
              </dt>
              <dd>
                {figure.value !== undefined ? <CountUp value={figure.value} suffix={figure.suffix} /> : figure.text}
              </dd>
            </div>
          ))}
        </dl>
      </PageIntro>
      <section className="container page-section">
        <header className="section-heading">
          <div>
            <span className="eyebrow">Les compétences</span>
            <h2>Trois domaines, un même projet</h2>
          </div>
        </header>
        <SkillCards skills={skills} />
      </section>
      <section className="page-band">
        <div className="container">
          <span className="eyebrow">Année par année</span>
          <h2>Trois années pour passer de l’idée au projet</h2>
          <YearCarousel years={years} />
        </div>
      </section>
      <section className="container page-section">
        <header className="section-heading">
          <div>
            <span className="eyebrow">En chiffres</span>
            <h2>La formation en un coup d’œil</h2>
          </div>
        </header>
        <FormationCharts />
      </section>
      <section className="container page-section">
        <header className="section-heading section-heading--mascot">
          <div>
            <span className="eyebrow">Le référentiel national</span>
            <h2>Les 5 compétences du BUT MMI</h2>
          </div>
          <Mascot variant="vr" className="section-mascot" />
        </header>
        <ol className="competence-grid">
          {competences.map((item, index) => (
            <li className={`competence${item.highlight ? " competence--highlight" : ""}`} key={item.name}>
              <span className="competence__number">{index + 1}</span>
              <strong>{item.name}</strong>
              <p>{item.text}</p>
              {item.highlight && <span className="competence__badge">Au cœur du parcours</span>}
            </li>
          ))}
        </ol>
      </section>
      <section className="container page-section">
        <header className="section-heading section-heading--mascot">
          <div>
            <span className="eyebrow">Et après ?</span>
            <h2>Métiers et poursuites d’études</h2>
          </div>
          <Mascot variant="graduate" className="section-mascot" />
        </header>
        <div className="outlook-grid">
          <article className="card outlook-card">
            <span className="icon-badge icon-badge--purple">
              <Icon name="arrow" size={17} />
            </span>
            <h3>Les métiers visés</h3>
            <ul>
              {careers.map((career) => (
                <li key={career}>{career}</li>
              ))}
            </ul>
            <p>En agence web ou de communication, en start-up, en entreprise de services numériques ou au service communication d’une organisation.</p>
          </article>
          <article className="card outlook-card">
            <span className="icon-badge icon-badge--mint">
              <Icon name="globe" size={17} />
            </span>
            <h3>Les poursuites d’études</h3>
            <ul>
              {studies.map((study) => (
                <li key={study}>{study}</li>
              ))}
            </ul>
            <p>Le BUT confère le grade de licence : il ouvre l’accès aux formations de niveau bac+5.</p>
          </article>
        </div>
      </section>
      <section className="container page-section">
        <header className="section-heading">
          <div>
            <span className="eyebrow">En images</span>
            <h2>La vie au département</h2>
          </div>
        </header>
        <div className="gallery">
          {gallery.map((photo) => (
            <figure className="gallery-item" key={photo.src}>
              <img src={photo.src} alt={photo.caption} loading="lazy" />
              <figcaption>
                <strong>{photo.caption}</strong>
                <span>{photo.detail}</span>
              </figcaption>
            </figure>
          ))}
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
