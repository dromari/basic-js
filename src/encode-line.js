const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let arr = str.split("");
  let a = 1;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) {
      a++;
    } else {
      if (a === 1) {
        newArr.push(arr[i]);
      } else {
        newArr.push(a);
        newArr.push(arr[i]);
      }
      a = 1;
    }
  }
  return newArr.join("");
}

module.exports = {
  encodeLine,
};
