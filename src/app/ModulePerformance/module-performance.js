"use strict";
var ModulePerformance = (function () {
    function ModulePerformance(data, modId, http) {
        var _this = this;
        this.http = http;
        var url = '../../php_services';
        //load question set first
        this.http.get(url + '/get_questions?=' + this.modId).map(function (res) {
            return res.json().data;
        }).subscribe(function (qs) { _this.questionSet = qs; });
        this.modPerfId = data.mod_perf_id;
        this.studentUserId = data.username;
        this.moduleAuthor = data.module_author;
        this.numQ = data.total_num_questions;
        this.numQuestionsAtt = data.num_q_attempted;
        this.numQCorrect = data.num_correct;
        this.moduleAttempts = data.module_attempts;
        this.modulePassed = data.module_passed;
        this.dateInitialized = data.date_of_init;
        this.dateCompleted = data.date_of_completion;
        this.gamePlayPoints = data.game_play_points;
        this.bonusPoints = data.bonus_points;
        this.modId = data.module_id;
        this.modActive = data.active;
    }
    ModulePerformance.prototype.extractQuestions = function (response) {
        response.map(function (res) { return res.json().data; });
    };
    return ModulePerformance;
}());
exports.ModulePerformance = ModulePerformance;
//# sourceMappingURL=module-performance.js.map