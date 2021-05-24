
const path = require('path');
const base = require('./webpack.base');
const { merge } = require('webpack-merge');

const projectRoot = process.cwd();

const prodConfig = {
    mode: 'production',
    output: {
        path: path.resolve(projectRoot, 'dist'),
        filename: 'assets/js/[name]_[hash:8].js',
    }
}

module.exports = merge(base, prodConfig)