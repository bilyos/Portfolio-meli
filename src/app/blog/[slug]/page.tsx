import type { Metadata } from "next";
import * as React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GridPattern, GlowOrb } from "@/components/common/grid-pattern";
import { CTA } from "@/components/sections/cta";
import { getPostBySlug, posts } from "@/data/blog";
import { formatDate, absoluteUrl } from "@/lib/utils";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article introuvable" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: absoluteUrl(`/blog/${post.slug}`) },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: absoluteUrl(`/blog/${post.slug}`),
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="relative overflow-hidden pt-32 pb-12 md:pt-44 md:pb-16">
        <GridPattern />
        <GlowOrb className="-top-40 left-1/2 -translate-x-1/2" />

        <div className="container">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Tous les articles
          </Link>

          <header className="mx-auto mt-8 max-w-3xl text-center">
            <Badge variant="soft">{post.category}</Badge>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground text-balance">
              {post.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-xs font-semibold text-primary-foreground">
                  M
                </span>
                {post.author.name}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readingTime} min de lecture
              </span>
            </div>
          </header>
        </div>
      </article>

      <section className="container">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tight prose-h1:text-4xl prose-h2:mt-12 prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-p:text-foreground/85 prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-xl prose-pre:border prose-pre:border-border/60 prose-pre:bg-muted/40 prose-blockquote:border-l-primary prose-blockquote:text-foreground/80 prose-blockquote:not-italic">
            <MdRenderer content={post.content} />
          </div>

          <Separator className="my-12" />

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              Tags
            </span>
            {post.tags.map((t) => (
              <Badge key={t} variant="outline">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container mt-20">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            À lire ensuite
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {related.map((p) => (
              <Card key={p.slug} className="p-6 card-hover">
                <Badge variant="outline">{p.category}</Badge>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {p.excerpt}
                </p>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="mt-4 rounded-full"
                >
                  <Link href={`/blog/${p.slug}`}>
                    Lire l'article
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}

function MdRenderer({ content }: { content: string }) {
  const lines = content.split(/\n/);
  const out: React.ReactNode[] = [];
  let inCode = false;
  let codeBuffer: string[] = [];
  let inTable = false;
  let tableBuffer: string[] = [];
  let listBuffer: string[] = [];

  const flushList = () => {
    if (listBuffer.length) {
      out.push(
        <ul key={`list-${out.length}`} className="my-4 list-disc pl-6">
          {listBuffer.map((l, i) => (
            <li key={i}>{inlineMd(l.replace(/^[-*]\s+/, ""))}</li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };
  const flushTable = () => {
    if (tableBuffer.length) {
      const [header, _sep, ...rows] = tableBuffer;
      const headers = header.split("|").filter(Boolean).map((c) => c.trim());
      const data = rows.map((r) => r.split("|").filter(Boolean).map((c) => c.trim()));
      out.push(
        <div key={`tbl-${out.length}`} className="my-6 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/40">
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="px-4 py-2 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, ri) => (
                <tr key={ri} className="border-t border-border/60">
                  {row.map((c, ci) => (
                    <td key={ci} className="px-4 py-2">{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableBuffer = [];
    }
  };

  lines.forEach((line, i) => {
    if (line.startsWith("```")) {
      if (inCode) {
        out.push(
          <pre key={`code-${i}`} className="my-5 overflow-x-auto rounded-xl border border-border/60 bg-muted/40 p-4 text-sm">
            <code>{codeBuffer.join("\n")}</code>
          </pre>
        );
        codeBuffer = [];
        inCode = false;
      } else {
        flushList();
        flushTable();
        inCode = true;
      }
      return;
    }
    if (inCode) {
      codeBuffer.push(line);
      return;
    }

    if (line.startsWith("|")) {
      flushList();
      tableBuffer.push(line);
      inTable = true;
      return;
    } else if (inTable) {
      flushTable();
      inTable = false;
    }

    if (line.startsWith("# ")) {
      flushList();
      out.push(<h1 key={i} className="mt-10 font-display text-3xl font-semibold tracking-tight">{line.slice(2)}</h1>);
    } else if (line.startsWith("## ")) {
      flushList();
      out.push(<h2 key={i} className="mt-10 font-display text-2xl font-semibold tracking-tight">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      flushList();
      out.push(<h3 key={i} className="mt-8 font-display text-xl font-semibold tracking-tight">{line.slice(4)}</h3>);
    } else if (line.startsWith("> ")) {
      flushList();
      out.push(
        <blockquote key={i} className="my-5 border-l-4 border-primary/60 bg-muted/30 px-4 py-2 italic text-foreground/80">
          {inlineMd(line.slice(2))}
        </blockquote>
      );
    } else if (/^[-*]\s+/.test(line)) {
      listBuffer.push(line);
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      out.push(<p key={i} className="my-4 leading-relaxed text-foreground/85">{inlineMd(line)}</p>);
    }
  });
  flushList();
  flushTable();

  return <>{out}</>;
}

function inlineMd(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("`")) {
      parts.push(
        <code key={key++} className="rounded bg-muted px-1.5 py-0.5 text-sm">
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith("[")) {
      const [, label, href] = token.match(/\[([^\]]+)\]\(([^)]+)\)/) ?? [];
      parts.push(
        <a key={key++} href={href} className="text-primary hover:underline">
          {label}
        </a>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}
