"use strict";
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Modula";
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            selector: 'modula-app',
            template: "\n              <main>\n                <router-outlet>Routing!</router-outlet>\n                </main>",
            styleUrls: ['../css/components/main.css', '../css/custom.css', '../css/main.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map