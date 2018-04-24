const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  entry: {
    polyfill: 'babel-polyfill',
    index: paths.entry,
    react: [
      "react",
      "react-dom",
      "prop-types",
      "react-router-dom",
    ],
    redux: [
      "redux",
      "react-redux",
    ],
    vendor: [
      "react-helmet",
      "react-svg",
    ],
  },
  output: paths.output,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
            { loader: 'sass-loader' },
          ],
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.template,
      minify: {
        collapseWhitespace: true,
      },
    }),
    new ExtractTextPlugin(paths.css),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: ['polyfill', 'react', 'redux', 'vendor'] }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
