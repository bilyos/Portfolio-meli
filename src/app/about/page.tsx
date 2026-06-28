import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";
import { Stats } from "@/components/sections/stats";
import { CTA } from "@/components/sections/cta";
import { SectionHeader } from "@/components/common/section-header";
import { GridPattern, GlowOrb } from "@/components/common/grid-pattern";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Mon histoire, mon parcours, ma philosophie de travail. Développeur fullstack basé à Douala, je conçois des produits ambitieux.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-44 md:pb-16">
        <GridPattern />
        <GlowOrb className="-top-40 right-0" />
        <div className="container">
          <SectionHeader
            eyebrow="À propos"
            title="L'histoire d'un développeur qui pense produit avant code."
            description="De l'Institut Universitaire de la Côte aux missions fullstack indépendantes — voici comment j'en suis arrivé là, et ce qui me fait avancer."
          />
        </div>
      </section>

      <Stats />
      <About />
      <ExperienceSection />
      <EducationSection />
      <CTA />
    </>
  );
}
