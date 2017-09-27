// const AsyncAwaitPlugin = require('webpack-async-await') ;
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const asyncGen = require("babel-plugin-transform-regenerator");

module.exports = {
    entry: {
        entry: ["./WebContent/Comp"],
        // vendor: "./WebContent/resources/sap-ui-core-all"
    },
    output: {
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        filename: "WebContent/Component.js",
        chunkFilename: "[id].bundle.js"
    },
    devtool: "sourcemap",
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /(node_modules|bower_components|resources)/,
            use: {
                loader: 'babel-loader',
                // options: {
                // presets: [ ["env", {
                //     "targets": {
                //       "browsers": ["last 2 versions", "ie >= 11"]
                //     }
                //   }]],
                // plugins: [require("spet-ui5-jsx-rm")],
                // }
            }
            }
        ]
    },
    plugins: [
    //   new webpack.optimize.UglifyJsPlugin(),
    //   new AsyncAwaitPlugin({ })
    ]
}