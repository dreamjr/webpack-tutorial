const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
    let plugins = [
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ];

    if(env && env.isAnalyze) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return {
        mode: (env && env.mode) ? env.mode : 'development',
        entry: './src/js/index.js',
        output: {
            // filename: '[id].bundle.js',
            // filename: '[name].[hash].bundle.js',
            // filename: '[chunkhash].bundle.js',
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            port: 9000
        },
        devtool: 'cheap-eval-source-map',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        { loader: MiniCssExtractPlugin.loader },
                        'css-loader'
                    ]
                }
            ]
        },
        plugins: plugins
    }
}