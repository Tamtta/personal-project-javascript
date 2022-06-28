export class LMS {
  subjects = [];
  #validateSubject(subject) {
    if (!subject.title) {
      throw new Error("Parameter is missing!");
    } else if (typeof subject.title !== "string") {
      throw new Error("Title is not a string!");
    } else if (typeof subject.title === "undefined") {
      throw new TypeError("undefined");
    }
    if (!subject.lessons) {
      throw new Error("Parameter is missing!");
    } else if (typeof subject.lessons !== "number") {
      throw new Error("Parameter is not a number!");
    } else if (typeof subject.lessons === "undefined") {
      throw new TypeError("undefined");
    }
    if (subject.description && typeof subject.description !== "string") {
      throw new Error("Parameter is not a string!");
    } else if (
      subject.description &&
      typeof subject.description === "undefined"
    ) {
      throw new TypeError("undefined");
    }
  }

  add(subject) {
    this.#validateSubject(subject, true);
    this.subjects.push(subject);
  }

  remove(subject) {
    this.#validateSubject(subject, true);
    this.subjects = this.subjects.filter((s) => s.id != subject.id);
  }

  verify(subject) {
    this.#validateSubject(subject, true);
    return this.subjects.some((s) => s.id == subject.id);
  }

  readAll() {
    return this.subjects;
  }
}
