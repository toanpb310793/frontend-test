const {
  override,
  addLessLoader,
  babelInclude,
  fixBabelImports,
  addDecoratorsLegacy,
  addBundleVisualizer,
  adjustWorkbox,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),

  // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
  process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),

  babelInclude([
    path.resolve('src'), // make sure you link your own source
  ]),

  fixBabelImports('import', {
    libraryDirectory: 'es',
    style: true,
  }),

  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  }),

  adjustWorkbox((wb) =>
    Object.assign(wb, {
      skipWaiting: true,
      exclude: (wb.exclude || []).concat('index.html'),
    })
  ),

  (config) => {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    };
    return config;
  }
);
