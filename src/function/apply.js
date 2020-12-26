export function apply(func, obj, args) {
  if (obj === undefined || obj === null) {
    obj = window
  }
  obj.tempFn = func
  const result = obj.tempFn(...args)
  delete obj.tempFn
  return result
}
