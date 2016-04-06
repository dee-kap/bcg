(function() {
  'use strict';
  var SciDate = require('./sciDate.js');

  var day, month, year;
  var startDate, endDate;

  var _getSciDate = function(date) {
    var dateParts = date.split('/');
    day = dateParts[0];
    month = dateParts[1];
    year = dateParts[2];
    return new SciDate(day, month, year);
  };

  var _isFormatValid = function(date) {
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) {
      return false;
    } else {
      return true;
    }
  };


  var _calculate = function(start, end) {
    var days = 0;

    if (!_isFormatValid(start) || !_isFormatValid(end)) {
      throw new Error('Invalid Date');
    }

    startDate = _getSciDate(start);
    endDate = _getSciDate(end);

    if (!startDate.isEqualTo(endDate)) {

      if (startDate.isGreaterThan(endDate)) {
        // swap
        var temp = startDate;
        startDate = endDate;
        endDate = temp;
      }

      while (!startDate.isEqualTo(endDate)) {
        startDate.addDay();
        days++;
      }
      --days;
    }

    return days;
  };

  module.exports = {
    calculateDays: _calculate
  };

})();
