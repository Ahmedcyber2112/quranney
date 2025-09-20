import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  webpack: (config, { isServer }) => {
    // إخفاء تحذيرات Genkit والمكتبات الاختيارية
    config.ignoreWarnings = [
      /Module not found: Can't resolve '@opentelemetry\/exporter-jaeger'/,
      /Module not found: Can't resolve '@genkit-ai\/firebase'/,
      /require\.extensions is not supported by webpack/,
    ];
    
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/islamic-pattern.svg',
        destination: 'https://www.heropatterns.com/uploads/patterns/islamic-pattern.svg',
      },
    ]
  },
};

export default nextConfig;
