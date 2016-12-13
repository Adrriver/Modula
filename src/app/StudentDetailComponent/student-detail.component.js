"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var student_service_1 = require('../StudentService/student.service');
var StudentDetail = (function () {
    function StudentDetail(studentService, route, location) {
        this.studentService = studentService;
        this.route = route;
        this.location = location;
    }
    StudentDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['username'];
            _this.studentService.getStudent(id).map(function (student) { return _this.student = student; });
        });
    };
    StudentDetail.prototype.goBack = function () {
        this.location.back();
    };
    StudentDetail = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-student-detail',
            templateUrl: './student-detail.component.html',
            styleUrls: ['../css/detail/main.css']
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentService, router_1.ActivatedRoute, common_1.Location])
    ], StudentDetail);
    return StudentDetail;
}());
exports.StudentDetail = StudentDetail;
//# sourceMappingURL=student-detail.component.js.map