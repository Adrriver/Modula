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
var router_1 = require("@angular/router");
var Menu = (function () {
    function Menu(studentService, modulePerformanceService, router) {
        //serve side menu
        this.studentService = studentService;
        this.modulePerformanceService = modulePerformanceService;
        this.router = router;
        this.links = [];
    }
    Menu.prototype.ngOnInit = function () {
        var _this = this;
        this.linkService.getLinks(userId)
            .then(function (links) { return _this.links = links; });
    };
    return Menu;
}());
Menu = __decorate([
    core_1.Component({
        //moduleID: module.id,
        templateUrl: 'menu.component.html',
        selector: 'menu-side'
    }),
    __metadata("design:paramtypes", [Object, Object, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], Menu);
exports.Menu = Menu;
var _a;
//# sourceMappingURL=menu.component.js.map