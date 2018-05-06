const { curry } = require('lodash')
const { doRequest } = require('./client')

const processMethodSignature = curry((api, name, data) => {
  const args = Object.keys(data.args)
  const ret = Object.keys(data.ret || {})
  return { name, args, ret }
})

const loadMethodSignature = (api, name) => {
  const params = {
    method: `${api}.${name}`
  }
  return doRequest('jsonrpc.get_signature', params)
    .then(processMethodSignature(api, name))
}

const loadSignatures = (api, methods) => {
  const promises = methods
    .map(({ name }) => loadMethodSignature(api, name))

  return Promise.all(promises)
}

const loadMethods = () => doRequest('jsonrpc.get_methods', {})

module.exports = { loadSignatures, loadMethods }
