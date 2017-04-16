// Copyright (c) 2017 Alex Vangelov <email@data.bg>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { CommonsChunkPlugin } = require('webpack').optimize;
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  context: __dirname + "/src",
  entry: {
    core: "./core",
    extension: "./extension"
  },
  output: {
    path: __dirname + "/dist",
    filename: "multipart-library.[name].js",
    libraryTarget: "umd",
    library: ["MultipartLibrary", "[name]"],
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new CommonsChunkPlugin({
      "name": "core",
      "minChunks": null
    })
  ]
};