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
var module_service_1 = require("./module.service");
var router_1 = require("@angular/router");
var Modules = (function () {
    function Modules(moduleService, router) {
        this.moduleService = moduleService;
        this.router = router;
        this.title = 'Gametrack Modules';
    }
    Modules.prototype.getModules = function () {
        var _this = this;
        this.moduleService.getModules().then(function (modules) { return _this.modules = modules; });
    };
    Modules.prototype.onSelect = function (module) {
        this.selectedModule = module;
    };
    Modules.prototype.ngOnInit = function () {
        this.getModules();
    };
    Modules.prototype.goToDetail = function () {
        this.router.navigate(['/mod-detail', this.selectedModule.modId]);
    };
    return Modules;
}());
Modules = __decorate([
    core_1.Component({
        //moduleID: module.id,
        selector: 'track-modules',
        templateUrl: '/modules.component.html',
        styleUrls: ['modules.component.css']
    }),
    __metadata("design:paramtypes", [module_service_1.ModuleService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], Modules);
exports.Modules = Modules;
var _a;
//# sourceMappingURL=modules.component.js.map