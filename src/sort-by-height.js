const { NotImplementedError } = require("../lib");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let res = [];
  let a = Array.from(arr);
  arr.forEach((e) => {
    if (e === -1) {
      e = e;
    } else {
      e = Math.min(...a.filter((e) => e !== -1));
      a.splice(a.indexOf(e), 1);
    }
    res.push(e);
  });
  return res;
}

module.exports = {
  sortByHeight,
};
