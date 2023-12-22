const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let a = names.length;
  let arr = [];
  for (let i = 0; i < a; i++) {
    if (!arr.includes(names[i])) {
      arr.push(names[i]);
      continue;
    }
    for (let k = 1; k < a; k++) {
      if (!arr.includes(`${names[i]}(${k})`)) {
        arr.push(`${names[i]}(${k})`);
        break;
      }
    }
  }
  return arr;
}

module.exports = {
  renameFiles
};
