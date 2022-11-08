/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com"
      },
      {
        hostname: "images.unsplash.com"
      },
      {
        hostname: "plus.unsplash.com"
      }
    ]
  }
}

module.exports = nextConfig
