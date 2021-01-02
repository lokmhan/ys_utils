import { call } from './call'
export function bind(func, obj, ...args) {
  return (...args2) => {
    return call(func, obj, ...args, ...args2)
  }
}
