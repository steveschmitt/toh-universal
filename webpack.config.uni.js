const ngtools = require('@ngtools/webpack');

module.exports = {
	entry: {
		main: './src/uni/main.server.ts'
	},
	resolve: {
      extensions: ['.ts', '.js']
    },
	target: 'node',
	output: {
		path: 'dist',
		filename: '[name].js'
	},
	plugins: [
		new ngtools.AotPlugin({
			tsConfigPath: './tsconfig-uni.json',
			typeChecking: false
		})
	],
	module: {
		rules: [
    		{ test: /\.css$/, loader: 'raw-loader' },
      		{ test: /\.html$/, loader: 'raw-loader' },
      		{ test: /\.ts$/, loader: '@ngtools/webpack' }
		]
	}
}
