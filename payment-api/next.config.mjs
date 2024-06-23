/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: withSVGR,
};

export default nextConfig;

function withSVGR(config) {
  const nextImageLoaderRule = config.module.rules.find((rule) =>
    rule.test?.test?.(".svg"),
  );

  nextImageLoaderRule.resourceQuery = {
    not: [...nextImageLoaderRule.resourceQuery.not, /icon/],
  };

  config.module.rules.push({
    issuer: nextImageLoaderRule.issuer,
    resourceQuery: /icon/, // *.svg?icon
    use: ["@svgr/webpack"],
  });

  return config;
}