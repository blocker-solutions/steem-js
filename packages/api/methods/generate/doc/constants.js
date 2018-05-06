const resolve = require('./resolve')

module.exports = {
  templateFile: resolve('./template.md'),
  readmeFile: resolve(`../../README.md`),
  apisFolder: resolve('../../available')
}
