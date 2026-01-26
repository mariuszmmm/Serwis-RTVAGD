const basePath = process.env.NEXT_PUBLIC_BASE_URL || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  compiler: { styledComponents: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
};

module.exports = nextConfig;
