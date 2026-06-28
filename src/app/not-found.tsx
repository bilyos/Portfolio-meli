import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridPattern, GlowOrb } from "@/components/common/grid-pattern";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-32">
      <GridPattern />
      <GlowOrb className="left-1/2 top-1/3 -translate-x-1/2" />
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-7xl font-semibold tracking-tighter text-gradient-brand md:text-9xl">
            404
          </p>
          <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Cette page s'est égarée
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Le contenu que vous cherchez n'existe pas, ou a été déplacé. Retournons à un terrain connu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/">
                <Home className="h-4 w-4" />
                Page d'accueil
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4" />
                Voir mes projets
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
