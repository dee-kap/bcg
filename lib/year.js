(function() {
  'use strict';

  function YearModule(year) {
    this.year = year;
  }

  YearModule.prototype.isValid = function() {
    if (!this.year) {
      return false;
    }

    this.year = parseInt(this.year);

    if(isNaN(this.year)) {
      return false;
    }

    if (this.year < 1901 || this.year > 2999) {
      return false;
    }

    return true;
  };

  YearModule.prototype.isLeapYear = function() {
    return this.isValid() && ((this.year % 4 === 0) && (this.year % 100 != 0)) || (this.year % 400 === 0);
  };

  YearModule.prototype.numberOfDays = function() {
    if(this.isLeapYear()) {
      return 366;
    } else {
      return 365;
    }
  }

  module.exports = YearModule;

})();
