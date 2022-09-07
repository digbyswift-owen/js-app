const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: path.resolve(__dirname, './src/public/js/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  mode: 'development',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {

      },
      parallel: true,
    })],
  },
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  externals: [nodeExternals()],
};
