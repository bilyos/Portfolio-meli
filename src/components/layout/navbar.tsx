"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { navigation, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between gap-4 rounded-full border border-border/40 px-3 py-2 transition-all duration-500",
            scrolled
              ? "glass-strong shadow-soft"
              : "bg-transparent border-transparent"
          )}
        >
          <Link
            href="/"
            className="group flex items-center gap-2 pl-2 font-semibold tracking-tight"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 text-primary-foreground shadow-glow">
              <span className="font-display text-sm font-bold">M</span>
              <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20" />
            </span>
            <span className="hidden sm:inline-flex">
              Meli<span className="text-primary">.</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:text-foreground",
                      active ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-muted/80"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex rounded-full pl-4 pr-3"
            >
              <Link href="/contact">
                Travaillons ensemble
                <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mt-2 glass-strong rounded-2xl border border-border/60 p-2 shadow-soft"
            >
              <ul className="flex flex-col">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-muted",
                        pathname === item.href ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4 opacity-50" />
                    </Link>
                  </li>
                ))}
                <li className="p-2">
                  <Button asChild className="w-full rounded-xl">
                    <Link href="/contact">
                      Travaillons ensemble
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </li>
              </ul>
              <p className="px-4 pb-3 pt-2 text-xs text-muted-foreground">
                {siteConfig.email}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
