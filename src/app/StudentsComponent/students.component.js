"use strict";
var core_1 = require('@angular/core');
var student_service_1 = require('../StudentService/student.service');
var router_1 = require('@angular/router');
require('../rxjs-extensions');
//import { Location } from ''
var Students = (function () {
    function Students(studentService, router) {
        this.studentService = studentService;
        this.router = router;
        this.title = 'Your Modula Students';
    }
    Students.prototype.getStudents = function () {
        var _this = this;
        this.studentService.students.map(function (students) { _this.students = students; });
    };
    Students.prototype.onSelect = function (student) {
        this.selectedStudent = student;
    };
    Students.prototype.ngOnInit = function () {
        this.getStudents();
    };
    Students.prototype.goToDetail = function () {
        this.router.navigate(['/detail', this.selectedStudent.username]);
    };
    Students = __decorate([
        core_1.Component({
            //moduleID: module.id,
            selector: 'my-students',
            templateUrl: './students.component.html',
            styleUrls: ['../css/components/main.css']
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentService, router_1.Router])
    ], Students);
    return Students;
}());
exports.Students = Students;
//# sourceMappingURL=students.component.js.map