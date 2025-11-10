const { NotImplementedError } = require("../lib");

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
function deleteDigit(n) {
  let a = 0;
  const arr = n.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    let temp = arr.slice();
    temp.splice(i, 1);
    let numb = temp.join("");
    if (numb > a) {
      a = numb;
    }
  }
  let result = parseInt(a);
  return result;
}

module.exports = {
  deleteDigit,
};
