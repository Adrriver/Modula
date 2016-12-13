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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var student_service_1 = require("./student.service.js");
var StudentDetail = (function () {
    function StudentDetail(studentService, route, location) {
        this.studentService = studentService;
        this.route = route;
        this.location = location;
    }
    StudentDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['studentUserId'];
            _this.studentService.getStudent(studentUserId)
                .then(function (student) { return _this.student = student; });
        });
    };
    StudentDetail.prototype.goBack = function () {
        this.location.back();
    };
    return StudentDetail;
}());
StudentDetail = __decorate([
    core_1.Component({
        //moduleID: module.id,
        selector: 'my-student-detail',
        templateUrl: 'student-detail.component.html'
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService, typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, common_1.Location])
], StudentDetail);
exports.StudentDetail = StudentDetail;
var _a;
//# sourceMappingURL=student-detail.component.js.map
