"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/common/section-header";
import { certifications, educations } from "@/data/experience";

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 md:py-32 bg-muted/20 border-y border-border/40">
      <div className="container">
        <SectionHeader
          eyebrow="Formation"
          title="Une formation pensée produit, exécutée tech."
          description="Master en Management des Solutions Digitales & Data — alliant ingénierie, gouvernance et design produit."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-5">
            {educations.map((edu, i) => (
              <motion.div
                key={edu.school + i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display text-lg font-semibold tracking-tight">
                          {edu.degree} — {edu.field}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          {edu.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-foreground/80">{edu.school}</p>
                      <div className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </div>
                      {edu.description && (
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                      {edu.highlights && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {edu.highlights.map((h) => (
                            <Badge key={h} variant="soft" className="font-normal">
                              {h}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 h-full bg-gradient-to-br from-card via-card to-muted/30">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Award className="h-4 w-4 text-primary" />
                  Certifications
                </div>
                <ul className="mt-5 space-y-4">
                  {certifications.map((c) => (
                    <li
                      key={c.title}
                      className="flex items-start justify-between gap-3 rounded-lg border border-border/60 bg-background/60 p-3"
                    >
                      <div>
                        <p className="text-sm font-medium">{c.title}</p>
                        <p className="text-xs text-muted-foreground">{c.issuer}</p>
                      </div>
                      <span className="text-xs tabular-nums text-muted-foreground">
                        {c.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
