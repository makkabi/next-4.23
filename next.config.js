/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // Bildgrößen, hier ist es überlegenswert, den größten Wert
    // aus der Standard Konfiguration (3840) zu verkleinern.
    deviceSizes: [640, 768, 1080, 1200, 1920, 2048, 2560],
    formats: ['image/avif', 'image/webp'],
    // https://beta.nextjs.org/docs/api-reference/components/image#remotepatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'react.webworker.berlin',
      },
    ],
  },
};

module.exports = nextConfig;
