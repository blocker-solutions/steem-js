const fetch = require('node-fetch')
const { HttpAdapter, ApiClient } = require('../../../dist/index.cjs')

const adapter = new HttpAdapter({ fetch })
const client = new ApiClient({ adapter })

const doRequest = (method, params) => client.send(method, params)

module.exports = { doRequest }
