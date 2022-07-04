"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gradebooks = void 0;
class Gradebooks {
    constructor(groups, teachers, lms) {
        this.gradeBooks = [];
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }
    add(groupId) {
        const newGradeBook = {
            gradebookId: groupId,
            records: [],
        };
        this.gradeBooks.push(newGradeBook);
        return groupId;
    }
    clear() {
        this.gradeBooks = [];
    }
    addRecord(gradebookId, record) {
        const gradeBook = this.gradeBooks.find((gradeBook) => gradeBook.gradebookId == gradebookId);
        gradeBook.records.push(record);
    }
    read(gradebookId, pupilId) {
        const gradeBook = this.gradeBooks.find((gradebook) => gradebook.gradebookId == gradebookId);
        const recordsData = gradeBook.records.filter((r) => r.pupilId == pupilId);
        const pupilData = this.groups
            .read(gradebookId)
            .pupils.find((p) => p.id == pupilId);
        if (typeof pupilData === "undefined") {
            throw new Error("Type of data does not exist ");
        }
        const recordDataForPupil = {
            name: `${pupilData.name.first} ${pupilData.name.last}`,
            records: recordsData.map((r) => {
                const teacherData = this.teachers.read(r.teacherId);
                if (typeof teacherData === "undefined") {
                    throw new Error("Type of data does not exist ");
                }
                const subjectData = this.lms
                    .readAll()
                    .find((s) => s.id == r.subjectId);
                return {
                    teacher: `${teacherData.name.first} ${teacherData.name.last}`,
                    subject: subjectData.title,
                    lessons: r.lesson,
                    mark: r.mark,
                };
            }),
        };
        return recordDataForPupil;
    }
    readAll(gradebookId) {
        return this.gradeBooks.find((grBook) => grBook.gradebookId == gradebookId);
    }
}
exports.Gradebooks = Gradebooks;
