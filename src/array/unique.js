export function unique1(arr) {
  const newArr = []
  arr.forEach((value) => {
    if (newArr.indexOf(value) === -1) {
      newArr.push(value)
    }
  })
  return newArr
}
export function unique2(arr) {
  const newArr = []
  const contain = {}
  arr.forEach((item) => {
    if (!contain.hasOwnProperty(item)) {
      newArr.push(item)
      contain[item] = true
    }
  })
  return newArr
}
export function unique3(arr) {
  return [...new Set(arr)]
}
