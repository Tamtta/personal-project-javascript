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

  add(groupId) {
    if (typeof groupId !== "string") {
      throw new Error("Type of parameter is not a string!");
    }
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
    if (typeof gradebookId !== "string") {
      throw new Error("Type of parameter is not a string!");
    }
    if (!record.pupilId) {
      throw new Error("Parameter is missing!");
    } else if (typeof record.pupilId !== "string") {
      throw new Error("First name is not a string!");
    }
    if (!record.teacherId) {
      throw new Error("Parameter is missing!");
    } else if (typeof record.teacherId !== "string") {
      throw new Error("First name is not a string!");
    }
    if (!record.subjectId) {
      throw new Error("Parameter is missing!");
    } else if (typeof record.subjectId !== "string") {
      throw new Error("First name is not a string!");
    }
    if (!record.lesson) {
      throw new Error("Parameter is missing!");
    } else if (typeof record.lesson !== "number") {
      throw new Error("First name is not a string!");
    }
    if (!record.mark) {
      throw new Error("Parameter is missing!");
    } else if (typeof record.mark !== "number") {
      throw new Error("First name is not a string!");
    }

    const gradeBook = this.gradeBooks.find(
      (gradeBook) => gradeBook.gradebookId == gradebookId
    );

    gradeBook.records.push(record);
  }

  read(gradebookId, pupilId) {
    if (typeof gradebookId !== "string") {
      throw new Error("Type of parameter is not a string!");
    }
    if (typeof pupilId !== "string") {
      throw new Error("Type of parameter is not a string!");
    }
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

  readAll(gradebookId) {
    if (typeof gradebookId !== "string") {
      throw new Error("Type of parameter is not a string!");
    }
    return this.gradeBooks.find((grBook) => grBook.gradebookId == gradebookId);
  }
}
