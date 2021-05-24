export function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}

export function throttle(func, wait = 1000) {
  let pre = 0
  return (...args) => {
    let now = +new Date()
    if(now - pre > wait) {
      pre = now
      func.apply(this, args)
    }
  }
}

export function debounce(func, wait = 1000) {
  let timer = null
  return (...args) => {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}