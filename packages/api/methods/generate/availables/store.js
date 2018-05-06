const fs = require('fs')
const path = require('path')

const storeMethods = async groups => {
  const keys = Object.keys(groups)
  const promises = keys.map(key => new Promise((resolve, reject) => {
    fs.writeFile(
      path.resolve(__dirname, `../../available/${key}.json`),
      JSON.stringify(groups[key], null, 2),
      err => {
        if (err) {
          reject(err)
          return
        }
        resolve({ [key]: true })
      })
  }))

  return Promise.all(promises)
}

module.exports = { storeMethods }
