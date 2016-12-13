"use strict";
/* mod-performance */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var module_performance_service_1 = require('../ModulePerformanceService/module-performance.service');
var ModulesPerformance = (function () {
    function ModulesPerformance(genHttp, modulePerformanceService, router) {
        this.genHttp = genHttp;
        this.modulePerformanceService = modulePerformanceService;
        this.router = router;
    }
    ModulesPerformance.prototype.getModulesPerf = function () {
        var _this = this;
        this.modulePerformanceService.modulesPerformance.map(function (res) { return res; }).subscribe(function (modsP) { _this.modulePerformance = modsP; });
        this.getMods();
    };
    ModulesPerformance.prototype.getMods = function () {
        var _this = this;
        this.genHttp.get('../../php_services/getModules').map(function (res) {
            return _this.extractModules(res).map(function (mods) { return _this.modules = mods; });
        });
    };
    ModulesPerformance.prototype.ngOnInit = function () {
        this.getMods();
    };
    ModulesPerformance.prototype.goToDetail = function () {
        this.router.navigate(['/perfDetail', this.selectedPerf.modPerfId]);
    };
    ModulesPerformance.prototype.extractModules = function (response) {
        return response.json().map(function (res) {
            return res.json().data;
        });
    };
    ModulesPerformance = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './module-performance.component.html',
            selector: 'modperformance'
        }), 
        __metadata('design:paramtypes', [http_1.Http, module_performance_service_1.ModulePerformanceService, router_1.Router])
    ], ModulesPerformance);
    return ModulesPerformance;
}());
exports.ModulesPerformance = ModulesPerformance;
//# sourceMappingURL=modules-performance.component.js.map