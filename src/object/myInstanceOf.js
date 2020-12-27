export function myInstanceOf(object, type) {
  let protoObj = object.__proto__
  while (protoObj) {
    if (protoObj === type.prototype) return true
    protoObj = protoObj.__proto__
  }
  return false
}
