/**
 * @module @blocker/steem-config
 */

// imports.
import { get } from 'lodash'

/**
 * Application class.
 *
 * Simple application information.
 */
class Application {
  /**
   * Application constructor.
   *
   * @param {object} options
   */
  constructor (options = { id: null, version: null, label: null, homepage: null }) {
    // assign application id.
    this.id = get(options, 'id', null)
    // assign application version.
    this.version = get(options, 'version', null)
    // assign application label.
    this.label = get(options, 'label', null)
    // assign application homepage.
    this.homepage = get(options, 'homepage', null)
  }
}

// default export.
export default Application
