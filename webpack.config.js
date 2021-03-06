const path = require('path');

module.exports = {
  entry: './Client/index.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  watch: true,
};
