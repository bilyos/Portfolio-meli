"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/common/section-header";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Parcours"
          title="Une trajectoire pensée pour livrer."
          description="Du stage en architecture microservices à l'indépendance fullstack — chaque étape a renforcé ma capacité à construire des produits qui tiennent."
        />

        <div className="mt-16 mx-auto max-w-4xl">
          <ol className="relative space-y-8">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />
            {experiences.map((exp, i) => (
              <motion.li
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-14"
              >
                <span className="absolute left-0 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background shadow-soft">
                  <Briefcase className="h-4 w-4 text-primary" />
                </span>

                <Card className="p-6 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-semibold tracking-tight">
                          {exp.role}
                        </h3>
                        <Badge variant="soft">{exp.type}</Badge>
                      </div>
                      <p className="mt-1 text-sm text-foreground/80">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      <div>{exp.period}</div>
                      <div className="mt-0.5 inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
