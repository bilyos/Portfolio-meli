import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
}

export function GridPattern({ className }: GridPatternProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60",
        className
      )}
    />
  );
}

export function GlowOrb({
  className,
  color = "primary",
}: {
  className?: string;
  color?: "primary" | "brand";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 h-[600px] w-[600px] rounded-full blur-3xl opacity-30 animate-glow-pulse",
        color === "primary" ? "bg-primary/30" : "bg-brand-500/30",
        className
      )}
    />
  );
}
