import { concat } from './concat'

export function flattenDeep(array) {
  var arr = concat([], ...array)
  while (arr.some((item) => Array.isArray(item))) {
    arr = concat([], ...arr)
  }
  return arr
}
