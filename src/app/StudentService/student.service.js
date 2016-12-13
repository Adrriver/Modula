"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/operator/share');
require('rxjs/add/operator/map');
var student_1 = require('../Student/student');
var member_service_service_1 = require('../member-service.service');
var module_performance_service_1 = require('../ModulePerformanceService/module-performance.service');
var StudentService = (function () {
    function StudentService(http, memberService, modsPerfService) {
        var _this = this;
        this.http = http;
        this.memberService = memberService;
        this.modsPerfService = modsPerfService;
        this.req_url = '../../php_services';
        this.getModulesPerformance();
        modsPerfService.modulesPerformance.map(function (mp) { return _this.modsPerf = mp; });
        this.persistedStudents = { students: [] };
        this.students_bxs = new BehaviorSubject_1.BehaviorSubject([]);
        this.students = this.students_bxs.asObservable();
    }
    StudentService.prototype.getModulesPerformance = function () {
        var _this = this;
        this.modsPerfService.modulesPerformance.map(function (res) { return res; }).subscribe(function (modsPerf) { _this.modsPerf = modsPerf; });
    };
    StudentService.prototype.loadStudents = function () {
        var _this = this;
        http.get('this.req_url' + '/getStudents').map(function (res) { return res.json(); })
            .subscribe(function (students) {
            students.forEach(function (student, index) { _this.createStudent(student).subscribe(function (student) { _this.persistedStudents.students[index] = student; }); });
            _this.students_bxs.next(Object.assign({}, _this.persistedStudents).students);
        }, function (error) { return console.log("loadStudents failed."); });
    };
    StudentService.prototype.getStudents = function () {
        return this.students;
    };
    StudentService.prototype.getStudent = function (id) {
        return this.getStudents().map(function (students) { return students.find(function (student) { return student.username === id; }); });
    };
    StudentService.prototype.createStudent = function (student) {
        // let mp = this.modsPerfService.modulesPerformance;
        var allModsPerf;
        this.modsPerfService.getStudentPerformance(student.username).subscribe(function (modsPerf) {
            allModsPerf = modsPerf;
        });
        var student_ = new student_1.Student(student, allModsPerf);
        return Observable_1.Observable.of(student_);
    };
    StudentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, member_service_service_1.MemberService, module_performance_service_1.ModulePerformanceService])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map