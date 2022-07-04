import { Groups } from "./groups";
import { LMS } from "./lms";
import { Teachers } from "./teachers";
import { subjectLMS, typePupil, typeRecord } from "./types";
import { typeGroup } from "./types";
import { typeTeacher } from "./types";

export class Gradebooks {
  gradeBooks = [];
  groups: Groups;
  teachers: Teachers;
  lms: LMS;
  constructor(groups: Groups, teachers: Teachers, lms: LMS) {
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

    const recordsData = gradeBook.records.filter(
      (r: { pupilId: string }) => r.pupilId == pupilId
    );
    const pupilData: typePupil = this.groups
      .read(gradebookId)
      .pupils.find((p) => p.id == pupilId);
    if (typeof pupilData === "undefined") {
      throw new Error("Type of data does not exist ");
    }
    const recordDataForPupil = {
      name: `${pupilData.name.first} ${pupilData.name.last}`,
      records: recordsData.map(
        (r: {
          pupilId: string;
          teacherId: string;
          subjectId: string;
          lesson: number;
          mark: number;
        }) => {
          const teacherData: typeTeacher = this.teachers.read(r.teacherId);
          if (typeof teacherData === "undefined") {
            throw new Error("Type of data does not exist ");
          }
          const subjectData = this.lms
            .readAll()
            .find((s: { id: string }) => s.id == r.subjectId);
          return {
            teacher: `${teacherData.name.first} ${teacherData.name.last}`,
            subject: subjectData.title,
            lessons: r.lesson,
            mark: r.mark,
          };
        }
      ),
    };

    return recordDataForPupil;
  }

  readAll(gradebookId: string) {
    return this.gradeBooks.find((grBook) => grBook.gradebookId == gradebookId);
  }
}
