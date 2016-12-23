'use strict';

const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './build');
const NODE_MODULES = path.resolve(__dirname, './node_modules');

module.exports = {
	cache: true,
	entry: {
		content_script: `${SRC_DIR}/content_script.ts`,
		background: `${SRC_DIR}/background.ts`,
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'],
		modules: [
			NODE_MODULES,
			SRC_DIR
		]
	},
	plugins: [],
	module: {
		loaders: [{
			test: /\.js(x?)$/,
			loaders: 'babel-loader',
			exclude: /node_modules/
		}, {
			test: /\.ts(x?)$/,
			loaders: 'babel-loader!ts-loader',
			exclude: /node_modules/
		}, {
			test: /\.scss$/,
			loaders: 'style-loader!css-loader!sass-loader'
		}, {
			test: /\.css$/,
			loaders: 'style-loader!css-loader'
		}]
	}
};
