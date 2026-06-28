import {
  Boxes,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Développement SaaS",
    description:
      "De l'idée au produit en production : architecture, multi-tenant, facturation, onboarding et scaling.",
    icon: Layers as LucideIcon,
    features: [
      "Architecture multi-tenant",
      "Facturation Stripe / MoMo",
      "Onboarding & activation",
      "Analytics produit",
    ],
  },
  {
    title: "Développement Fullstack",
    description:
      "Applications web modernes Next.js / Spring Boot, performantes, sécurisées et maintenables.",
    icon: Code2 as LucideIcon,
    features: [
      "Next.js App Router",
      "API REST / GraphQL",
      "Auth & autorisations",
      "Tests automatisés",
    ],
  },
  {
    title: "Conception d'API",
    description:
      "APIs robustes, documentées et versionnées — REST, GraphQL ou tRPC selon le besoin.",
    icon: Workflow as LucideIcon,
    features: [
      "Design REST / GraphQL",
      "OpenAPI & doc auto",
      "Rate limiting & sécurité",
      "Webhooks & events",
    ],
  },
  {
    title: "Applications métier",
    description:
      "ERP, CRM, back-offices sur mesure — pensés pour des workflows réels et des équipes terrain.",
    icon: Boxes as LucideIcon,
    features: [
      "Workflows configurables",
      "Permissions granulaires",
      "Import / export massif",
      "Reporting avancé",
    ],
  },
  {
    title: "UX moderne & Design System",
    description:
      "Interfaces premium, design tokens, composants accessibles — du wireframe au pixel-perfect.",
    icon: Sparkles as LucideIcon,
    features: [
      "Design tokens & thèmes",
      "Composants accessibles",
      "Micro-interactions",
      "Audit ergonomique",
    ],
  },
  {
    title: "Architecture logicielle",
    description:
      "Audit, refonte, choix techno — pour des fondations qui supportent la croissance.",
    icon: Cpu as LucideIcon,
    features: [
      "Audit code & dette",
      "Architecture microservices",
      "Choix de stack",
      "Coaching équipes",
    ],
  },
];
