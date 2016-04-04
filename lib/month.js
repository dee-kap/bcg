(function() {
    'use strict';


    function MonthModule(month) {
        this.month = month;
    }

    MonthModule.prototype.isValid = function() {
        if (!this.month) {
            return false;
        }

        this.month = parseInt(this.month);

        if(isNaN(this.month)) {
            return false;
        }

        if (this.month < 1 || this.month > 12) {
            return false;
        }

        return true;
    };

    module.exports = MonthModule;

})();
