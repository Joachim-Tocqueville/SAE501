import Link from "next/link";

const footerLinks = [
  {
    title: "Accès rapide",
    links: [
      ["Programme", "/programme"],
      ["Visite 360°", "/visite-360"],
      ["S’inscrire", "/inscription"],
      ["Préparer ma visite", "/itineraire"],
    ],
  },
  {
    title: "Informations",
    links: [
      ["Plan du campus", "/itineraire"],
      ["Infos pratiques", "/itineraire"],
      ["Formation", "/formation"],
      ["Questionnaire", "/questionnaire"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <strong>IUT · Département MMI</strong>
          <p>
            IUT de Meaux · Université Gustave Eiffel
            <br />
            17 rue Jablinot, 77100 Meaux
          </p>
        </div>
        {footerLinks.map((group) => (
          <div className="footer-links" key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map(([label, href]) => (
              <Link href={href} key={label}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2025 IUT · Université Gustave Eiffel · Projet SAE S2 · BUT MMI</span>
        <Link href="/">Retour en haut ↑</Link>
      </div>
    </footer>
  );
}
