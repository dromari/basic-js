const { NotImplementedError } = require("../lib");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  try {
    date.getTime();
  } catch (e) {
    throw new Error("Invalid date!");
  }
  let numberM = date.getMonth() + 1;
  if ((numberM >= 1 && numberM <= 2) || numberM == 12) {
    return "winter";
  }
  if (numberM >= 3 && numberM <= 5) {
    return "spring";
  }
  if (numberM >= 6 && numberM <= 8) {
    return "summer";
  }
  if (numberM >= 9 && numberM <= 11) {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
