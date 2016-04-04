var assert = require('chai').assert;
var _ = require('lodash');
var Month = require('../lib/month.js');

describe('Month', function () {

    it('should return the month which was passed in', function () {
        var myMonth = new Month(3);
        assert.equal(myMonth.month, 3);
    });

    describe('isValid', function () {


        it('should return false when month is empty', function () {
            var myMonth = new Month();
            assert.isFalse(myMonth.isValid());
        });

        it('should return false when input cannot be parsed as int', function () {
            var myMonth = new Month('blah');
            assert.isFalse(myMonth.isValid());
        });

        it('should return false when month is less than 1', function () {
            var myMonth = new Month(0);
            assert.isFalse(myMonth.isValid());
        });

        it('should return false when month is greater than 12', function () {
            var myMonth = new Month(13);
            assert.isFalse(myMonth.isValid());
        });

        it('should return true when month is between 1 and 12', function () {
            var months = _.range(1, 12);
            months.forEach(function (m) {
                var myMonth = new Month(m);
                assert.isTrue(myMonth.isValid(), m + ' is a valid month');
            })
        });

        it('should return true when a valid month is passed in as a string', function () {
            var myMonth = new Month('10');
            assert.isTrue(myMonth.isValid());

        });


    });
});