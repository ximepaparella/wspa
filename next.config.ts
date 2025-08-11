import type { NextConfig } from 'next';

// Bundle analyzer setup - only import when needed

let withBundleAnalyzer: (config: NextConfig) => NextConfig = (
  config: NextConfig
) => config;
if (process.env.ANALYZE === 'true') {
  /* eslint-disable @typescript-eslint/no-require-imports */
  withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  });
}

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Experimental features for performance
  experimental: {
    optimizeServerReact: true,
  },

  // Headers for performance and security
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
