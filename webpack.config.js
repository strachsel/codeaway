const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const DefinePlugin = require('webpack').DefinePlugin;
const ProvidePlugin = webpack.ProvidePlugin;
module.exports = {
    entry: ['bootstrap-loader', path.resolve(__dirname, './app/app.js')],
    output: {
        path: path.resolve(__dirname, '../codeaway-server/public'),
        filename: "bundle.js",
        // publicPath: 'public/'
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "jshint-loader"
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.png$/,
            loader: "url-loader?mimetype=image/png"
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.(woff|woff2)$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.ttf$/,
            loader: "file-loader"
        }, {
            test: /\.(jpeg|jpg)$/,
            loader: "file-loader"
        }, {
            test: /\.eot$/,
            loader: "file-loader"
        }, {
            test: /\.svg$/,
            loader: "file-loader"
        }, {
            test: /\.html$/,
            loader: 'html'
        }]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './scss')]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
    ]
};
