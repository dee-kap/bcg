(function() {
  'use strict';

  var DayPart = require('./day.js');
  var MonthPart = require('./month.js');
  var YearPart = require('./year.js');

  /**
   * Constructor for SciDate object
   * @param day
   * @param month
   * @param year
   * @constructor
   */
  function SciDate(day, month, year) {
    this.yearPart = new YearPart(year);
    this.monthPart = new MonthPart(month);
    this.dayPart = new DayPart(day);

    if (!this.yearPart.isValid() || !this.monthPart.isValid() || !this.dayPart.isValid()) {
      throw new Error("Invalid Date");
    }

    if (this.dayPart.day > this.yearPart.numberOfDaysInMonth(this.monthPart.month)) {
      throw new Error("Invalid Date: Number of days in month are incorrect");
    }
  }

  /**
   * Checks if this date is greater than the date passed in
   * @param date
   * @returns {boolean}
   */
  SciDate.prototype.isGreaterThan = function(date) {
    if (this.yearPart.year > date.yearPart.year) {
      return true;
    } else if (this.yearPart.year === date.yearPart.year && this.monthPart.month > date.monthPart.month) {
      return true;
    } else if (this.yearPart.year === date.yearPart.year && this.monthPart.month === date.monthPart.month && this.dayPart.day > date.dayPart.day) {
      return true;
    }
    return false;
  };

  /**
   * Checks if this date is equal to the one passed in
   * @param date
   * @returns {boolean}
   */
  SciDate.prototype.isEqualTo = function(date) {
    return (this.yearPart.year === date.yearPart.year && this.monthPart.month === date.monthPart.month && this.dayPart.day === date.dayPart.day);
  };

  /**
   * Adds a day to this date
   */
  SciDate.prototype.addDay = function() {
    var newDay = this.dayPart.day + 1;
    if (newDay > this.yearPart.numberOfDaysInMonth(this.monthPart.month)) {
      var newMonth = this.monthPart.month + 1;
      if (newMonth > 12) {
        this.yearPart.year++;
        this.monthPart.month = 1;
        this.dayPart.day = 1;
      } else {
        this.monthPart.month++;
        this.dayPart.day = 1;
      }
    } else {
      this.dayPart.day++;
    }
  };

  /**
   * Utility method. Provides assistance while debugging
   * @returns {string}
   */
  SciDate.prototype.getFormattedDate = function() {
    return this.dayPart.day + '/' + this.monthPart.month + '/' + this.yearPart.year;
  }

  module.exports = SciDate;


})();
