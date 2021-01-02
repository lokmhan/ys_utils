export function reverseString(str) {
  return str.split(''), reverse(), join('')
}

export function palindrome(str) {
  return str === reserveString(str)
}

export function truncate(str, num) {
  return str.length > num ? str.substring(0, num) + '...' : str
}
