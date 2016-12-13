"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var member_service_service_1 = require('../member-service.service');
var validator_directive_1 = require('../Validator/validator.directive');
var WizardFormCreator = (function () {
    function WizardFormCreator(fB, memberService, http) {
        this.fB = fB;
        this.memberService = memberService;
        this.http = http;
        this.submitNow = false;
        this.date = new Date();
    }
    WizardFormCreator.prototype.ngOnInit = function () {
        var _this = this;
        this.validator = new validator_directive_1.Validator();
        this.memberService.teacherMember.subscribe(function (teacher) {
            _this.wizardForm = _this.fB.group({
                gameName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10)]],
                teacher: [teacher, [forms_1.Validators.required]],
                class: ['', [forms_1.Validators.required]],
                dateCreated: ['date', [forms_1.Validators.required]],
                keywords: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
                grade: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(1)]],
                modules: _this.fB.array([
                    _this.initModule()
                ]),
                invited: ['', [forms_1.Validators.required, _this.validator.validate]]
            });
            _this.teacher = teacher;
        }, function (error) { return console.log("Error in Wizard Form Component; ngOnInit failed."); });
    };
    WizardFormCreator.prototype.initModule = function () {
        return this.fB.group({
            modId: ['', [forms_1.Validators.maxLength(0)]],
            difficulty: ['', [forms_1.Validators.required]],
            questionCount: ['', [forms_1.Validators.required]],
            modName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            questions: this.fB.array([
                this.initQuestion(),
            ])
        });
    };
    WizardFormCreator.prototype.addModule = function () {
        var contr = this.wizardForm.controls['modules'];
        contr.push(this.initModule());
    };
    WizardFormCreator.prototype.removeModule = function (p) {
        var cont = this.wizardForm.controls['modules'];
        cont.removeAt(p);
    };
    WizardFormCreator.prototype.initQuestion = function () {
        return this.fB.group({
            qNum: ['', [forms_1.Validators.required]],
            question: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(100)]],
            correct: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(30)]],
            incorr_a: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(30)]],
            incorr_b: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(30)]],
            incorr_c: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(30)]]
        });
    };
    WizardFormCreator.prototype.addQuestion = function () {
        var cont = this.wizardForm.controls['questions'];
        cont.push(this.initQuestion());
    };
    WizardFormCreator.prototype.removeQuestion = function (p) {
        var cont = this.wizardForm.controls['questions'];
        cont.removeAt(p);
    };
    WizardFormCreator.prototype.save = function (track) {
        var _this = this;
        var error;
        this.http.post('../../php_services/submit_module', JSON.stringify(track)).
            map(function (res) { return res.json(); }).subscribe(function (response) { _this.submissionResult = response.data; }, function (error) { return error = "We're sorry, your game was not saved.  Please contact us for help."; });
        this.submissionResult = error;
    };
    WizardFormCreator.prototype.submitNowToggle = function () {
        this.submitNow = !this.submitNow;
    };
    WizardFormCreator = __decorate([
        core_1.Component({
            selector: 'wizard',
            templateUrl: './wizard.component.html',
            styleUrls: ['../css/forms/main.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, member_service_service_1.MemberService, http_1.Http])
    ], WizardFormCreator);
    return WizardFormCreator;
}());
exports.WizardFormCreator = WizardFormCreator;
//# sourceMappingURL=wizard.component.js.map