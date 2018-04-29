import BaseAdapter from './base'

class HttpAdapter extends BaseAdapter {
  constructor (fetchFn) {
    super()

    this.$fetch = fetchFn
  }
}

export default HttpAdapter
