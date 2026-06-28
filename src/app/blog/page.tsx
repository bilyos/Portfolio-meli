import type { Metadata } from "next";
import { BlogList } from "@/components/sections/blog-list";
import { SectionHeader } from "@/components/common/section-header";
import { GridPattern, GlowOrb } from "@/components/common/grid-pattern";

export const metadata: Metadata = {
  title: "Blog tech",
  description:
    "Mes notes sur le développement Fullstack, l'architecture SaaS, Next.js, Spring Boot et l'entrepreneuriat tech depuis l'Afrique.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-44 md:pb-16">
        <GridPattern />
        <GlowOrb className="-top-40 left-1/2 -translate-x-1/2" />
        <div className="container">
          <SectionHeader
            eyebrow="Blog"
            title="Notes de terrain sur le développement et le produit."
            description="Je partage ce que j'apprends en construisant : architecture, choix techniques, retours d'expérience, vie de développeur en Afrique."
          />
        </div>
      </section>

      <BlogList />
    </>
  );
}
