import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { SectionHeader } from "@/components/common/section-header";
import { GridPattern, GlowOrb } from "@/components/common/grid-pattern";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discutons de votre projet. Réponse sous 24h. SaaS, marketplace, refonte, mission ponctuelle — toutes vos questions sont les bienvenues.",
};

const contactInfo = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Téléphone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Localisation", value: siteConfig.location },
  { icon: Clock, label: "Disponibilité", value: "Réponse sous 24h" },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-44 md:pb-16">
        <GridPattern />
        <GlowOrb className="-top-40 left-1/2 -translate-x-1/2" />
        <div className="container">
          <SectionHeader
            eyebrow="Contact"
            title="Travaillons sur quelque chose de remarquable."
            description="Présentez votre projet en quelques lignes — je reviens vers vous sous 24h avec un premier retour, des questions et une proposition d'appel."
          />
        </div>
      </section>

      <section className="container pb-20 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-5">
            <Card className="p-6">
              <h3 className="font-display text-lg font-semibold tracking-tight">
                Plusieurs façons de me joindre
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Choisissez le canal qui vous convient — le formulaire reste le
                plus rapide.
              </p>
              <ul className="mt-6 space-y-3">
                {contactInfo.map((c) => (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="group flex items-center gap-3 rounded-xl border border-border/60 bg-background/60 p-4 transition-all hover:border-primary/40 hover:bg-muted/40"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <c.icon className="h-4 w-4" />
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs uppercase tracking-wider text-muted-foreground">
                            {c.label}
                          </p>
                          <p className="text-sm font-medium truncate">{c.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/60 p-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <c.icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground">
                            {c.label}
                          </p>
                          <p className="text-sm font-medium">{c.value}</p>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/30">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {siteConfig.availability}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Je prends en ce moment 2 à 3 missions parallèles maximum, pour
                garantir un accompagnement de qualité.
              </p>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <Card className="p-6 md:p-10">
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
