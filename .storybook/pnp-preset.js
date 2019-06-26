const PnpWebpackPlugin = require('pnp-webpack-plugin');
function webpack(webpackConfig = {}) {
  const { resolve = {}, resolveLoader = {} } = webpackConfig;

  return {
    ...webpackConfig,
    resolve: {
      ...resolve,
      plugins: [...(resolve.plugins || []), PnpWebpackPlugin],
    },
    resolveLoader: {
      ...resolveLoader,
      plugins: [
        ...(resolveLoader.plugins || []),
        PnpWebpackPlugin.moduleLoader('@storybook/react'),
      ],
    },
  };
}

function managerWebpack(webpackConfig = {}) {
  const { module = {}, resolve = {}, resolveLoader = {} } = webpackConfig;

  return {
    ...webpackConfig,
    module: {
      ...module,
      rules: [...(module.rules || [])],
    },
    resolve: {
      ...resolve,
      plugins: [...(resolve.plugins || []), PnpWebpackPlugin],
    },
    resolveLoader: {
      ...resolveLoader,
      plugins: [
        ...(resolveLoader.plugins || []),
        PnpWebpackPlugin.moduleLoader('@storybook/react'),
      ],
    },
  };
}

module.exports = { webpack, managerWebpack };
