"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/common/section-header";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Témoignages"
          title="Ce que disent celles et ceux qui m'ont fait confiance."
          description="Quelques retours représentatifs de clients et collègues. Les témoignages ci-dessous sont des exemples illustratifs."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Card className="group relative h-full overflow-hidden p-6 card-hover">
                <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/15 group-hover:text-primary/25 transition-colors" />
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-3.5 w-3.5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                  "{t.content}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-sm font-semibold text-primary-foreground">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{t.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
                {t.fictional && (
                  <p className="mt-3 text-[10px] uppercase tracking-wider text-muted-foreground/60">
                    Exemple illustratif
                  </p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
