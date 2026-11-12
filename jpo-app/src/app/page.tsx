import { Activities } from "@/components/home/activities";
import { FeedbackBanner } from "@/components/home/feedback-banner";
import { FormationFeature } from "@/components/home/formation-feature";
import { HomeHero } from "@/components/home/home-hero";
import { VisitOptions } from "@/components/home/visit-options";

export default function Home() {
  return (
    <>
      <HomeHero />
      <VisitOptions />
      <Activities />
      <FormationFeature />
      <FeedbackBanner />
    </>
  );
}