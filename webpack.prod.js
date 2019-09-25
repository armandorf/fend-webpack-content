const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        test: '/\.js$/', // anything that ends in ".js"
        exclude: /node_modules/,
        loader: "babel-loader" // running files above through this loader
      }
    ]
  },
  // plugins section
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html"
    })
  ],
};
