const axios = require('axios')
const baseURL = 'https://api.steemit.com'
const http = axios.create({ baseURL })
const fs = require('fs')
const path = require('path')

const doRequest = (method, params) => http
  .post('', { jsonrpc: '2.0', method, params })
  .then(({ data }) => {
    if (data.error) {
      return Promise.reject(data.error)
    }

    if (data.result) {
      return data.result
    }

    return data
  })

const groupMethods = list => {
  return list.reduce((acc, raw) => {
    let [ group, name ] = raw.split('.')

    if (!acc[group]) {
      acc[group] = []
    }

    acc[group].push({
      name
    })

    return acc
  }, {})
}

const loadSignatures = (api, methods) => {
  const promises = methods.map(({ name }) => {
    return doRequest('jsonrpc.get_signature', {
      method: `${api}.${name}`
    })
      .then(data => {
        // @TODO use ret in doc
        const args = Object.keys(data.args)

        return { name, args }
      })
  })

  return Promise.all(promises)
}

const loadInfo = async groups => {
  const keys = Object.keys(groups)
  const result = {}

  for (const key of keys) {
    result[key] = await loadSignatures(key, groups[key])
  }

  return result
}

const storeMethods = async groups => {
  const keys = Object.keys(groups)
  const promises = keys.map(key => new Promise((resolve, reject) => {
    fs.writeFile(
      path.resolve(__dirname, `../methods/${key}.json`),
      JSON.stringify(groups[key], '', 2),
      (err) => {
        if (err) reject(err)
        resolve({ [key]: true })
      })
  }))

  return Promise.all(promises)
}

doRequest('jsonrpc.get_methods', {})
  .then(groupMethods)
  .then(loadInfo)
  // .then(JSON.stringify)
  // .then(console.log.bind(console))
  .then(storeMethods)
