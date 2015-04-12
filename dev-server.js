var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var webpackConfig = require('./webpack.conf');

var app = new WebpackDevServer(webpack(webpackConfig), {

    // all options optional
    contentBase: __dirname,

    noInfo: false,
    // display no info to console (only warnings and errors)

    quiet: false,
    // display nothing to the console

    // lazy: true,
    // switch into lazy mode
    // that means no watching, but recompilation on every request

    watchDelay: 300,
    // delay after change (only lazy: false)

    // publicPath: "./build",
    // public path to bind the middleware to
    // use the same as in webpack

    headers: { "X-Custom-Header": "yes" },
    // custom headers

    hot: true,

    stats: {
        colors: true
    }
    // options for formating the statistics
});

app.listen(8080, function() {
  console.log("Listening on 8080");
});
