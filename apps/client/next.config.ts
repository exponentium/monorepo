import type { NextConfig } from "next"

import CopyPlugin from "copy-webpack-plugin"
import path from "path"

const nextConfig: NextConfig = {
  compiler: {},
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {},
  webpack: (config, { isServer }) => {
    return config
  },
}

export default nextConfig
