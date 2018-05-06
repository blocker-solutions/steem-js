const uglify = require('rollup-plugin-uglify')
const resolve = require('rollup-plugin-node-resolve')
const pkg = require('./package.json')
const isProduction = process.env.NODE_ENV === 'production'

const banner = `// @vinicius73/steem-js-api v${pkg.version}
// ${pkg.homepage}
// (c) 2018-${new Date().getFullYear()} Vinicius Reis
`

const configFactory = format => {
  const config = {
    input: './src/index.js',
    output: {
      banner,
      format,
      file: `./dist/index.${format}${isProduction ? '.min' : ''}.js`,
      name: 'steem_api',
      globals: 'steem_api',
      exports: 'named'
    },
    external: ['lodash'],
    plugins: [resolve()]
  }

  if (isProduction) {
    config.plugins.push(
      uglify({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    )
  }

  return config
}

module.exports = ['umd', 'amd', 'es'].map(configFactory)
