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
      // To compile your sass / scss code, use the CLI and type sass-watch main.scss:styles.css
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devserver: {
    contentBase: path.join(__dirname, 'public'),
  },
};
