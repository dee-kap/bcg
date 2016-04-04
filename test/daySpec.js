var assert = require('chai').assert;
var _ = require('lodash');
var Day = require('../lib/day.js');

describe('Day', function() {

    it('should return the day which was passed in', function() {
        var myDay = new Day(5);
        assert.equal(myDay.day, 5);
    });

    describe('isValid', function() {

        it('should return false when day is empty', function() {
            var myDay = new Day();
            assert.isFalse(myDay.isValid())
        });

        it('should return false when input cannot be parsed as int', function () {
            var myDay = new Day('blah');
            assert.isFalse(myDay.isValid());
        });

        it('should return false when day is less than 1', function () {
            var myDay = new Day(0);
            assert.isFalse(myDay.isValid());
        });

        it('should return false when day is greater than 31', function () {
            var myDay = new Day(32);
            assert.isFalse(myDay.isValid());
        });
    })


});