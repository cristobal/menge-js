import types from './types'

/**
 * @param {Set|Array} value
 * @throws Throws if value is neither a set or an array
 */
export function isSetOrArray (value) {
  if (types.isSet(value) || types.isArray(value)) {
    return
  }

  throw new Error(`Expecting Set or Array, saw: <${types.getType(value)}>`)
}

export default {
  isSetOrArray
}
