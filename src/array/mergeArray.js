export function merge(array1, ...arrays) {
  const newArr = array1.slice(0)
  const concatArray = [].concat(...arrays)
  concatArray.forEach((item) => {
    let flag = true
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
