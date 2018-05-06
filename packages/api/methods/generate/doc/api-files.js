const { apisFolder } = require('./constants')
const { readdirSync } = require('fs')
const { normaliseApiName } = require('./utils')
const resolve = require('./resolve')

const isJsonFile = fileName => fileName.endsWith('.json')

const loadFile = fileName => {
  const filePath = resolve(`../../available/${fileName}`)
  return require(filePath)
}

module.exports = readdirSync(apisFolder)
  .filter(isJsonFile)
  .reduce((acc, fileName) => {
    const key = normaliseApiName(fileName)
    acc[key] = loadFile(fileName)
    return acc
  }, {})
