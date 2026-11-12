import { Icon } from "@/components/ui/icon";

export function FeedbackBanner() {
  return (
    <section className="container feedback-section" id="infos-pratiques">
      <div className="feedback-banner">
        <div>
          <h2>Vous avez visité le département ?</h2>
          <p>
            Répondez à notre questionnaire en 2 minutes : vos réponses nous
            aident à améliorer la JPO.
          </p>
        </div>
        <a
          className="button button--mint"
          href="/questionnaire"
        >
          Donner mon avis
          <Icon name="arrow" size={14} />
        </a>
      </div>
    </section>
  );
}
