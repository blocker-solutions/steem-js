const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')

module.exports = (baseDir, config = {}) => merge({
  entry: ['./src'],
  target: 'node',
  output: {
    path: path.resolve(baseDir, 'dist'),
    // libraryTarget: 'umd',
    filename: 'index.js'
  },
  optimization: {
    minimize: false
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.(js)$/,
      use: 'babel-loader'
    }]
  }
}, config)
