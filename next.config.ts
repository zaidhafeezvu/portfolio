import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
