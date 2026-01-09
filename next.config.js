/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // accept all https domains
      },
      {
        protocol: "http",
        hostname: "**", // also allow http if needed
      },
    ],
  },
  // Disable caching for API routes
  async headers() {
    return [
      {
        source: "/v1/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
    ];
  },
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL ||
      "https://api.sufisciencecenter.info/v1",
    NEXT_PUBLIC_BACKEND_URL:
      process.env.NEXT_PUBLIC_BACKEND_URL ||
      "https://api.sufisciencecenter.info",
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",
  },
  async redirects() {
    return [
      {
        source: "/foundationalmatrices",
        destination: "/explore/foundationalmatrices",
        permanent: false,
      },
      {
        source: "/ecologicalintelligence",
        destination: "/explore/ecologicalintelligence",
        permanent: false,
      },
      {
        source: "/consciousnessgeometries",
        destination: "/explore/consciousnessgeometries",
        permanent: false,
      },
      {
        source: "/perceptualgateways",
        destination: "/explore/perceptualgateways",
        permanent: false,
      },
      {
        source: "/realityframeworks",
        destination: "/explore/realityframeworks",
        permanent: false,
      },
      {
        source: "/cosmicharmonics",
        destination: "/explore/cosmicharmonics",
        permanent: false,
      },
      {
        source: "/energeticarchitectures",
        destination: "/explore/energeticarchitectures",
        permanent: false,
      },
      {
        source: "/characteralchemy",
        destination: "/explore/characteralchemy",
        permanent: false,
      },
      {
        source: "/unitysciences",
        destination: "/explore/unitysciences",
        permanent: false,
      },
      {
        source: "/healingmysteries",
        destination: "/explore/healingmysteries",
        permanent: false,
      },
      {
        source: "/wisdomtransmission",
        destination: "/explore/wisdomtransmission",
        permanent: false,
      },
      {
        source: "/sacredartistry",
        destination: "/explore/sacredartistry",
        permanent: false,
      },
      {
        source: "/advancedtechnologies",
        destination: "/explore/advancedtechnologies",
        permanent: false,
      },
      {
        source: "/dialogseries",
        destination: "/academy/dialogseries",
        permanent: false,
      },
      {
        source: "/hardtalk",
        destination: "/academy/hardtalk",
        permanent: false,
      },
      {
        source: "/sacredprofessions",
        destination: "/academy/sacredprofessions",
        permanent: false,
      },
      {
        source: "/inspiringinterview",
        destination: "/academy/inspiringinterview",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL ||
      "https://api.sufisciencecenter.info";

    // Only proxy CMS requests in development mode
    if (process.env.NODE_ENV !== 'production') {
      const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3010";

      return [
        // API proxy to backend
        {
          source: "/v1/:path*",
          destination: `${backendUrl}/v1/:path*`,
        },
        // Proxy CMS content API requests to the local CMS server in development
        {
          source: "/api/content/:path*",
          destination: `${cmsUrl}/api/content/:path*`,
        },
      ];
    } else {
      // In production, no proxy needed for CMS - it will connect directly to the deployed CMS
      return [
        // API proxy to backend
        {
          source: "/v1/:path*",
          destination: `${backendUrl}/v1/:path*`,
        },
      ];
    }
  },
};

module.exports = nextConfig;
