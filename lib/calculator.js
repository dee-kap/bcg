(function() {
  'use strict';

  var day, month, year;
  var monthMatrix = [{
    1: 31
  }, {
    2: 28
  }, {
    3: 30
  }];


  function isValidDay(day) {
    // check that day is greater than 0 and less than 31
    if (day < 1 || day > 31) {
      return false;
    }
  }

  function isValidMonth(month) {

  }

  var _validateDate = function(date) {

    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) {
      return false;
    }

    var tokens = date.split('/');
    day = tokens[0];
    month = tokens[1];
    year = tokens[2];

    if(!isValidDay(day)) {
      return false;
    }

  };

  var _calculate = function(startDate, endDate) {

  };

  module.exports = {
    validateDate: _validateDate,

    calculateDays: _calculate
  };

})();
