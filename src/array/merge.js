export function merge(array1, array2) {
  const newArr = array1.slice(0)
  array2.forEach((item) => {
    let flag = true
    // newArr.forEach((value) => {
    //   if (value === item) {
    //     flag = false
    //   }
    // })
    for (let index = 0; index < newArr.length; index++) {
      if (newArr[index] === item) {
        flag = false
        break
      }
    }
    if (flag) newArr.push(item)
  })
  return newArr
}
