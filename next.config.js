const isGithubPages = process.env.GITHUB_PAGES === "true";

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
  basePath: isGithubPages ? "/Serwis-RTVAGD" : "",
  assetPrefix: isGithubPages ? "/Serwis-RTVAGD/" : "",
};

module.exports = nextConfig;
