import type { Experience, Education } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Freelance",
    role: "Développeur Fullstack — Indépendant",
    period: "2024 — Aujourd'hui",
    start: "2024-01",
    location: "Douala, Cameroun · Remote",
    type: "Freelance",
    description:
      "Conception et développement de produits SaaS et plateformes sur mesure pour des clients basés au Cameroun, en France et au Canada.",
    achievements: [
      "Livraison de 6+ produits en production, du MVP à la mise à l'échelle",
      "Mise en place d'architectures microservices et déploiements Vercel/AWS",
      "Réduction du time-to-market client moyen de 40% via composants réutilisables",
      "Intégrations Mobile Money (MTN MoMo, Orange Money) et Stripe",
    ],
    tech: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "Docker", "Vercel"],
  },
  {
    company: "Mission de stage — Marketplace e-commerce",
    role: "Développeur Fullstack (Stage)",
    period: "Jan 2023 — Jui 2023",
    start: "2023-01",
    end: "2023-06",
    location: "Douala, Cameroun",
    type: "Stage",
    description:
      "Stage de fin de cycle dans une équipe Scrum sur le développement d'une marketplace e-commerce de type Amazon en architecture microservices.",
    achievements: [
      "Implémentation des modules d'authentification, création d'articles, chat temps réel",
      "Conception UML en amont (use cases, diagrammes de séquence, classes)",
      "Participation à 12 sprints Scrum (planning, daily, review, rétro)",
      "Mise en place d'un dashboard vendeur avec édition produits & statistiques",
      "Architecture microservices : auth, catalog, order, chat, notification",
    ],
    tech: ["Vue.js", "Spring Boot", "Java", "PostgreSQL", "Docker", "RabbitMQ", "Scrum", "UML"],
  },
  {
    company: "Projets académiques avancés",
    role: "Étudiant développeur — Projets capstone",
    period: "2021 — 2023",
    start: "2021-09",
    end: "2023-06",
    location: "IUC Douala",
    type: "Mission",
    description:
      "Conception et réalisation de plusieurs projets capstone notés excellents : ERP universitaire, plateformes éducatives, applications métier.",
    achievements: [
      "Lead technique sur 4 projets de groupe (5 à 8 personnes)",
      "Mention très bien sur le projet ERP CampusHub",
      "Initiation de pairs au stack Spring Boot / Vue.js",
      "Présentations devant jury professionnel et académique",
    ],
    tech: ["Vue.js", "Spring Boot", "Java", "PostgreSQL", "UML", "Scrum"],
  },
];

export const educations: Education[] = [
  {
    school: "Institut Universitaire de la Côte (IUC) — Douala",
    degree: "Master 2",
    field: "Management des Solutions Digitales et de la Data",
    period: "2023 — 2025",
    location: "Douala, Cameroun",
    description:
      "Master orienté produit et data, alliant ingénierie logicielle, architecture distribuée, gouvernance des données et management produit.",
    highlights: [
      "Architecture microservices & cloud",
      "Data engineering & analytics",
      "Product management & UX",
      "Sécurité et gouvernance des données",
    ],
  },
  {
    school: "Institut Universitaire de la Côte (IUC) — Douala",
    degree: "Licence",
    field: "Génie Logiciel",
    period: "2020 — 2023",
    location: "Douala, Cameroun",
    description:
      "Formation fondamentale en génie logiciel : algorithmique, programmation orientée objet, génie logiciel, bases de données, réseaux et méthodologies projet.",
    highlights: [
      "POO Java & C++",
      "Conception UML",
      "Bases de données relationnelles & NoSQL",
      "Méthodologies agiles (Scrum)",
    ],
  },
];

export const certifications = [
  {
    title: "Scrum Fundamentals",
    issuer: "Scrum.org",
    year: 2023,
  },
  {
    title: "Spring Boot Microservices",
    issuer: "Udemy",
    year: 2023,
  },
  {
    title: "Next.js & React Advanced",
    issuer: "Frontend Masters",
    year: 2024,
  },
];

export const stats = [
  { label: "Projets livrés", value: 25, suffix: "+" },
  { label: "Années d'expérience", value: 4, suffix: "+" },
  { label: "Technologies maîtrisées", value: 30, suffix: "+" },
  { label: "Clients satisfaits", value: 12, suffix: "" },
];
