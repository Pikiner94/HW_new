const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/html/index.html',
    }),
  ],
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          { loader: MiniCssExtractPlugin.loader, options: { esModule: false } },
          'css-loader',
        ],
      },
      { test: /\.handlebars$/, loader: 'handlebars-loader' },
    ],
  },
};
