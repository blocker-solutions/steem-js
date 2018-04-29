import BaseAdapter from './base'

class RPCError extends Error {
  constructor (rpcError) {
    super(rpcError.message)
    this.name = 'RPCError'
    this.code = rpcError.code
    this.data = rpcError.data
  }
}

class HttpAdapter extends BaseAdapter {
  constructor (options = {}) {
    super()
    this.$parseOptions(options)
  }
  $parseOptions (options) {
    const { fetch, uri } = options

    this.$fetch = fetch
    this.$uri = uri
  }
  $parsePayloadToFetchOptions (payload) {
    return {
      body: JSON.stringify({
        jsonrpc: '2.0',
        ...payload
      }),
      method: 'post',
      mode: 'cors',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }
  }
  $sendRequest (payload) {
    const { $fetch, $uri } = this
    const { id } = payload
    const fetchOptions = this.$parsePayloadToFetchOptions(payload)

    return $fetch($uri, fetchOptions)
      .then(res => this.$processFethResponse(id, res))
  }
  $processFethResponse (id, res) {
    if (!res.ok) {
      return Promise.reject(Error(`HTTP ${res.status}: ${res.statusText}`))
    }

    return Promise.resolve(res.json())
      .then(response => {
        if (response.id !== id) {
          return Promise.reject(new Error(`Invalid response id: ${response.id}`))
        }

        if (response.error) {
          return Promise.reject(new RPCError(response.error))
        }

        return response.result
      })
  }
  send (...args) {
    return this.$sendRequest(
      this.$makePayload(...args)
    )
  }
}

export default HttpAdapter
