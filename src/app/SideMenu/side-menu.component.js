"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var module_performance_service_1 = require('../ModulePerformanceService/module-performance.service');
var SideMenu = (function () {
    //public links: Link[] = [];
    function SideMenu(modulePerformanceService, router) {
        //serve side menu
        this.modulePerformanceService = modulePerformanceService;
        this.router = router;
    }
    SideMenu.prototype.ngOnInit = function () {
        /*this.linkService.getLinks(userId)
            .then(links => this.links = links);*/
    };
    SideMenu = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './side-menu.component.html',
            selector: 'menu-side',
            styleUrls: ['../css/components/main.css']
        }), 
        __metadata('design:paramtypes', [module_performance_service_1.ModulePerformanceService, router_1.Router])
    ], SideMenu);
    return SideMenu;
}());
exports.SideMenu = SideMenu;
//# sourceMappingURL=side-menu.component.js.map