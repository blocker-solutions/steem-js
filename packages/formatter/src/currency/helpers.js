/**
 * @module @blocker/steem-formatter
 */

// imports.
import { toString, find, first } from 'lodash'

/**
 * Converts the source input value for the currency as a number.
 *
 * @private
 *
 * @param {number|string} source - The value to parse.
 *
 * @return {number} - The converted number.
 */
export const getNumber = (source) => {
  // when the input is already a number, return as it is.
  // when the input is not a number, remove any digit which is not number, comma, or dot
  // and parse as float.
  return (typeof source === 'number') ? source : parseFloat(first(source.match(/[0-9.,]+/)))
}

/**
 * Extract the symbol.
 *
 * @private
 *
 * @param sourceValue
 *
 * @return {null}
 */
export const getSymbol = (sourceValue) => {
  // ensure string value, also converts to upper case.
  const value = toString(sourceValue).toUpperCase()

  // get the matching symbol, from an allows list.
  const symbol = find(['SBD', 'STEEM', 'STU', 'USD'], (symbol) => (value.indexOf(symbol) !== -1))

  // return the found symbol, if any.
  return symbol || null
}

/**
 * Determine the number of fraction digits.
 *
 * @private
 *
 * @param {number} value - Value to detect the fraction digits of.
 * @param {?number} fractionDigits - Number of fraction digits, to force.
 *
 * @return {*} - Object with configuration for toLocaleString.
 */
export const getFractionDigits = (value, fractionDigits) => {
  const inputValid = ((typeof fractionDigits === 'number') && fractionDigits > 0)
  const digits = inputValid ? fractionDigits : (value >= 100) ? (1) : ((value >= 1) ? 2 : 3)

  return {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  }
}
