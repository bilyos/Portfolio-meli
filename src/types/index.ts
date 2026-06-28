import type { LucideIcon } from "lucide-react";

export type ProjectCategory =
  | "SaaS"
  | "Marketplace"
  | "Éducation"
  | "Fintech"
  | "IA"
  | "ERP"
  | "Event";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  year: number;
  client?: string;
  role: string;
  duration: string;
  tech: string[];
  features: string[];
  highlights: { label: string; value: string }[];
  image: string;
  screenshots?: string[];
  links: {
    demo?: string;
    github?: string;
    case?: string;
  };
  featured?: boolean;
  status: "Production" | "Beta" | "MVP" | "Concept";
}

export interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Other";
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  start: string;
  end?: string;
  location: string;
  type: "Stage" | "CDI" | "CDD" | "Freelance" | "Mission";
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  description?: string;
  highlights?: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
  fictional?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  cover: string;
  author: {
    name: string;
    avatar: string;
  };
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
