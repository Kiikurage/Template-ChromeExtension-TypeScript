'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LiveReloadPlugin = require('webpack-livereload-plugin');


module.exports = {
	cache: true,
	entry: {
		'contentScript': `./src/contentScript.ts`,
		'background': `./src/background.ts`,
		'popup': `./src/popup.tsx`,
		'options': `./src/options.tsx`,
	},
	output: {
		path: './build',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		modules: [
			'./node_modules',
			'./src'
		]
	},
	devtool: process.env.NODE_ENV === 'production' ? '' : 'sourcemap',
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: [{
				loader: 'awesome-typescript-loader'
			}],
			exclude: /node_modules/
		}, {
			test: /\.scss$/,
			use: [{
				loader: MiniCssExtractPlugin.loader
			}, {
				loader: 'typings-for-css-modules-loader',
				options: {
					modules: true,
					camelCase: true,
					namedExport: true,
					minimize: false,
					localIdentName: '[local]-[hash:base64:5]'
				}
			}, {
				loader: 'postcss-loader'
			}]
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
		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),
		new LiveReloadPlugin()
	]
};
