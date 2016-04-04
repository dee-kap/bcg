var assert = require('chai').assert;
var _ = require('lodash');
var Year = require('../lib/year.js');


describe('Year', function () {
    var leapYears = [1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096];

    it('should return the year which was passed in', function () {
        var myYear = new Year(1989);
        assert.equal(myYear.year, 1989);
    });

    describe('isValid', function () {

        it('should return false when year is empty', function () {
            var myYear = new Year();
            assert.isFalse(myYear.isValid());
        });

        it('should return false when input cannot be parsed as int', function () {
            var myYear = new Year('xx');
            assert.isFalse(myYear.isValid());
        });

        it('should return false when year is less than 1901', function () {
            var myYear = new Year(1900);
            assert.isFalse(myYear.isValid());
        });

        it('should return false when year is greater than 2999', function () {
            var myYear = new Year(3000);
            assert.isFalse(myYear.isValid());
        });

        it('should return true when year is between 1901 and 2999', function () {
            var years = _.range(1901, 2999);
            years.forEach(function (y) {
                var myYear = new Year(y);
                assert.isTrue(myYear.isValid(), y + ' is a valid year');
            })

        });

        it('should return true when a valid year is passed in as a string', function () {
            var myYear = new Year('2125');
            assert.isTrue(myYear.isValid(), 'Year 2125 is a valid year');
        })

    });

    describe('isLeapYear', function () {

        it('should return true for valid leap years', function () {
            leapYears.forEach(function (y) {
                var myYear = new Year(y);
                assert.isTrue(myYear.isLeapYear(), y + ' is a valid leap year');
            });
        });

        //it('should return false for year which is not a leap year', function() {
        //  var years = _.range(1901, 2999);
        //  years.forEach(function(y) {
        //    if(!_.includes(leapYears, y)) {
        //      console.log(y);
        //      var myYear = new Year(y);
        //      var actual = myYear.isLeapYear();
        //      assert.isFalse(actual, y + ' is not a leap year');
        //    }
        //  })
        //
        //  var myYear = new Year(2014);
        //  assert.isFalse(myYear.isLeapYear());
        //
        //});

    });

    describe('numberOfDays', function () {

        it('should return 366 when year is leap year', function () {
            leapYears.forEach(function(y) {
                var myYear = new Year(y);
                assert.equal(myYear.numberOfDays(), 366);
            })
        });



    });


});
