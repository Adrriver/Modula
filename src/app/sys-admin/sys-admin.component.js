"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var SysAdminComponent = (function () {
    function SysAdminComponent(http, fB) {
        this.http = http;
        this.fB = fB;
        this.date = new Date();
        this.adminName = 'Adrian';
    }
    SysAdminComponent.prototype.ngOnInit = function () {
        this.sysAdminForm = this.fB.group({
            teacherName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            schoolName: ['', [forms_1.Validators.required]],
            designation: ['', [forms_1.Validators.required]],
            district: ['', [forms_1.Validators.required]],
            districtCity: ['', [forms_1.Validators.required]],
            districtState: ['', [forms_1.Validators.required]],
            schoolAccreditation: ['', [forms_1.Validators.required]]
        });
    };
    SysAdminComponent.prototype.save = function (track) {
        console.log(JSON.stringify(track));
    };
    SysAdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-sys-admin',
            templateUrl: './sys-admin.component.html',
            styleUrls: ['./sys-admin.component.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http, forms_1.FormBuilder])
    ], SysAdminComponent);
    return SysAdminComponent;
}());
exports.SysAdminComponent = SysAdminComponent;
//# sourceMappingURL=sys-admin.component.js.map