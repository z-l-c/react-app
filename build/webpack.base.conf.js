// webpack.base.conf.js
const path = require('path');
const APP_PATH = path.resolve(__dirname, '../app');
const DIST_PATH = path.resolve(__dirname, '../dist');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		app: './app/index.js',
		framework: ['react', 'react-dom', 'react-router'],
	},
	output: {
		filename: "js/bundle.js",
		path: DIST_PATH
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				use: "babel-loader",
				include: APP_PATH
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer')({
									browsers: ['last 5 version']
								})
							]
						}
					}
				],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader', 
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer')({
									browsers: ['last 5 version']
								})
							]
						}
					},
					'sass-loader', 
				],
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader', 
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer')({
									browsers: ['last 5 version']
								})
							]
						}
					},
					'less-loader', 
				],
			},
			{
				test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                            // outputPath: 'images',   // 图片打包后存放的目录
                            publicPath: '/',
                            name: 'images/[contenthash:32].[ext]'
                        }
                    }
                ]
			},
			{
				test: /\.(eot|ttf|woff|svg)$/,
                use: 'file-loader'
			},
			{
				test: /\.(htm|html)$/,
                use: 'html-withimg-loader'
			}
		]
	},
	plugins: [
    	new MiniCssExtractPlugin({
    		filename: "css/[name].[chunkhash:8].css",
    		chunkFilename: "[id].css"
		})
	],
};
