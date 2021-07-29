const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/task 3.0/indexLazyLoad.js',
  entry: './src/task 3.0/indexLearnMore.js',

  output: {
    filename: 'bundle-03.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'output.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // template: './src/index.html',
      // template: './src/task 2.1/index.html',
      // template: './src/task 2.2/index.html',
      // template: './src/task 2.3/index.html',
      template: './src/task 3.0/index.html',
    }),
  ],
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
