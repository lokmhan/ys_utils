// 将数组拆分成多个 size 长度的区块， 每个区块组成小数组，整体组成个一个二维数组

export function chunk(array, size) {
  let bigArr = []
  let smallArr = []
  // 如果是空数组， 直接返回空数组
  if (array.length === 0) {
    return bigArr
  }
  // 处理size
  if (size < 1) {
    size = 1
  }

  array.forEach((item) => {
    // 将smallArr push 到 bigArr中
    if (smallArr.length === 0) {
      bigArr.push(smallArr)
    }
    // 将元素添加到 smallArr
    smallArr.push(item)
    // 当smallArr.length为size时，让smallArr指向一个新的空数组
    if (smallArr.length === size) {
      smallArr = []
    }
  })

  return bigArr
}
