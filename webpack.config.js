'use strict';

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var pkg = require('./package.json');

// var cdn = process.env.REMIND_CDN || '';

module.exports = {
    resolve: {
        extensions: ['', '.js'],
        root: path.resolve('./build'),
        modulesDirectories: ['app', 'lib', 'node_modules', 'vendor'],
        alias: {
            "vendor": "../../vendor",
            "react": "../../node_modules/react",
            "react-dom": "../../node_modules/react-dom",
            "react-hyperscript": "../../node_modules/react-hyperscript",
            "@cycle/core": "../../node_modules/@cycle/core",
            "@cycle/dom": "../../node_modules/@cycle/dom",
            "cycle-react": "../../node_modules/cycle-react",
        }
    },
    entry: {
        app: [
            "app/cycle-hello",
            "app/cycle-hello-react",
            "app/cycle-hyper-react",
            "app/cycle-timer",
            "app/cycle-timer-hyper",
            "app/cycle-timer-hyper-react",
            "app/cycle-timer-react",
            "app/react-comment-box"
     ]
        // common: ["lib/demo_mod1", "lib/demo_mod2"]
    },
    output: {
        path: path.join(__dirname, "build", "app"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js",
        libraryTarget: "umd",
        // crossOriginLoading: "use-credentials"
    },
    externals: ["demoContainer"],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"common", /* filename= */"common.bundle.js")
    ],
    babel: { // .babelrc takes precedence
        presets:['es2015', 'react']
    },
    devtool: "#inline-source-map",
    target: "web"
};
