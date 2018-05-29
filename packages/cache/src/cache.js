// imports.
import { get } from 'lodash-es'

// storage class import.
import Storage from './storage'

/**
 * Universal cache implementation.
 */
class Cache {
  /**
   * Cache constructor.
   */
  constructor () {
    // assign a storage instance.
    this.storage = new Storage()
  }

  /**
   * Set an item on cache.
   *
   * @param {string} key   Key to store the cached value under.
   * @param {*}      value The value to store.
   * @param {number} ttl   Number, in minutes, to keep the item on cache.
   *
   * @return {*} Returns the item itself from cache.
   */
  set (key, value, ttl = 5) {
    // generate a timestamp on the requested TTL.
    const expiration = this.constructor.generateTTL(ttl)

    // store the item.
    this.storage.setItem(key, { expiration, value })

    // call the getter to ensure the item was properly stored.
    return this.get(key)
  }

  /**
   * Retrieve a cached item.
   *
   * @param {string} key       The cached item identifier key.
   * @param {*|null} fallback  A default value to return case the item is not present.
   *
   * @return {*} Returns the cached item, or fallback, or null.
   */
  get (key, fallback = null) {
    // retrieve the item from storage.
    const stored = this.storage.getItem(key)

    // if no item was found...
    if (!stored) {
      // return the fallback value.
      return fallback
    }

    // get the stored object expiration.
    const expiration = get(stored, 'expiration', 1000)
    // get the current unix timestamp (seconds)
    const now = this.constructor.timestamp()

    // when the expiration is on past...
    if (expiration < now) {
      // remove the expired item from storage..
      this.storage.removeItem(key)
      // return the fallback value.
      return fallback
    }

    // return the stored value, when found and not expired.
    // also defaulting to the fallback value.
    return get(stored, 'value', fallback)
  }

  /**
   * Current timestamp generator.
   *
   * @return {number} Integer number of seconds since Unix Epoch.
   */
  static timestamp () {
    // divide the milliseconds timestamp by 1000, rounding down.
    return Math.floor(Date.now() / 1000)
  }

  /**
   * Add a given number of minutes to a timestamp (defines the expiration).
   *
   * @param {number}      minutes    Number of minutes to add on the timestamp.
   * @param {number|null} timestamp  Optional timestamp (defaults to now).
   *
   * @return {number} Returns a future timestamp.
   */
  static generateTTL (minutes = 5, timestamp) {
    // base timestamp.
    const base = timestamp || this.timestamp()

    // seconds to add
    const secondsToAdd = Math.floor((minutes * 60))

    // sum and return.
    return (base + secondsToAdd)
  }
}

// default export.
export default Cache
