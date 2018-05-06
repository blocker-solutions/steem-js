const fetch = require('node-fetch')
const { HttpAdapter, ApiClient } = require('../../dist/index.cjs')

const adapter = new HttpAdapter({ fetch })
const client = new ApiClient({ adapter })

module.exports = client
