const { template } = require('lodash')
const { readFileSync } = require('fs')
const { templateFile } = require('./constants')
const templateSource = readFileSync(templateFile)
const builder = template(templateSource)

module.exports = { builder }
