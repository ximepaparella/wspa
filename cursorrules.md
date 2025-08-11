# Cursor Rules — Next.js 15 (Server Components)

> Follow these rules when generating or editing code. Prefer performance, accessibility, and maintainability over convenience.

## 1) Defaults

- Use **Server Components by default**. Add `"use client"` **only** if browser APIs, interactivity, or non-RSC libs are required.
- **TypeScript strict**. No `any`. Prefer `unknown` + schema validation (Zod/Joi) at boundaries.
- **CSS Modules (+Sass)**. No runtime CSS-in-JS.
- Minimize dependencies; justify new deps in PR description.

## 2) Project Shape

```
app/(routes)/...        # RSC route trees
app/api/.../route.ts    # Route Handlers (server)
components/ui/*         # Reusable RSC primitives
components/client/*     # Client islands ("use client")
lib/fetcher/*           # RSC fetch helpers
lib/server/*            # server-only services/actions
styles/tokens.css       # CSS variables (design tokens)
```

## 3) Data Fetching & Caching (RSC)

- Fetch in RSC with `fetch(..., { next: { revalidate, tags } })`.
- Prefer **static/ISR** with clear TTLs. Use `revalidateTag` for freshness.
- Parallelize requests (`Promise.all`) and avoid waterfalls.
- **Do not** fetch in client components if the data can be fetched in RSC.

## 4) Server Actions (Mutations)

- Keep small, typed, validated. Call service functions; no business logic in components.
- On success, revalidate relevant tags. On failure, return safe user messages.

## 5) Client Islands (Interactivity)

- Scope narrowly (only what needs events or browser APIs).
- Stabilize props/callbacks to avoid re-renders. Memoize only when measured beneficial.
- Do not mark route roots or large trees `"use client"`.

## 6) Styling & Design Tokens

- Use CSS Modules. Derive variants via class maps; no global overrides.
- Use CSS variables from `styles/tokens.css` for spacing, colors, radius, typography.
- Respect `prefers-reduced-motion`.

## 7) Images, Fonts, Icons

- LCP image: **not lazy**, add `fetchpriority="high"`, explicit `width/height`, correct `sizes/srcset`.
- Non-LCP images: `loading="lazy"`, `decoding="async"`, explicit `width/height`. Prefer **AVIF/WebP**.
- Self-host fonts with `display: swap`; preload only above-the-fold weights.
- Use inline SVG components for icons.

## 8) State Management

- Prefer server state via RSC. Use client state only inside islands.
- Use TanStack Query **only** where client caching is required.
- Avoid global stores unless justified with a perf/complexity reason.

## 9) Performance Targets (p75 mobile)

- **LCP ≤ 2.5s**, **INP ≤ 200ms**, **CLS ≤ 0.1**.
- Initial client JS per page ≤ **120KB gz** (target). Keep islands small.
- Stream with `<Suspense>` for below-the-fold modules. Avoid blocking on non-critical data.

## 10) Accessibility

- WCAG AA. Labels for all inputs, keyboard navigable, visible focus.
- No keyboard traps. Associate errors via `aria-describedby`.

## 11) Code Quality

- ESLint (`eslint-config-next`, `@typescript-eslint`), Prettier, `lint-staged` on commit.
- Provide `loading.tsx`, `error.tsx`, and empty states in routes.
- Commit messages: `feat:`, `fix:`, `perf:`, `refactor:`, `chore:`.

## 12) PR Checklist (must pass)

- No unjustified `"use client"`.
- No runtime CSS-in-JS.
- RSC data fetching with proper `revalidate/tags`.
- Images have `width/height`, proper LCP handling.
- Lighthouse/CI doesn’t regress budgets (attach link or numbers).
- a11y basics verified (labels, focus, roles).

## 13) Anti‑Patterns (auto‑reject)

- Marking large trees or route roots as `"use client"`.
- Client-side fetching for data renderable in RSC.
- Lazy-loading the LCP image or missing explicit dimensions (CLS).
- Adding heavy deps for trivial tasks.
- Business logic inside components.

## 14) Snippets (use as templates)

### RSC fetch helper

```ts
// lib/fetcher/rscFetch.ts
export async function rscFetch<T>(
  url: string,
  opts: { revalidate?: number | false; tags?: string[] } = {}
): Promise<T> {
  const { revalidate = 60, tags } = opts;
  const res = await fetch(url, {
    next: { revalidate, tags },
    cache: revalidate === false ? 'no-store' : 'force-cache',
  });
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  return res.json() as Promise<T>;
}
```

### Responsive image (non-`next/image`)

```tsx
type ImgProps = {
  alt: string;
  width: number;
  height: number;
  src: string;
  srcSet?: string;
  sizes?: string;
  priority?: boolean;
};
export function ResponsiveImage({
  alt,
  width,
  height,
  src,
  srcSet,
  sizes,
  priority,
}: ImgProps) {
  return (
    <img
      alt={alt}
      width={width}
      height={height}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      loading={priority ? undefined : 'lazy'}
      decoding="async"
      fetchpriority={priority ? 'high' : undefined}
      style={{ aspectRatio: `${width}/${height}` }}
    />
  );
}
```

### Client island guard

```tsx
// components/client/Island.tsx
'use client';
import { memo } from 'react';
export const Island = memo(function Island({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
});
```
