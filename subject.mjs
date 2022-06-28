export class Subject {
  title;
  lessons;
  id;

  constructor(data) {
    if (!data.title) {
      throw new Error("Parameter is missing!");
    } else if (typeof data.title !== "string") {
      throw new Error("Title is not a string!");
    } else if (typeof data.title === "undefined") {
      throw new TypeError("undefined");
    }
    if (!data.lessons) {
      throw new Error("Parameter is missing!");
    } else if (typeof data.lessons !== "number") {
      throw new Error("Parameter is not a number!");
    } else if (typeof data.lessons === "undefined") {
      throw new TypeError("undefined");
    }

    this.title = data.title;
    this.lessons = data.lessons;
    this.id = `${Math.ceil(Math.random() * 10000)}`;

    if (data.description && typeof data.description == "string") {
      this.description = data.description;
    } else if (data.description && typeof data.description !== "string") {
      throw new Error("Parameter is not a string!");
    } else if (data.description && typeof data.description === "undefined") {
      throw new TypeError("undefined");
    }
  }
}
