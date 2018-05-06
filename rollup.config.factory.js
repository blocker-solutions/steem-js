const uglify = require('rollup-plugin-uglify')
const resolve = require('rollup-plugin-node-resolve')
// const filesize = require('rollup-plugin-filesize')
const babel = require('rollup-plugin-babel')
const path = require('path')
const { curry } = require('lodash')

const isProduction = process.env.NODE_ENV === 'production'
const makeBanner = pkg => {
  return `// @vinicius73/steem-js-api v${pkg.version}
  // ${pkg.homepage}
  // (c) 2018-${new Date().getFullYear()} Vinicius Reis
  `
}

const babelPlugin = babel({
  exclude: 'node_modules/**',
  babelrc: false,
  plugins: ['external-helpers', 'transform-object-rest-spread'],
  presets: ['es2015-rollup']
})

const uglifyPlugin = uglify({
  compress: {
    pure_getters: true,
    unsafe: true,
    unsafe_comps: true,
    warnings: false
  }
})

const configFactory = curry((banner, pkgName, format, useBabel = true) => {
  let fileSuffix = `.${format}`
  const plugins = [
    resolve()
    // filesize()
  ]

  if (format !== 'es' && useBabel) {
    fileSuffix = `${fileSuffix}.es5`

    plugins.push(babelPlugin)
  }

  if (isProduction) {
    fileSuffix = `${fileSuffix}.min`
    plugins.push(uglifyPlugin)
  }

  const config = {
    input: './src/index.js',
    plugins,
    output: {
      banner,
      format,
      name: pkgName,
      globals: pkgName,
      file: `./dist/index${fileSuffix}.js`,
      exports: 'named'
    },
    external: ['lodash']
  }

  return config
})

const rollupFactory = (dirname, pkgName) => {
  const pkg = require(path.resolve(dirname, './package.json'))
  const banner = makeBanner(pkg)
  const factory = configFactory(banner, pkgName)

  return ['umd', 'amd', 'es', 'cjs'].reduce((acc, format) => {
    return [...acc, factory(format, true), factory(format, false)]
  }, [])
}

module.exports = { rollupFactory }
