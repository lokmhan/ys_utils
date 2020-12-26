import { call } from './call'
export function bind(func, obj, ...args) {
  return (...args2) => {
    return func.call(obj, ...args, ...args2)
  }
}
