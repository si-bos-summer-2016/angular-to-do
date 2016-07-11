var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'wekpack-dev-server/client?http://127.0.0.1:8000/',
		'webpack/hot/only-dev-server',
		'./src'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extension: ['', '.js']
	},
	module: {
		loaders: [
								{
									test: /\.js$/,
									exclude: /node_modules/,
									loader: 'babel',
									query: {
										presets: ['es2015']
									}
								},
								{
									test: /\.html$/,
									loader: 'raw'
								}
							]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.noErrorsPlugin()
	],
	devServer: {
		hot: true,
		proxy: {
			'*': 'http://localhost:3000'
		}
	}
};