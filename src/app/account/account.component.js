"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var member_service_service_1 = require('../member-service.service');
var validator_directive_1 = require('../Validator/validator.directive');
var AccountComponent = (function () {
    function AccountComponent(formB, memberService, http) {
        this.formB = formB;
        this.memberService = memberService;
        this.http = http;
        this.update_url = '/php_services/update_user';
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emailVal = new validator_directive_1.Validator();
        this.status = localStorage.getItem('status');
        if (this.status === 'teacher') {
            this.memberService.teacherMember.map(function (teacher) { return teacher; }).subscribe(function (teacher) {
                _this.memberService.teacherMember.map(function (res) { return res; }).subscribe(function (teacher) { _this.teacher = teacher; });
                _this.accountForm = _this.formB.group({
                    username: [''],
                    password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]],
                    firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
                    lastName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
                    schoolId: [''],
                    email: ['', [forms_1.Validators.required, _this.emailVal.validate]],
                    deletAccount: ['']
                });
                _this.accountForm.controls['username']
                    .setValue(_this.teacher.username, { onlySelf: true });
                _this.accountForm.controls['password']
                    .setValue(_this.teacher.password, { onlySelf: true });
                _this.accountForm.controls['firstName']
                    .setValue(_this.teacher.firstName, { onlySelf: true });
                _this.accountForm.controls['lastName']
                    .setValue(_this.teacher.lastName, { onlySelf: true });
                _this.accountForm.controls['schoolId']
                    .setValue(_this.teacher.schoolId, { onlySelf: true });
                _this.accountForm.controls['email']
                    .setValue(_this.teacher.email, { onlySelf: true });
            }, function (error) { return console.log("Account was not updated."); });
        }
        else {
            this.memberService.studentMember.subscribe(function (student) {
                _this.memberService.studentMember.map(function (res) { return res; }).subscribe(function (student) { _this.student = student; });
                _this.accountForm = _this.formB.group({
                    username: [''],
                    password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]],
                    firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
                    lastName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
                    schoolId: [''],
                    email: ['', [forms_1.Validators.required, _this.emailVal.validate]]
                });
            }, function (error) { return console.log("Account information was not updated."); });
            this.accountForm.controls['username']
                .setValue(this.student.username, { onlySelf: true });
            this.accountForm.controls['password']
                .setValue(this.student.password, { onlySelf: true });
            this.accountForm.controls['firstName']
                .setValue(this.student.firstName, { onlySelf: true });
            this.accountForm.controls['lastName']
                .setValue(this.student.lastName, { onlySelf: true });
            this.accountForm.controls['schoolId']
                .setValue(this.student.schoolId, { onlySelf: true });
            this.accountForm.controls['email']
                .setValue(this.student.email, { onlySelf: true });
        }
    };
    AccountComponent.prototype.save = function (accountInfor) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token');
        this.http.post(this.update_url + '/update_user?token=' + token, { accountInfor: accountInfor }, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (resp) {
            _this.memberService.refreshUser();
            if (_this.status === 'teacher') {
                _this.memberService.teacherMember.map(function (res) { return res; }).subscribe(function (teacher) {
                    _this.teacher = teacher;
                });
            }
            else {
                _this.memberService.studentMember.map(function (res) { return res; }).subscribe(function (student) {
                    _this.student = student;
                });
            }
        }, function (error) { return console.log("Could not fully update user."); });
    };
    AccountComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'account-settings',
            templateUrl: './account.component.html',
            styleUrls: ['./account.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, member_service_service_1.MemberService, http_1.Http])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map