const path = require('path');

module.exports = {
  mode: 'development',  // set mode to "development"
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // add any necessary loaders or rules here
    ],
  },
  devtool: 'inline-source-map',  // add a source map for better debugging
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
