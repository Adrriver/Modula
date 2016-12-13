"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var student_service_1 = require('../StudentService/student.service');
var module_performance_service_1 = require('../ModulePerformanceService/module-performance.service');
var member_service_service_1 = require('../member-service.service');
/* keep going! */
var router_1 = require('@angular/router');
var Dashboard = (function () {
    function Dashboard(memberService, modulePerfService, studentService, router, http) {
        this.memberService = memberService;
        this.modulePerfService = modulePerfService;
        this.studentService = studentService;
        this.router = router;
        this.http = http;
        this.get_url = '../../php_services';
    }
    Dashboard.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getMember().map(function (user) {
            if (localStorage.getItem('status') == 'teacher') {
                _this.userStatus = 'teacher';
                _this.studentService.students.map(function (s) { return _this.students = s; });
                //get all modules created by this teacher
                var T = user;
                _this.teacher = T;
                _this.modulePerfService.modules.map(function (res) { return res; }).subscribe(function (mods) {
                    _this.modules = mods;
                });
                //get all ModulePerformance instances for teacher's students
                _this.modulePerfService.modulesPerformance.map(function (res) { return res; }).subscribe(function (modsPerf) { _this.modulesPerf = modsPerf; });
            }
            else {
                _this.userStatus = 'student';
                _this.memberService.getMember().map(function (user) { return user; }).subscribe(function (user) {
                    _this.modulePerfService.modulesPerformance.map(function (res) { return res; }).subscribe(function (modsPerf) {
                        _this.modulesPerf = modsPerf;
                        //get active module
                        _this.modulePerfService.loadStudentModules();
                        _this.student = user;
                    }, function (error) { return console.log("Unable to retrieve student's performance records"); });
                });
            }
        });
    };
    Dashboard.prototype.setUserStatus = function (status) {
        this.userStatus = status;
    };
    Dashboard.prototype.gotoStudentDetail = function (student) {
        var link = ['/detail', student.username];
        this.router.navigate(link);
    };
    Dashboard.prototype.gotoModuleDetail = function (module) {
        var link = ['/modDetail', module.modId];
        this.router.navigate(link);
    };
    Dashboard.prototype.gotoPerformanceDetail = function (perf) {
        var link = ['/perfDetail', perf.modPerfId];
        this.router.navigate(link);
    };
    Dashboard = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: './dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [member_service_service_1.MemberService, module_performance_service_1.ModulePerformanceService, student_service_1.StudentService, router_1.Router, http_1.Http])
    ], Dashboard);
    return Dashboard;
}());
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.component.js.map