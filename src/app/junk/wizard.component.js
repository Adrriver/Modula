"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var modula_member_service_1 = require("./modula-member.service");
var HTTP_service_1 = require("./HTTP.service");
var WizardFormCreator = (function () {
    function WizardFormCreator(fB, modMember, httpService) {
        this.fB = fB;
        this.modMember = modMember;
        submitNow: Boolean = false;
        this.date = new Date();
    }
    WizardFormCreator.prototype.ngOnInit = function () {
        var _this = this;
        this.modMember.getMember().subscribe(function (teacher) {
            _this.wizardForm = _this.fB.group({
                gameName: ['', [Validators.required, Validators.minLength(10)]],
                teacher: [_this.teacher, [Validators.required]],
                class: ['', [Validators.required]],
                dateCreated: ['date', [Validators.required]],
                keywords: ['', [Validators.required, Validators.minLength(3)]],
                grade: ['', [Validators.required, Validators.maxLength(1)]],
                modules: _this.fB.array([
                    _this.initModules()
                ]),
                invited: ['', [Validators.required, Validators.listFormat]]
            });
            _this.teacher = teacher;
        }, function (error) { return console.log("Error in Wizard Form Component; ngOnInit failed."); });
    };
    WizardFormCreator.prototype.initModules = function () {
        return this.fB.group({
            difficulty: ['', [Validators, required]],
            questionCount: ['', [Validators.required]],
            modName: ['', [Validators.required, Validators.minLength(3)]],
            questions: this.fB.array([
                this.initQuestion(),
            ])
        });
    };
    WizardFormCreator.prototype.addModule = function () {
        var contr = this.wizardForm.controls['modules'];
        cont.push(this.initModule());
    };
    WizardFormCreator.prototype.removeModule = function (p) {
        var cont = this.wizardForm.controls['modules'];
        cont.removeAt(p);
    };
    WizardFormCreator.prototype.initQuestion = function () {
        return this.fB.group({
            correctAnswer: ['', [Validators.required]],
            qNum: ['', [Validators.required]],
            question: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
            A: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
            B: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
            C: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
            D: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]]
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
        //save question set
        httpService._post(track.value, '../php_functions/submit_module');
    };
    WizardFormCreator.prototype.submitNowToggle = function () {
        submitNow = !submitNow;
    };
    return WizardFormCreator;
}());
WizardFormCreator = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'wizard',
        templateUrl: 'wizard.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        modula_member_service_1.ModulaMemberService,
        HTTP_service_1.HTTPService])
], WizardFormCreator);
exports.WizardFormCreator = WizardFormCreator;
//# sourceMappingURL=wizard.component.js.map