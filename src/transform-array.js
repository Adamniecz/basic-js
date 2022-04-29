const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }

  let mutantArr = [...arr]
  let counter = 0

  for (let i = 0; i < mutantArr.length; i++) {

    switch (mutantArr[i]) {

      case '--discard-next':
        if (i === mutantArr.length - 1) {
          mutantArr.splice(-1, 1)
        } else {
          mutantArr.splice(i, 2)
        }
        i--
        break;

      case '--discard-prev':
        if (i === 0) {
          mutantArr.splice(0, 1)
        } else if (i !== counter) {
          mutantArr.splice(i, 1)
        } else {
          mutantArr.splice(i - 1, 2)
        }
        i--
        break;

      case '--double-next':
        if (i === mutantArr.length - 1) {
          mutantArr.splice(-1, 1)
        } else {
          mutantArr[i] = mutantArr[i + 1]
        }
        break;

      case '--double-prev':
        if (i === 0) {
          mutantArr.splice(0, 1)
        } else if (i !== counter) {
          mutantArr.splice(i, 1)
        } else {
          mutantArr[i] = mutantArr[i - 1]
        }
        break;

      default:
        break;
    }

    counter++

  }

  return mutantArr

}

module.exports = {
  transform
};