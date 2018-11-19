const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const isProd = process.env.NODE_ENV === 'production';

module.exports = merge(baseWebpackConfig, {
  entry: {
    app: path.join(__dirname, '../site/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../docs'),
    publicPath: isProd ? './' : '/',
    filename: 'js/[name].js?[hash:8]',
    chunkFilename: 'js/[name].chunk.js?[chunkhash:8]'
  },
  resolve: {
    alias: {
      cover: path.resolve(__dirname, '../src')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'initial'
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false
          }
        },
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    port: 1996,
    quiet: true,
    compress: true,
    overlay: true,
    publicPath: '/',
    watchOptions: {
      poll: false
    }
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        include: [path.resolve(__dirname, '../site')],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[ext]?[hash]'
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../site/index.html'),
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../site/static'),
        to: path.resolve(__dirname, '../docs/static'),
        ignore: ['.*']
      }
    ])
  ].concat(
    isProd
      ? [
          // new BundleAnalyzerPlugin({
          //   analyzerMode: 'static'
          // }),
          // styles
          new MiniCssExtractPlugin({
            filename: 'css/[name].css?[hash:8]',
            chunkFilename: 'css/[name].chunk.css?[chunkhash:8]'
          })
        ]
      : []
  )
});
