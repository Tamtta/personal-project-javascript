import { typeTeacher } from "./types";
import { interfaceTeachers } from "./interfaces";

export class Teachers implements interfaceTeachers {
  teachers: typeTeacher[] = [];

  add(data: typeTeacher) {
    if (!Date.parse(data.dateOfBirth)) {
      throw new Error("Date format is incorrect");
    }
    data.id = `${Math.random().toString(36).substring(4, 12)}`;
    this.teachers.push(data);
    return data.id;
  }

  read(id: string) {
    return this.teachers.find((t) => t.id == id);
  }

  update(id: string, updatedProfile: typeTeacher) {
    const index = this.teachers.findIndex((t) => t.id == id);
    updatedProfile.id = id;
    this.teachers.splice(index, 1, updatedProfile);
    return updatedProfile;
  }

  remove(teacherId: string) {
    this.teachers = this.teachers.filter((t) => t.id != teacherId);
  }
}
