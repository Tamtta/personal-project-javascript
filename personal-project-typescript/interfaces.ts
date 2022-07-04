import { subjectLMS, typePupil, typeTeacher } from "./types";

export interface interfaceLMS {
  add(subject: subjectLMS): void;
  remove(subject: subjectLMS): void;
  verify(subject: subjectLMS): boolean;
  readAll(): subjectLMS[];
}

export interface interfaceTeachers {
  add(data: typeTeacher): string;
  read(id: string): typeTeacher;
  update(id: string, updatedProfile: typeTeacher): typeTeacher;
  remove(teacherId: string): void;
}

export interface interfacePupils {
  add(data: typePupil): typePupil;
  read(id: string): typePupil;
  update(id: string, updatedProfile: typePupil): typePupil;
  remove(teacherId: string): void;
}
