export function intersection(array1, ...arrays) {
  const newArr = []
  array1.forEach((item) => {
    for (let index = 0; index < arrays.length; index++) {
      const array = arrays[index]
      for (let index2 = 0; index2 < array.length; index2++) {
        if (item === array[index]) {
          newArr.push(item)
          break
        }
      }
    }
  })
  return newArr
}
