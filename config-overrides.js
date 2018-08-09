const { injectBabelPlugin, compose } = require("react-app-rewired");
const webpack = require("webpack");

const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
  rewireTSLint,
} = require("react-app-rewire-typescript-babel-preset");

const injectBundleAnalyzer = require("react-app-rewire-webpack-bundle-analyzer");

const rewireEmotion = (config, env) =>
  injectBabelPlugin(
    [
      "emotion",
      env === "production" ? { hoist: true } : { sourceMap: true, autoLabel: true },
    ],
    config,
  );

const rewireHot = (config, env) =>
  env === "production" ? config : injectBabelPlugin("react-hot-loader/babel", config);

const rewireGraphQLTag = (config, env) =>
  env === "production" ? injectBabelPlugin("babel-plugin-graphql-tag", config) : config;

const rewireBundleAnalyzer = (config, env) =>
  env === "production"
    ? injectBundleAnalyzer(config, env, {
        analyzerMode: "static",
        openAnalyzer: false,
      })
    : config;

const rewireRemovePolyfills = (config, env) => {
  if (env !== "production") {
    return config;
  }

  config.externals = {
    "@firebase/polyfill": "window",
    "whatwg-fetch": "fetch",
    promise: "Promise",
  };

  return config;
};

module.exports = {
  webpack: compose(
    rewireTypescript,
    rewireEmotion,
    rewireGraphQLTag,
    // rewireRemovePolyfills,
    rewireHot,
    rewireBundleAnalyzer,
  ),
  jest: rewireTypescriptJest,
};
