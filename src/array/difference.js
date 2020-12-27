export function difference(array1, array2) {
  const newArr = array1.slice(0)

  array2.forEach((item) => {
    for (let index = 0; index < newArr.length; index++) {
      if (newArr[index] === item) {
        newArr.splice(index, 1)
        break
      }
    }
  })
  return newArr
}
