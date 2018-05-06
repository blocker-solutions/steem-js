const { writeFile } = require('fs')
const { builder } = require('./template')
const { readmeFile } = require('./constants')

const buildReadme = apis => {
  const content = Object.keys(apis)
    .map(key => {
      return builder({ api: key, methods: apis[key] })
    })
    .join(' \n')
  return `# Steem Methods
A simple list of all the methods available in steem api.

> This is self-generated documentation, please do not try to send PR to this file directly.

The official documentation together with the description you find [here](https://developers.steem.io/apidefinitions/).

${content}`
}

const writeReadmeFile = apis => {
  return new Promise((resolve, reject) => {
    writeFile(
      readmeFile,
      buildReadme(apis),
      err => {
        if (err) {
          reject(err)
          return
        }

        resolve()
      }
    )
  })
}

module.exports = { writeReadmeFile }
