import { concat } from './concat'

export function flatten1(array) {
  return array.reduce((pre, item) => {
    if (!Array.isArray(item)) {
      pre.push(item)
    } else {
      pre = pre.concat(flatten1(pre))
    }
  }, [])
}

export function flatten2(array) {
  let arr = [].concat(...array)
  while (arr.some((value) => Array.isArray(value))) {
    arr = arr.concat(...arr)
  }
  return arr
}
