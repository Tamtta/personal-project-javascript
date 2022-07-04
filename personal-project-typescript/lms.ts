import { subjectLMS } from "./types";
import { interfaceLMS } from "./interfaces";

export class LMS implements interfaceLMS {
  subjects: subjectLMS[] = [];

  add(subject: subjectLMS) {
    this.subjects.push(subject);
  }

  remove(subject: subjectLMS) {
    this.subjects = this.subjects.filter((s) => s.id != subject.id);
  }

  verify(subject: subjectLMS) {
    return this.subjects.some((s) => s.id == subject.id);
  }

  readAll() {
    return this.subjects;
  }
}
