"use strict";
var core_1 = require('@angular/core');
var module_performance_service_1 = require('../ModulePerformanceService/module-performance.service');
var router_1 = require('@angular/router');
var Modules = (function () {
    function Modules(modulePerfServ, router) {
        this.modulePerfServ = modulePerfServ;
        this.router = router;
        this.title = 'Gametrack Modules';
        this.modules = [];
    }
    Modules.prototype.getModules = function () {
        var _this = this;
        this.modulePerfServ.modules.map(function (res) { return res; }).subscribe(function (mods) { _this.modules = mods; });
    };
    Modules.prototype.onSelect = function (module) {
        this.selectedModule = module;
    };
    Modules.prototype.ngOnInit = function () {
        this.getModules();
    };
    Modules.prototype.goToDetail = function () {
        this.router.navigate(['/modDetail', this.selectedModule.modId]);
    };
    Modules = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'track-modules',
            templateUrl: './modules.component.html',
            styleUrls: ['../css/components/main.css']
        }), 
        __metadata('design:paramtypes', [module_performance_service_1.ModulePerformanceService, router_1.Router])
    ], Modules);
    return Modules;
}());
exports.Modules = Modules;
//# sourceMappingURL=modules.component.js.map