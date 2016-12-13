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
/* module-performance-service */
var core_1 = require("@angular/core");
var _HTTP_service_1 = require("@HTTP.service");
require("rxjs/add/operator/map");
var observable_1 = require("rxjs/observable");
var modula_member_service_1 = require("./modula-member.service");
var ModulePerformanceService = (function () {
    function ModulePerformanceService(http, memberService) {
        this.http = http;
        this.memberService = memberService;
    }
    ModulePerformanceService.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getMember().subscribe(function (user) {
            return _this.http._get('/php_services/getModsPerf')
                .map(function (res) { return _this.extractData(res); }).subscribe(function (mods) { _this.modulePerformance = mods; }, function (error) { return console.log("ngOnInit inside MP Service has failed."); }).catch(function (error) { return observable_1.Observable.throw(error.json().error || 'Server error'); }).cache();
        }, function (error) { return console.log("Error in Module Performance Service ngOnInit."); });
    };
    ModulePerformanceService.prototype.getModsPerf = function () {
        return modulePerformanceAll;
    };
    ModulePerformanceService.prototype.getModPerformance = function (studentId, modId) {
        if (studentId === memberService.getMemberId() && modId !== null) {
            return modulePerformanceAll.then(function (modsPerf) { return modsPerf.find(function (mod) { return mod.modPerfId == modId; }); });
        }
        else {
            return modulePerformanceAll.then(function (modsPerf) { return modsPerf.find(function (mod) { return mod.username == studentId; }); });
        }
    };
    ModulePerformanceService.prototype.getActiveModule = function (studentId) {
        return modulePerformanceAll.then(function (modsPerf) { return modfsPerf.find(function (mod) { return mod.status == 'active'; }); });
    };
    ModulePerformanceService.prototype.extractData = function (res) {
        return res.map(function (res) {
            return res.json().data;
        });
    };
    return ModulePerformanceService;
}());
module_performance_service_1.ModulePerformanceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof _HTTP_service_1.HTTPService !== "undefined" && _HTTP_service_1.HTTPService) === "function" && _a || Object, modula_member_service_1.ModulaMemberService])
], module_performance_service_1.ModulePerformanceService);
exports.ModulePerformanceService = module_performance_service_1.ModulePerformanceService;
var _a;
//# sourceMappingURL=module-performance.service.js.map