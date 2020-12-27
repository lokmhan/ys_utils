export function difference(array1, array2) {
  const newArr = array1.slice(0)
  array2.forEach((item) => {
    newArr.forEach((value, index) => {
      if (value === item) {
        newArr.splice(index, 1)
        return false
      }
    })
  })
  return newArr
}
