(function () {
  'use strict';

  var Day = require('./day.js');
  var Month = require('./month.js');
  var Year = require('./year.js');

  function SciDate(day, month, year) {
    this.year = new Year(year);
    this.month = new Month(month);
    this.day = new Day(day);

    if(!this.year.isValid() || !this.month.isValid() || ! this.day.isValid()) {
      throw new Error("Invalid Date");
    }

    if(this.day > this.year.numberOfDaysInMonth(this.month)) {
      throw new Error("Invalid Date: Number of days in month are incorrect");
    }
  }

  SciDate.prototype.isGreaterThan = function(date) {
    if(this.year.year > date.year.year) {
      return true;
    } else if(this.year.year === date.year.year && this.month.month > date.month.month) {
      return true;
    } else if(this.year.year === date.year.year && this.month.month === date.month.month && this.day.day > date.day.day) {
      return true;
    }
    return false;
  };

  SciDate.prototype.isEqualTo = function(date) {
    return(this.year.year === date.year.year
      && this.month.month === date.month.month
      && this.day.day === date.day.day);
  };

  SciDate.prototype.addDay = function() {
    var newDay =this.day.day + 1;
    if(newDay > this.year.numberOfDaysInMonth(this.month.month)) {
      var newMonth = this.month.month + 1;
      if(newMonth > 12) {
        this.year.year++;
        this.month.month = 1;
        this.day.day = 1;
      } else {
        this.month.month++;
        this.day.day = 1;
      }
    } else {
      this.day.day++;
    }
  };

  SciDate.prototype.getFormattedDate = function() {
    return this.day.day + '/' + this.month.month + '/' + this.year.year;
  }

  module.exports = SciDate;


})();