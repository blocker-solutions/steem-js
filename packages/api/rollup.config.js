const uglify = require('rollup-plugin-uglify')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')

const pkg = require('./package.json')
const isProduction = process.env.NODE_ENV === 'production'

const banner = `// @vinicius73/steem-js-api v${pkg.version}
// ${pkg.homepage}
// (c) 2018-${new Date().getFullYear()} Vinicius Reis
`

const configFactory = (format, useBabel = true) => {
  let fileSufix = `.${format}`

  if (format !== 'es' && useBabel) {
    fileSufix = `${fileSufix}.es5`
  }

  if (isProduction) {
    fileSufix = `${fileSufix}.min`
  }

  const config = {
    input: './src/index.js',
    output: {
      banner,
      format,
      file: `./dist/index${fileSufix}.js`,
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

  if (useBabel) {
    config.plugins.push(babel({
      exclude: 'node_modules/**',
      babelrc: false,
      plugins: ['external-helpers', 'transform-object-rest-spread'],
      presets: ['es2015-rollup']
    }))
  }

  return config
}

module.exports = ['umd', 'amd', 'es'].reduce((acc, format) => {
  return [...acc, configFactory(format, true), configFactory(format, false)]
}, [])
