import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
        protocol: 'https',
        hostname: 'eu-images.contentstack.com',
        port: '',
        pathname: '/v3/assets/**'
    }],
  }
};

export default nextConfig;
