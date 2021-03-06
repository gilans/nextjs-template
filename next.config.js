const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias["@app"] = path.resolve(__dirname, "../src");

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
