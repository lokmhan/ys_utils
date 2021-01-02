export function splice(array, count, length, ...args) {
  const newArr = []
  const returnArr = []
  array.forEach((value, index) => {
    if (index < count || index >= count + length) {
      newArr.push(value)
    } else {
      returnArr.push(value)
    }
  })
  args.forEach((item) => {
    newArr.push(item)
  })
  array = newArr
  return returnArr
}
