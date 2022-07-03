"use strict";
exports.__esModule = true;
exports.Subject = void 0;
var Subject = /** @class */ (function () {
    function Subject(data) {
        this.title = data.title;
        this.lessons = data.lessons;
        this.id = "".concat(Math.random().toString(36).substring(3, 11));
    }
    return Subject;
}());
exports.Subject = Subject;
