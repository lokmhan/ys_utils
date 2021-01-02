export function debounce(callback, delay) {
  return function (event) {
    if (callback.timeoutId) {
      clearTimeout(callback.timeoutId)
    }
    callback.timeoutId = setTimeout(() => {
      callback.call(this, event)
      delete callback.timeoutId
    }, delay)
  }
}
