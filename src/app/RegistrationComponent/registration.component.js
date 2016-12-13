"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var RegistrationComponent = (function () {
    function RegistrationComponent(http, fB) {
        this.http = http;
        this.fB = fB;
        this.validToken = false;
        this.successfulReg = false;
        this.validToken = false;
        this.date = new Date();
        this.post_url = '../../php_services';
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.getValidTokens();
        this.registrationForm = this.fB.group({
            username: ['username', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            password: ['your best password', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            userfirst: ['Your first name', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            userlast: ['Your last name', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            schoolname: ['Your school', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            registrationToken: ['(hint: it was in your e-mail)', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            grade: ['Your Grade', [forms_1.Validators.required, forms_1.Validators.maxLength(2)]]
        });
    };
    RegistrationComponent.prototype.sendForm = function (regForm) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token');
        this.http.post(this.post_url + '/registerUser', { 'regForm': 'regForm' }, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (resp) { _this.responseMessage = resp.data; }, function (error) { return console.log("Update failed."); });
    };
    RegistrationComponent.prototype.getValidTokens = function () {
        return this.http.get('../php_services/getAllTokens').map(function (res) { return res.json().data; });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            templateUrl: './registration.component.html',
            styleUrls: ['../css/forms/main.css'],
            selector: 'registration-comp'
        }), 
        __metadata('design:paramtypes', [http_1.Http, forms_1.FormBuilder])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map