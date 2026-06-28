"use client";

import * as React from "react";
import { RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] items-center">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-display text-3xl font-semibold tracking-tight">
            Une erreur est survenue
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Quelque chose s'est mal passé. Vous pouvez réessayer ou retourner à
            l'accueil.
          </p>
          <Button onClick={reset} className="mt-6 rounded-full">
            <RotateCw className="h-4 w-4" />
            Réessayer
          </Button>
        </div>
      </div>
    </section>
  );
}
