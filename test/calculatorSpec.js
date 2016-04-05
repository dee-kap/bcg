'use strict';
var assert = require('chai').assert;
var Calculator = require('../lib/calculator.js');

describe('Calculator', function() {

  describe('calculateDays', function() {

    it('should return 19', function() {
      var days = Calculator.calculateDays('02/06/1983', '22/06/1983');
      assert.equal(days, 19);
    });

    it('should return 173', function() {
      var days = Calculator.calculateDays('04/07/1984', '25/12/1984');
      assert.equal(days, 173);
    });

    it('should return 1979', function() {
      var days = Calculator.calculateDays('03/08/1983', '03/01/1989');
      assert.equal(days, 1979);
    });

    it('should return 1979', function() {
      var days = Calculator.calculateDays('03/01/1989', '03/08/1983');
      assert.equal(days, 1979);
    });

    it('should return 0', function() {
      var days = Calculator.calculateDays('03/01/1989', '03/01/1989');
      assert.equal(days, 0);
    });

    it('should return 0', function() {
      var days = Calculator.calculateDays('7/11/1972', '8/11/1972');
      assert.equal(days, 0);
    });


    it('should return 1', function() {
      var days = Calculator.calculateDays('01/01/2000', '03/01/2000');
      assert.equal(days, 1);
    });

  });




});
