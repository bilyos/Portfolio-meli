"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackToTop() {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="rounded-full"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="h-3.5 w-3.5" />
      Haut de page
    </Button>
  );
}
