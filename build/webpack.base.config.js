const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const nunjucksEnv = require('./nunjucks.env');
const isProd = process.env.NODE_ENV === 'production';

const styleLoaders = [
  'css-loader',
  'postcss-loader',
  {
    loader: 'sass-loader',
    options: {
      precision: 8,
      includePaths: [path.join(__dirname, '../src/styles')]
    }
  }
];

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue']
  },
  resolveLoader: {
    alias: {
      'nunjucks-plain-loader': path.join(__dirname, './nunjucks-plain-loader')
    }
  },
  // devtool: isProd ? false : 'cheap-module-eval-source-map',
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  },
  performance: {
    hints: false
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: isProd ? [MiniCssExtractPlugin.loader].concat(styleLoaders) : ['vue-style-loader'].concat(styleLoaders)
      },
      {
        test: /\.nunjucks$/,
        loader: 'nunjucks-plain-loader',
        options: {
          env: nunjucksEnv
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new LodashModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new FriendlyErrorsPlugin()
  ]
};
