#!/usr/bin/env node

/**
 * Performance Check Script for W Spa
 *
 * This script helps developers check performance budgets locally
 * before pushing to CI. It analyzes the build output and reports
 * bundle sizes against our defined budgets.
 */

/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Performance budgets (matching cursor rules)
const BUDGETS = {
  LCP: 2500, // Largest Contentful Paint ≤ 2.5s
  INP: 200, // Interaction to Next Paint ≤ 200ms
  CLS: 0.1, // Cumulative Layout Shift ≤ 0.1
  JS_BUDGET_KB: 120, // Client JS per page ≤ 120KB gz
};

console.log('🔍 W Spa Performance Check\n');

try {
  // Check if build exists
  const buildDir = path.join(process.cwd(), '.next');
  if (!fs.existsSync(buildDir)) {
    console.log('⚠️  No build found. Running build...\n');
    execSync('pnpm build', { stdio: 'inherit' });
  }

  // Analyze bundle sizes
  console.log('📦 Bundle Size Analysis\n');

  const chunksDir = path.join(buildDir, 'static', 'chunks');
  if (fs.existsSync(chunksDir)) {
    const files = fs.readdirSync(chunksDir);
    const jsFiles = files.filter((file) => file.endsWith('.js'));

    let totalSize = 0;
    const fileSizes = [];

    jsFiles.forEach((file) => {
      const filePath = path.join(chunksDir, file);
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      totalSize += sizeKB;
      fileSizes.push({ file, sizeKB });
    });

    // Sort by size (largest first)
    fileSizes.sort((a, b) => b.sizeKB - a.sizeKB);

    console.log('JavaScript Bundles:');
    fileSizes.slice(0, 10).forEach(({ file, sizeKB }) => {
      const indicator = sizeKB > 50 ? '🔴' : sizeKB > 20 ? '🟡' : '🟢';
      console.log(`  ${indicator} ${file}: ${sizeKB}KB`);
    });

    if (fileSizes.length > 10) {
      console.log(`  ... and ${fileSizes.length - 10} more files\n`);
    } else {
      console.log('');
    }

    // Check against budget
    const isWithinBudget = totalSize <= BUDGETS.JS_BUDGET_KB;
    const budgetIcon = isWithinBudget ? '✅' : '❌';
    const budgetStatus = isWithinBudget ? 'PASS' : 'FAIL';

    console.log(
      `${budgetIcon} Total JS Bundle: ${totalSize}KB / ${BUDGETS.JS_BUDGET_KB}KB budget - ${budgetStatus}\n`
    );

    if (!isWithinBudget) {
      console.log('💡 Tips to reduce bundle size:');
      console.log('  • Use dynamic imports for large components');
      console.log('  • Remove unused dependencies');
      console.log('  • Enable tree shaking');
      console.log('  • Consider code splitting\n');
    }
  }

  // Performance budgets summary
  console.log('🎯 Performance Budgets Summary\n');
  console.log(`  • LCP (Largest Contentful Paint): ≤ ${BUDGETS.LCP}ms`);
  console.log(`  • INP (Interaction to Next Paint): ≤ ${BUDGETS.INP}ms`);
  console.log(`  • CLS (Cumulative Layout Shift): ≤ ${BUDGETS.CLS}`);
  console.log(`  • Client JS per page: ≤ ${BUDGETS.JS_BUDGET_KB}KB gzipped\n`);

  console.log('🚀 Run `pnpm lhci` to test against full Lighthouse budgets');
  console.log('📊 Run `pnpm analyze` to open bundle analyzer\n');
} catch (error) {
  console.error('❌ Performance check failed:', error.message);
  process.exit(1);
}
