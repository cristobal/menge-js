function is (Ctor, value) {
  return (value != null && value.constructor === Ctor) || value instanceof Ctor
}

/**
 * Check if value is a Array
 * @param {Array} value
 * @returns {boolean}
 */
export function isArray (value) {
  return Array.isArray(value) || is(Array, value)
}

/**
 * Check if value is a Set
 * @param {Set} value
 * @returns {boolean}
 */
export function isSet (value) {
  return is(Set, value)
}

/**
 * Check if value is a empty array
 * @param {Array} value
 * @returns {boolean}
 */
export function isEmptyArray (value) {
  return isArray(value) && value.length === 0
}

/**
 * Check if value is a empty set
 * @param {Set} value
 * @returns {boolean}
 */
export function isEmptySet (value) {
  return isSet(value) && value.size === 0
}

/**
 * Get type of value
 * @param {any} value
 * @returns {string}
 */
export function getType (value) {
  if (value.name && String(value).startsWith('class')) {
    return String(value.name)
  }

  return value.constructor?.name ?? typeof value
}

export default {
  isArray,
  isSet,
  isEmptyArray,
  isEmptySet,
  getType
}
