"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
class Subject {
    constructor(data) {
        this.title = data.title;
        this.lessons = data.lessons;
        this.id = `${Math.random().toString(36).substring(3, 11)}`;
    }
}
exports.Subject = Subject;
