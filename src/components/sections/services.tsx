"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/common/section-header";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-muted/20 border-y border-border/40">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Ce que je peux construire pour vous."
          description="Du POC d'une journée au SaaS multi-tenant scalé sur plusieurs marchés — voici comment je peux vous aider."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Card className="group relative h-full overflow-hidden p-7 card-hover">
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-700/20 text-primary transition-transform group-hover:scale-110">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
