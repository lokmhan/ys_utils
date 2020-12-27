export function difference(array1, ...arrays) {
  if (array1.length === 0) {
    return []
  } else if (arrays.length === 0) {
    return [...array1]
  }
  var newArr = [].concat(...arrays)

  return array1.filter((item) => {
    var flag = true

    if (newArr.indexOf(item) !== -1) {
      flag = false
    }
    return flag
  })
}
