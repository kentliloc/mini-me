import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["maps.googleapis.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io'
      }
    ]
  },
};

export default nextConfig;