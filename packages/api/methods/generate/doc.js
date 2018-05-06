const { template, replace } = require('lodash')
const { resolve } = require('path')
const { readdirSync, readFileSync, writeFileSync } = require('fs')

const isJsonFile = fileName => fileName.endsWith('.json')

const apis = readdirSync(resolve(__dirname, '../available'))
  .filter(isJsonFile)
  .reduce((acc, file) => {
    const key = replace(file, '_api.json', '')
    acc[key] = require(resolve(__dirname, `../available/${file}`))
    return acc
  }, {})

const builder = template(readFileSync(resolve(__dirname, './template.md')))

const content = Object.keys(apis)
  .map(key => {
    return builder({ api: key, methods: apis[key] })
  })
  .join(' \n')

writeFileSync(
  resolve(__dirname, `../README.md`),
  `# Steem Methods
A simple list of all the methods available in steem api.

> This is self-generated documentation, please do not try to send PR to this file directly.

The official documentation together with the description you find [here](https://developers.steem.io/apidefinitions/).

${content}`
)
