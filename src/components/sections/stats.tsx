"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/common/counter";
import { stats } from "@/data/experience";

export function Stats() {
  return (
    <section className="relative border-y border-border/60 bg-muted/20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col items-center text-center md:items-start md:text-left md:pl-8 md:border-l md:border-border/60 md:first:border-l-0"
            >
              <div className="font-display text-4xl font-semibold tracking-tight text-gradient-brand md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
