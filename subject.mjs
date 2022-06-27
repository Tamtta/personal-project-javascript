export class Subject {
  title;
  lessons;
  id;

  constructor(data) {
    if (data.title && typeof data.title !== "string") {
      throw new Error("Title is not a string!");
    }
    if (data.lessons && typeof data.lessons !== "number") {
      throw new Error("Parameter is not a number!");
    }

    this.title = data.title;
    this.lessons = data.lessons;
    this.id = `${Math.ceil(Math.random() * 10000)}`;

    if (data.description && typeof data.description == "string") {
      this.description = data.description;
    } else if (data.description && typeof data.description !== "string") {
      throw new Error("Parameter is not a string!");
    }
  }
}
