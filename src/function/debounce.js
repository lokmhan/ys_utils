import { call } from './call'

export function debounce(callback, delay) {
  let timeout
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
