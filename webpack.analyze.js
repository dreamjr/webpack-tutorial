const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

const mergedConfig = merge(common, {
    mode: 'production'
});

mergedConfig.plugins = [
    ...mergedConfig.plugins,
    new BundleAnalyzerPlugin()
];

module.exports = mergedConfig;