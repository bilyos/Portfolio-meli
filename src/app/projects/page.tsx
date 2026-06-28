import type { Metadata } from "next";
import { ProjectsGallery } from "@/components/sections/projects-gallery";
import { CTA } from "@/components/sections/cta";
import { SectionHeader } from "@/components/common/section-header";
import { GridPattern, GlowOrb } from "@/components/common/grid-pattern";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Sélection complète de mes projets : SaaS, marketplaces, ERP, plateformes éducatives. Études de cas détaillées.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-44 md:pb-16">
        <GridPattern />
        <GlowOrb className="-top-40 left-0" />
        <div className="container">
          <SectionHeader
            eyebrow="Projets"
            title="Une sélection de produits que j'ai construits."
            description="Du POC en deux semaines au SaaS en production sur plusieurs marchés. Chaque projet ci-dessous est une étude de cas."
          />
        </div>
      </section>

      <ProjectsGallery />
      <CTA />
    </>
  );
}
