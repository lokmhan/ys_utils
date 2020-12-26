export default function call(func, obj, ...args) {
  if (obj === undefined || obj === null) {
    obj = window
  }
  obj.tempFn = func
  var result = obj.tempFn(...args)
  delete obj.tempFn
  return result
}
