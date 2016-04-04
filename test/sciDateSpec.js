var assert = require('chai').assert;
var _ = require('lodash');
var SciDate = require('../lib/sciDate.js');

// check that date is valid

describe('SciDate', function() {

  it('should create an object when valid values are passed', function() {
    var date = new SciDate(12, 3, 1987);
    assert.isTrue(_.isObject(date));

  });

});