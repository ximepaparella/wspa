# **Epic E1 — Project Bootstrap & Foundations**

**Goal:** Set up the repo with quality gates, performance budgets, and coding standards.

## **User Stories**

**S1.1** As a developer, I want a Next.js 15 \+ TS Strict app scaffold so that I can build with RSC by default.  
 **S1.2** As a tech lead, I want linting/formatting/CI so that code quality is enforced automatically.  
 **S1.3** As a perf owner, I want budgets and tooling to prevent regressions.

## **Tasks**

- **T1.1** Initialize Next.js 15 (App Router) with TypeScript strict, ESLint, Prettier, Husky \+ lint-staged.

- **T1.2** Configure `app/layout.tsx` with global CSS reset and `@font-face` for current fonts (self-hosted).

- **T1.3** Add **Lighthouse CI** and a **bundle analyzer**; define budgets (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, ≤120KB gz client JS/page).

- **T1.4** Add **Chromatic/Storybook** optional (if you want a component catalog) with RSC-safe stories (or skip if not needed).

- **T1.5** Create **PR template** (RSC by default, island checklist, a11y checklist, perf diffs).

- **T1.6** Migrate assets to `public/` (`/img`, `/fonts`, favicons). Preserve filenames/paths to keep current URLs stable where applicable.

**Acceptance Criteria**

- Repo installs and runs with `pnpm dev` (or npm/yarn).

- CI runs ESLint \+ typecheck \+ Lighthouse CI on PRs.

- Global styles load, fonts render with `font-display: swap`.

---

# **Epic E2 — URL Parity & Routing**

**Goal:** Preserve existing paths exactly.

## **User Stories**

**S2.1** As an SEO owner, I need the same public routes so rankings and links are preserved.

## **Tasks**

- **T2.1** Create routes:  
   `/`, `/circuitos-de-spa`, `/tratamientos`, `/membresias`, `/contacto`, `/terminos-y-condiciones`.

- **T2.2** Add Next `sitemap.xml` \+ `robots.txt`.

- **T2.3** Implement per-route `generateMetadata()` (title/description/OG) matching current site.

**Acceptance Criteria**

- Navigating to any old URL serves equivalent content.

- Metadata validated via HTML inspect and social debuggers (OG tags present).

---

# **Epic E3 — Data Layer (Static Now → API Ready)**

**Goal:** Render all content from structured JSON now, with a clear swap path to API later.

## **User Stories**

**S3.1** As a content maintainer, I want JSON files per page so content is editable today.  
 **S3.2** As a developer, I want a fetch facade so we can later replace JSON with API without refactors.

## **Tasks**

- **T3.1** Define `data/*.json` for each route (hero, sections, cards, images with `width/height/alt`).

- **T3.2** Build `lib/fetcher/rscFetch.ts` that today imports JSON, later can `fetch('/api/...')`.

- **T3.3** Tag-based revalidation contract (`tags: ['home','tratamientos',…]`) ready for phase-2 API.

**Acceptance Criteria**

- Pages render server-side from JSON.

- Swapping a JSON field updates the UI on refresh; typing validated in TS.

---

# **Epic E4 — UI System & Styling Migration**

**Goal:** Move from global SCSS to **CSS Modules \+ Sass**, keeping look & feel.

## **User Stories**

**S4.1** As a developer, I want reusable primitives to assemble pages quickly.  
 **S4.2** As a designer, I want the new site to look identical to the current one.

## **Tasks**

- **T4.1** Extract design tokens from SCSS → `styles/tokens.css` (colors, spacing, radii, breakpoints).

- **T4.2** Minimal `globals.css` (normalize/reset \+ `@font-face`).

- **T4.3** Components (RSC unless noted): `Container`, `Section`, `Grid`, `PageTitle`, `Card`, `Price`, `Badge`, `ButtonLink`, `ResponsiveImage`.

- **T4.4** Migrate SCSS into module files (e.g., `Card.module.scss`, `Price.module.scss`) preserving selectors visually.

- **T4.5** Header/Footer as RSC; keep navigation semantics and current HTML structure.

**Acceptance Criteria**

- Visual parity screenshot diffs pass within tolerance.

- No global leakage: styles are module-scoped aside from tokens/reset.

---

# **Epic E5 — Client Islands (Drop jQuery)**

**Goal:** Replace jQuery components with lean, accessible client components.

## **User Stories**

**S5.1** As a user, I want a smooth carousel/slider without loading heavy libraries.  
 **S5.2** As a user, I want modals that are keyboard accessible and trap focus.

## **Tasks**

- **T5.1** Build `components/client/Slider` (no deps, or minimal Motion).
  - Keyboard support, swipe on touch, lazy image loading, `prefers-reduced-motion` respected.

- **T5.2** Build `components/client/Modal` with focus trap, ESC to close, ARIA roles/labels.

- **T5.3** Replace any jQuery hooks with React props/state. Remove all jQuery artifacts.

**Acceptance Criteria**

- Slider works with keyboard/touch; Lighthouse a11y ≥ 95\.

- No jQuery present in dependency graph.

---

# **Epic E6 — Page Implementations (RSC First)**

**Goal:** Rebuild each page as Server Components using data \+ UI primitives.

## **User Stories**

**S6.1** As a visitor, I want the homepage content (hero/slider/sections) to load fast and look the same.  
 **S6.2–S6.5** As a visitor, I want each interior page to match current content structure.

## **Tasks**

- **T6.1** `/` Home: hero (LCP image with `fetchpriority="high"`), slider (client island), services grid/cards.

- **T6.2** `/circuitos-de-spa`: sections rendered from JSON; images responsive.

- **T6.3** `/tratamientos`: grid/cards; ensure headings hierarchy.

- **T6.4** `/membresias`: price component with proper semantics.

- **T6.5** `/contacto`: SSR form markup (no JS) with field labels/validation states (server action deferred).

- **T6.6** `/terminos-y-condiciones`: long-form content styles (readability, anchor nav if needed).

**Acceptance Criteria**

- All pages render fully SSR; JS only loads for islands.

- CLS \< 0.1; images have explicit `width/height` and `sizes/srcset`.

---

# **Epic E7 — Analytics & Tags**

**Goal:** GA4 \+ Meta Pixel integrated without hurting performance.

## **User Stories**

**S7.1** As a marketer, I want GA4 and Meta Pixel firing on all pages.  
 **S7.2** As a perf owner, I want tags to be async and minimally intrusive.

## **Tasks**

- **T7.1** Implement GA4 via Next’s `app/layout.tsx` using async script injection; consent hooks placeholder if needed.

- **T7.2** Implement Meta Pixel similarly; document events needing future mapping.

- **T7.3** Validate tag firing in GA DebugView and Meta Event Manager.

**Acceptance Criteria**

- Pageview events visible in GA4/Meta test tools.

- No blocking scripts; LCP budget holds.

---

# **Epic E8 — Performance, A11y & SEO Hardening**

**Goal:** Lock in quality bars before launch.

## **User Stories**

**S8.1** As a user, I want fast, stable pages.  
 **S8.2** As an accessibility advocate, I want the site to be usable via keyboard/screen readers.  
 **S8.3** As SEO, I want proper metadata and structured content.

## **Tasks**

- **T8.1** Convert large JPGs → AVIF/WebP (keep original filenames and add `type` fallback only if needed).

- **T8.2** Add `<Suspense>` around below-the-fold sections to stream.

- **T8.3** A11y pass (axe \+ manual): headings order, alt text from JSON, focus states, color contrast.

- **T8.4** Schema.org (where relevant) and canonical tags.

- **T8.5** Playwright smoke tests for each route (nav, critical content present).

- **T8.6** Final Lighthouse CI thresholds enforced in PRs.

**Acceptance Criteria**

- Lighthouse: Perf ≥ 90, A11y ≥ 95, SEO ≥ 90 on mobile emulation.

- Automated tests pass in CI.

---

# **Epic E9 — Documentation & Handover**

**Goal:** Make changes easy after launch.

## **User Stories**

**S9.1** As a developer, I want docs on adding pages/sections/islands.  
 **S9.2** As a PM, I want a release checklist.

## **Tasks**

- **T9.1** `docs/architecture.md`: RSC-first guidelines, folder structure, data model, island rules.

- **T9.2** `docs/content.md`: how to edit `data/*.json`, image handling, alt text policy.

- **T9.3** `docs/perf-and-a11y.md`: budgets, checklists, testing steps.

- **T9.4** Release checklist (SEO/verifications, redirects if ever needed, analytics validation).

**Acceptance Criteria**

- A new contributor can add a page or card by following docs only.

- Release checklist used for the launch PR.

---

## **Definition of Done (for all tickets)**

- TypeScript strict passes; ESLint/Prettier clean.

- No client code in RSC paths unless explicitly marked `"use client"`.

- Images have explicit dimensions; responsive `sizes`.

- A11y checks (axe/lighthouse) show no critical issues.

- Performance budgets met in CI.

---

## **Risks & Mitigations**

- **Asset weight (images):** Convert to AVIF/WebP; keep exact paths where possible; compress aggressively.

- **Overuse of client components:** PR template \+ CI to flag `"use client"` additions; review bundle analyzer on PRs.

- **Tag scripts impacting LCP:** Load async/defer; place in `layout.tsx` with minimal inline code.

- **Style drift in migration:** Tokenize early, run visual diffs on key pages.

---

## **Optional Phase 2 (post-launch) — API & ABM**

- Introduce `app/api/*` route handlers mirroring JSON shapes.

- Swap `lib/fetcher` from JSON import to `fetch` with `revalidate` \+ `tags`.

- Add `contact` form **Server Action** with validation (Zod) \+ notifications.

1.
