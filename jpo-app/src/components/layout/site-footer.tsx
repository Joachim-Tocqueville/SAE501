import Link from "next/link";

// Contenu du footer repris de la maquette Figma (D01 · Accueil)
const footerLinks = [
  {
    title: "Accès rapide",
    links: [
      ["Programme", "/programme"],
      ["Visite 360°", "/visite-360"],
      ["S’inscrire", "/inscription"],
      ["Donner mon avis", "/questionnaire"],
    ],
  },
  {
    title: "Informations",
    links: [
      ["Mentions légales", "/informations/mentions-legales"],
      ["Politique de confidentialité (RGPD)", "/informations/confidentialite"],
      ["Gestion des cookies", "/informations/cookies"],
      ["Accessibilité", "/informations/accessibilite"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <strong>JPO · Département MMI</strong>
          <p>
            IUT de Meaux – Université Gustave Eiffel
            <br />
            17 rue Jablinot, 77100 Meaux
          </p>
        </div>
        {footerLinks.map((group) => (
          <nav className="footer-links" key={group.title} aria-label={group.title}>
            <h2>{group.title}</h2>
            {group.links.map(([label, href]) => (
              <Link href={href} key={label}>
                {label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2027 IUT – Université Gustave Eiffel · Projet SAÉ 501 – BUT MMI</span>
        <span className="footer-credits">
          Réalisé par Maxime Monenrat, Rayane Adjaoud, Maïlys Borel et Joachim Toqueville
        </span>
      </div>
    </footer>
  );
}
