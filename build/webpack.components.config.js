const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require('./webpack.base.config.js');
const isProd = process.env.NODE_ENV === 'production';
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseWebpackConfig, {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'cover.js',
    library: 'cover',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: isProd
    ? [
        // new BundleAnalyzerPlugin({
        //   analyzerMode: 'static'
        // }),
        new MiniCssExtractPlugin({
          filename: 'cover.css'
        })
      ]
    : []
});
