import { ItineraryPlanner } from "@/components/itinerary/itinerary-planner";
import { PageIntro } from "@/components/ui/page-intro";

export default function ItineraryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Votre visite, à votre rythme"
        title="Préparez votre itinéraire"
        description="Sélectionnez les activités que vous souhaitez voir : votre parcours se met à jour au fur et à mesure."
      />
      <section className="container page-section page-section--last">
        <ItineraryPlanner />
      </section>
    </>
  );
}
