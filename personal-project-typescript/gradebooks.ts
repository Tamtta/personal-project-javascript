import { typeRecord } from "./types";
import { typeGroup } from "./types";
import { typeTeacher } from "./types";

export class Gradebooks {
  gradeBooks = [];
  groups;
  teachers;
  lms;
  constructor(groups, teachers, lms) {
    this.groups = groups;
    this.teachers = teachers;
    this.lms = lms;
  }

  add(groupId: string) {
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

  addRecord(gradebookId: string, record: typeRecord) {
    const gradeBook = this.gradeBooks.find(
      (gradeBook) => gradeBook.gradebookId == gradebookId
    );

    gradeBook.records.push(record);
  }

  read(gradebookId: string, pupilId: string) {
    const gradeBook = this.gradeBooks.find(
      (gradebook) => gradebook.gradebookId == gradebookId
    );

    // console.log(this.groups.read(gradebookId));
    const recordsData = gradeBook.records.filter((r) => r.pupilId == pupilId);
    const pupilData = this.groups
      .read(gradebookId)
      .pupils.find((p) => p.id == pupilId);

    const recordDataForPupil = {
      name: `${pupilData.name.first} ${pupilData.name.last}`,
      records: recordsData.map((r) => {
        const teacherData = this.teachers.read(r.teacherId);

        const subjectData = this.lms.readAll().find((s) => s.id == r.subjectId);
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

  readAll(gradebookId: string) {
    return this.gradeBooks.find((grBook) => grBook.gradebookId == gradebookId);
  }
}
