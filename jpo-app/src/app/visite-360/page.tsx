import { PageIntro } from "@/components/ui/page-intro";
import { VirtualVisit } from "@/components/virtual-visit/virtual-visit";

export default function VirtualVisitPage() {
  return (
    <>
      <PageIntro
        eyebrow="Explorez les locaux"
        title="Visitez le département en 360°"
        description="Faites un premier tour des espaces du BUT MMI et découvrez les lieux où prennent vie les projets."
      />
      <section className="container page-section">
        <header className="section-heading">
          <div>
            <span className="eyebrow">Visite virtuelle</span>
            <h2>Choisissez un espace à découvrir</h2>
          </div>
          <span className="visit-status"><span /> Aperçu interactif</span>
        </header>
        <VirtualVisit />
      </section>
      <section className="container page-section page-section--last">
        <div className="closing-card">
          <div>
            <span className="eyebrow">À bientôt à Meaux</span>
            <h2>Envie de voir ces espaces en vrai ?</h2>
            <p>Retrouvez les horaires des visites et préparez votre parcours.</p>
          </div>
          <a className="button button--primary" href="/programme">Consulter le programme</a>
        </div>
      </section>
    </>
  );
}
