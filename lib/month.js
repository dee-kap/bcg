(function() {
  'use strict';

  /**
   * Constructor function for MonthPart
   * @param month
   * @constructor
   */
  function MonthPart(month) {
    this.month = month;
  }

  /**
   * Verifies if month is valid.
   * Month must be a number
   * Month must NOT be less than 1 and not greater than 12
   * @returns {boolean}
   */
  MonthPart.prototype.isValid = function() {
    if (!this.month) {
      return false;
    }

    this.month = parseInt(this.month);

    if (isNaN(this.month)) {
      return false;
    }

    if (this.month < 1 || this.month > 12) {
      return false;
    }

    return true;
  };

  module.exports = MonthPart;

})();
