import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  basePath: '/sharp-innovations-assessment',
};

export default nextConfig;
