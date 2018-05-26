/**
 * @module @blocker/steem-formatter
 */

// imports.
import { getNumber, getSymbol, getFractionDigits } from './helpers'

/**
 * Currency class.
 *
 * General currency helpers for Steem.
 *
 * @property {number}  value  - The value to parse as currency.
 * @property {?string} symbol - Optional symbol, when parsing numbers.
 *
 * @example
 * new Currency('123.789 STEEM')
 */
class Currency {
  /**
   * Currency constructor.
   *
   * @param {number|string} sourceValue  - The value to parse as currency.
   * @param {?string}       symbol       - Optional symbol, when parsing numbers.
   */
  constructor (sourceValue, symbol = null) {
    // parse the value as number and assign.
    this.value = getNumber(sourceValue || 0)
    // assign the symbol from parameter or from parsed value.
    this.symbol = (symbol !== null) ? symbol : getSymbol(sourceValue)
  }
  /**
   * Format the current currency number into a localized, display ready string.
   *
   * @example
   * new Currency('123.789 STEEM').format(2) // '123.79'
   *
   * @param {?number} digits - Force a given number of fraction digits.
   *
   * @return {string} - A formatted string for the currency value.
   */
  format (digits = null) {
    // return the localized string.
    return this.value.toLocaleString(undefined, getFractionDigits(this.value, digits))
  }
}

// default export.
export default Currency
