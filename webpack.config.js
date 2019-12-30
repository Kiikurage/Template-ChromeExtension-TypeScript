'use strict';

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');


module.exports = {
    cache: true,
    entry: {
        'contentScript': `./src/contentScript.ts`,
        'background': `./src/background.ts`
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [
            './node_modules',
            './src'
        ]
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }],
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|ico)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }]
        }]
    },
    mode: 'production',
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/static/**/*',
            to: './',
            flatten: true
        }]),
        new LiveReloadPlugin()
    ]
};
