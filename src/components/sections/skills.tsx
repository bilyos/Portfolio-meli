"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/common/section-header";
import { skills } from "@/data/skills";
import type { Skill } from "@/types";

const categories: Array<{ key: Skill["category"]; label: string }> = [
  { key: "Frontend", label: "Frontend" },
  { key: "Backend", label: "Backend" },
  { key: "Database", label: "Bases de données" },
  { key: "Tools", label: "Outils" },
  { key: "Other", label: "Autres" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Compétences"
          title="Une stack maîtrisée, choisie pour l'impact."
          description="J'aime jouer avec beaucoup d'outils, mais je deviens vraiment expert sur ceux qui livrent en production. Voici la palette."
        />

        <div className="mt-14">
          <Tabs defaultValue="Frontend" className="w-full">
            <div className="flex justify-center mask-fade-x overflow-x-auto no-scrollbar">
              <TabsList className="bg-muted/40">
                {categories.map((c) => (
                  <TabsTrigger key={c.key} value={c.key} className="whitespace-nowrap">
                    {c.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((c) => (
              <TabsContent key={c.key} value={c.key}>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {skills
                    .filter((s) => s.category === c.key)
                    .map((skill, i) => (
                      <SkillCard key={skill.name} skill={skill} index={i} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <Card className="group relative overflow-hidden p-5 card-hover">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold tracking-tight">{skill.name}</h4>
            <p className="text-xs text-muted-foreground">{skill.category}</p>
          </div>
          <span className="font-display text-lg font-semibold text-primary tabular-nums">
            {skill.level}%
          </span>
        </div>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.2 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-700 shadow-glow"
          />
        </div>
      </Card>
    </motion.div>
  );
}
