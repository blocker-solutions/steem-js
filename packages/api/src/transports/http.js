import BaseTransport from './base'

class HttpTranspost extends BaseTransport {
  constructor (fetchFn) {
    super()

    this.fetch = fetchFn
  }
}

export default HttpTranspost
