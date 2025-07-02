import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
    useCache: true,
    clientSegmentCache: true,
    devtoolNewPanelUI: true,
    devtoolSegmentExplorer: true,
  },
};

export default nextConfig;
