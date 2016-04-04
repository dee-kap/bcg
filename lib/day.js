(function() {
    'use strict';

    function DayModule(day) {
        this.day = day;
    }

    DayModule.prototype.isValid = function() {
        if (!this.day) {
            return false;
        }

        this.day = parseInt(this.day);

        if(isNaN(this.day)) {
            return false;
        }

        if (this.day < 1 || this.day > 31) {
            return false;
        }

        return true;
    };




    module.exports = DayModule;

})();
