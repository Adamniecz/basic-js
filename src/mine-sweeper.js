const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let counter = 0
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(true)) {
      counter++
      let mineIndex = matrix[i].indexOf(true)
      if (mineIndex === 0) {
        matrix[i] = matrix[i].map(el => el = 1)
        matrix[i][1] = 2
      } else {
        matrix[i] = matrix[i].map(el => el = 1)
        matrix[i][mineIndex - 1] = 2
      }
    } else {
      matrix[i] = matrix[i].map(el => el = 1)
    }
  }
  if (counter === 0) {
    return matrix.map(arr => arr.map(el => el = 0))
  } else {
    return matrix
  }
}

module.exports = {
  minesweeper
};