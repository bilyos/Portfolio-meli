"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-card via-card to-muted/40 p-10 md:p-16"
        >
          <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-brand-700/20 blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-30" />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {siteConfig.availability}
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-5xl text-balance">
              Une idée à transformer en produit ?{" "}
              <span className="text-gradient-brand">Parlons-en.</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg max-w-2xl">
              Je prends ponctuellement de nouvelles missions — SaaS, marketplace,
              ERP, refonte. Réponse sous 24h, premier appel offert.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" variant="glow" className="rounded-full">
                <Link href="/contact">
                  Démarrer un projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href={`mailto:${siteConfig.email}`}>
                  <Calendar className="h-4 w-4" />
                  Planifier un appel
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
