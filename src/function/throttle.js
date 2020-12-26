export function throttle(callback, delay) {
  let startTime = 0 //默认值不要是Date.now() ==> 第一次时间理解调用
  return function (event) {
    // 节流函数/真正的事件回调函数 this是发生事件的标签
    const currentTime = Date.now()

    if (currentTime - startTime > delay) {
      callback.call(this, event)
      startTime = currentTime
    }
  }
}
