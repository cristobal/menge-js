// TODO: Add support for strict check with an equals method
import assert from './common/assert'
import types from './common/types'

export default function union (...sets) {
  if (sets.length === 0) {
    return new Set()
  }

  const unionSet = new Set()
  const emptySet = new Set()
  const emptyList = []

  for (const set of sets) {
    assert.isSetOrArray(set)

    for (const value of Array.from(set)) {
      if (types.isEmptySet(value)) {
        unionSet.add(emptySet)
        continue
      }

      if (types.isEmptyArray(value)) {
        unionSet.add(emptyList)
        continue
      }

      unionSet.add(value)
    }
  }

  return unionSet
}
