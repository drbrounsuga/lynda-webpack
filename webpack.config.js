module.exports = {
  //entry: './src/main.js',
  entry: './main.coffee',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  module: {
    /*loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]*/
    loaders: [
      {
        test: /\.coffee$/,
        exclude: /(node_modules)/,
        loader: 'coffee'
      }
    ]
  }
};