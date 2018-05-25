// imports.
import { toString, find, first } from 'lodash-es'

/**
 * Currency class.
 *
 * General currency helpers for Steem.
 */
class Currency {
  /**
   * Currency constructor.
   *
   * @param {number|string} sourceValue
   * @param {*} symbol
   */
  constructor (sourceValue, symbol = null) {
    // parse the value as number and assign.
    this.value = Currency.toNumber(sourceValue)
    // assign the symbol from parameter or from parsed value.
    this.symbol = (symbol !== null) ? symbol : this.constructor.getSymbol(sourceValue)
  }

  /**
   * Converts the source input value for the currency as a number.
   *
   * @param {number|string} source The value to parse.
   *
   * @return {number} The converted number.
   */
  static toNumber (source) {
    // when the input is already a number, return as it is.
    // when the input is not a number, remove any digit which is not number, comma, or dot
    // and parse as float.
    return (typeof source === 'number') ? source : parseFloat(first(source.match(/[0-9.,]+/)))
  }

  /**
   * Extract the symbol from input.
   *
   * @param {number|string} sourceValue The value to extract the symbol from.
   *
   * @return {string|null} The currency symbol string, case found.
   */
  static getSymbol (sourceValue) {
    // ensure string value, also converts to upper case.
    const value = toString(sourceValue).toUpperCase()

    // get the matching symbol, from an allows list.
    const symbol = find(['SBD', 'STEEM', 'STU', 'USD'], (symbol) => (value.indexOf(symbol) !== -1))

    // return the found symbol, if any.
    return symbol || null
  }

  toString (digits = null, locale = undefined) {
    // return the localized string.
    return this.value.toLocaleString(locale, this.getFractionDigits(digits))
  }

  /**
   * Determine the number of fraction digits.
   * @param {number|null} fractionDigits
   * @return {*}
   */
  getFractionDigits (fractionDigits) {
    let digits = 0
    if ((typeof fractionDigits === 'number') && fractionDigits > 0) {
      digits = fractionDigits
    } else {
      digits = (this.value >= 100) ? (1) : ((this.value >= 1) ? 2 : 3)
    }

    return {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    }
  }
}

export default Currency
