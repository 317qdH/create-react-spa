
const path = require('path')
const webpack = require('webpack');
const base = require("./webpack.base");
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const projectRoot = process.cwd();

const devConfig = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js[name].js',
    },
    devtool: 'eval-source-map',
    devServer: {
        open: true,
        port: 8001,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        disableHostCheck: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name].css',
          ignoreOrder: true,
        }),
    ]
}

module.exports = merge(base, devConfig);