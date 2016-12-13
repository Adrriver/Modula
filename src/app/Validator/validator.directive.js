"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
function recipListValidation() {
    return function (control) {
        var List_Regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        var splits = control.value.split(",");
        var valid;
        if (splits.length === 0) {
        }
        else {
            return List_Regex.test(control.value) ? null : {
                validateEmail: {
                    valid: false
                }
            };
        }
    };
}
var Validator = (function () {
    function Validator() {
        this.emailVal = recipListValidation();
    }
    Validator.prototype.validate = function (control) {
        return this.emailVal(control);
    };
    Validator = __decorate([
        core_1.Directive({
            selector: '[validateList][ngModel],[validateList][formControl]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return Validator; }), multi: true }]
        }), 
        __metadata('design:paramtypes', [])
    ], Validator);
    return Validator;
}());
exports.Validator = Validator;
//# sourceMappingURL=validator.directive.js.map