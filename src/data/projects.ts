import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "rentease",
    title: "RentEase — Gestion locative simplifiée",
    tagline: "Le SaaS qui fait disparaître la paperasse des propriétaires.",
    description:
      "Plateforme SaaS de gestion locative pour propriétaires et agences immobilières : suivi des loyers, contrats numériques, paiements Mobile Money et tableau de bord financier.",
    longDescription:
      "RentEase répond à un problème concret du marché immobilier africain : la gestion locative reste majoritairement gérée sur papier ou WhatsApp. La plateforme centralise les biens, les locataires, les contrats, les états des lieux et les paiements. Les relances de loyer sont automatisées, les paiements Mobile Money (MTN MoMo, Orange Money) sont rapprochés automatiquement, et les propriétaires disposent d'un tableau de bord financier clair (cash flow, impayés, taux d'occupation). L'architecture multi-tenant permet aux agences de gérer plusieurs portefeuilles avec une isolation totale.",
    category: "SaaS",
    year: 2024,
    role: "Fullstack Engineer & Founder",
    duration: "6 mois",
    tech: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Stripe",
      "Mobile Money APIs",
    ],
    features: [
      "Gestion multi-biens avec galerie photos",
      "Contrats et états des lieux signés électroniquement",
      "Suivi automatique des paiements et relances",
      "Paiement Mobile Money (MTN, Orange) et virement",
      "Messagerie locataire ↔ propriétaire intégrée",
      "Tableau de bord financier (cash flow, impayés)",
      "Notifications email & SMS programmables",
      "Multi-tenant pour les agences immobilières",
    ],
    highlights: [
      { label: "Biens gérés", value: "800+" },
      { label: "Taux d'impayés", value: "-65%" },
      { label: "Temps gagné", value: "12h/sem" },
    ],
    image: "/projects/rentease-cover.jpg",
    links: {
      demo: "https://demo.meli-merveil.dev/rentease",
      github: "https://github.com/bilyos/rentease",
    },
    featured: true,
    status: "Production",
  },
  {
    slug: "fintrack",
    title: "FinTrack — Finances personnelles intelligentes",
    tagline: "Vos comptes, vos budgets, vos objectifs — en un seul endroit.",
    description:
      "Application de finances personnelles avec agrégation bancaire et Mobile Money, catégorisation IA des dépenses, budgets et objectifs d'épargne.",
    longDescription:
      "FinTrack agrège vos comptes bancaires, vos portefeuilles Mobile Money et vos cartes en un seul tableau de bord. L'IA catégorise automatiquement vos transactions, identifie vos abonnements récurrents et détecte les anomalies. Les budgets par catégorie déclenchent des alertes proactives, et les objectifs d'épargne suivent votre progression en temps réel. Visualisations Recharts interactives, export comptable mensuel et application mobile companion incluse.",
    category: "Fintech",
    year: 2024,
    role: "Fullstack Engineer & Founder",
    duration: "4 mois",
    tech: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "OpenAI",
      "Recharts",
      "Open Banking APIs",
    ],
    features: [
      "Agrégation banques + Mobile Money + cartes",
      "Catégorisation IA des transactions",
      "Détection des abonnements et anomalies",
      "Budgets mensuels par catégorie avec alertes",
      "Objectifs d'épargne avec progression visuelle",
      "Visualisations Recharts interactives",
      "Export comptable PDF / Excel mensuel",
      "App mobile companion synchronisée",
    ],
    highlights: [
      { label: "Utilisateurs actifs", value: "2k+" },
      { label: "Transactions/mois", value: "150k+" },
      { label: "Précision IA", value: "94%" },
    ],
    image: "/projects/fintrack-cover.jpg",
    links: {
      demo: "https://demo.meli-merveil.dev/fintrack",
      github: "https://github.com/bilyos/fintrack",
    },
    featured: true,
    status: "Beta",
  },
  {
    slug: "campushub-erp",
    title: "CampusHub — ERP Universitaire",
    tagline: "L'OS de l'université moderne.",
    description:
      "Solution ERP modulaire pour universités : inscriptions, scolarité, notes, emplois du temps, finance et communication.",
    longDescription:
      "CampusHub est un ERP complet pensé pour les universités africaines. Il regroupe en un seul produit les modules d'inscription en ligne, de gestion des emplois du temps, de saisie des notes et bulletins, de scolarité (paiements), de communication étudiant/parent, et un portail enseignant. L'architecture multi-tenant permet à plusieurs établissements d'utiliser la même instance avec isolation totale des données.",
    category: "ERP",
    year: 2023,
    client: "IUC Douala (POC)",
    role: "Lead Fullstack Engineer",
    duration: "6 mois",
    tech: [
      "Vue.js",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Docker",
      "Jenkins",
      "REST API",
      "JWT",
    ],
    features: [
      "Inscription en ligne avec workflow d'approbation",
      "Génération automatique des emplois du temps",
      "Saisie de notes & bulletins PDF",
      "Module scolarité avec paiement échelonné",
      "Portail étudiant / parent / enseignant",
      "Notifications email & SMS",
      "Multi-tenant pour groupes d'écoles",
    ],
    highlights: [
      { label: "Modules", value: "8" },
      { label: "Étudiants gérés", value: "5 000+" },
      { label: "Tenants", value: "Multi" },
    ],
    image: "/projects/campushub-cover.jpg",
    links: {
      github: "https://github.com/bilyos/campushub",
    },
    featured: true,
    status: "MVP",
  },
  {
    slug: "foodly",
    title: "Foodly — Livraison de repas",
    tagline: "Le DoorDash de l'Afrique centrale.",
    description:
      "Application de commande et livraison de repas avec tracking temps réel, multi-restaurants et paiement Mobile Money.",
    longDescription:
      "Foodly est une plateforme de food delivery couvrant la zone CEMAC, avec interface client, interface restaurant et application livreur. Le tracking GPS temps réel, la gestion fine des zones de livraison et l'intégration native MTN MoMo / Orange Money en font une solution adaptée au marché local.",
    category: "Marketplace",
    year: 2023,
    role: "Fullstack Engineer",
    duration: "4 mois",
    tech: [
      "React Native",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
      "Mapbox",
    ],
    features: [
      "Catalogue restaurants & menus dynamiques",
      "Panier multi-restaurants",
      "Tracking GPS temps réel du livreur",
      "Paiement MoMo / Orange Money / Carte",
      "Notes & avis vérifiés",
      "App livreur avec navigation intégrée",
      "Back-office restaurants",
    ],
    highlights: [
      { label: "Restaurants", value: "150+" },
      { label: "Commandes/mois", value: "8k+" },
      { label: "Notes moyennes", value: "4.7/5" },
    ],
    image: "/projects/foodly-cover.jpg",
    links: {
      demo: "https://demo.meli-merveil.dev/foodly",
    },
    status: "Beta",
  },
  {
    slug: "eventsphere",
    title: "EventSphere — Plateforme d'événementiel",
    tagline: "Organisez, billettez, vivez vos événements.",
    description:
      "SaaS d'événementiel : création d'événements, billetterie, scan QR à l'entrée et analytics post-événement.",
    longDescription:
      "EventSphere centralise tout le cycle de vie d'un événement : page publique personnalisable, vente de billets en ligne avec catégories tarifaires, génération QR sécurisée, application de scan pour le contrôle d'accès, et tableau de bord analytics (ventes, affluence, démographie). Pensée pour les organisateurs de conférences, concerts et meetups.",
    category: "SaaS",
    year: 2023,
    role: "Fullstack Engineer",
    duration: "3 mois",
    tech: [
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Stripe",
      "QR Code",
      "Tailwind CSS",
    ],
    features: [
      "Pages d'événements personnalisables",
      "Billetterie multi-catégories",
      "QR codes sécurisés signés",
      "App scanner de billets",
      "Analytics ventes & affluence",
      "Emails transactionnels brandés",
      "Gestion de remboursements",
    ],
    highlights: [
      { label: "Événements", value: "60+" },
      { label: "Billets vendus", value: "12k+" },
      { label: "Scan/seconde", value: "30+" },
    ],
    image: "/projects/eventsphere-cover.jpg",
    links: {
      github: "https://github.com/bilyos/eventsphere",
    },
    status: "Production",
  },
  {
    slug: "cryptovest",
    title: "CryptoVest — Portfolio tracker crypto",
    tagline: "Suivez vos actifs crypto en temps réel.",
    description:
      "Application de suivi de portefeuille crypto avec alertes, graphiques avancés et calcul de PnL.",
    longDescription:
      "CryptoVest permet d'agréger ses portefeuilles répartis sur plusieurs exchanges et wallets, de visualiser ses positions, son PnL réalisé/latent, et de paramétrer des alertes de prix. Les graphiques utilisent Recharts pour des visualisations interactives et performantes.",
    category: "Fintech",
    year: 2024,
    role: "Fullstack Engineer",
    duration: "2 mois",
    tech: [
      "Next.js",
      "TypeScript",
      "Recharts",
      "CoinGecko API",
      "WebSocket",
      "TanStack Query",
    ],
    features: [
      "Agrégation multi-exchanges",
      "Suivi PnL réalisé & latent",
      "Graphiques candlestick & lignes",
      "Alertes de prix push",
      "Portfolio shareable",
      "Export CSV pour comptabilité",
    ],
    highlights: [
      { label: "Exchanges", value: "12" },
      { label: "Tokens", value: "10k+" },
      { label: "Latence", value: "<200ms" },
    ],
    image: "/projects/cryptovest-cover.jpg",
    links: {
      demo: "https://demo.meli-merveil.dev/cryptovest",
      github: "https://github.com/bilyos/cryptovest",
    },
    status: "Beta",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories: Array<{ label: string; value: "all" | Project["category"] }> = [
  { label: "Tous", value: "all" },
  { label: "SaaS", value: "SaaS" },
  { label: "Marketplace", value: "Marketplace" },
  { label: "Fintech", value: "Fintech" },
  { label: "ERP", value: "ERP" },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
