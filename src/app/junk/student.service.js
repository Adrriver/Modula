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
var HTTP_service_1 = require("./HTTP.service");
var observabe_1 = require("rxjs/observabe");
require("rxjs/add/operator/share");
require("rxjs/add/operator/map");
var student_1 = require("./student");
var modula_member_service_1 = require("./modula-member.service");
var module_performance_service_1 = require("./module-performance.service.js");
var StudentService = (function () {
    function StudentService(http, mms, modPerfService, filter) {
        this.http = http;
        this.mms = mms;
        this.modPerfService = modPerfService;
        this.filter = filter;
        this.req_url = '/..templates/php_services/getStudents';
    }
    StudentService.prototype.ngOnInit = function () {
        this.modsPerf = this.modsPerfService.getModsPerf().cache();
        this.http._get(req_url).map(function (res) {
            return res.json();
        }).subscribe(function (result) { result.forEach(function (x) { this.students.push(createStudent(x)); }); }, function (error) { return console.log("Error is Student Service; ngOnInit failed."); }).catch(function (error) { return observabe_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.getStudents = function (userId) {
        return students;
    };
    StudentService.prototype.getStudent = function (id) {
        return this.getStudents()
            .then(function (students) { return students.find(function (student) { return student.studentUserId === id; }); });
    };
    StudentService.prototype.createStudent = function (student) {
        var modules = this.modsPerf.filter(function (mp) { return mp.modUserId === student.username; });
        return new student_1.Student(student, modules);
    };
    return StudentService;
}());
StudentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [HTTP_service_1.HTTPService, modula_member_service_1.ModulaMemberService,
        module_performance_service_1.ModulePerformanceService, Object])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map
