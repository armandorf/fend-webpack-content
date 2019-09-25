const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  module: {
    // 1st rule we see in Webpack: loaders
    rules: [
      {
        test: '/\.js$/', // anything that ends in ".js"
        exclude: /node_modules/,
        loader: "babel-loader" // running files above through this loader
      }
    ]
  },

  // output section
  // here "output" property could be added, but default is being used implicitly
  // output: {
  //   filename: 'main.js',
  //   publicPath: '/dist'
  // },
  
  // plugins section
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html"
    })
  ],
};
