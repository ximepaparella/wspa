# Pull Request Template - W Spa

## 📋 Description

<!-- Provide a brief description of the changes in this PR -->

**Type of Change**

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 Documentation update
- [ ] 🎨 Style/UI change
- [ ] ⚡ Performance improvement
- [ ] ♻️ Code refactoring
- [ ] 🧪 Test improvement

**Epic/Task Reference**

- Epic: <!-- E1, E2, E3, etc. -->
- Task: <!-- T1.1, T1.2, etc. -->
- Related Issues: <!-- #123, #456 -->

## 🚀 Changes Made

<!-- List the specific changes made in this PR -->

-
-
-

## ✅ RSC & Client Components Checklist

**Server Components (RSC) - Default Approach**

- [ ] Used Server Components by default
- [ ] Only added `"use client"` when browser APIs, interactivity, or non-RSC libs are required
- [ ] No unnecessary `"use client"` directives
- [ ] Maximized server-side rendering and data fetching
- [ ] Used RSC for data fetching instead of client-side fetching when possible

**Client Islands (if applicable)**

- [ ] Client components are scoped narrowly (only what needs events or browser APIs)
- [ ] Did not mark route roots or large trees as `"use client"`
- [ ] Stabilized props/callbacks to avoid re-renders
- [ ] Used memoization only when measured beneficial
- [ ] Client islands are minimal and focused

**Data Fetching & Caching**

- [ ] Used `fetch(..., { next: { revalidate, tags } })` for RSC data fetching
- [ ] Implemented proper cache tags for revalidation
- [ ] Parallelized requests with `Promise.all` to avoid waterfalls
- [ ] Used static/ISR with clear TTLs where appropriate

## 🎨 CSS & Styling Checklist

**CSS Modules & Design Tokens**

- [ ] Used CSS Modules for component-specific styles
- [ ] Utilized CSS variables from `styles/tokens.css`
- [ ] No global style overrides (except in global files)
- [ ] Derived component variants via class maps
- [ ] Respected `prefers-reduced-motion` for animations

**Performance & Best Practices**

- [ ] No runtime CSS-in-JS
- [ ] Optimized for CSS delivery and critical path
- [ ] Used semantic HTML structure
- [ ] Maintained visual consistency with original design

## 🌐 Images & Assets Checklist

**Next.js Image Optimization**

- [ ] Used Next.js `Image` component for all images
- [ ] LCP image is **not lazy** and has `fetchpriority="high"`
- [ ] Non-LCP images use `loading="lazy"` and `decoding="async"`
- [ ] All images have explicit `width` and `height` attributes
- [ ] Implemented proper `sizes` and `srcset` for responsive images
- [ ] Used AVIF/WebP formats where possible

**Performance Considerations**

- [ ] LCP image optimized for Core Web Vitals
- [ ] Images compressed appropriately
- [ ] Alt text provided for accessibility
- [ ] Prevented Cumulative Layout Shift (CLS)

## ♿ Accessibility (A11y) Checklist

**WCAG AA Compliance**

- [ ] All interactive elements are keyboard navigable
- [ ] Focus states are visible and properly styled
- [ ] Labels provided for all form inputs
- [ ] Proper heading hierarchy (h1 → h2 → h3, etc.)
- [ ] Alt text for all images (decorative images have `alt=""`)
- [ ] Color contrast meets WCAG AA standards (4.5:1 for normal text)

**ARIA & Semantic HTML**

- [ ] Used semantic HTML elements (`<nav>`, `<main>`, `<section>`, etc.)
- [ ] ARIA roles and properties used correctly
- [ ] Form errors associated via `aria-describedby`
- [ ] No keyboard traps
- [ ] Screen reader tested (or considered)

**Focus Management**

- [ ] Logical tab order
- [ ] Focus doesn't get lost or trapped
- [ ] Skip links provided for main content (if applicable)

## ⚡ Performance Checklist

**Core Web Vitals**

- [ ] LCP (Largest Contentful Paint) ≤ 2.5s
- [ ] INP (Interaction to Next Paint) ≤ 200ms
- [ ] CLS (Cumulative Layout Shift) ≤ 0.1
- [ ] Client JS bundle ≤ 120KB gzipped per page

**Performance Monitoring**

- [ ] Ran `pnpm perf:check` locally
- [ ] Bundle size within budget
- [ ] No significant performance regressions
- [ ] Lighthouse scores maintained or improved

**Optimization Techniques**

- [ ] Used dynamic imports for large components
- [ ] Minimized client-side JavaScript
- [ ] Implemented proper caching headers
- [ ] Used `Suspense` for below-the-fold content (if applicable)

## 🧪 Testing & Quality

**Code Quality**

- [ ] All linting passes (`pnpm lint`)
- [ ] TypeScript strict mode passes (`pnpm type-check`)
- [ ] Code is properly formatted (`pnpm format:check`)
- [ ] Pre-commit hooks pass

**Functionality Testing**

- [ ] Tested in development environment
- [ ] Tested responsive design (mobile, tablet, desktop)
- [ ] Cross-browser compatibility verified
- [ ] No console errors or warnings

**Performance Testing**

- [ ] Build completes successfully (`pnpm build`)
- [ ] Performance budgets met (`pnpm perf:check`)
- [ ] Lighthouse CI passes (will run in CI)

## 📊 Performance Impact

**Bundle Size Changes**

<!-- Run `pnpm analyze` and report significant changes -->

- Before: <!-- XXkB -->
- After: <!-- XXkB -->
- Difference: <!-- +/-XXkB -->

**Lighthouse Scores**

<!-- Include before/after scores if significant changes -->

- Performance: <!-- XX/100 -->
- Accessibility: <!-- XX/100 -->
- Best Practices: <!-- XX/100 -->
- SEO: <!-- XX/100 -->

## 📸 Screenshots (if applicable)

<!-- Include screenshots for UI changes -->

**Before:**

<!-- Screenshot -->

**After:**

<!-- Screenshot -->

## 🔗 Additional Notes

<!-- Any additional context, deployment notes, or special considerations -->

## ✅ Pre-merge Checklist

- [ ] PR title follows conventional commits format (`feat:`, `fix:`, `perf:`, etc.)
- [ ] All CI checks pass (quality, performance, accessibility)
- [ ] Code has been reviewed by at least one team member
- [ ] Documentation updated (if applicable)
- [ ] Migration progress updated in README (if applicable)

---

**Reviewer Guidelines:**

- Verify RSC usage is appropriate and client components are minimal
- Check accessibility with keyboard navigation and screen reader
- Confirm performance budgets are met
- Validate visual consistency with original W Spa design
- Ensure code follows cursor rules and Epic requirements
