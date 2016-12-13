"use strict";
var user_1 = require('../User/user');
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(profile) {
        _super.call(this, profile.username);
        this.registrationDate = new Date(); /* implement soon! */
        this.schoolId = profile.schoolId;
        this.numStudents = profile[0][0][0];
        this.firstName = profile.first_name;
        this.lastName = profile.last_name;
        this.username = profile.username;
        this.email = profile.email;
        this.password = profile.password;
    }
    return Teacher;
}(user_1.User));
exports.Teacher = Teacher;
//# sourceMappingURL=teacher.js.map