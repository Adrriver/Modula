"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Observable_1 = require('rxjs/Observable');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var module_performance_service_1 = require('./ModulePerformanceService/module-performance.service');
var teacher_1 = require('./Teacher/teacher');
var student_1 = require('./Student/student');
var session_service_1 = require('./SessionService/session.service');
var MemberService = (function () {
    function MemberService(http, modPerfService, sService) {
        var _this = this;
        this.http = http;
        this.modPerfService = modPerfService;
        this.sService = sService;
        this.modPerfService.loadModulesPerformance();
        //this.student_bxs = <BehaviorSubject<Student>>new BehaviorSubject<Student>;
        //this.teacher_bxs = <BehaviorSubject<Teacher>>new BehaviorSubject<Teacher>;
        this.modPerfService.modules.map(function (res) { return res; }).subscribe(function (mods) { _this.modules = mods; });
        this.modPerfService.modulesPerformance.map(function (res) { return res; }).subscribe(function (modsPerf) { _this.modulesPerf = modsPerf; });
        this.get_url = '../../php_services/';
    }
    //called from session service
    MemberService.prototype.persistUser = function (res) {
        var _this = this;
        res.map(function (resp) { return resp.json(); }).subscribe(function (user) {
            if (user.userStatus == 'student') {
                _this.persistedStudent = new student_1.Student(user, _this.modulesPerf);
                _this.userStatus = user.userStatus;
            }
            else {
                _this.persistedTeacher = new teacher_1.Teacher(user);
                _this.userStatus = user.userStatus;
            }
        }, function (error) { return console.log("Error in persistUser."); });
    };
    //Download fresh copy of user account information, e.g., after account settings
    //are successfully modified in My Account component
    MemberService.prototype.refreshUser = function () {
        var _this = this;
        var token = this.sService.getToken();
        if (this.userStatus === 'teacher') {
            this.http.get(this.get_url + '/loadUser/?username=' + this.persistedTeacher.username).map(function (fresh) { return fresh.json(); }).subscribe(function (user) {
                _this.persistedTeacher = new teacher_1.Teacher(user);
                _this.teacher_bxs = new BehaviorSubject_1.BehaviorSubject(_this.persistedTeacher);
                _this.teacherMember = _this.teacher_bxs.asObservable();
                _this.teacher_bxs.next(Object.assign({}, _this.persistedTeacher));
            }, function (error) { return console.log('Error in function refreshUser.'); });
        }
        else if (this.userStatus === 'student') {
            this.http.get(this.get_url + '/loadUser/?username=' + this.persistedStudent.username)
                .map(function (student) { return student.json(); }).subscribe(function (user) {
                _this.modPerfService.modules.map(function (res) { return res; }).subscribe(function (mods) { _this.modules = mods; });
                _this.persistedStudent = new student_1.Student(user, _this.modulesPerf);
                _this.student_bxs = new BehaviorSubject_1.BehaviorSubject(_this.persistedStudent);
                _this.studentMember = _this.student_bxs.asObservable();
                _this.student_bxs.next(Object.assign({}, _this.persistedStudent));
            }, function (error) { return console.log('Error in function refreshUser (student)'); });
        }
    };
    MemberService.prototype.getMember = function () {
        var obs = new Observable_1.Observable(null);
        if (this.userStatus == 'teacher') {
            obs = this.teacherMember;
        }
        else {
            obs = this.studentMember;
        }
        return obs;
    };
    MemberService.prototype.getStatus = function () {
        return this.userStatus;
    };
    MemberService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, module_performance_service_1.ModulePerformanceService, session_service_1.SessionService])
    ], MemberService);
    return MemberService;
}());
exports.MemberService = MemberService;
/* loadUser signature
    loadUser($loginSucc, $token, $username) */
//# sourceMappingURL=member-service.service.js.map