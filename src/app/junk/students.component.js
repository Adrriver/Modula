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
var student_service_1 = require("./student.service.js");
var router_1 = require("@angular/router");
var Students = (function () {
    function Students(studentService, router) {
        this.studentService = studentService;
        this.router = router;
        this.title = 'Your Modula Students';
    }
    Students.prototype.getStudents = function () {
        var _this = this;
        this.studentService.getStudents().then(function (students) { return _this.students = students; });
    };
    Students.prototype.onSelect = function (student) {
        this.selectedStudent = student;
    };
    Students.prototype.ngOnInit = function () {
        this.getStudents();
    };
    Students.prototype.goToDetail = function () {
        this.router.navigate(['/detail', this.selectedStudent.studentUserId]);
    };
    return Students;
}());
Students = __decorate([
    core_1.Component({
        //moduleID: module.id,
        selector: 'my-students',
        templateUrl: 'students.component.html',
        styleUrls: ['students.component.css']
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], Students);
exports.Students = Students;
var _a;
//# sourceMappingURL=students.component.js.map
