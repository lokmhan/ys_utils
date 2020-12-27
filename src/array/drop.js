export function drop(array, count = 0) {
  return array.filter((item, index) => index >= count)
}
export function dropRight(array, count = 0) {
  return array.filter((item, index) => index < array.length - count)
}
