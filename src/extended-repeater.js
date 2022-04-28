const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function makeOneStr(str, options, lastStr = false) {
  if (lastStr) {
    return str +
      (options.addition + options.additionSeparator)
        .repeat(options.additionRepeatTimes - 1) +
      options.addition
  } else {
    return (str +
      (options.addition +
        options.additionSeparator)
        .repeat(options.additionRepeatTimes - 1) +
      options.addition + options.separator)
  }
}

function repeater(str, options) {
  let result = ''

  let template = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|'
  }

  let resultOptions = Object.assign({}, template, options)

  if (str) str.toString()

  if (resultOptions.addition) resultOptions.addition.toString()

  result =
    makeOneStr(str, resultOptions).repeat(resultOptions.repeatTimes - 1) +
    makeOneStr(str, resultOptions, true)

  return result
}

module.exports = {
  repeater
};