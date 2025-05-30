/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion'],
  modularizeImports: {
    'framer-motion': {
      transform: 'framer-motion/dist/es/{{member}}'
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    domains: ['images.unsplash.com'],
  }
}

module.exports = nextConfig 