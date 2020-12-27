export function pull(array, ...values) {
  const result = []
  values.forEach((item) => {
    array.forEach((value, index) => {
      if (array[index] === item) {
        result.push(item)
        array.splice(index, 1)
      }
    })
  })
  return result
}

export function pullAll(array, values) {
  return pull(array, ...values)
}
