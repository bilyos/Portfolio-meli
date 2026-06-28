"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Sparkles, Code2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { GridPattern, GlowOrb } from "@/components/common/grid-pattern";

const titles = [
  "Développeur Fullstack",
  "Software Engineer",
  "Product Builder",
  "SaaS Developer",
];

const techBadges = [
  "Next.js",
  "TypeScript",
  "Spring Boot",
  "PostgreSQL",
  "Docker",
  "Tailwind CSS",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <GridPattern />
      <GlowOrb className="-top-40 -left-20" />
      <GlowOrb className="-bottom-40 -right-20" color="brand" />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex justify-center lg:justify-start"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur transition-colors hover:border-primary/40 hover:bg-muted/60"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                  <Sparkles className="h-3 w-3" />
                  Nouveau
                </span>
                <span className="text-muted-foreground">
                  Découvrez mes derniers projets
                </span>
                <ArrowRight className="h-3 w-3 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Je construis des{" "}
              <span className="relative inline-block">
                <span className="text-gradient-brand">produits</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden
                >
                  <motion.path
                    d="M2 8 Q 150 -2 298 8"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                  />
                </svg>
              </span>{" "}
              que les gens adorent utiliser.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground"
            >
              <span className="hidden sm:inline">Je suis</span>
              <AnimatedRoles />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg text-balance mx-auto lg:mx-0"
            >
              Hello, je m'appelle{" "}
              <span className="font-medium text-foreground">
                MELI ZANGUE BILYOS MERVEIL
              </span>
              . J'aide founders, startups et entreprises à transformer des
              idées ambitieuses en plateformes SaaS, marketplaces et
              applications à fort impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <Button asChild size="lg" variant="glow" className="rounded-full">
                <Link href="/projects">
                  Voir mes projets
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                <Link href={siteConfig.links.cv} target="_blank">
                  <Download className="h-4 w-4" />
                  Télécharger mon CV
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full">
                <Link href="/contact">Me contacter</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                <Code2 className="inline h-3.5 w-3.5 mr-1" />
                Stack favorite
              </span>
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                  className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <PortraitCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function PortraitCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto max-w-md lg:max-w-none"
    >
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-400/30 via-brand-500/10 to-transparent blur-3xl" />

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-to-br from-card via-card to-muted/50 shadow-glow-lg">
        <Image
          src="/images/avatar.jpg"
          alt={`Photo de ${siteConfig.name}`}
          fill
          priority
          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 80vw, 100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />

        <div className="absolute inset-0 grid-bg opacity-20 mix-blend-overlay" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute left-4 top-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {siteConfig.availability}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/60 bg-background/70 p-4 backdrop-blur-xl"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="font-display text-base font-semibold tracking-tight truncate">
                {siteConfig.shortName}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {siteConfig.role}
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">
              <MapPin className="h-2.5 w-2.5" />
              {siteConfig.location.split(",")[0]}
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -left-4 top-12 hidden md:block"
      >
        <div className="rounded-2xl border border-border/60 bg-background/90 p-3 shadow-soft backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 text-primary-foreground">
              <Code2 className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Projets livrés
              </p>
              <p className="font-display text-sm font-semibold">25+</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
        animate={{ opacity: 1, scale: 1, rotate: 5 }}
        transition={{ duration: 0.7, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-2 bottom-24 hidden md:block"
      >
        <div className="rounded-2xl border border-border/60 bg-background/90 p-3 shadow-soft backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400/30 to-brand-700/30 text-primary">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Stack maîtrisée
              </p>
              <p className="font-display text-sm font-semibold">30+ techs</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AnimatedRoles() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setIndex((v) => (v + 1) % titles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-6 min-w-[220px] items-center overflow-hidden font-medium text-foreground">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inline-flex items-center gap-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
