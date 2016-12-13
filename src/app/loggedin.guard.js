"use strict";
var session_service_1 = require('./SessionService/session.service');
var core_1 = require('@angular/core');
var LoggedGuard = (function () {
    function LoggedGuard(sesServ) {
        this.sesServ = sesServ;
    }
    LoggedGuard.prototype.canActivate = function () {
        return this.sesServ.isLoggedIn();
    };
    LoggedGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [session_service_1.SessionService])
    ], LoggedGuard);
    return LoggedGuard;
}());
exports.LoggedGuard = LoggedGuard;
//# sourceMappingURL=loggedin.guard.js.map