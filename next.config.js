/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Tells Next.js that the app is hosted under /healthcare
  basePath: '/healthcare',

  // 2. Required for GitHub Pages static hosting
  output: 'export',

  // 3. Disables server-side image optimization since GitHub Pages is purely static
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
