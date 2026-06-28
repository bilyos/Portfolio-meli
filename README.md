# Portfolio — MELI ZANGUE BILYOS MERVEIL

> Portfolio premium d'un Développeur Fullstack, conçu et développé comme un vrai produit.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

---

## Aperçu

Un portfolio pensé comme un produit SaaS premium. L'inspiration vient de Linear, Vercel, Apple, Stripe, Framer, Notion et Raycast. Toutes les pages sont animées avec [Framer Motion](https://www.framer.com/motion/), le scroll est lissé avec [Lenis](https://github.com/studio-freight/lenis), et l'interface utilise [shadcn/ui](https://ui.shadcn.com) avec une palette verte premium personnalisée.

## Stack

- **Framework :** Next.js 14 (App Router, RSC, Server Actions ready)
- **Langage :** TypeScript 5 (strict mode)
- **UI :** Tailwind CSS, shadcn/ui, Radix UI, Lucide
- **Animations :** Framer Motion, Lenis (smooth scroll)
- **Forms :** React Hook Form + Zod
- **State :** TanStack Query
- **Theming :** next-themes (light / dark / system)
- **Charts :** Recharts
- **SEO :** Metadata API, JSON-LD, OG image dynamique, sitemap.xml, robots.txt
- **Analytics :** Vercel Analytics + Speed Insights
- **Déploiement :** Vercel

## Démarrer en local

### Pré-requis

- Node.js ≥ 18.18
- npm / pnpm / yarn

### Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

### Variables d'environnement

| Variable | Description | Requis |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canonique (sitemap, OG, JSON-LD) | Oui (prod) |
| `RESEND_API_KEY` | Clé API Resend pour le formulaire de contact | Non (mode dev console) |
| `CONTACT_EMAIL` | Email de réception des messages | Oui si Resend activé |
| `GOOGLE_SITE_VERIFICATION` | Token Google Search Console | Non |

## Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Lance le dev server avec HMR |
| `npm run build` | Build de production |
| `npm run start` | Démarre le build de production |
| `npm run lint` | Lint le projet (ESLint Next) |
| `npm run type-check` | Vérification TypeScript stricte |

## Architecture

```
src/
├── app/                      # Next.js App Router
│   ├── api/contact/          # API route POST formulaire
│   ├── about/                # Page À propos
│   ├── projects/             # Listing + détails projet ([slug])
│   ├── blog/                 # Listing + détails article ([slug])
│   ├── contact/              # Page contact
│   ├── opengraph-image.tsx   # OG dynamique
│   ├── icon.tsx              # Favicon dynamique
│   ├── apple-icon.tsx        # Apple touch icon
│   ├── sitemap.ts            # Sitemap auto
│   ├── robots.ts             # robots.txt
│   ├── layout.tsx            # Root layout + providers
│   └── globals.css           # Design tokens + base styles
├── components/
│   ├── ui/                   # Primitives shadcn (Button, Card, Input, etc.)
│   ├── layout/               # Navbar, Footer, ThemeProvider, SmoothScroll
│   ├── sections/             # Sections riches (Hero, Skills, Projects, etc.)
│   └── common/               # Composants transverses (SectionHeader, Counter, JsonLd)
├── data/                     # Données statiques (projets, skills, blog, etc.)
├── hooks/                    # Hooks custom
├── lib/                      # utils, config, validations
└── types/                    # Types TS partagés
```

## Design system

- Palette **vert premium** (brand-50 → brand-950) + neutres soignés.
- Mode **dark par défaut**, mode clair via next-themes.
- **Glassmorphism** subtil sur navbar et cards critiques.
- **Typographie** : Outfit (display), Inter (sans), JetBrains Mono (code).
- **Animations** : courbes ease cubique premium, micro-interactions partout.
- **Accessibilité** : focus-visible, contrastes AA+, `prefers-reduced-motion` respecté.

## Personnalisation

### Modifier les projets, articles, skills, expériences

Tout est typé et centralisé dans `src/data/` :
- `projects.ts` — projets et études de cas
- `skills.ts` — compétences (niveaux + catégories)
- `experience.ts` — parcours pro + formation + stats
- `services.ts` — offre de services
- `testimonials.ts` — témoignages
- `blog.ts` — articles de blog (Markdown léger inline)

### Modifier l'identité

`src/lib/site-config.ts` centralise nom, email, URL, navigation, réseaux sociaux.

## Déploiement Vercel

1. Push sur GitHub
2. [Importer le repo sur Vercel](https://vercel.com/new)
3. Définir `NEXT_PUBLIC_SITE_URL` et (optionnel) `RESEND_API_KEY` + `CONTACT_EMAIL`
4. Deploy

Le projet est déjà optimisé pour Edge Runtime sur les routes critiques.

## Performance

Objectifs Lighthouse (Mobile + Desktop) :

- Performance ≥ 95
- Accessibilité ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95

Optimisations incluses :
- Server Components par défaut
- `next/font` (Inter, Outfit, JetBrains Mono) auto-optimisé
- `optimizePackageImports` pour lucide & framer-motion
- Images en AVIF / WebP
- Code splitting agressif par route

## Licence

© MELI ZANGUE BILYOS MERVEIL. Tous droits réservés.

Le code de ce portfolio est ouvert à l'inspiration mais l'identité visuelle, les contenus et les projets présentés sont la propriété de leur auteur.

---

**Contact :** [melimerveil@gmail.com](mailto:melimerveil@gmail.com) · +237 659 09 31 16 · Douala, Cameroun
