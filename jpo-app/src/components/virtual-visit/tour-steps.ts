/*
 * Étapes de la visite guidée (maquette Figma « D05 · Visite 360° »).
 *
 * ─── Brancher la maquette 3D de l'IUT (Sketchfab) ─────────────────────────
 * 1. Publiez le modèle sur Sketchfab, puis copiez son identifiant :
 *    dans l'adresse https://sketchfab.com/3d-models/iut-meaux-1a2b3c4d5e6f...
 *    c'est la longue suite de lettres/chiffres à la fin (ici 1a2b3c4d5e6f...).
 * 2. Collez-le dans SKETCHFAB_MODEL_ID ci-dessous → la visite affiche la 3D.
 * 3. Dans l'éditeur Sketchfab (Edit 3D settings → Annotations), créez UNE annotation
 *    par étape, DANS LE MÊME ORDRE que la liste ci-dessous (1 = Hall d'accueil,
 *    2 = Studio audiovisuel…). Pour chacune, placez la caméra sur la salle :
 *    Sketchfab enregistre le point de vue, et le site s'y déplace à chaque étape.
 *
 * Tant que SKETCHFAB_MODEL_ID est vide, la visite affiche « image » (photo provisoire)
 * ou un fond dégradé, avec les points d'intérêt placés en % (x, y).
 * ───────────────────────────────────────────────────────────────────────────
 */

// https://sketchfab.com/3d-models/iut--meaux-sae501-805703bf7f944f7f8851a20f54d29eb6
export const SKETCHFAB_MODEL_ID = "805703bf7f944f7f8851a20f54d29eb6";

export type TourHotspot = {
  label: string;
  /** Texte affiché au clic (laisser vide pour un simple libellé) */
  text?: string;
  /** Position sur la photo / le fond, en % (aperçu sans 3D) */
  x: number;
  y: number;
  /** Si vrai, le point mène à l'étape suivante */
  next?: boolean;
};

export type TourStep = {
  id: string;
  name: string;
  /** Lieu court affiché dans la liste */
  place: string;
  /** Lieu détaillé affiché sur la vue */
  location: string;
  description: string;
  /** Pastille jaune « en direct » (optionnelle) */
  live?: string;
  image?: string;
  hotspots: TourHotspot[];
};

// Une étape par annotation Sketchfab, dans le même ordre (1 = Hall d'accueil…).
// Les descriptions sont à compléter / corriger par l'équipe.
export const tourSteps: TourStep[] = [
  {
    id: "hall",
    name: "Hall d’accueil",
    place: "RDC",
    location: "Rez-de-chaussée",
    description:
      "Point de départ de la visite : récupérez le programme de la journée et rencontrez les étudiants qui vous guident.",
    hotspots: [
      { label: "Accueil & programme", text: "Les étudiants vous remettent le plan et le programme.", x: 36, y: 46 },
      { label: "Vers l’amphi Luxembourg →", x: 72, y: 64, next: true },
    ],
  },
  {
    id: "amphi-luxembourg",
    name: "Amphithéâtre Luxembourg",
    place: "Amphithéâtre",
    location: "Amphithéâtre Luxembourg",
    description: "Un des amphithéâtres de l’IUT, où peuvent avoir lieu les présentations de la formation pendant la JPO.",
    hotspots: [
      { label: "Présentations de la formation", x: 44, y: 40 },
      { label: "Vers l’amphi Bossuet →", x: 72, y: 64, next: true },
    ],
  },
  {
    id: "amphi-bossuet",
    name: "Amphithéâtre Bossuet",
    place: "Amphithéâtre",
    location: "Amphithéâtre Bossuet",
    description: "Le second amphithéâtre de la visite, utilisé pour les cours magistraux et les conférences.",
    hotspots: [
      { label: "Cours magistraux", x: 44, y: 40 },
      { label: "Vers la salle 311 →", x: 72, y: 64, next: true },
    ],
  },
  {
    id: "salle-311",
    name: "Salle 311",
    place: "Salle informatique",
    location: "Salle 311 · Salle informatique",
    description:
      "Une salle informatique type des BUT MMI : c’est ici que les étudiants développent, conçoivent et montent leurs projets.",
    image: "/images/salle-311-3d.jpg", // rendu de la maquette 3D (Sketchfab)
    hotspots: [{ label: "Postes de travail", text: "Développement web, design et montage vidéo.", x: 30, y: 58 }],
  },
];
