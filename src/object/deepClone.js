export function deepClone1(target) {
  return JSON.parse(JSON.stringify(target))
}

export function deepClone2(target) {
  if (
    Array.isArray(target) ||
    (target !== null && typeof target === 'Object')
  ) {
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = deepClone2(target[key])
      }
    }
    return cloneTarget
  } else {
    return target
  }
}

export function deepClone3(target, map = new Map()) {
  if (
    target instanceof Array ||
    (target !== null && typeof target === 'Object')
  ) {
    let cloneTarget = map.get(target)
    if (cloneTarget) {
      return cloneTarget
    }
    if (target instanceof Array) {
      cloneTarget = []
      map.set(target, cloneTarget)
      target.forEach((item) => {
        cloneTarget.push(deepClone3(item, map))
      })
    } else {
      cloneTarget = {}
      map.set(target, cloneTarget)
      for (const key in target) {
        if (target.hasOwnProperty(key)) {
          cloneTarget[key] = deepClone3(target[key], map)
        }
      }
    }
    return cloneTarget
  } else {
    return target
  }
}
