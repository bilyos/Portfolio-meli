"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { posts, blogCategories } from "@/data/blog";
import { formatDate, cn } from "@/lib/utils";

export function BlogList() {
  const [category, setCategory] = React.useState<string>("Tous");
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    return posts.filter((p) => {
      const matchCat = category === "Tous" || p.category === category;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [category, query]);

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p.slug !== featured?.slug);

  return (
    <section className="relative py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Rechercher un article..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 rounded-full pl-11"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Tous", ...blogCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all",
                  category === cat
                    ? "border-primary bg-primary text-primary-foreground shadow-glow"
                    : "border-border/60 bg-background/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link href={`/blog/${featured.slug}`}>
              <Card className="group relative overflow-hidden card-hover">
                <div className="grid gap-0 md:grid-cols-2">
                  <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-500/20 via-background to-background">
                      <div className="absolute inset-0 grid-bg opacity-40" />
                      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
                      <p className="relative font-display text-xl font-semibold tracking-tight px-8 text-center">
                        {featured.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <div className="flex items-center gap-2">
                      <Badge variant="soft">À la une</Badge>
                      <Badge variant="outline">{featured.category}</Badge>
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight md:text-3xl text-balance">
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {featured.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(featured.publishedAt)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {featured.readingTime} min
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        )}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link href={`/blog/${p.slug}`} className="group block h-full">
                <Card className="h-full overflow-hidden card-hover">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-500/15 via-background to-background">
                      <div className="absolute inset-0 grid-bg opacity-40" />
                      <p className="relative px-6 text-center font-display text-base font-semibold tracking-tight line-clamp-3">
                        {p.title}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge variant="outline">{p.category}</Badge>
                    <h3 className="mt-3 font-display text-lg font-semibold tracking-tight line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {p.readingTime} min de lecture
                      </span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mx-auto mt-12 max-w-md rounded-2xl border border-dashed border-border/60 p-12 text-center">
            <p className="text-sm text-muted-foreground">Aucun article trouvé.</p>
          </div>
        )}
      </div>
    </section>
  );
}
