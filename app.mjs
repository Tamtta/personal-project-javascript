import { Subject } from "./subject.mjs";
import { LMS } from "./lms.mjs";
import { Teachers } from "./teachers.mjs";

function main() {
  // Subject
  const history = new Subject({
    title: "History",
    lessons: 24,
  });

  const math = new Subject({
    title: "Mathematics",
    lessons: 30,
  });

  // console.log(history.id, math.id);

  // LMS
  const lms = new LMS();
  // lms.add(history);
  // lms.add(math);
  // lms.remove(history);
  // console.log(lms.verify(math), lms.verify(history));
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
        phone: "+995555118865",
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

  const teacherId = teachers.add(teacherTamta);
  console.log("teacher ID", teacherId);
}

main();
