export function map(array, callback) {
  const arr = []
  array.forEach((value, index) => {
    const result = callback(value, index)
    arr.push(result)
  })
  return arr
}
export function reduce(array, callback, initValue) {
  let total = initValue
  array.forEach((value, index) => {
    total = callback(total, value, index)
  })
  return total
}
export function filter(array, callback) {
  // const arr = []
  array.for((value, index) => {
    const result = callback(value, index)
    if (result) {
      arr.push(value)
    }
  })
  return arr
}
export function find(array, callback) {
  array.forEach((value, index) => {
    if (callback(value, index)) {
      return value
    }
  })
  return undefined
}
export function findIndex(array, callback) {}
export function every(array, callback) {}
export function some(array, callback) {}
