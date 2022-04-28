const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {}
  let arrWithDomains = domains.map(domain => domain.split('.').reverse().map(el => '.' + el))
  for (let i = 0; i < arrWithDomains.length; i++) {
    for (let j = 0; j < arrWithDomains[i].length; j++) {
      let currentDomain = arrWithDomains[i].slice(0, j + 1).join('')
      if (!result[currentDomain]) {
        result[currentDomain] = 1
      } else {
        result[currentDomain]++
      }
    }
  }
  return result
}

module.exports = {
  getDNSStats
};


function getDNSStats(domains) {
  let result = {}
  let arrWithDomains = domains.map(domain => domain.split('.').reverse().map(el => '.' + el))
  for (let i = 0; i < arrWithDomains.length; i++) {
    for (let j = 0; j < arrWithDomains[i].length; j++) {
      let currentDomain = arrWithDomains[i].slice(0, j + 1).join('')
      if (!result[currentDomain]) {
        result[currentDomain] = 1
      } else {
        result[currentDomain]++
      }
    }
  }
  return result
}

console.log(getDNSStats([
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
]))