var path = require('path')
var webpack = require('webpack')

var _port = 3000

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:' + _port,
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [ {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer?browsers=last 2 versions'
    } ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: _port
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
