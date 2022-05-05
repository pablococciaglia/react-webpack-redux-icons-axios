const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ruleForStyles = {
	test: /\.css$/,
	use: ['style-loader', 'css-loader'],
};

const ruleForJavaScript = {
	test: /\js$/,
	loader: 'babel-loader',
	options: {
		// { runtime: 'automatic' } is to stop importing react in every file
		presets: [['@babel/preset-react', { runtime: 'automatic' }]],
	},
};

const ruleForJSX = {
	test: /\jsx$/,
	loader: 'babel-loader',
	options: {
		// { runtime: 'automatic' } is to stop importing react in every file
		presets: [['@babel/preset-react', { runtime: 'automatic' }]],
	},
};

const rules = [ruleForStyles, ruleForJavaScript, ruleForJSX];

module.exports = (env, argv) => {
	const { mode } = argv;
	const isProduction = mode === 'production';
	return {
		entry: './src/index.js', //this is by defect
		output: {
			filename: isProduction ? '[name].[contenthash]' : 'main.js',
			path: path.resolve(__dirname, 'build'),
		},
		plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
		module: { rules },
		devServer: {
			open: true, // open automatically when run the npm run dev
			port: 3000, // Chose your port, by default is 8080
			compress: true,
			client: {
				overlay: {
					warnings: true,
					errors: true,
				}, // show the errors in the console
			},
		},
	};
};
