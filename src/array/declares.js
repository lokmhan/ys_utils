export function map(array, callback) {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    const value = array[index]
    const result = callback(value, index)
    arr.push(result)
  }
  return arr
}
export function reduce(array, callback, initValue) {
  let total = initValue
  for (let index = 0; index < array.length; index++) {
    const value = array[index]
    total = callback(total, value, index)
  }
  return total
}
export function filter(array, callback) {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    const value = array[index]
    const result = callback(value, index)
    if (result) {
      arr.push(value)
    }
  }

  return arr
}
export function find(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const value = array[index]
    const result = callback(value, index)
    if (result) {
      return value
    }
    console.log(1)
  }
  return undefined
}

export function findIndex(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const value = array[index]
    const result = callback(value, index)
    if (result) {
      return index
    }
    console.log(1)
  }
  return -1
}
export function every(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const value = array[index]
    const result = callback(value, index)
    if (!result) {
      return false
    }
  }
  return true
}
export function some(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const value = array[index]
    const result = callback(value, index)
    if (result) {
      return true
    }
  }
  return false
}
