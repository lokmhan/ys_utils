export function intersection(array1, array2) {
  const newArr = []
  array1.forEach((item) => {
    array2.forEach((value) => {
      if (item === value) {
        newArr.push(item)
      }
    })
  })
  return newArr
}
