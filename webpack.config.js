var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel?stage=0'],
      exclude: /node_modules/
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw']
    }, {
      test: /\.scss$/,
      loader: "style!css!sass"
    }, {
      test: /\.css$/,
      exclude: /\.useable\.css$/,
      loader: "style!css"
    }]
  }
};
