"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Sparkles, GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

const pillars = [
  {
    icon: Sparkles,
    title: "Craftsmanship",
    description:
      "Je code comme un designer dessine : avec précision, intention et respect du détail.",
  },
  {
    icon: Briefcase,
    title: "Sens produit",
    description:
      "Je pense usage avant tech : la stack sert le problème, jamais l'inverse.",
  },
  {
    icon: GraduationCap,
    title: "Apprentissage continu",
    description:
      "Une veille quotidienne, des projets perso comme terrain d'expérimentation.",
  },
  {
    icon: MapPin,
    title: "Impact local",
    description:
      "Mes produits s'adressent en priorité au marché africain et francophone.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="À propos"
          title="Construire avec exigence, livrer avec impact."
          description="Développeur fullstack basé à Douala, je conçois des produits numériques qui résolvent de vrais problèmes — du design system jusqu'au déploiement."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-2xl" />
              <Card className="relative overflow-hidden p-8 bg-gradient-to-br from-card via-card to-muted/40">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 text-2xl font-display font-bold text-primary-foreground shadow-glow">
                    M
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {siteConfig.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{siteConfig.role}</p>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {siteConfig.location}
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Je m'intéresse particulièrement aux{" "}
                    <span className="text-foreground font-medium">plateformes SaaS</span>
                    , aux{" "}
                    <span className="text-foreground font-medium">marketplaces</span>
                    , aux{" "}
                    <span className="text-foreground font-medium">produits éducatifs</span>{" "}
                    et aux solutions à fort impact pour le marché africain.
                  </p>
                  <p>
                    Mon approche : comprendre le problème, prototyper vite,
                    livrer propre. Je privilégie la valeur livrée à la
                    sophistication technique gratuite.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between rounded-xl border border-border/60 bg-background/60 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Disponibilité
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      {siteConfig.availability}
                    </p>
                  </div>
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                  </span>
                </div>
              </Card>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="group h-full p-6 card-hover">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-semibold tracking-tight">{pillar.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {pillar.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
