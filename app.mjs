import { Subject } from "./subject.mjs";
import { LMS } from "./lms.mjs";
import { Teachers } from "./teachers.mjs";
import { Pupils } from "./pupils.mjs";
import { Groups } from "./groups.mjs";
import { Gradebooks } from "./gradebooks.mjs";

function main() {
  // Subject
  const history = new Subject({
    title: "History",
    lessons: 24,
  });

  const math = new Subject({
    title: "Math",
    lessons: 30,
  });
  console.log("history ID", history.id, "math ID", math.id);

  // LMS
  const lms = new LMS();
  lms.add(history);
  lms.add(math);
  // lms.remove(history);
  console.log(lms.verify(math), lms.verify(history));
  // console.log(lms.readAll());

  // Teachers
  const teachers = new Teachers();
  const teacherTamta = {
    name: {
      first: "Tamta",
      last: "Jojua",
    },
    dateOfBirth: "01-01-2000",
    emails: [
      {
        email: "tamta@gmail.com",
        primary: true,
      },
    ],
    phones: [
      {
        phone: "+995555111111",
        primary: true,
      },
    ],
    sex: "male",
    subjects: [
      {
        subject: "history",
      },
    ],
    // description: 123,
  };

  const teacherNinka = {
    name: {
      first: "Ninka ",
      last: "Benidze",
    },
    dateOfBirth: "01-01-1999",
    emails: [
      {
        email: "ninka@gmail.com",
        primary: true,
      },
    ],
    phones: [
      {
        phone: "+995555888888",
        primary: true,
      },
    ],
    sex: "male",
    subjects: [
      {
        subject: "math",
      },
    ],
    // description: 123,
  };

  const newTeacher = {
    name: {
      first: "123",
      last: "123",
    },
    dateOfBirth: "01-01-2000",
    emails: [
      {
        email: "tamta@mail.ru",
        primary: true,
      },
    ],
    phones: [
      {
        phone: "+995555223344",
        primary: true,
      },
    ],
    sex: "female",
    subjects: [
      {
        subject: "history",
      },
    ],
    // description: 123,
  };

  const teacherId = teachers.add(teacherTamta);
  // console.log(teacherId);
  const teacherId2 = teachers.add(teacherNinka);
  console.log("teacher ID 1", teacherId, "teacher ID 2", teacherId2);
  // console.log("before ", teachers.read(teacherId));
  // console.log("update", teachers.update(teacherId, newTeacher));
  // console.log("after ", teachers.read(teacherId));

  // pupils
  const pupils = new Pupils();
  const pupilAnano = {
    name: {
      first: "Anano",
      last: "Tskhadadze",
    },
    dateOfBirth: "01-01-2000",
    phones: [
      {
        phone: "+995555112233",
        primary: true,
      },
    ],
    sex: "female",
    // description: 123,
  };
  const newPupil = {
    name: {
      first: "Robert",
      last: "Oganezov",
    },
    dateOfBirth: "01-01-2000",
    phones: [
      {
        phone: "+995555555555",
        primary: true,
      },
    ],
    sex: "male",
    // description: 123,
  };
  const pupil123 = {
    name: {
      first: "123",
      last: "123",
    },
    dateOfBirth: "01-01-2000",
    phones: [
      {
        phone: "+995555118865",
        primary: true,
      },
    ],
    sex: "male",
    // description: 123,
  };
  const pupil = pupils.add(pupilAnano);
  // console.log(pupil);
  // const pupil2 = pupils.add(pupil123);
  console.log("pupil id", pupil.id);
  // console.log("before", pupils.read(pupil.id));
  const updated = pupils.update(pupil.id, newPupil);
  // console.log(updated);
  // console.log("after", pupils.read(pupil.id));
  // console.log(pupils.remove(pupil.id));

  // Groups
  const room = 236;
  // const room1 = 240;
  const groups = new Groups();
  const groupId = groups.add(room);
  // const groupId1 = groups.add(room1);
  console.log("group ID", groupId);
  // groups.addPupil(groupId, pupil);
  groups.addPupil(groupId, updated);
  // groups.addPupil(groupId, pupil2);
  // console.log("before ", groups.read(groupId));
  // groups.removePupil(groupId, pupil.id);
  // console.log(groups);

  // groups.update(groupId, {
  //   room: 237,
  // });

  // console.log("after", groups.read(groupId));
  // console.log("readall", groups.readAll());

  // gradebook
  const pupilId = pupil.id;
  const record = {
    pupilId: pupilId,
    teacherId: teacherId,
    subjectId: history.id,
    lesson: 1,
    mark: 9,
  };

  // const record2 = {
  //   pupilId: pupilId,
  //   teacherId: teacherId,
  //   subjectId: math.id,
  //   lesson: 2,
  //   mark: 10,
  // };

  const gradebooks = new Gradebooks(groups, teachers, lms);
  const gradebookId = gradebooks.add(groupId);
  console.log("gradebook id", gradebookId);
  // console.log(gradebooks.clear());
  gradebooks.addRecord(gradebookId, record);
  // gradebooks.addRecord(gradebookId, record2);
  console.log(gradebooks.read(gradebookId, pupilId));
  //   console.log(gradebooks.readAll(gradebookId));
}

main();
