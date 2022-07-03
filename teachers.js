"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teachers = void 0;
var Teachers = /** @class */ (function () {
    function Teachers() {
        this.teachers = [];
    }
    Teachers.prototype.add = function (data) {
        data.id = "".concat(Math.random().toString(36).substring(4, 12));
        this.teachers.push(data);
        return data.id;
    };
    Teachers.prototype.read = function (id) {
        return this.teachers.find(function (t) { return t.id == id; });
    };
    Teachers.prototype.update = function (id, updatedProfile) {
        var index = this.teachers.findIndex(function (t) { return t.id == id; });
        updatedProfile.id = id;
        this.teachers.splice(index, 1, updatedProfile);
        return updatedProfile;
    };
    Teachers.prototype.remove = function (teacherId) {
        this.teachers = this.teachers.filter(function (t) { return t.id != teacherId; });
    };
    return Teachers;
}());
exports.Teachers = Teachers;
