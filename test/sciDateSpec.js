var assert = require('chai').assert;
var expect = require('chai').expect;
var _ = require('lodash');
var SciDate = require('../lib/sciDate.js');

// check that date is valid

describe('SciDate', function() {
  it('should create an object when valid values are passed', function() {
    var date = new SciDate(12, 3, 1987);
    assert.isTrue(_.isObject(date));
  });

  it('should throw an error when invalid values are passed into constructor', function() {
    expect(function() {
      new SciDate('xx/01/1999');
    }).to.throw('Invalid Date');

  });

  describe('isGreaterThan', function() {
    it('should return true when date passed in is greater', function() {
      var date1 = new SciDate(01, 11, 1965);
      var date2 = new SciDate(30, 10, 1965);
      assert.isTrue(date1.isGreaterThan(date2));
    });

    it('should return false when date passed in is NOT greater', function() {
      var date1 = new SciDate(01, 11, 1965);
      var date2 = new SciDate(02, 11, 1965);
      assert.isFalse(date1.isGreaterThan(date2));
    });

  });

  describe('isEqualTo', function() {
    it('should return false when two dates are different', function() {
      var date1 = new SciDate(01, 11, 1965);
      var date2 = new SciDate(30, 10, 1965);
      assert.isFalse(date1.isEqualTo(date2));
    });

    it('should return false when two dates are different', function() {
      var date1 = new SciDate(02, 06, 1983);
      var date2 = new SciDate(22, 06, 1983);
      assert.isFalse(date1.isEqualTo(date2));
    });


    it('should return true when two dates are same', function() {
      var date1 = new SciDate(26, 09, 2000);
      var date2 = new SciDate(26, 09, 2000);
      assert.isTrue(date1.isEqualTo(date2));
    });

  });

  describe('addDay', function() {
    it('should increase date by one day', function() {
      var date = new SciDate(01, 11, 1936);
      date.addDay();
      assert.isTrue(date.dayPart.day === 2);
      assert.isTrue(date.monthPart.month === 11);
      assert.isTrue(date.yearPart.year === 1936);
    });

    it('should increase date by one day', function() {
      var date = new SciDate(31, 01, 1936);
      date.addDay();
      assert.isTrue(date.dayPart.day === 1);
      assert.isTrue(date.monthPart.month === 2);
      assert.isTrue(date.yearPart.year === 1936);
    });

    it('should increase date by one day', function() {
      var date = new SciDate(31, 12, 1936);
      date.addDay();
      assert.isTrue(date.dayPart.day === 1);
      assert.isTrue(date.monthPart.month === 1);
      assert.isTrue(date.yearPart.year === 1937);
    });

  });

});
