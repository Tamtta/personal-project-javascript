"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LMS = void 0;
var LMS = /** @class */ (function () {
    function LMS() {
        this.subjects = [];
    }
    LMS.prototype.add = function (subject) {
        this.subjects.push(subject);
    };
    LMS.prototype.remove = function (subject) {
        this.subjects = this.subjects.filter(function (s) { return s.id != subject.id; });
    };
    LMS.prototype.verify = function (subject) {
        return this.subjects.some(function (s) { return s.id == subject.id; });
    };
    LMS.prototype.readAll = function () {
        return this.subjects;
    };
    return LMS;
}());
exports.LMS = LMS;
