const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(currentActivity) {
  if (Number.isNaN(+currentActivity) || !(typeof currentActivity === 'string' || currentActivity instanceof String)) {
    return false
  }

  let finalActivity = Math.log(MODERN_ACTIVITY / currentActivity)

  let t = 0.693 / HALF_LIFE_PERIOD

  let result = Math.ceil(finalActivity / t)

  if (result > 0 && result !== Infinity) {
    return result
  }
  return false
}

module.exports = {
  dateSample
};