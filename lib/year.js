(function() {
  'use strict';

  var MonthMatrix = require('./monthMatrix.js');
  var MonthName = require('./monthName.js');

  /**
   * Constructor function for YearPart
   * @param year
   * @constructor
   */
  function YearPart(year) {
    this.year = year;
  }

  /**
   * Verifies if year is valid.
   * Year must be a number
   * Year must NOT be less than 1901 and not greater than 2999
   * @returns {boolean}
   */
  YearPart.prototype.isValid = function() {
    if (!this.year) {
      return false;
    }

    this.year = parseInt(this.year);

    if (isNaN(this.year)) {
      return false;
    }

    if (this.year < 1901 || this.year > 2999) {
      return false;
    }

    return true;
  };

  YearPart.prototype.isLeapYear = function() {
    return this.isValid() && ((this.year % 4 === 0) && (this.year % 100 != 0)) || (this.year % 400 === 0);
  };


  YearPart.prototype.numberOfDaysInMonth = function(month) {
    if (this.isLeapYear() && month == MonthName.February) {
      return 29;
    } else {
      return MonthMatrix[month];
    }
  };

  module.exports = YearPart;

})();
