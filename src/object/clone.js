export function clone(target) {
  if (
    target instanceof Array ||
    (target !== null && typeof target === 'object')
  ) {
    const cloneTarget = Array.isArray(target) ? [] : {}
    if (Array.isArray(target)) {
      target.forEach((item) => {
        cloneTarget.push(item)
      })
    } else {
      for (const key in target) {
        cloneTarget[key] = target[key]
      }
    }
    return cloneTarget
  }
  return target
}
