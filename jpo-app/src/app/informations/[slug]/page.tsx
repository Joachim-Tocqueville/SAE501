import { notFound } from "next/navigation";
import { PageIntro } from "@/components/ui/page-intro";

/*
 * Pages d'informations liées depuis le footer (maquette Figma).
 * Contenu de base à faire valider / compléter avant la mise en ligne.
 */
const pages = {
  "mentions-legales": {
    title: "Mentions légales",
    intro: "Informations sur l’éditeur et l’hébergement du site de la JPO du département MMI.",
    sections: [
      ["Éditeur", "IUT de Meaux – Université Gustave Eiffel, département MMI, 17 rue Jablinot, 77100 Meaux. Site réalisé dans le cadre de la SAÉ 501 du BUT MMI."],
      ["Hébergement", "À compléter : nom, adresse et contact de l’hébergeur du site."],
      ["Propriété intellectuelle", "Les textes, logos et visuels de ce site appartiennent au département MMI ou à leurs auteurs. Les photos provisoires proviennent d’Unsplash (licence libre)."],
    ],
  },
  confidentialite: {
    title: "Politique de confidentialité (RGPD)",
    intro: "Comment sont utilisées les informations que vous nous confiez lors de l’inscription et du questionnaire.",
    sections: [
      ["Données collectées", "Nom, prénom, adresse e-mail et réponses au questionnaire, uniquement lorsque vous les saisissez vous-même."],
      ["Utilisation", "Ces données servent à organiser la journée portes ouvertes et à l’améliorer. Elles ne sont ni vendues ni cédées."],
      ["Vos droits", "Vous pouvez demander l’accès, la modification ou la suppression de vos données en contactant le département MMI (contact à compléter)."],
    ],
  },
  cookies: {
    title: "Gestion des cookies",
    intro: "Ce que le site enregistre sur votre appareil.",
    sections: [
      ["Cookies du site", "Le site n’utilise pas de cookies publicitaires ni de mesure d’audience."],
      ["Vidéos YouTube", "Les vidéos YouTube sont intégrées en mode « confidentialité renforcée » (youtube-nocookie.com)."],
    ],
  },
  accessibilite: {
    title: "Accessibilité",
    intro: "Nous voulons que la JPO soit accessible à toutes et à tous, en ligne comme sur place.",
    sections: [
      ["Sur le site", "Navigation au clavier, textes alternatifs, contrastes de la charte et respect du réglage « réduire les animations » de votre appareil."],
      ["Sur place", "À compléter : accessibilité des bâtiments (accès PMR, ascenseurs). Signalez vos besoins lors de l’inscription pour que nous puissions vous accueillir au mieux."],
      ["Un problème ?", "Si un contenu vous est inaccessible, contactez le département MMI (contact à compléter)."],
    ],
  },
} as const;

type Slug = keyof typeof pages;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as Slug];
  return { title: page ? `${page.title} | JPO BUT MMI` : "JPO BUT MMI" };
}

export default async function InformationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) notFound();

  return (
    <>
      <PageIntro eyebrow="Informations" title={page.title} description={page.intro} />
      <section className="container page-section page-section--last">
        <div className="info-page">
          {page.sections.map(([heading, text]) => (
            <article className="card info-page__block" key={heading}>
              <h2>{heading}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
