"use client";

const items = [
  "Next.js",
  "TypeScript",
  "Spring Boot",
  "React",
  "Tailwind CSS",
  "Vue.js",
  "Java",
  "NestJS",
  "PostgreSQL",
  "Docker",
  "MongoDB",
  "Redis",
  "Jenkins",
  "GitLab CI",
  "Framer Motion",
];

export function Marquee() {
  return (
    <section className="relative border-y border-border/60 py-8">
      <div className="container">
        <p className="mb-5 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Stack & technologies
        </p>
        <div className="relative overflow-hidden mask-fade-x">
          <div className="flex gap-12 animate-marquee animate-marquee-pause whitespace-nowrap will-change-transform">
            {[...items, ...items].map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                className="font-display text-2xl font-semibold tracking-tight text-muted-foreground/40 transition-colors hover:text-foreground md:text-3xl"
              >
                {item}
                <span className="ml-12 text-primary/40">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
