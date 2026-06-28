export const siteConfig = {
  name: "MELI ZANGUE BILYOS MERVEIL",
  shortName: "Meli Merveil",
  role: "Développeur Fullstack",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://meli-merveil.dev",
  ogImage: "/og.png",
  description:
    "Portfolio de MELI ZANGUE BILYOS MERVEIL — Développeur Fullstack passionné par les SaaS, marketplaces et produits à fort impact. Stack Next.js, React, TypeScript, Spring Boot.",
  keywords: [
    "Développeur Fullstack",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Spring Boot",
    "Java",
    "Node.js",
    "NestJS",
    "SaaS Builder",
    "Cameroun",
    "Douala",
    "Meli Merveil",
    "Meli Zangue",
  ],
  email: "melimerveil@gmail.com",
  phone: "+237 659 09 31 16",
  location: "Douala, Cameroun",
  availability: "Disponible pour de nouvelles missions",
  links: {
    github: "https://github.com/melimerveil",
    linkedin: "https://www.linkedin.com/in/meli-merveil",
    twitter: "https://twitter.com/melimerveil",
    cv: "/cv-meli-zangue-bilyos-merveil.pdf",
  },
  authors: [
    {
      name: "MELI ZANGUE BILYOS MERVEIL",
      url: "https://meli-merveil.dev",
    },
  ],
  creator: "MELI ZANGUE BILYOS MERVEIL",
  locale: "fr-FR",
} as const;

export type SiteConfig = typeof siteConfig;

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Projets", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavigation = {
  product: [
    { label: "Projets", href: "/projects" },
    { label: "Services", href: "/#services" },
    { label: "Compétences", href: "/#skills" },
  ],
  company: [
    { label: "À propos", href: "/about" },
    { label: "Parcours", href: "/about#experience" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "CV", href: "/cv-meli-zangue-bilyos-merveil.pdf" },
    { label: "Témoignages", href: "/#testimonials" },
  ],
} as const;
