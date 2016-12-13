/* based on tutorial here: https://medium.com/@blacksonic86/authentication-in-angular-2-958052c64492#.2ngmnc4dj
 * adapted from JSON to PHP backend
 */
"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/share');
require('rxjs/add/operator/map');
require('rxjs/add/operator/map');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var module_performance_service_1 = require('..//ModulePerformanceService/module-performance.service');
var teacher_1 = require('..//Teacher/teacher');
var student_1 = require('..//Student/student');
var SessionService /*implements OnInit*/ = (function () {
    function SessionService /*implements OnInit*/(http, modPerfService) {
        var _this = this;
        this.http = http;
        this.modPerfService = modPerfService;
        this.sessionCurrent = false;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('auth_token');
        this.modPerfService.loadModulesPerformance();
        //this.student_bxs = <BehaviorSubject<Student>>new BehaviorSubject<Student>;
        //this.teacher_bxs = <BehaviorSubject<Teacher>>new BehaviorSubject<Teacher>;
        this.modPerfService.modules.map(function (res) { return res; }).subscribe(function (mods) { _this.modules = mods; });
        this.modPerfService.modulesPerformance.map(function (res) { return res; }).subscribe(function (modsPerf) { _this.modulesPerf = modsPerf; });
        this.get_url = '../../php_services/';
    }
    SessionService /*implements OnInit*/.prototype.loginMember = function (credentials) {
        var _this = this;
        this.http.post('../../php_services/login?username=' + credentials.username + '&password=' + credentials.password, JSON.stringify("login")).map(function (response) { return response.json(); }).subscribe(function (res) {
            if (res.success) {
                localStorage.setItem('token', res.token);
                _this.loggedIn = true;
            }
        }); /*.catch((error:any)=> Observable.throw(error.json().error || 'Server error'));*/
        return this.loggedIn;
    };
    SessionService /*implements OnInit*/.prototype.persistUser = function (res) {
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
    SessionService /*implements OnInit*/.prototype.refreshUser = function () {
        var _this = this;
        var token = this.getToken();
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
    SessionService /*implements OnInit*/.prototype.getMember = function () {
        var obs = new Observable_1.Observable(null);
        if (this.userStatus == 'teacher') {
            obs = this.teacherMember;
        }
        else {
            obs = this.studentMember;
        }
        return obs;
    };
    SessionService /*implements OnInit*/.prototype.getStatus = function () {
        return this.userStatus;
    };
    SessionService /*implements OnInit*/.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn = false;
    };
    SessionService /*implements OnInit*/.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    SessionService /*implements OnInit*/.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    SessionService /*implements OnInit*/ = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, module_performance_service_1.ModulePerformanceService])
    ], SessionService /*implements OnInit*/);
    return SessionService /*implements OnInit*/;
}());
exports.SessionService /*implements OnInit*/ = SessionService /*implements OnInit*/;
//remember to check that all responses contain json arrays, not strings, and if needed use JSON.pars(string) conversion.
//# sourceMappingURL=session.service.js.map