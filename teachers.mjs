export class Teachers {
  teachers = [];

  add(data) {
    if (data.name.first && typeof data.name.first !== "string") {
      throw new Error("First name is not a string!");
    }
    if (data.name.last && typeof data.name.last !== "string") {
      throw new Error("Last name is not a string!");
    }
    if (data.dateOfBirth && typeof data.dateOfBirth !== "string") {
      throw new Error("Parameter is not a string!");
    } else if (data.dateOfBirth && typeof data.dateOfBirth === "string") {
      if (!Date.parse(data.dateOfBirth)) {
        throw new Error("Date format is incorrect");
      }
    }
    data.id = `${Math.ceil(Math.random() * 10000)}`;
    this.teachers.push(data);
    return data.id;
  }

  read(id) {
    return this.teachers.find((t) => t.id == id);
  }

  update(id, updateProfile) {
    const index = this.teachers.findIndex((t) => t.id == id);
    updateProfile.id = id;
    this.teachers.splice(index, 1, updateProfile);
  }

  remove(teacherId) {
    this.teachers = this.teachers.filter((t) => t.id != teacherId);
  }
}
