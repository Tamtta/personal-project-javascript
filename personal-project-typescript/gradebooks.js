"use strict";
exports.__esModule = true;
exports.Gradebooks = void 0;
var Gradebooks = /** @class */ (function () {
    function Gradebooks(groups, teachers, lms) {
        this.gradeBooks = [];
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }
    Gradebooks.prototype.add = function (groupId) {
        var newGradeBook = {
            gradebookId: groupId,
            records: []
        };
        this.gradeBooks.push(newGradeBook);
        return groupId;
    };
    Gradebooks.prototype.clear = function () {
        this.gradeBooks = [];
    };
    Gradebooks.prototype.addRecord = function (gradebookId, record) {
        var gradeBook = this.gradeBooks.find(function (gradeBook) { return gradeBook.gradebookId == gradebookId; });
        gradeBook.records.push(record);
    };
    Gradebooks.prototype.read = function (gradebookId, pupilId) {
        var _this = this;
        var gradeBook = this.gradeBooks.find(function (gradebook) { return gradebook.gradebookId == gradebookId; });
        // console.log(this.groups.read(gradebookId));
        var recordsData = gradeBook.records.filter(function (r) { return r.pupilId == pupilId; });
        var pupilData = this.groups
            .read(gradebookId)
            .pupils.find(function (p) { return p.id == pupilId; });
        var recordDataForPupil = {
            name: "".concat(pupilData.name.first, " ").concat(pupilData.name.last),
            records: recordsData.map(function (r) {
                var teacherData = _this.teachers.read(r.teacherId);
                var subjectData = _this.lms.readAll().find(function (s) { return s.id == r.subjectId; });
                return {
                    teacher: "".concat(teacherData.name.first, " ").concat(teacherData.name.last),
                    subject: subjectData.title,
                    lessons: r.lesson,
                    mark: r.mark
                };
            })
        };
        return recordDataForPupil;
    };
    Gradebooks.prototype.readAll = function (gradebookId) {
        return this.gradeBooks.find(function (grBook) { return grBook.gradebookId == gradebookId; });
    };
    return Gradebooks;
}());
exports.Gradebooks = Gradebooks;
