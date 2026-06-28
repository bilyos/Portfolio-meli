import type { BlogPost } from "@/types";

const author = {
  name: "Meli Zangue Bilyos Merveil",
  avatar: "/avatar.jpg",
};

export const posts: BlogPost[] = [
  {
    slug: "architecture-saas-multitenant-2026",
    title: "Architecturer un SaaS multi-tenant en 2026 : guide pragmatique",
    excerpt:
      "Pool, silo, ou bridge model ? Comment choisir l'architecture multi-tenant qui ne vous explosera pas à la figure à 1 000 clients.",
    content: `# Architecturer un SaaS multi-tenant en 2026

Le multi-tenant est l'un des choix les plus structurants d'un SaaS. Choisir mal, c'est se condamner à une réécriture coûteuse à 1 000 clients. Voici un guide pragmatique.

## Les 3 grandes familles

### 1. Pool model (schéma partagé)
Tous les tenants partagent les mêmes tables, avec un \`tenant_id\` partout. Simple, économique, mais demande une discipline d'enfer pour ne pas leaker entre tenants.

### 2. Silo model (DB par tenant)
Chaque tenant a sa propre base. Isolation parfaite, mais coût d'infra et complexité de déploiement multipliés.

### 3. Bridge model (schéma par tenant)
Compromis : une base, un schéma par tenant. Bonne isolation, coût raisonnable.

## Comment choisir ?

| Critère | Pool | Silo | Bridge |
|---|---|---|---|
| Coût d'infra | 🟢 | 🔴 | 🟡 |
| Isolation | 🔴 | 🟢 | 🟢 |
| Onboarding | 🟢 | 🔴 | 🟡 |

> Mon conseil : commencez en pool, migrez vers bridge si la régulation l'exige.

## Code : middleware tenant en Next.js

\`\`\`ts
export function withTenant(handler) {
  return async (req, res) => {
    const tenantId = await resolveTenant(req);
    req.tenant = tenantId;
    return handler(req, res);
  };
}
\`\`\`

## Conclusion

Le bon multi-tenant, c'est celui qui se réajuste au business. Pas l'inverse.`,
    category: "Architecture",
    tags: ["SaaS", "Architecture", "Multi-tenant", "PostgreSQL"],
    publishedAt: "2026-05-12",
    readingTime: 8,
    cover: "/blog/multitenant-cover.jpg",
    author,
    featured: true,
  },
  {
    slug: "nextjs-app-router-erreurs",
    title: "10 erreurs que je vois encore dans les apps Next.js App Router",
    excerpt:
      "Server Components mal utilisés, fetch redondants, hydratation cassée... voici les 10 pièges à éviter dans vos projets Next.js modernes.",
    content: `# 10 erreurs Next.js App Router

L'App Router est puissant, mais piège facilement. Voici ce que je vois le plus souvent.

## 1. Mettre "use client" partout
Réflexe de panique. Pourtant 80% de votre arbre peut rester Server Component. Réservez "use client" aux composants qui ont besoin de hooks ou d'événements.

## 2. Fetch dans des Client Components
Vous perdez le cache automatique de Next. Préférez un Server Component parent qui fetch et passe les données en props.

## 3. Oublier \`revalidate\`
Tout est statique par défaut. Si vos données changent, configurez \`revalidate\` ou utilisez \`fetch(..., { next: { revalidate: 60 } })\`.

## 4. Mauvaise gestion des erreurs
\`error.tsx\` est votre ami. Ajoutez-en un par route significative.

## 5. Loading states absents
\`loading.tsx\` réduit la perception de latence de 40%.

## 6. Trop de Suspense imbriqués
Suspense est puissant mais explose le LCP s'il est mal placé. Mesurez avant.

## 7. Metadata oubliée
La metadata API est puissante. Utilisez \`generateMetadata\` pour les pages dynamiques.

## 8. Pas de typage strict
Configurez \`strict: true\` dans \`tsconfig.json\`. Toujours.

## 9. Composants UI dans des Server Components
Si vous utilisez shadcn/ui, attention : la plupart des composants sont des Client Components.

## 10. Oublier les Server Actions
Pour les mutations, Server Actions remplacent souvent toute une API route.`,
    category: "Next.js",
    tags: ["Next.js", "React", "Performance"],
    publishedAt: "2026-04-03",
    readingTime: 6,
    cover: "/blog/nextjs-cover.jpg",
    author,
    featured: true,
  },
  {
    slug: "spring-boot-microservices-realite",
    title: "Microservices Spring Boot : la réalité après 3 ans en production",
    excerpt:
      "Promesses tenues, dette technique non anticipée, choix qu'on referait, choix qu'on regrette : un retour d'expérience honnête.",
    content: `# Microservices Spring Boot : retour terrain

3 ans en production. 8 services. 30 développeurs cumulés. Voici ce qu'on a appris.

## Ce qui a marché
- Découplage déploiement par service
- Choix de stacks différentes selon les besoins (Java pour transactionnel, Node pour temps réel)
- Scaling indépendant des services chauds

## Ce qui a fait mal
- Latence distribuée mal mesurée au début
- Manque d'observabilité (on a ajouté Grafana / Loki / Tempo après coup)
- Coût opérationnel sous-estimé (CI/CD x8, secrets x8, monitoring x8)

## Ce qu'on referait
- Démarrer en monolithe modulaire (Spring Modulith)
- Extraire un service uniquement quand la friction est réelle

## Conclusion
Les microservices ne sont pas une cible, c'est une réponse à un problème. Si vous n'avez pas le problème, ne payez pas le coût.`,
    category: "Backend",
    tags: ["Spring Boot", "Microservices", "Architecture"],
    publishedAt: "2026-02-18",
    readingTime: 7,
    cover: "/blog/spring-cover.jpg",
    author,
  },
  {
    slug: "tailwind-design-system-tokens",
    title: "Construire un design system avec Tailwind et des CSS variables",
    excerpt:
      "Design tokens, thèmes light/dark, variants typographiques : la stack design système que j'utilise sur tous mes produits.",
    content: `# Design system avec Tailwind + CSS variables

Un design system propre commence par des tokens. Voici ma stack.

## Les tokens
Couleurs, typographie, espacement, ombres, rayons — tout passe par des CSS variables.

\`\`\`css
:root {
  --primary: 160 84% 39%;
  --radius: 0.75rem;
}
\`\`\`

## Tailwind comme moteur
Tailwind lit ces variables via le mapping dans \`tailwind.config\`.

## Thèmes light/dark
Une seule règle CSS \`.dark\` et tous les composants se thématisent automatiquement.

## Composants
shadcn/ui pour la base, surcouche maison pour la personnalité.

## Documentation vivante
Storybook ou route \`/styleguide\` interne — pour ne jamais réinventer.`,
    category: "Design",
    tags: ["Tailwind", "Design System", "Frontend"],
    publishedAt: "2026-01-09",
    readingTime: 5,
    cover: "/blog/design-cover.jpg",
    author,
  },
  {
    slug: "construire-startup-cameroun",
    title: "Construire une startup tech depuis le Cameroun en 2026",
    excerpt:
      "Réalités du terrain, hacks de productivité, accès au capital, recrutement : ce que j'ai appris en 4 ans.",
    content: `# Construire une startup tech depuis le Cameroun

Pas un guide théorique : ce qui m'a marché, et ce qui m'a coûté cher.

## L'infra
- Vercel + Supabase ou Railway pour démarrer
- Cloudflare R2 pour le storage à bas coût
- Mobile Money en intégration native (MTN MoMo, Orange Money)

## Le talent
- Communautés Discord / Slack tech francophones
- Open source comme vitrine recrutement
- Stagiaires IUC / ESIH formés en interne

## Le financement
- Bootstrap d'abord (services pour financer le produit)
- Concours et accélérateurs (Orange Fab, Seedstars)
- Diaspora investors

## La leçon
Le contexte impose des contraintes, pas des limites.`,
    category: "Entrepreneuriat",
    tags: ["Startup", "Cameroun", "SaaS"],
    publishedAt: "2025-12-15",
    readingTime: 6,
    cover: "/blog/cameroun-cover.jpg",
    author,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export const blogCategories = Array.from(new Set(posts.map((p) => p.category)));
