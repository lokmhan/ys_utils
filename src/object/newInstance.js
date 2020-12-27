export function newInstance(Fn, ...args) {
  const obj = {}
  obj.__proto__ = Fn.prototype
  let result = Fn.apply(obj, args)

  if (result instanceof Object) {
    return result
  }

  return obj
}
