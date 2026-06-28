"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { projects, projectCategories } from "@/data/projects";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

export function ProjectsGallery() {
  const [filter, setFilter] = React.useState<"all" | Project["category"]>("all");
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    return projects.filter((p) => {
      const matchCategory = filter === "all" || p.category === filter;
      const q = query.trim().toLowerCase();
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchCategory && matchQuery;
    });
  }, [filter, query]);

  return (
    <section className="relative py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-4">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Rechercher un projet, une stack..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 rounded-full pl-11 pr-11 text-sm"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label="Effacer la recherche"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all",
                  filter === cat.value
                    ? "border-primary bg-primary text-primary-foreground shadow-glow"
                    : "border-border/60 bg-background/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto mt-12 max-w-md rounded-2xl border border-dashed border-border/60 p-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Aucun projet ne correspond à votre recherche.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 rounded-full"
              onClick={() => {
                setQuery("");
                setFilter("all");
              }}
            >
              Réinitialiser
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group relative h-full overflow-hidden card-hover">
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={project.title}
      />
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-500/15 via-background to-background">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
          <div className="relative px-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {project.category}
            </p>
            <p className="mt-2 font-display text-xl font-semibold tracking-tight">
              {project.title}
            </p>
          </div>
        </div>
        <div className="absolute left-4 top-4">
          <Badge variant="dot">
            <span /> {project.status}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
          {project.tagline}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-muted-foreground tabular-nums">
            {project.year}
          </span>
          <div className="flex items-center gap-2">
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                className="relative z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                aria-label="Voir le code"
              >
                <Github className="h-3.5 w-3.5" />
              </Link>
            )}
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
