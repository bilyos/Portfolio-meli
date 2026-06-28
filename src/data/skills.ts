import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "Next.js", level: 95, category: "Frontend" },
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 92, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Vue.js", level: 80, category: "Frontend" },
  { name: "Framer Motion", level: 85, category: "Frontend" },

  // Backend
  { name: "Spring Boot", level: 90, category: "Backend" },
  { name: "Java", level: 88, category: "Backend" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "NestJS", level: 82, category: "Backend" },
  { name: "REST API", level: 95, category: "Backend" },

  // Database
  { name: "PostgreSQL", level: 90, category: "Database" },
  { name: "MySQL", level: 85, category: "Database" },
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "Redis", level: 75, category: "Database" },

  // Tools
  { name: "Git", level: 95, category: "Tools" },
  { name: "Docker", level: 85, category: "Tools" },
  { name: "Jenkins", level: 75, category: "Tools" },
  { name: "GitLab CI", level: 80, category: "Tools" },

  // Other
  { name: "UML", level: 85, category: "Other" },
  { name: "Scrum", level: 90, category: "Other" },
  { name: "Microservices", level: 82, category: "Other" },
];

export const skillCategories = [
  {
    name: "Frontend",
    description: "Interfaces modernes, réactives, accessibles.",
    icon: "Sparkles",
  },
  {
    name: "Backend",
    description: "APIs robustes, services scalables, logique métier.",
    icon: "Server",
  },
  {
    name: "Database",
    description: "Modélisation, performance, intégrité des données.",
    icon: "Database",
  },
  {
    name: "Tools",
    description: "CI/CD, conteneurisation, versioning, productivité.",
    icon: "Wrench",
  },
  {
    name: "Other",
    description: "Méthodologie, architecture, conception.",
    icon: "Compass",
  },
] as const;
