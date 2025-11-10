const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push("( " + value + " )");
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== "number" ||
      position > this.getLength() ||
      position < 1
    ) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let resArr = this.arr.join("~~");
    this.arr = [];
    return resArr;
  },
};

module.exports = {
  chainMaker,
};
