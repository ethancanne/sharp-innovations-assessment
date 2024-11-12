import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/sharp-innovations-assessment',
  output: 'export',
  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
};

export default nextConfig;
