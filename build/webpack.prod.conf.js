// webpack.prod.conf.js
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
	mode: 'production',
	output: {
		filename: "js/[name].[chunkhash:16].js",
	},
	optimization: {
		splitChunks: {
			chunks: "all",
			minChunks: 1,
			minSize: 0,
			cacheGroups: {
				framework: {
					test: "framework",
					name: "framework",
					enforce: true
				}
			}
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			favicon: 'public/favicon.ico',
			inject: 'body',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			},
		}),
		new CleanWebpackPlugin(['../dist'], { allowExternal: true })
	]
});
