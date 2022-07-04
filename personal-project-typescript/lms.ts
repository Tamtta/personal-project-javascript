import { subjectLMS } from "./types";

export class LMS {
  subjects: subjectLMS[] = [];

  add(subject: subjectLMS) {
    this.subjects.push(subject);
  }

  remove(subject: subjectLMS) {
    this.subjects = this.subjects.filter((s) => s.id != subject.id);
  }

  verify(subject: subjectLMS): boolean {
    return this.subjects.some((s) => s.id == subject.id);
  }

  readAll() {
    return this.subjects;
  }
}
