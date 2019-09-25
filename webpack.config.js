const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/client/index.js',
  // introduction of loaders
  module: {
    // 1st rule we see in Webpack
    rules: [
      {
        test: '/\.js$/', // anything that ends in ".js"
        exclude: /node_modules/,
        loader: "babel-loader" // running files above through this loader
      }
    ]
  },
  output: {
    filename: 'main.js',
    publicPath: '/dist'
  }
  // here "output" property could be added, but default is being used implicitly
};
