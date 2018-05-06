import { clientHandler } from './proxy'

class ApiClient {
  constructor ({ adapter }) {
    this.$adapter = adapter
    return new Proxy(this, clientHandler)
  }
  send (...args) {
    return this.$adapter.send(...args)
  }
}

export default ApiClient
