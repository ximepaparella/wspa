# W Spa - Next.js 15 Migration

Modern spa website built with Next.js 15, TypeScript, and Server Components, migrated from static HTML/CSS.

## 🚀 Quick Start

**Prerequisites**: Node.js 20+ and pnpm

```bash
# Switch to Node 20
nvm use 20

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

## 📜 Available Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm start            # Start production server

# Quality & Performance
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm format           # Format with Prettier
pnpm format:check     # Check formatting
pnpm type-check       # TypeScript validation

# Performance Monitoring
pnpm perf:check       # Check performance budgets
pnpm analyze          # Bundle size analysis
pnpm lhci             # Full Lighthouse audit
```

## 🏗️ Architecture

### Tech Stack

- **Next.js 15** with App Router
- **TypeScript** (strict mode)
- **Server Components** by default
- **CSS Modules + Sass** for styling
- **Self-hosted fonts** (Open Sans, Playfair Display)

### Project Structure

```
src/
├── app/              # Next.js App Router
├── styles/           # Global styles & design tokens
└── components/       # Reusable components (coming in E4)

public/
├── fonts/            # Self-hosted font files
└── ...               # Static assets

docs/                 # Documentation
scripts/              # Build & performance scripts
```

## 🎯 Performance Budgets

Following cursor rules for Core Web Vitals "green" targets:

- **LCP**: ≤ 2.5s
- **INP**: ≤ 200ms
- **CLS**: ≤ 0.1
- **Client JS**: ≤ 120KB gzipped per page

See [Performance Budgets](./docs/performance-budgets.md) for details.

## 🔧 Development Workflow

### Code Quality

- **ESLint** + **Prettier** configured
- **Husky** pre-commit hooks
- **TypeScript strict** mode
- **RSC-first** development (see [cursor rules](./cursorrules.md))

### Performance Monitoring

- **Lighthouse CI** for automated audits
- **Bundle analyzer** for size tracking
- **GitHub Actions** CI with quality gates

### Git Workflow

```bash
# Feature development
git checkout -b feature/your-feature
# ... make changes ...
pnpm lint && pnpm type-check
git add . && git commit -m "feat: your change"
git push origin feature/your-feature
# Open PR - CI will run automatically
```

## 📊 Migration Progress

- [x] **Epic E1 - Project Bootstrap** (T1.1-T1.3)
  - ✅ Next.js 15 foundation
  - ✅ Global CSS reset & fonts
  - ✅ Performance budgets & CI
- [ ] **Epic E2 - URL Parity & Routing**
- [ ] **Epic E3 - Data Layer**
- [ ] **Epic E4 - UI System & Styling**
- [ ] **Epic E5 - Client Islands**
- [ ] **Epic E6 - Page Implementations**
- [ ] **Epic E7 - Analytics & Tags**
- [ ] **Epic E8 - Performance & A11y**
- [ ] **Epic E9 - Documentation**

## 🌐 Original Site

The original HTML/CSS spa website is preserved in `_backup-original-site/` for reference during migration.

## 📋 Notes

- **Fonts**: Download required font files using instructions in `public/fonts/README.md`
- **Environment**: Copy `.env.local.example` to `.env.local` for local development
- **Performance**: Run `pnpm perf:check` before pushing changes

---

Built with ❤️ for W Spa - Whyndham Nordelta
