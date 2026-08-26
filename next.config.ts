import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Samo WebP — AVIF enkodiranje je preskupo za mali server (DigitalOcean),
    // uzrokuje spore odgovore i timeoutove na /_next/image
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
    qualities: [70, 75, 80],
  },
};

export default nextConfig;
