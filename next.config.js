/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Disable ESLint during production build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during production build
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
