const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let resultArr = []
  let numArr = num.toString().split('')

  for (let i = 0; i < numArr.length; i++) {
    let currentNum = numArr.slice(0, i).concat(numArr.slice(i + 1, Infinity))
    resultArr.push(currentNum.join(''))
  }
  return Math.max(...resultArr)
}

module.exports = {
  deleteDigit
};