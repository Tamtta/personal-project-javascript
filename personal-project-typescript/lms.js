"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LMS = void 0;
class LMS {
    constructor() {
        this.subjects = [];
    }
    add(subject) {
        this.subjects.push(subject);
    }
    remove(subject) {
        this.subjects = this.subjects.filter((s) => s.id != subject.id);
    }
    verify(subject) {
        return this.subjects.some((s) => s.id == subject.id);
    }
    readAll() {
        return this.subjects;
    }
}
exports.LMS = LMS;
