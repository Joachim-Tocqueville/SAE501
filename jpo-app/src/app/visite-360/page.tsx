import type { Metadata } from "next";
import { VirtualVisit } from "@/components/virtual-visit/virtual-visit";

export const metadata: Metadata = {
  title: "Visite 360° | JPO BUT MMI",
  description: "Visite guidée en 8 étapes des locaux du département MMI de l’IUT de Meaux.",
};

// Mise en page de la maquette Figma « D05 · Visite 360° » : la visite démarre directement
export default function VirtualVisitPage() {
  return (
    <section className="container tour-page">
      <h1 className="visually-hidden">Visite virtuelle du département MMI</h1>
      <VirtualVisit />
    </section>
  );
}
