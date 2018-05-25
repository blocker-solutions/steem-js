// imports.
import { get } from 'lodash-es'

// application import.
import Application from './application'

/**
 * Config class.
 */
class Config {
  /**
   * Config constructor.
   *
   * @param {{apiURL,cache,app}} options Steem RPC api to use on requests.
   */
  constructor (options = { apiURL: null, cache: null, app: null }) {
    // Steem API RPC URL (https).
    this.apiURL = get(options, 'apiURL', 'https://api.steemit.com')
    // enable / disable caching common resources.
    this.cache = get(options, 'cache', true)
    // application instance or factory a null one.
    this.app = get(options, 'app', new Application())
  }
}

// default export.
export default Config
