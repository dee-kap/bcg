(function() {
  'use strict';

  var day, month, year;

  var _validateDate = function(date) {

    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) {
      return false;
    }

    var tokens = date.split('/');
    day = tokens[0];
    month = tokens[1];
    year = tokens[2];


  };

  var _calculate = function(startDate, endDate) {

  };

  module.exports = {
    validateDate: _validateDate,
    calculateDays: _calculate
  };

})();
