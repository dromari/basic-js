const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else {
    let res = [];
    let nameText = [
      "--discard-prev",
      "--discard-next",
      "--double-prev",
      "--double-next",
    ];
    for (let i = 0; i < arr.length; i++) {
      if (!nameText.some((el) => el === arr[i])) {
        res.push(arr[i]);
        if (arr[i + 1] === nameText[0] && arr[i - 1] !== nameText[1]) {
          res.pop();
        }
        if (arr[i - 1] === nameText[1]) {
          res.pop();
        }
        if (arr[i + 1] === nameText[2] && arr[i - 1] !== nameText[1]) {
          res.push(arr[i]);
        }
        if (arr[i - 1] === nameText[3]) {
          res.push(arr[i]);
        }
      }
    }
    return res;
  }
}

module.exports = {
  transform,
};
