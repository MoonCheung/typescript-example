const HtmlWebpackPlugin = require('html-webpack-plugin');
// const forkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const {
  CheckerPlugin
} = require('awesome-typescript-loader')
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist/')
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [{
      test: /\.tsx?$/i,
      use: [{
        // loader: 'ts-loader',
        loader: 'awesome-typescript-loader',
        options: {
          transpileOnly: true
        }
      }, ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
    }, ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    //TODO: 暂时注释掉，编译出来文件时间：6000毫秒
    // new forkTsCheckerWebpackPlugin(),
    // TODO：编译文件时间：2000多毫秒
    new CheckerPlugin()
  ],
};