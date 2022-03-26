const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { 
        test: /\.png$/,
         type: 'asset/resource'
      },
      { 
        test: /\.svg$/,
         type: 'asset/resource'
      },
      { 
        test: /\.ico$/,
         type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      inject: true,
      chunks: ['index'],
      title: 'cookie-solution',
      filename: 'index.html'
    })
  ]
};

module.exports = config;