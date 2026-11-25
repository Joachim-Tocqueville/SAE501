import { QuestionnaireForm } from "@/components/questionnaire/questionnaire-form";
import { DemoNotice } from "@/components/ui/demo-notice";
import { PageIntro } from "@/components/ui/page-intro";

export default function QuestionnairePage() {
  return (
    <>
      <PageIntro
        eyebrow="Après votre visite"
        title="Aidez-nous à améliorer la JPO"
        description="Quelques questions rapides pour nous aider à préparer les prochaines portes ouvertes."
      />
      <section className="container page-section page-section--last survey-layout">
        <div className="survey-intro">
          <span className="eyebrow">Votre avis compte</span>
          <h2>Merci d’avoir pris le temps de venir nous rencontrer.</h2>
          <p>Vos retours nous aident à faire évoluer l’accueil, les visites et les ateliers proposés.</p>
          <div className="survey-time"><strong>2 min</strong><span>pour répondre</span></div>
        </div>
        <div>
          <QuestionnaireForm />
          <DemoNotice />
        </div>
      </section>
    </>
  );
}
