"use strict";
var Module = (function () {
    function Module(profile, questions) {
        this.questionSet = questions;
        this.modId = profile.modId;
        this.modTitle = profile.modTitle;
        this.dateCreated = profile.date_created;
        this.difficulty = profile.difficulty;
        this.author = profile.author;
    }
    return Module;
}());
exports.Module = Module;
//# sourceMappingURL=module.js.map