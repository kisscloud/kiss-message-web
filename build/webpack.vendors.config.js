const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProd = process.env.NODE_ENV === 'production';

const entry = {};
const venderPath = path.resolve(__dirname, '../src/vendors');
const files = fs.readdirSync(venderPath);
files.forEach(file => {
  const fileStat = fs.statSync(path.join(venderPath, file));
  const fileEntry = path.join(venderPath, file, '/index.js');
  if (fileStat.isDirectory() && fs.existsSync(fileEntry)) {
    entry[file] = fileEntry;
  }
});

module.exports = merge(baseWebpackConfig, {
  entry: entry,
  output: {
    path: path.resolve(__dirname, '../vendors'),
    filename: '[name]/index.js',
    library: '[name]',
    libraryTarget: 'umd'
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
        new MiniCssExtractPlugin({
          filename: '[name]/style.css'
        })
      ]
    : []
});
