var webpack = require('webpack');
//var path = require('path');
//var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: './dist/app.js',
  //entry: './src/main.js',
  //entry: './main.coffee',
  /* entry: {
    about: './dist/about',
    contact: './dist/contact',
    vendor: ['react', 'react-dom']
  }, */
  output: {
    //path: path.join(__dirname, 'build'),
    //filename: '[name].bundle.js'
    path: 'build',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=20000',
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      }
    ]
    /*loaders: [
      {
        test: /\.coffee$/,
        exclude: /(node_modules)/,
        loader: 'coffee'
      }
    ]*/
  }
  //plugins: [
    //new CommonsChunkPlugin('commons', 'commons.bundle.js')
   //new CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  //]
};