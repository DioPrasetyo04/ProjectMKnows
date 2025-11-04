import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/gemini/:path*",
        destination: "https://generativelanguage.googleapis.com/:path*",
      },
    ];
  },
};

export default nextConfig;
