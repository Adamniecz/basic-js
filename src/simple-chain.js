const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  'chain': [],

  getLength() {
    return this.chain.length
  },
  addLink(value = '( )') {
    this.chain.push(`~( ${value} )~`)
    return chainMaker
  },
  removeLink(position) {

    let index

    if (!Number.isInteger(position)) {
      throw new Error("You can't remove incorrect link!")
    } else {
      index = position - 1
    }
    if (index < 0 || index >= this.chain.length) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    } else {
      this.chain.splice(position - 1, 1)
      return chainMaker
    }
  },
  reverseChain() {
    this.chain.reverse()
    return chainMaker
  },
  finishChain() {
    let result = this.chain.join('')
    this.chain = []
    return result.slice(1, result.length - 1)
  }
};

module.exports = {
  chainMaker
};