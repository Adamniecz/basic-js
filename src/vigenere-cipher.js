const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(mode = true) {
    this.mode = mode
  }

  encrypt(str, keyWord) {

    if (!str || !keyWord) {
      throw new Error('Incorrect arguments!')
    }

    let result = ''

    for (let i = 0, j = 0; i < str.length; i++) {

      let char = str.charAt(i)

      if (char === ' ' || !char.match(/[a-zA-Z]/i)) {
        result += char
        continue
      }
      if (char === char.toUpperCase()) {
        result += String.fromCharCode((char.charCodeAt(0) + keyWord.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65)
      } else {
        result += String.fromCharCode((char.charCodeAt(0) + keyWord.toLowerCase().charCodeAt(j) - 2 * 97) % 26 + 97).toUpperCase()
      }
      j = ++j % keyWord.length
    }

    if (this.mode) {
      return result
    } else {
      return result.split('').reverse().join('')
    }
  }

  decrypt(str, keyWord) {

    if (!str || !keyWord) {
      throw new Error('Incorrect arguments!')
    }

    let result = ''

    for (let i = 0, j = 0; i < str.length; i++) {

      let char = str.charAt(i)

      if (char === ' ' || !char.match(/[a-zA-Z]/i)) {
        result += char
        continue
      }
      if (char === char.toUpperCase()) {
        result += String.fromCharCode(90 - (25 - (char.charCodeAt(0) - keyWord.toUpperCase().charCodeAt(j))) % 26)
      } else {
        result += String.fromCharCode(122 - (25 - (char.charCodeAt(0) - keyWord.toLowerCase().charCodeAt(j))) % 26)
      }
      j = ++j % keyWord.length
    }

    if (this.mode) {
      return result
    } else {
      return result.split('').reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};

const directMachine = new VigenereCipheringMachine();

console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))

// 'AEIHQX SX DLLU!'