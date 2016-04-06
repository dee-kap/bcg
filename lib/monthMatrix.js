(function() {
  'use strict';

  /**
   * Structure to store total number of days for a month.
   * February is a special case.
   * Calling code must ensure that if the year is a leap year then 29 days are used.
   */
  module.exports = { 1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 };

})();
