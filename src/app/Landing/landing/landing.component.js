"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var session_service_1 = require('../../SessionService/session.service');
var forms_1 = require('@angular/forms');
var LandingComponent = (function () {
    function LandingComponent(sessionService, fB, router) {
        this.sessionService = sessionService;
        this.fB = fB;
        this.router = router;
        this.title = 'Modula Students';
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fB.group({
            username: ['', [forms_1.Validators.required]],
            password: ['', [forms_1.Validators.required]]
        });
    };
    LandingComponent.prototype.onSubmit = function (loginForm) {
        var response = this.sessionService.loginMember(loginForm);
        if (response) {
            this.router.navigate(['/dashboard']);
        }
        else {
            this.register();
        }
    };
    ;
    LandingComponent.prototype.register = function () {
        this.router.navigate(['registration']);
    };
    LandingComponent = __decorate([
        core_1.Component({
            selector: 'app-landing',
            templateUrl: './landing.component.html',
            styleUrls: ['./landing.component.css']
        }), 
        __metadata('design:paramtypes', [session_service_1.SessionService, forms_1.FormBuilder, router_1.Router])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map