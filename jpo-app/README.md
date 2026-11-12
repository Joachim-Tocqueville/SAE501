# JPO BUT MMI — IUT de Meaux

Site de présentation de la journée portes ouvertes du BUT Métiers du Multimédia et de l’Internet, réalisé avec Next.js, React, TypeScript et du CSS classique.

## Démarrer le projet

Depuis le dossier `jpo-app` :

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

## Organisation du code

```text
src/
├── app/                    # Routes et layouts Next.js (App Router)
├── components/
│   ├── home/               # Composants utilisés par la page d’accueil
│   ├── itinerary/          # Composition d’itinéraire
│   ├── layout/             # En-tête et pied de page partagés
│   ├── questionnaire/      # Formulaire de questionnaire
│   ├── registration/       # Formulaire d’inscription
│   ├── ui/                 # Composants simples réutilisables
│   └── virtual-visit/      # Visite virtuelle
└── styles/                 # Styles globaux, accueil et autres pages
```

Les pages restent dans `src/app` afin que Next.js crée automatiquement leurs URL. Les composants partagés vont dans `components/ui` ou `components/layout`. Un composant propre à une fonctionnalité est rangé dans le dossier correspondant.

Les formulaires et aperçus interactifs sont actuellement des maquettes côté navigateur. Ils ne transmettent ni n’enregistrent de données.

## Vérifications

```bash
npm run lint
npm run build
```
