import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/sharp-innovations-assessment',

  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
};

export default nextConfig;
