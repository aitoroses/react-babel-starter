var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var nodeModulesPath = path.resolve("node_modules");
var src = path.resolve("src");
var dist = path.resolve("../build");

var CONFIG = module.exports = function() {

  return {
    context: __dirname,
    entry: {
      // App Modules
      app: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/dev-server',
        __dirname + '/src'
      ],
      'vendor.js': __dirname + '/src/vendor.js'
    },
    output: {
      filename: "[name].js",
      chunkFilename: "[id].js",
      path: __dirname + '/build',
    },
    resolveLoader: {
      root: nodeModulesPath
    },
    resolve: {
      root: [src, nodeModulesPath],
      extensions: [
        '',
        '.js', '.coffee', '.jsx',
        '.html', '.jade', '.json',
        '.css', '.styl', '.scss', '.less'
      ],
    },

    externals: {},

    module: {
      loaders: [
        {test: /\.(js|jsx)/, loaders: ['babel?stage=1&optional=runtime'], exclude:[/node_modules/]}
      ]
    },

    devtool: "source-map",

    plugins: [
      new HtmlWebpackPlugin({
        template: './assets/index.html'
      }),
      new CommonsChunkPlugin("vendor.js"),
      new webpack.HotModuleReplacementPlugin()
    ]
  };
}.call()
