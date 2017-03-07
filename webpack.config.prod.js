import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  debug: true,
  devtool: 'source-map', // More thorough for production
  noInfo: false,
  entry: path.resolve(__dirname, 'src/index'), // Np hot reloading in production
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    // Tell webpack where our code is so that it can be served dist for production, src for development
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // Optimises order in which our files are bundled for optimal minification
    new webpack.optimize.OccurenceOrderPlugin(),
    // Makes global variables available to libraries that webpack is bundling
    // React checks to see if application is running in production mode so that it can optimise
    new webpack.DefinePlugin(GLOBALS),
    // Generates separate css file
    new ExtractTextPlugin('styles.css'),
    // Eliminates duplicate js packages
    new webpack.optimize.DedupePlugin(),
    // Minifies Javascript
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [ // Tell webpack what we need to handle
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap')},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}, //For bootstrap
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'}, // For bootstrap
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'}, //For bootstrap
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'} // For bootstrap
    ]
  }
};
