(function () {
  'use strict';

  var Day = require('./day.js');
  var Month = require('./month.js');
  var Year = require('./year.js');

  function SciDate(day, month, year) {
    this.year = new Year(year);
    this.month = new Month(month);
    this.day = new Day(day);

    if(!this.year.isValid() && !this.month.isValid() && ! this.day.isValid()) {
      throw new Error("Invalid date");
    }

    if(this.day > this.year.numberOfDaysInMonth(this.month)) {
      throw new Error("Invalid Date: Number of days in month are incorrect");
    }
  }

  SciDate.prototype.isGreaterThan = function(date) {
    if(this.year > date.year) {
      return true;
    } else if(this.year === date.year && this.month > date.month) {
      return true;
    } else if(this.year === date.year && this.month === date.month && this.day > date.day) {
      return true;
    }
    return false;
  };

  module.exports = SciDate;


})();