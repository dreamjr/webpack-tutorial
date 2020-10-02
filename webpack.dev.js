const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: 9000
    },
    devtool: 'cheap-eval-source-map'
});