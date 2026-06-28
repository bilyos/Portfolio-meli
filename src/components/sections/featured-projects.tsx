"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/common/section-header";
import { featuredProjects } from "@/data/projects";
import type { Project } from "@/types";

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            align="left"
            eyebrow="Sélection"
            title="Projets phares qui parlent pour moi."
            description="Une sélection de produits que j'ai conçus, développés et mis en production — du SaaS à l'ERP."
          />
          <Button
            asChild
            variant="ghost"
            className="hidden md:inline-flex rounded-full"
          >
            <Link href="/projects">
              Tous les projets
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {featuredProjects.map((project, i) => (
            <FeaturedCard
              key={project.slug}
              project={project}
              index={i}
              span={i === 0 ? 7 : i === 1 ? 5 : i === 2 ? 5 : 7}
              order={i % 2 === 0}
            />
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Button asChild variant="outline" className="w-full rounded-full">
            <Link href="/projects">
              Voir tous les projets
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({
  project,
  index,
  span,
  order,
}: {
  project: Project;
  index: number;
  span: 5 | 7;
  order: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`lg:col-span-${span}`}
      style={{ gridColumn: `span ${span} / span ${span}` }}
    >
      <Card className="group relative h-full overflow-hidden card-hover">
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-muted to-muted/40">
          <PlaceholderCover title={project.title} category={project.category} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-90" />
          <div className="absolute left-5 top-5 flex flex-wrap gap-1.5">
            <Badge variant="soft">{project.category}</Badge>
            <Badge variant="outline" className="bg-background/70 backdrop-blur">
              {project.status}
            </Badge>
          </div>
        </div>
        <div className="p-7">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
              {project.title}
            </h3>
            <span className="text-xs text-muted-foreground tabular-nums">
              {project.year}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{project.tagline}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground">
                +{project.tech.length - 5}
              </span>
            )}
          </div>

          <div className="mt-6 flex items-center gap-2">
            <Button asChild size="sm" className="rounded-full">
              <Link href={`/projects/${project.slug}`}>
                Étude de cas
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
            {project.links.github && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="rounded-full"
              >
                <Link href={project.links.github} target="_blank">
                  <Github className="h-3.5 w-3.5" />
                  Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function PlaceholderCover({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-500/20 via-background to-background">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative text-center px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {category}
        </p>
        <p className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </p>
      </div>
    </div>
  );
}
