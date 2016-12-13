/* module-detail.component.ts */
"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var module_performance_service_1 = require('../ModulePerformanceService/module-performance.service');
var ModuleDetail = (function () {
    function ModuleDetail(modulePerfService, route, location) {
        this.modulePerfService = modulePerfService;
        this.route = route;
        this.location = location;
    }
    ModuleDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var modId = params['modId'];
            _this.modulePerfService.modules.map(function (mods) { return mods.find(function (mod) { return modId == mod.modId; }); });
        });
    };
    ModuleDetail = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'module-detail',
            templateUrl: './module-detail.component.html',
            styleUrls: ['../css/detail/main.css']
        }), 
        __metadata('design:paramtypes', [module_performance_service_1.ModulePerformanceService, router_1.ActivatedRoute, common_1.Location])
    ], ModuleDetail);
    return ModuleDetail;
}());
exports.ModuleDetail = ModuleDetail;
//# sourceMappingURL=module-detail.component.js.map