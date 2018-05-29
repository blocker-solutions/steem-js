/* eslint-disable */
const uglify = require('rollup-plugin-uglify')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const path = require('path')
const { curry } = require('lodash')

const isProduction = process.env.NODE_ENV === 'production'

const maintainers = [
  'Vinicius Reis',
  'Diego Hernandes'
].join(', ')

const makeBanner = pkg => {
  const year = new Date().getFullYear()
  const yearString = (year === 2018) ? '2018' : `2018-${year}`

  return `// ${pkg.name} v${pkg.version}
// ${pkg.homepage}
// (c) ${yearString} Blocker Solutions.
// Maintainers: ${maintainers}
  `
}

const babelPlugin = babel({
  exclude: 'node_modules/**',
  // include: ['node_modules/lodash-es/**'],
  babelrc: false,
  runtimeHelpers: true,
  plugins: ['external-helpers', 'transform-object-rest-spread'],
  presets: [
    ["env", { "modules": false, "targets": { "node": "8.11.2" } }],
  ]
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
    resolve({
      module: false,
      main: true,
      preferBuiltins: false
    })
  ]

  if (useBabel === true) {
    plugins.push(babelPlugin)
  }

  // if (format !== 'es') {
  //   fileSuffix = `${fileSuffix}.es5`
  //
  //   plugins.push(babelPlugin)
  // }

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
      exports: 'auto'
    },
    external(id) {
      return id.includes('node_modules')
    }
  }

  return config
})

const rollupFactory = (dirname, pkgName) => {
  const pkg = require(path.resolve(dirname, './package.json'))
  const banner = makeBanner(pkg)
  const factory = configFactory(banner, pkgName)

  return [
    factory('umd', true),
    factory('amd', true),
    factory('es', false),
    factory('cjs', false)
  ]
  // return ['umd', 'amd', 'es', 'cjs'].reduce((acc, format) => {
  //   return [...acc, factory(format, true), factory(format, false)]
  // }, [])
}

module.exports = { rollupFactory }
