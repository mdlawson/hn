const { injectBabelPlugin, compose } = require("react-app-rewired");

const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
  rewireTSLint,
} = require("react-app-rewire-typescript-babel-preset");

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

module.exports = {
  webpack: compose(
    rewireTypescript,
    rewireEmotion,
    rewireHot,
  ),
  jest: rewireTypescriptJest,
};
