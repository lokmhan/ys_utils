export function intersection(array1, array2) {
  const newArr = []
  array1.forEach((item) => {
    for (let index = 0; index < array2.length; index++) {
      if (item === array2[index]) {
        newArr.push(item)
        break
      }
    }
  })
  return newArr
}
