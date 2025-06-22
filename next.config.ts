import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/personal-finance-app",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
