import { RegistrationForm } from "@/components/registration/registration-form";
import { DemoNotice } from "@/components/ui/demo-notice";
import { PageIntro } from "@/components/ui/page-intro";

const visitInfo = [
  ["Date", "Samedi 11 mars"],
  ["Horaires", "De 9 h 30 à 16 h"],
  ["Lieu", "IUT de Meaux · 17 rue Jablinot"],
];

export default function RegistrationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Journée portes ouvertes"
        title="Inscrivez-vous à la JPO"
        description="Indiquez quelques informations pour préparer au mieux votre venue à l’IUT de Meaux."
      />
      <section className="container page-section registration-layout">
        <aside className="registration-aside">
          <span className="eyebrow">Informations pratiques</span>
          <h2>On vous attend !</h2>
          <p>La préinscription nous aide à vous accueillir dans les meilleures conditions.</p>
          <div className="visit-info-list">
            {visitInfo.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <a className="registration-aside__link" href="/itineraire">Voir comment venir →</a>
        </aside>
        <div>
          <RegistrationForm />
          <DemoNotice />
        </div>
      </section>
    </>
  );
}
