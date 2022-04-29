const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let result = 0
  let arrNums = Array.from(Array(10).keys()).map(el => el.toString())
  let arrChars = ['A', 'B', 'C', 'D', 'E', 'F']
  let arrN = n.toString().split('-').map(el => el.split('')).flat()

  for (let i = 0; i < arrN.length; i++) {
    if (!arrNums.includes(arrN[i]) && !arrChars.includes(arrN[i])) {
      result++
    }
  }

  if (result > 0) return false
  else return true
}
module.exports = {
  isMAC48Address
};