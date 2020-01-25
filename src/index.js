/** @module sort-object-entries */

/**
 * @function
 * @param {Object} object
 * @param {Function} compareFunction
 * @returns {Object}
 */
export default (object, compareFunction) => {
  const entries = Object.entries(object)
  entries.sort(([key1, value1], [key2, value2]) => compareFunction(value1, value2, key1, key2))
  return Object.fromEntries(entries)
}