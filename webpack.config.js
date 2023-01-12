const path = require('path');

var DEBUG = !process.argv.production;

var GLOBALS = {
	'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
	'__DEV__': DEBUG
};
const webpack = require('webpack');
module.exports = {
  mode: DEBUG ? 'development' : 'production',
  // stats: {
  //   errorDetails: true
  // },
  entry: {
		app: [
			// 'webpack/hot/dev-server',
			path.join(__dirname, 'app', 'main.js')
		]
	},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/durandal-webpack/dist/',
    clean: true,
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    rules: [
      { 
        test: /\.html$/i, 
        loader:'html-loader',
        options: {
          esModule: false
        }
      },
    ],
  },


  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modules: [
      path.resolve(__dirname, 'app'),
      'node_modules'
    ],
    alias: {
      durandal: 'durandal/js',
      plugins: 'durandal/js/plugins',
    }
  },
	externals: {
		jquery: 'jQuery'
	},
	devServer: {
    static: __dirname,
    port:3000,
		hot: false,
		historyApiFallback: true,
	}
};
