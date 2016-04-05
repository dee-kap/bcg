(function () {
  'use strict';

  /**
   * Constructor function for DayPart
   * @param day
   * @constructor
   */
  function DayPart(day) {
    this.day = day;
  }

  /**
   * Verifies if day is a valid day.
   * Day must be a number
   * Day must NOT be greater than 31
   * @returns {boolean}
   */
  DayPart.prototype.isValid = function () {
    if (!this.day) {
      return false;
    }

    this.day = parseInt(this.day);

    // If it cannot be converted to an int
    // then it is not a valid day
    if (isNaN(this.day)) {
      return false;
    }

    if (this.day < 1 || this.day > 31) {
      return false;
    }

    return true;
  };


  module.exports = DayPart;

})();
