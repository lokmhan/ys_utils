export function throttle(callback, delay) {
  let startTime = 0
  return function (event) {
    const current = Date.now()
    if (current - startTime > delay) {
      callback.call(this, event)
      startTime = current
    }
  }
}
