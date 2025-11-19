// next.config.ts (Pastikan file ini sudah di-restart setelah diubah)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // SOURCE: Sekarang harus menangkap versi (v1beta atau v1) dan sisa path
        source: "/api/gemini/:version/:path*", // DESTINATION: Meneruskan versi dan path ke Google API
        destination:
          "https://generativelanguage.googleapis.com/:version/:path*",
      },
    ];
  },
};

export default nextConfig;
