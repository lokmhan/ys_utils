export function slice(array, startIndex, endIndex) {
  const arr = []
  if (array.length === 0) {
    return arr
  }
  if (startIndex < 0 || endIndex > array.length - 1) {
    return new Error('请输入正确的范围')
  }

  endIndex = endIndex || array.length - 1

  startIndex = startIndex || 0

  array.forEach((item, index) => {
    if (index >= startIndex && index <= endIndex) {
      arr.push(item)
    }
  })
  return arr
}
