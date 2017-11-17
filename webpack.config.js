const bourbon = require('bourbon').includePaths
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env'] // if you aren't using 'babel-preset-es2015', then omit the 'es2015'
        }
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader?includePaths[]=' + bourbon

        ]
      }
    ]
  }
}
