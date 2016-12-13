"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(profile, modulePerformance) {
        var _this = _super.call(this, profile) || this;
        _this.studentUserId = profile.username;
        _this.firstName = profile.user_first;
        _this.lastName = profile.user_last;
        _this.activeModule = modulePerformance.then(function (mods) { return mods.find(function (mod) { return mod.module_id === profile.current_module; }); });
        completedModules = modulePerformance;
        return _this;
    }
    return Student;
}(ModulaUser));
exports.Student = Student;
//# sourceMappingURL=student.js.map