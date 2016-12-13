"use strict";
/* module-performance-service */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Observable_1 = require('rxjs/Observable');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var module_1 = require('../Module/module');
var module_performance_1 = require('../ModulePerformance/module-performance');
require('rxjs/add/observable/of');
var ModulePerformanceService = (function () {
    function ModulePerformanceService(http) {
        this.http = http;
        this.sessionModules["modules"] = [];
        this.sessionModsPerf["modulesPerf"] = [];
        this.modules_bxs = new BehaviorSubject_1.BehaviorSubject([]);
        this.modulesPerformance_bxs = new BehaviorSubject_1.BehaviorSubject([]);
        this.modules = this.modules_bxs.asObservable();
        this.modulesPerformance = this.modulesPerformance_bxs.asObservable();
        this.username = localStorage.getItem('username');
    }
    ModulePerformanceService.prototype.loadModulesPerformance = function () {
        var _this = this;
        this.http.get('this.get_url/getMods/')
            .map(function (res) { return res.json(); }).subscribe(function (mods) {
            _this.extractM(mods);
            _this.modules_bxs.next(Object.assign({}, _this.sessionModules["mdoules"]));
        }, function (error) { return console.log("Loading Modules inside MP Service has failed."); });
        this.http.get('this.get_url + getModsPerf')
            .map(function (res) { return res.json(); }).subscribe(function (modsPerf) {
            _this.extractMP(modsPerf);
            _this.modulesPerformance_bxs.next(Object.assign({}, _this.sessionModsPerf["modulesPerf"]));
        }, function (error) { return console.log("ngOnInit inside MP Service has failed."); });
    };
    //load individual ModulePerformance instance
    ModulePerformanceService.prototype.loadModulePerf = function () {
    };
    ModulePerformanceService.prototype.getStudentPerformance = function (username) {
        return Observable_1.Observable.of(this.sessionModsPerf["modulesPerf"].filter(function (modPerf) { return modPerf.modPerfId == username; }));
    };
    ModulePerformanceService.prototype.loadStudentModules = function () {
        var studentModules = this.sessionModsPerf["modulesPerf"].map(function (x) { return x.modId; });
        /*return this.modules.map(function(mod){
            studentModules.foreach((id)=> { if(mod.modId == id) return mod } )});*/
    };
    ModulePerformanceService.prototype.getActiveModule = function () {
        var active = this.modulesPerformance.map(function (modsPerf) { return modsPerf.find(function (mp) { return mp.modActive === true; }); });
        return active;
    };
    /*public loadModule(modId:String):void{
        //load invidual module according to id

    }*/
    ModulePerformanceService.prototype.extractMP = function (res) {
        var _this = this;
        var newModPerf;
        res.map(function (res) { return res.json(); }).subscribe(function (mpPart) {
            _this.sessionModsPerf["modulesPerf"].forEach(function (mod, index) {
                if (mod.modId == mpPart.modId)
                    _this.sessionModsPerf["modulesPerf"][index] = new module_performance_1.ModulePerformance(mpPart, mod.modId, null);
            });
        });
    };
    ModulePerformanceService.prototype.extractM = function (res) {
        var _this = this;
        var questions = http.get('../../php_services/get_questions?modId=' + res.modId).map(function (res) { return res.json(); });
        res.map(function (res_) { return res_.json(); }).subscribe(function (part) {
            _this.sessionModules["modules"].forEach(function (mod, index) {
                if (mod.modId == part.modId)
                    _this.sessionModules["modules"][index] = new module_1.Module(part, questions);
            });
        });
    };
    ModulePerformanceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ModulePerformanceService);
    return ModulePerformanceService;
}());
exports.ModulePerformanceService = ModulePerformanceService;
//# sourceMappingURL=module-performance.service.js.map