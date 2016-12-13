"use strict";
var user_1 = require('../User/user');
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(profile, modulesPerformance) {
        var _this = this;
        var active;
        _super.call(this, profile.username);
        this.username = profile.username;
        this.userStatus = profile.status;
        this.firstName = profile.user_first;
        this.lastName = profile.user_last;
        this.schoolId = profile.school_id;
        this.email = profile.email;
        this.password = profile.password;
        modulesPerformance.forEach(function (modPerf) { if (modPerf.modActive == true)
            _this.activeModule = modPerf; active = modPerf.modPerfId; });
        modulesPerformance.forEach(function (modPerf) { if (!modPerf.modPerfId == active)
            _this.completedModules.push(modPerf); });
    }
    return Student;
}(user_1.User));
exports.Student = Student;
//# sourceMappingURL=student.js.map