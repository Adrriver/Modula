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
/* mod-performance */
var core_1 = require("@angular/core");
var HTTP_service_1 = require("./HTTP.service");
var observable_1 = require("rxjs/observable");
var ModulePerformance = (function () {
    function ModulePerformance(http, modulePerformanceService) {
        this.http = http;
        this.modulePerformanceService = modulePerformanceService;
    }
    ModulePerformance.prototype.getModulesPerf = function () {
        this.modulePerformanceService.getModsPerf(null);
        this.getMods();
    };
    ModulePerformance.prototype.getMods = function () {
        var _this = this;
        this.http._get('/php_services/getModules').map(function (res) {
            return _this.extractModules(res);
        }).subscribe(function (mods) { _this.modules = mods; }, function (error) { return console.log("getMods in ModulePerformance has failed."); }).catch(function (error) { return observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    ModulePerformance.prototype.ngOnInit = function () {
        this.getModules();
    };
    ModulePerformance.prototype.goToDetail = function () {
        this.router.navigate(['/perfDetail', this.selectedPerf.modulePerfId]);
    };
    ModulePerformance.prototype.extractModules = function (response) {
        return res.map(function (res) {
            return res.json().data;
        });
    };
    return ModulePerformance;
}());
ModulePerformance = __decorate([
    core_1.Component({
        moduleID: module.id,
        templateUrl: 'module-performance.component.html',
        selector: 'modperformance',
    }),
    __metadata("design:paramtypes", [HTTP_service_1.HTTPService, Object])
], ModulePerformance);
exports.ModulePerformance = ModulePerformance;
//# sourceMappingURL=module-performance.component.js.map