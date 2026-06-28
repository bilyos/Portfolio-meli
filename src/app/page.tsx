import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Marquee } from "@/components/sections/marquee";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Accueil — Développeur Fullstack premium",
  description:
    "Portfolio de MELI ZANGUE BILYOS MERVEIL. Je conçois et développe des SaaS, marketplaces et plateformes premium en Next.js, Spring Boot et TypeScript.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />
      <About />
      <Skills />
      <FeaturedProjects />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
