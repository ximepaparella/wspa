# Performance Budgets - W Spa

## Overview

This document outlines the performance budgets for the W Spa Next.js application, following the cursor rules and Epic E1 requirements.

## Core Web Vitals Targets

Our performance targets are designed to achieve "green" Core Web Vitals scores:

| Metric  | Target  | Description                                                       |
| ------- | ------- | ----------------------------------------------------------------- |
| **LCP** | ≤ 2.5s  | Largest Contentful Paint - when the main content finishes loading |
| **INP** | ≤ 200ms | Interaction to Next Paint - responsiveness to user interactions   |
| **CLS** | ≤ 0.1   | Cumulative Layout Shift - visual stability of the page            |

## Bundle Size Budgets

| Asset Type             | Budget            | Notes                              |
| ---------------------- | ----------------- | ---------------------------------- |
| **Client JS per page** | ≤ 120KB (gzipped) | Total JavaScript sent to browser   |
| **CSS per page**       | ≤ 50KB (gzipped)  | Stylesheets for initial render     |
| **Images (LCP)**       | ≤ 500KB           | Hero/above-the-fold images         |
| **Total page weight**  | ≤ 1.6MB           | Complete page including all assets |

## Lighthouse Scores

| Category           | Minimum Score | Target Score |
| ------------------ | ------------- | ------------ |
| **Performance**    | 90            | 95+          |
| **Accessibility**  | 95            | 100          |
| **Best Practices** | 90            | 95+          |
| **SEO**            | 90            | 95+          |

## Monitoring & Enforcement

### Automated Checks

1. **GitHub Actions CI**
   - Runs on every PR and push to main
   - Fails if budgets are exceeded
   - Generates Lighthouse reports

2. **Bundle Analysis**
   - Tracks JavaScript bundle sizes
   - Alerts on significant increases
   - Available via `pnpm analyze`

3. **Lighthouse CI**
   - Tests against Core Web Vitals
   - Configurable thresholds in `lighthouserc.json`
   - Run locally with `pnpm lhci`

### Local Development

```bash
# Check performance budgets
pnpm perf:check

# Analyze bundle sizes with visual report
pnpm analyze

# Run full Lighthouse audit
pnpm lhci

# Build and check types/lint
pnpm build && pnpm lint && pnpm type-check
```

### Performance Optimization Checklist

#### JavaScript

- [ ] Use dynamic imports for non-critical components
- [ ] Implement code splitting at route level
- [ ] Remove unused dependencies
- [ ] Enable tree shaking
- [ ] Use React.lazy() for large components
- [ ] Minimize third-party scripts

#### CSS

- [ ] Use CSS Modules for component styles
- [ ] Implement critical CSS inline
- [ ] Remove unused CSS rules
- [ ] Use CSS variables from design tokens
- [ ] Optimize font loading with display: swap

#### Images

- [ ] Use Next.js Image component
- [ ] Optimize images (AVIF/WebP formats)
- [ ] Implement lazy loading for below-fold images
- [ ] Set explicit width/height to prevent CLS
- [ ] Use appropriate sizes and srcset

#### Server Components

- [ ] Maximize use of Server Components
- [ ] Minimize client-side JavaScript
- [ ] Use RSC for data fetching
- [ ] Avoid unnecessary "use client" directives

## Budget Thresholds

### Warning Levels

- **Green**: Within budget (good performance)
- **Yellow**: 80-100% of budget (monitor closely)
- **Red**: Exceeds budget (requires optimization)

### Emergency Thresholds

If any of these are exceeded, deployment should be blocked:

- LCP > 4.0s
- Bundle size > 200KB (gzipped)
- Lighthouse Performance score < 70

## Tools & Resources

- **Bundle Analyzer**: Visual analysis of JavaScript bundles
- **Lighthouse CI**: Automated performance testing
- **Next.js Build Output**: Real-time bundle size feedback
- **Performance Check Script**: Custom budget validation

## Reporting

Performance metrics are tracked in:

1. GitHub Actions CI results
2. Lighthouse CI reports (uploaded as artifacts)
3. Bundle analyzer reports
4. Build output summaries

For questions about performance budgets, see the [cursor rules](../cursorrules.md) or Epic E1 requirements.
