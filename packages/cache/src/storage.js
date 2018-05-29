// require localStorage polyfill.
// (for Node.js and old browsers).
require('localstorage-polyfill')

/**
 * Storage implementation.
 */
class Storage {
  /**
   * Storage constructor.
   *
   * @param {string} prefix  Cache prefix for items.
   */
  constructor (prefix = 'steem-cache') {
    // assign the prefix on instance, defaulting to steem-js-cache when empty.
    this.prefix = (prefix || 'steem-cache') + '-'
  }

  /**
   * Retrieve a stored item.
   *
   * @param {string} key  Storage key to retrieve.
   *
   * @return {*} Any given value, if found.
   */
  getItem (key) {
    // retrieve and decode.
    return this.constructor.decode(localStorage.getItem(this.prefix + key))
  }

  /**
   * Store an item.
   * @param {string} key    The key to store under.
   * @param {*}      value  The value to store.
   */
  setItem (key, value) {
    // encode and store.
    localStorage.setItem(this.prefix + key, this.constructor.encode(value))
  }

  /**
   * Remove an stored item.
   *
   * @param {string} key  Stored item to remove.
   *
   * @return {boolean} Operation success status.
   */
  removeItem (key) {
    // wrap on a try block...
    try {
      // call the removal.
      localStorage.removeItem(this.prefix + key)
      // return true to indicate removed.
      return true
    } catch (e) {
      // return false when exception happens.
      return false
    }
  }

  /**
   * Encode a value into a "storable" value.
   *
   * @param {*} value  Value to encode.
   *
   * @return {string|null} Encoded value, or null.
   */
  static encode (value) {
    // return json encoded string or null.
    return value ? JSON.stringify(value) : null
  }

  /**
   * Decode a value from "storable" value.
   *
   * @param {string|null} value  Value to decode.
   *
   * @return {*} Returns the Decoded value.
   */
  static decode (value) {
    // parse from JSON string when not null.
    return value ? JSON.parse(value) : null
  }
}

// default export.
export default Storage
