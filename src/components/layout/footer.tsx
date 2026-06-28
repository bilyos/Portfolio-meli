import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { footerNavigation, siteConfig } from "@/lib/site-config";
import { BackToTop } from "@/components/common/back-to-top";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 font-semibold">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 text-primary-foreground shadow-glow">
                <span className="font-display text-sm font-bold">M</span>
                <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20" />
              </span>
              <span className="text-lg">
                Meli<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              {siteConfig.role} basé à {siteConfig.location}. Je construis des
              produits numériques élégants, performants et utiles — de l'idée à la
              mise à l'échelle.
            </p>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <Link href={siteConfig.links.github} target="_blank" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <Link href={siteConfig.links.linkedin} target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <Link href={siteConfig.links.twitter} target="_blank" aria-label="Twitter / X">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <Link href={`mailto:${siteConfig.email}`} aria-label="Email">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterColumn title="Produit" items={footerNavigation.product} />
            <FooterColumn title="Profil" items={footerNavigation.company} />
            <FooterColumn title="Ressources" items={footerNavigation.resources} />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border/60 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. Conçu et développé avec ♥ depuis Douala.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {siteConfig.availability}
            </span>
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
              <ArrowUpRight className="h-3 w-3 opacity-0 transition-all -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
