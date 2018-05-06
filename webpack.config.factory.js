const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')

const factory = (baseDir, target, config = {}) => merge({
  target,
  entry: ['./src'],
  output: {
    path: path.resolve(baseDir, 'dist'),
    // libraryTarget: 'umd',
    filename: `index.${target}.js`
  },
  optimization: {
    minimize: target !== 'node'
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.(js)$/,
      use: 'babel-loader'
    }]
  }
}, config)

module.exports = (baseDir, config = {}) =>
  ['node', 'web'].map(target => factory(baseDir, target, config))
