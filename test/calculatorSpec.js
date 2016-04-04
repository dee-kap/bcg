'use strict';
var assert = require('chai').assert;
var calculator = require('../lib/calculator.js');

describe('Calculator', function() {

  describe('validate date', function() {

    it('should return false when date is empty', function() {
      assert.isFalse(calculator.validateDate());
    });

    it('should return false when date passed in is a bunch of numbers', function() {
      assert.isFalse(calculator.validateDate(89808));
    });

    it('should return false when date passed in is not in mm/dd/yyyy format', function() {
      assert.isFalse(calculator.validateDate('ab/cd/efgh'));
    });

    it('should return false when days in date are zero', function() {
      assert.isFalse(calculator.validateDate('00/11/2016'));
    });

  });

  it('is all good', function() {
    assert.equal(true, true);
  });
});
