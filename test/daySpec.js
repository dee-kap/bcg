var assert = require('chai').assert;
var _ = require('lodash');
var DayPart = require('../lib/day.js');

describe('DayPart', function() {

  it('should return the day which was passed in', function() {
    var myDay = new DayPart(5);
    assert.equal(myDay.day, 5);
  });

  describe('isValid', function() {

    it('should return false when day is empty', function() {
      var myDay = new DayPart();
      assert.isFalse(myDay.isValid());
    });

    it('should return false when input cannot be parsed as int', function() {
      var myDay = new DayPart('blah');
      assert.isFalse(myDay.isValid());
    });

    it('should return false when day is less than 1', function() {
      var myDay = new DayPart(0);
      assert.isFalse(myDay.isValid());
    });

    it('should return false when day is greater than 31', function() {
      var myDay = new DayPart(32);
      assert.isFalse(myDay.isValid());
    });
  });
  
});
