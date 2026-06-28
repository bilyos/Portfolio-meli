import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, Github, Layers, MapPin, Sparkles, Timer, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GridPattern, GlowOrb } from "@/components/common/grid-pattern";
import { CTA } from "@/components/sections/cta";
import { getProjectBySlug, projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/utils";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Projet introuvable" };
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: absoluteUrl(`/projects/${project.slug}`) },
    openGraph: {
      title: project.title,
      description: project.description,
      url: absoluteUrl(`/projects/${project.slug}`),
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-44 md:pb-20">
        <GridPattern />
        <GlowOrb className="-top-40 left-1/2 -translate-x-1/2" />

        <div className="container">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Tous les projets
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="soft">{project.category}</Badge>
                <Badge variant="outline">{project.status}</Badge>
                <span className="text-xs text-muted-foreground">
                  · {project.year}
                </span>
              </div>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground text-balance max-w-3xl">
                {project.tagline}
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground/80 max-w-3xl">
                {project.longDescription}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {project.links.demo && (
                  <Button asChild size="lg" className="rounded-full">
                    <Link href={project.links.demo} target="_blank">
                      Voir la démo
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {project.links.github && (
                  <Button asChild size="lg" variant="outline" className="rounded-full">
                    <Link href={project.links.github} target="_blank">
                      <Github className="h-4 w-4" />
                      Code source
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="lg:col-span-4">
              <Card className="p-6 sticky top-28">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Informations
                </h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <Info icon={User} label="Rôle" value={project.role} />
                  <Info icon={Timer} label="Durée" value={project.duration} />
                  <Info icon={Calendar} label="Année" value={String(project.year)} />
                  {project.client && (
                    <Info icon={MapPin} label="Client" value={project.client} />
                  )}
                  <Info icon={Layers} label="Statut" value={project.status} />
                </ul>

                <Separator className="my-6" />

                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Stack technique
                </h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-16 border-y border-border/40 bg-muted/20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.highlights.map((h) => (
              <Card key={h.label} className="p-6">
                <p className="font-display text-3xl font-semibold tracking-tight text-gradient-brand md:text-4xl">
                  {h.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{h.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Fonctionnalités clés
              </div>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Ce qui rend ce produit unique
              </h2>
              <ul className="mt-8 space-y-3">
                {project.features.map((f, i) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/85">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-5">
              <Card className="p-6 sticky top-28 bg-gradient-to-br from-card via-card to-muted/30">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  Projets similaires
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  D'autres travaux dans la catégorie {project.category}.
                </p>
                <div className="mt-5 space-y-3">
                  {related.length > 0 ? (
                    related.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-background/60 p-4 transition-all hover:border-primary/40 hover:bg-muted/40"
                      >
                        <div>
                          <p className="text-sm font-medium">{p.title}</p>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {p.tagline}
                          </p>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Aucun projet similaire pour le moment.
                    </p>
                  )}
                </div>
                <Button asChild variant="outline" className="mt-6 w-full rounded-full">
                  <Link href="/projects">
                    Voir tous les projets
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-start justify-between gap-3">
      <span className="inline-flex items-center gap-2 text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </span>
      <span className="text-right text-foreground/90">{value}</span>
    </li>
  );
}
